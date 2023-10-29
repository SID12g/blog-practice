import { getServerSession } from "next-auth"
import { authOptions } from "@/pages/api/auth/[...nextauth]"

export default async function Write() {

    let session = await getServerSession(authOptions)
    if(session != null && session.user.email === 'sid12g@naver.com') return (
        <div className="write-wrap">
            <p className="writing-text">글 작성</p>
            <form action="/api/post/new" method="POST">
                <input name='title' className="input-title" placeholder="제목을 입력해 주세요."/>
                <input name='content' className="input-content" placeholder="내용을 입력해 주세요."/>
                <button className="button-complete" type="submit">게시</button>
            </form>
        </div>
    )
    else{
        return(
            <div>
                <p>잘못된 접근입니다.</p>
            </div>
        )
    }
}