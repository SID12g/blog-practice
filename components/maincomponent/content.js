import { connectDB } from "@/util/database";
import Link from "next/link";

export default async function MyContent() {
    let db = (await connectDB).db('forum');
    let result = await db.collection('posting').find().toArray();
    return (
        <div className="wrap-mycontent">
            {result.map((a, i) =>
                <div className="mycontent" key={i}>
                    <div style={{ display: "flex" }}>
                        <div className="content-margin"></div>
                        <div>
                            <Link style={{textDecoration:"none", color:"black"}} href={'/detail/'+result[i]._id}><h1 className="content-title">{result[i].title}</h1></Link>
                            <p className="content-con">{result[i].content}</p>
                        </div>
                    </div>
                    <div className="content-distinc"></div>
                </div>
            )}
        </div>
    )
}