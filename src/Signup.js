import { useState } from "react";

const Signup = () => {
  const [inputFields, setInputFields] = useState({
    name: "",
    email: "",
    password: "",
    password_confirm: "",
  });
  const handleChange = (e) => {};
  const [error, setError] = useState({});
  const [submit, setSubmit] = useState(false);
  return (
    <div className="signup">
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
      </form>
    </div>
  );
};

export default Signup;
