

const Blog = ({blog}) => {
    console.log(blog);
    return (
        <div>
            <img src={blog.cover} alt="" />

            <div>
                <div className="flex">
                    <img src={blog.author_img} alt="" />
                    <div className="flex">
                        <h1>Name: {blog.author}</h1>
                        <h3>{blog.posted_date}</h3>
                    </div>
                </div>
                <div>
                    <h3>{blog.reading_time}</h3>
                </div>
            </div>
            <h1>{blog.title}</h1>

            <h3>{blog.hashtags}</h3>
        </div>
    );
};

export default Blog;