import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditBolg = () => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost/projects/blogs-api/blogs.php/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")} `,
        },
      })
      .then((res) => res.data)
      .then((data) => {
        setAuthor(data.author);
        setTitle(data.title);
        setBody(data.body);
      });
  }, []);

  const { id } = useParams();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const editedBlog = {
      author,
      title,
      body,
    };
    axios
      .put(`http://localhost/projects/blogs-api/blogs.php/${id}`, editedBlog, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")} `,
        },
      })
      .then(() => navigate(`/blog-details/${id}`));
  };

  return (
    <div className="edit-blog">
      <h2>edit blog</h2>
      <form className="edit-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="author">author</label>
          <input
            type="text"
            name="author"
            id="author"
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          />
        </div>

        <div className="form-control">
          <label htmlFor="title">title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>

        <div className="form-control">
          <label htmlFor="body">body</label>
          <textarea
            type="text"
            name="body"
            id="body"
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          />
        </div>
        <button>Edit Blog</button>
      </form>
    </div>
  );
};

export default EditBolg;
