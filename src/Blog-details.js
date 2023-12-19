import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost/projects/blogs-api/blogs.php/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")} `,
        },
      })
      .then((res) => res.data)
      .then((data) => {
        setBlog(data);
      });
  }, []);

  const handleClick = () => {
    axios
      .delete(`http://localhost/projects/blogs-api/blogs.php/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")} `,
        },
      })
      .then(() => navigate("/blogs"));
  };

  return (
    <div className="blog-details">
      <h2>blog details</h2>
      {blog && (
        <div className="blog-details">
          <h3> {blog.title} </h3>
          <p> {blog.body} </p>
          <p> {blog.author} </p>
          <button onClick={handleClick}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
