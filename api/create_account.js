import { MongoClient, ServerApiVersion } from "mongodb";
import { hashSync } from "bcryptjs";
import pkg from "jwt-simple"
const { encode } = pkg;

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
  console.log("account creation handler running")

  if (req.method !== "POST") {
    res.status(405).json({ ok: false, message: "Method not allowed" });
    return;
  }

  try {
    const { email, password } =
      typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body;

    const token = encode(email, secret);
    console.log('JWT generated:', token)

    const mongo_client = await clientPromise;
    const db = mongo_client.db("ReclaimingIndigeneity");
    console.log("finished awaiting promise for database")

    const client_collection = await db.collection("Clients");
    const pw_hash = hashSync(password, 10);
    await client_collection.insertOne({email: email, password: pw_hash});

    res.status(200).json({ ok: true, token: token });

  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, message: "Server error" });
  }


}