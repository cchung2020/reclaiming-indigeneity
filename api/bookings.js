import { MongoClient, ServerApiVersion, ObjectId } from "mongodb";

let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(process.env.MONGODB_URI, {
    serverApi: { version: ServerApiVersion.v1, strict: true, deprecationErrors: true },
  });
  global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ ok: false, message: "Method not allowed" });
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
