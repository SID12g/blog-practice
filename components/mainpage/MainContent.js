import MyContent from "../maincomponent/content";
import Filtering from "../maincomponent/filter";
import SearchBar from "../maincomponent/searchbar";

export default function MainContent() {
    return (
        <div className="main-component">
            <div className="main-component-wrap">
                <SearchBar />
                <div className="wrap-content-filter">
                    <MyContent />
                    <Filtering />
                </div>
            </div>
        </div>
    )
}