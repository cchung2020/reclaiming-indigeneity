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
  console.log("account creation handler running")

  if (req.method !== "POST") {
    res.status(405).json({ ok: false, message: "Method not allowed" });
    return;
  }




}