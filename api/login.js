import { MongoClient, ServerApiVersion } from "mongodb";
import { compareSync } from "bcryptjs";


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
    const { email, password } =
      typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body;

    const mongo_client = await clientPromise;
    const db = mongo_client.db("ReclaimingIndigeneity");
    console.log("finished awaiting promise")

    const client = await db.collection("Clients").findOne({email: email});
    var matches = false;
    if (client) {
      const pw_hash = client.password;
      console.log(client)
      if (compareSync(password, pw_hash)) {
        matches = true;
      }
    }

    if (matches) {
      res.status(200).json({ ok: true })
    } else {
      console.log("saying bad username or password")
      res.status(401).json( {error: "bad username or password"} );
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, message: "Server error" });
  }
}
