import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/projects/blogs-api/blogs.php", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")} `,
        },
      })
      .then((res) => res.data)
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  return (
    <div className="blogs">
      <h2>Blogs</h2>
      {blogs &&
        blogs.map((blog) => {
          return (
            <div className="single-blog" key={blog.id}>
              <Link to={`/blog-details/${blog.id}`}>
                <h3> {blog.title} </h3>
                <p> {blog.body} </p>
                <p> {blog.author} </p>
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default Blogs;
