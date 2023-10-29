import { connectDB } from "@/util/database";

export default async function handler(req, res){
    if(req.method == 'POST'){
        try {
            const db = (await connectDB).db('forum')
            let result = await db.collection('posting').insertOne(req.body)
            res.redirect(302, '/')
        } catch (e) {
            console.log(e)
        }
    }
}