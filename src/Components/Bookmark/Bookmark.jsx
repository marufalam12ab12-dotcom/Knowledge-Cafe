const Bookmark = ({bookmark}) => {
    return (
        <div className=" bg-[#FFFFFF] py-5 mr-5 pl-5 rounded-[10px] mb-4">
            <h1 className="text-[18px] font-semibold">{bookmark.title}</h1>
        </div>
    );
};

export default Bookmark;