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

  try {
    const { email, password } =
      typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body;

    const mongo_client = await clientPromise;
    const db = mongo_client.db("ReclaimingIndigeneity");
    console.log("finished awaiting promise for database")

    const client_collection = await db.collection("Clients");
    const insertionResult = await client_collection.insertOne({email: email, password: password});
    console.log(insertionResult);



  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, message: "Server error" });
  }


}