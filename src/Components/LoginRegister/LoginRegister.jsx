import React, { useState } from "react";
import "./LoginRegister.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import  db  from "../../lib/db";

const LoginRegister = () => {
  const [action, setAction] = useState("");

  const registerLink = () => {
    setAction(" active");
  };
  const loginLink = () => {
    setAction("");
  };

  function func(event) {
        event.preventDefault(); // Prevent form submission from reloading the page

        const username = document.getElementById("username");
        const password = document.getElementById("password");

        // Replace this with your actual authentication logic
        if (username.value === "admin" && password.value === "admin") {
            window.location.href = "admin";
        } else if (username.value === "user" && password.value === "user") {
            window.location.href = "user";
        } else if (username.value === "responder" && password.value === "responder") {
            window.location.href = "responder";
        } else if (username.value === "unit" && password.value === "unit") {
            window.location.href = "unit";
        } else if (username.value === "police" && password.value === "police") {
            window.location.href = "police";
        } else if (username.value === "barangay" && password.value === "barangay") {
            window.location.href = "barangay";
        } else {
            alert("Invalid Username or Password");
        }
    }
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = async (data) => {
    await db.user.create({
      data: {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        username: data.username,
        password: data.password,
      },
    });
  }

  return (
    <body className="body-login"> 
      <div className={`wrapper${action}`}>
        <div className="form-box login">
          <form action= "" onSubmit={func}>
            <h1>Login</h1>
            <div className="inputbox">
              <input
                type="username"
                id="username"
                placeholder="Username"
                required
              />
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
            </div>
            <div className="inputbox">
              <input
                type="password"
                id="password"
                placeholder="Password"
                required
              />
              <FontAwesomeIcon icon={faLock} className="icon" />
            </div>

            <div className="remember-forgot">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#">Forgot password?</a>
            </div>
            <button type="submit">   Login</button>
            <div className="register-link">
              <p>
                Don't have an account?{" "}
                <a href="#" onClick={registerLink}>
                  Create Account
                </a>
              </p>
            </div>
          </form>
        </div>

        <div className="form-box register">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Registration</h1>
            <div className="two-forms">
              <div className="inputbox">
                <input type="firstname" placeholder="First Name" required {...register("firstname")}/>
              </div>
              <div className="inputbox">
                <input type="lastname" placeholder="Last Name" required {...register("lastname")}/>
              </div>
            </div>
            <div className="inputbox">
              <input type="email" placeholder="Email" required {...register("email")} />
            </div>
            <div className="inputbox">
              <input type="username" placeholder="Username" required {...register("username")}/>
            </div>
            <div className="inputbox">
              <input type="Password" placeholder="Password" required {...register("password")}/>
            </div>
            <button type="submit">Register</button>
            <div className="register-link">
              <p>
                Already have and Account?{" "}
                <a href="#" onClick={loginLink}>
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </body>
  );
};

export default LoginRegister;
