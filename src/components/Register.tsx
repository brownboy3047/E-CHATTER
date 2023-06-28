import { useState } from "react";

//react icon
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";

//hook
import { useSignup } from "../hooks/useSignup";

//style
import "./Register.css";

interface User {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
}

const Register = () => {
  const [user, setUser] = useState<User>({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
  });
  const { error, signup } = useSignup();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signup(user.email, user.password);
    // console.log(user.email, user.password);
  };

  return (
    <div className="register">
      <h1>Register as a Writer/Reader</h1>

      <form className="register_form" onSubmit={handleSubmit}>
        <div className="register_form_name">
          <div className="first">
            <label htmlFor="first">First name</label>

            <input
              type="text"
              name="first_name"
              id="first"
              placeholder="John"
              onChange={(e) => setUser({ ...user, firstname: e.target.value })}
              value={user.firstname}
              autoComplete="off"
            />
          </div>

          <div className="last">
            <label htmlFor="last">Last name</label>

            <input
              type="text"
              name="last_name"
              id="last"
              placeholder="Doe"
              onChange={(e) => setUser({ ...user, lastname: e.target.value })}
              value={user.lastname}
              autoComplete="off"
            />
          </div>
        </div>

        <div className="register_form_select">
          <label htmlFor="title">You are joining as?</label>
          <select name="" id="title">
            <option value="writer">Writer</option>
            <option value="reader">Reader</option>
          </select>
        </div>

        <div className="register_form_input">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="johndoe@gamil.com"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            value={user.email}
            autoComplete="off"
          />
        </div>

        <div className="register_form_input">
          <label htmlFor="pass">Password</label>
          <input
            type="password"
            name="password"
            id="pass"
            placeholder="********"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            value={user.password}
            autoComplete="off"
          />
        </div>

        <div className="register_form_input">
          <label htmlFor="confirm">Confirm password</label>
          <input
            type="password"
            name="password"
            id="confirm"
            placeholder="********"
            autoComplete="off"
          />
        </div>

        <div className="register_form_btn">
          <button className="btn_one">Create account</button>
          <button className="btn_two">
            <FcGoogle />
            Sign up with google
          </button>
          <button className="btn_three">
            <FaLinkedin className="linkedin" />
            Sign up with LinkendIn
          </button>
        </div>

        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Register;
