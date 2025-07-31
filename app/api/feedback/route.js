import clientPromise from "@/lib/mongodb"

export async function POST(request) {

    const body = await request.json()
    const client = await clientPromise;
    const db = client.db("TinyLinks")
    const collections = db.collection("feedbacks")

    const result = await collections.insertOne({
        name: body.name,
        email: body.email,
        message: body.message
    })

    return Response.json({ status: "Success", message: "Message submitted successfully" })
}