import clientPromise from "@/lib/mongodb"

export async function POST(request) {

    const body = await request.json()
    const client = await clientPromise;
    const db = client.db("TinyLinks")
    const collections = db.collection("allurl")

    const doc = await collections.findOne({ shorturl: body.shorturl })
    if (doc) {
        return Response.json({ status: "Failed", message: "Shorturl already exist" })
    }

    const result = await collections.insertOne({
        url: body.url,
        shorturl: body.shorturl
    })


    return Response.json({ status: "Success", message: "Shorturl generated successfully" })
}