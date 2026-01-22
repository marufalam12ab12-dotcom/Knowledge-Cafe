
import { CiBookmark } from "react-icons/ci";


const Blog = ({blog,handelBookmarks,handelBookMarkAsRead}) => {

    return (
        <div className=" ">
            <img className="w-full rounded-2xl" src={blog.cover} alt="" />

            <div>
                <div className="flex gap-6 mt-[32px]">
                    <img className='w-[60px] rounded-full' src={blog.author_img} alt="" />
                    <div className="flex justify-between w-full items-center">
                        <div>
                            <h1 className="text-2xl font-bold">Name: {blog.author}</h1>
                            <h3 className="text-[16px] text-[#11111199] font-semibold">{blog.posted_date}</h3>
                        </div>
                        <div className="flex items-center gap-2">
                            <h3 className="text-[#11111199] text-[20px] font-medium">{blog.reading_time} min read </h3>
                            {/* Icon */}
                            <button onClick={()=>handelBookmarks(blog)} className="text-2xl">
                                <CiBookmark ></CiBookmark>
                            </button>
                        </div>
                    </div>

                </div>
                
            </div>
            <h1 className="text[40px] font-bold mt-4">{blog.title}</h1>

            <h3 className="text-[20px] font-medium text-[#11111199] mt-4">{blog.hashtags}</h3>

            <button className="underline mt-[27px] mb-[32px]" onClick={()=>handelBookMarkAsRead(blog.reading_time)}>Mark as Read</button>
            <hr className="mb-[32px]" />
        </div>
    );
};

export default Blog;