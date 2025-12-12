import { MongoClient, ServerApiVersion, ObjectId } from "mongodb";
import pkg from "jwt-simple"
const { decode } = pkg;

let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(process.env.MONGODB_URI, {
    serverApi: { version: ServerApiVersion.v1, strict: true, deprecationErrors: true },
  });
  global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

const secret = process.env.SECRET;

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { date } = req.query || {};
    if (!date) {
      res.status(400).json({ ok: false, message: "date is required" });
      return;
    }

    try {
      const day = new Date(date);
      const start = new Date(day);
      start.setUTCHours(0, 0, 0, 0);
      const end = new Date(start);
      end.setUTCDate(end.getUTCDate() + 1);

      const mongoClient = await clientPromise;
      const db = mongoClient.db("ReclaimingIndigeneity");
      const bookings = await db
        .collection("Bookings")
        .find({ booking_date: { $gte: start, $lt: end } })
        .project({ _id: 0, booking_date: 1 })
        .toArray();

      res.status(200).json({ ok: true, bookings });
      return;
    } catch (err) {
      console.error(err);
      res.status(500).json({ ok: false, message: "Server error" });
      return;
    }
  }

  if (req.method !== "POST") {
    res.status(405).json({ ok: false, message: "Method not allowed" });
    return;
  }

  const token = req.headers['x-auth'];

  // the JWT processing is partly copied from the textbook
  try {
    const decoded_token = decode(token, secret);
    console.log("booking appointment for ", decoded_token)
  }
  catch (ex) {
    res.status(401).json({ error: "Invalid JWT" });
    return;
  }


  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body;
    const { client_id, course_id, booking_date } = body;

    if (!booking_date) {
      res.status(400).json({ ok: false, message: "booking_date is required" });
      return;
    }

    const doc = {
      booking_date: new Date(booking_date),
      createdAt: new Date(),
      client_id: client_id ? new ObjectId(client_id) : null,
      course_id: course_id ? new ObjectId(course_id) : null,
    };

    const mongoClient = await clientPromise;
    const db = mongoClient.db("ReclaimingIndigeneity");
    const result = await db.collection("Bookings").insertOne(doc);

    res.status(201).json({ ok: true, id: result.insertedId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, message: "Server error" });
  }
}
