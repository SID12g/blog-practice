import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Detail(props) {
    let db = (await connectDB).db('forum');
    let result = await db.collection('posting').findOne({ _id: new ObjectId(props.params.id) })
    console.log(props.params.id)
    console.log(1)
    if(result === null) {
        return <p>잘못된 접근 입니다.</p>
    }
    return (
        <div className="detail-wrap">
            <h1 className="detail-title">{result.title}</h1>
            <p className="detail-con">{result.content}</p>
        </div>
    )
}