import { MongoClient, ServerApiVersion } from "mongodb";

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
  console.log("login.js doing something")

  if (req.method !== "POST") {
    res.status(405).json({ ok: false, message: "Method not allowed" });
    return;
  }

  try {
    const { email, password } =
      typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body;

    // if (!name || !email || !message) {
    //   res.status(400).json({ ok: false, message: "Missing required fields" });
    //   return;
    // }

    const client = await clientPromise;
    const db = client.db("ReclaimingIndigeneity");

    // const doc = {
    //   name,
    //   email,
    //   phone_number: phone_number || null,
    //   message,
    //   createdAt: new Date(),
    //   source: "vercel",
    // };

    // const result = await db.collection("Contact").insertOne(doc);
    res.status(201).json({ ok: true, id: result.insertedId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, message: "Server error" });
  }
}
