'use client'

export default function Write() {
    return (
        <div className="write-wrap">
            <p className="writing-text">글 작성</p>
            <form action="/api/post/new" method="POST">
                <input name='title' className="input-title" placeholder="제목을 입력해 주세요."/>
                <input name='content' className="input-content" placeholder="내용을 입력해 주세요."/>
                <button className="button-complete" type="submit">게시</button>
            </form>
        </div>
    )
}