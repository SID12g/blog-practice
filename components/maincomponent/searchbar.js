import { getServerSession } from "next-auth"
import { authOptions } from "next-auth"
export default async function SearchBar() {
    
    return (
        <div className="search-wrap">
            <div className="search-div">
                <form>
                    <input className={'search-input'} placeholder="검색할 내용을 입력해 주세요." />
                </form>
            </div>
            
        </div>
    )
}