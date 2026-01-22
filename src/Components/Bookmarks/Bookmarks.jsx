import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({bookmarks,spendTime}) => {
    
    
    return (
        <div className="w-1/3 p-4 mx-4">
            <h1>Book Marks {bookmarks.length}</h1>
            <h2 className="text-6 font-bold text-[#6047EC] bg-[#6047EC1A]  rounded-[8px] text-center py-[21px]  border-[1px] border-[#6047EC]">Spent time on read : {spendTime} min read</h2>

            <div className="mt-6 bg-[#1111110D] pl-[30px] pt-[30px] rounded-[8px]">
                <h1 className="text-6 font-bold pb-4">Bookmarked Blogs : </h1>

            {
                bookmarks.map(bookmark=> <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
                
            </div>
            
        </div>
    );
};

export default Bookmarks;