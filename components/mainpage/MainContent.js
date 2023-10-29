import MyContent from "../maincomponent/content";
import Filtering from "../maincomponent/filter";
import SearchBar from "../maincomponent/searchbar";
import LoginBtn from "./LogInBtn";
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { LogOutBtn } from './LogOutBtn'

export default async function MainContent() {
    let session = await getServerSession(authOptions)
    // console.log(session)
    return (
        <div className="main-component">
            <div className="main-component-wrap">
                <SearchBar />
                <div className="wrap-content-filter">
                    <MyContent />
                    <Filtering />
                </div>
                {
                    session ? <span style={{display:"flex", marginTop:20, fontFamily:"Pretendard-Medium"}}><p style={{margin:0, color:"black"}}>Hello {session.user.name}</p> <LogOutBtn /></span> : <LoginBtn />
                }
            </div>
        </div>
    )
}