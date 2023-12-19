import axios from "axios";
import { useState } from "react";

const Signup = () => {
  const [inputFields, setInputFields] = useState({
    name: "",
    email: "",
    password: "",
    password_confirm: "",
  });
  const handleChange = (e) => {
    setInputFields({ ...inputFields, [e.target.name]: e.target.value });
  };
  const [error, setError] = useState({});
  const [submit, setSubmit] = useState(false);

  //validate fields
  const validateFields = (fields) => {
    let errors = {};
    const emailReg =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (fields.name.length < 12) {
      errors.name = "name cannot be less than 12 characters";
    }
    if (!emailReg.test(fields.email)) {
      errors.email = "Invaild email";
    }
    if (fields.password.length < 8) {
      errors.password = "password cannot be less than 8 characters";
    }
    if (fields.password !== fields.password_confirm) {
      errors.password_confirm = "password does not match";
    }
    return errors;
  };

  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    setError(validateFields(inputFields));
    if (Object.keys(error).length === 0 && submit) {
      const user = {
        name: inputFields.name,
        email: inputFields.email,
        password: inputFields.password,
        password_confirm: inputFields.password_confirm,
      };

      axios
        .post("http://localhost/projects/login-system/process-signup.php", user)
        .then((res) => console.log(res));
    }
  };

  return (
    <div className="signup">
      <h2>Signup</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <p>{error.name ? "name cannot be less than 8 characters" : null} </p>
        <div className="form-control">
          <label htmlFor="name">name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={inputFields.name}
            onChange={handleChange}
          />
        </div>

        <p> {error.email ? "invalid email" : null} </p>
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

        <p>
          {error.password ? "password cannot be less than 8 characters" : null}
        </p>
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
        <p>{error.password_confirm ? "passwords do not match" : null}</p>
        <div className="form-control">
          <label htmlFor="password_confirm">password_confirm</label>
          <input
            type="password"
            name="password_confirm"
            id="password_confirm"
            value={inputFields.password_confirm}
            onChange={handleChange}
          />
        </div>
        <button>Signup</button>
      </form>
    </div>
  );
};

export default Signup;
