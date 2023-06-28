import { useState } from "react";

//components
import Register from "../../components/Register";
import Login from "../../components/Login";

//style
import "./SignUp.css";

const SignUp = () => {
  const [register, setRegister] = useState(true);

  return (
    <main className="reg">
      <div className="reg_img">
        <div>
          <h1>CHATTER</h1>
          <p>
            Unleash the Power of Words, Connect with Like-minded <br /> Readers
            and Writers
          </p>
        </div>
      </div>

      <div className="reg_form">
        <div className="reg_form_container">
          <div className="reg_btn">
            <button onClick={() => setRegister(true)}>REGISTER</button>
            <button onClick={() => setRegister(false)}>LOG IN</button>
          </div>

          <div className="reg_border_line">
            <p id={register ? "btn_active" : ""}></p>
            <p id={!register ? "btn_active" : ""}></p>
          </div>

          <div className="form">{register ? <Register /> : <Login />}</div>
        </div>
      </div>
    </main>
  );
};

export default SignUp;
