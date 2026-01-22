import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handelBookmarks,handelBookMarkAsRead}) => {
    const [blogs,setBlogs] = useState([]);

    useEffect(() =>{
        fetch('Blogs.json')
        .then(res=> res.json())
        .then(data=> setBlogs(data))
    },[])
    // console.log(blogs);
    
    return (
        <div className="w-2/3 p-4 mx-4">
            <h1>Blogs: {blogs.length} </h1>
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} handelBookmarks={handelBookmarks} handelBookMarkAsRead={handelBookMarkAsRead}></Blog>)
            }
        </div>
    );
};

export default Blogs;