import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [fields, setFields] = useState({
    author: "",
    title: "",
    body: "",
  });
  const [submit, setSubmit] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    if (submit) {
      const blog = {
        author: fields.author,
        title: fields.title,
        body: fields.body,
      };
      axios
        .post("http://localhost/projects/blogs-api/blogs.php", blog, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then(() => navigate("/blogs"));
    }
  };
  return (
    <div className="create">
      <h2>Add a blog</h2>
      <form className="create-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="author">author</label>
          <input
            type="text"
            name="author"
            id="author"
            value={fields.author}
            onChange={handleChange}
          />
        </div>

        <div className="form-control">
          <label htmlFor="title">title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={fields.title}
            onChange={handleChange}
          />
        </div>

        <div className="form-control">
          <label htmlFor="body">body</label>
          <textarea
            name="body"
            id="body"
            value={fields.body}
            onChange={handleChange}
          />
        </div>
        <button>Add blog</button>
      </form>
    </div>
  );
};

export default Create;
