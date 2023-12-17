import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [inputFields, setInputFields] = useState({
    email: "",
    password: "",
  });
  const [submit, setSubmit] = useState(false);

  const handleChange = (e) => {
    setInputFields({ ...inputFields, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    if (submit) {
      const userData = {
        email: inputFields.email,
        password: inputFields.password,
      };
      axios
        .post("http://localhost/projects/login-system/login.php", userData)
        .then((res) => res.data)
        .then((data) => localStorage.setItem("token", data.info));
    }
  };
  return (
    <div className="login">
      <h2>Login</h2>

      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="email">email</label>
          <input
            type="text"
            name="email"
            id="email"
            value={inputFields.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-control">
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={inputFields.password}
            onChange={handleChange}
          />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
