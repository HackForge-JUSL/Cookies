import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/Authcontext";
import "./Style/Login.scss";
import axios from "axios";
const Login = () => {
  const data = { email: "", password: "" };
  const [err, setErr] = useState(false);
  const { user, setUser, isLoggedin, setIsLoggedin } = useContext(AuthContext);

  const [inputdata, setInputdata] = useState(data);

  const handleSumbit = async (e) => {
    e.preventDefault();

    //const displayName =e.target[0].value;
    const email = e.target[0].value;
    const password = e.target[1].value;
    //  const file=e.target[3].files[0];

    try {
      setInputdata({
        email: email,
        password: password,
      });
      console.log(inputdata);

      await axios
        .post("http://localhost:8000/SmartLab/users/login", inputdata)
        .then((res) => {
          console.log(res.data.user.email);

          setUser({
            token: res.data.user.token,
            email: res.data.user.email,
            firstName: res.data.user.firstName,
            accountType: res.data.user.accountType,
          });

          setIsLoggedin(true);
          console.log(user);
        });
    } catch (err) {
      setErr(true);
      console.log(err);
    }
  };

  return (
    <div className="formcontainer">
      <div className="formwrapper">
        <span className="logo">
          <img src="./OutShineLogo.png" alt="OutShineLogo" />
          <h1>OutShine</h1>
        </span>
        <span className="title">Register</span>

        <form onSubmit={handleSumbit}>
          <input type="email" className="text" placeholder="email" />
          <input type="password" className="text" placeholder="password" />

          <button>Log In</button>

          {err && <span>Something went Wrong</span>}
        </form>
        <p>You do not have an account ? </p>
      </div>
    </div>
  );
};

export default Login;
