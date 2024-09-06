import React, { useState } from "react";
import './LoginRegister.css';



const LoginRegister = () => {

    return (
        <body className="body-login">
        <div className={"wrapper"}>
            <div className="form-box register">
                <form action="">
                    <h1>Registration</h1>
                    <div className="two-forms">
                        <div className="inputbox">
                            <input type="firstname" placeholder="First Name" required/>
                        </div>
                        <div className="inputbox">
                            <input type="lastname" placeholder="Last Name" required/>
                        </div>
                    </div>
                    <div className="inputbox">
                        <input type="email" placeholder="Email" required/>
                    </div>
                    <div className="inputbox">
                        <input type="username" placeholder="Username" required/>
                    </div>
                    <div className="inputbox">
                        <input type="Password" placeholder="Password" required/>
                    </div>
                    <button type="submit">
                        Register
                    </button>
                    <div className="register-link">
                        <p>Already have and Account? <a href="/login">Login</a></p>
                    </div>
                </form>
            </div>
        </div>
        </body>
    );
};

export default LoginRegister;