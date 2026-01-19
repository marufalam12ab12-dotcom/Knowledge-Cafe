import { useEffect, useState } from "react";

const Blogs = () => {
    const [blogs,setBlogs] = useState([]);

    useEffect(() =>{
        fetch('Blogs.json')
        .then(res=> res.json())
        .then(data=> setBlogs(data))
    },[])
    // console.log(blogs);
    
    return (
        <div>
            <h1>Name : </h1>
        </div>
    );
};

export default Blogs;