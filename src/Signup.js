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
    const emailReg =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  };
  return (
    <div className="signup">
      <h2>Signup</h2>
      <form className="signup-form">
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

        <div className="form-control">
          <label htmlFor="email">email</label>
          <input
            type="email"
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

        <div className="form-control">
          <label htmlFor="password_confirm">password_confirm</label>
          <input
            type="password_confirm"
            name="password_confirm"
            id="password_confirm"
            value={inputFields.password_confirm}
            onChange={handleChange}
          />
        </div>
      </form>
      <button>Signup</button>
      <p> {inputFields.name} </p>
      <p> {inputFields.email} </p>
    </div>
  );
};

export default Signup;
