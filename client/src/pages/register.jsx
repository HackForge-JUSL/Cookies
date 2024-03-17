import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Style/register.scss";
import axios from "axios";
//import { Link } from "react-router-dom";

const Register = () => {
  const data = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    accountType: "",
  };

  const [err, setErr] = useState({});
  const [inputdata, setInputdata] = useState(data);
  const navigate = useNavigate();

  const handleSumbit = async (e) => {
    e.preventDefault();

    try {
      const firstName = e.target[0].value;
      const lastName = e.target[1].value;
      const email = e.target[2].value;
      const password = e.target[3].value;
      const confirmPassword = e.target[4].value;
      const accountType = e.target[5].value;
      //const file=e.target[3].files[0];

      if(password != confirmPassword)
       throw new Error(`Password is not matching`);

      setInputdata({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        accountType: accountType,
      });
      console.log(inputdata);

      try {
        await axios
          .post("http://localhost:8000/api/users/register", inputdata)
          .then((res) => {
            console.log(res);
            navigate("/login")
         
          });
      } catch (err) {
        console.log(err.response);
      }

      console.log(email);
    } catch (err) {
      console.log(err);
      setErr(err);
    }
  };

  return (
    <>
      <div className="formcontainer">
        <div className="formwrapper">
          <span className="logo">
            <img src="https://cdn-icons-png.flaticon.com/128/8224/8224757.png" alt="OutShineLogo" />
            <h1>OutShine</h1>
          </span>
          <span className="title">Register</span>

          <form onSubmit={handleSumbit}>
            <input type="text" className="text" placeholder="First Name" />
            <input type="text" className="text" placeholder="Last Name" />
            <input type="email" className="text" placeholder="email" />
            <input type="password" className="text" placeholder="password" />
            <input type="password" className="text" placeholder="Confirm password" />
            <input type="text" className="text" placeholder="AccountType" />

            <button>Sign up</button>

            {err && <span></span>}
          </form>
          <p>You do have an account ? <Link to="/login">Login</Link></p>
        </div>
      </div>
    </>
  );
};

export default Register;
