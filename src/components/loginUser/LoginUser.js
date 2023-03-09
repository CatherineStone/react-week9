import React from "react";
import "./LoginUser.css"

const LoginUser = () => {
    return (
        <div className="loginuser-wrapper">
            <form className="loginuser-form">
                <label> Username:
                    <input placeholder="username" />
                </label>
                <label> Password:
                    <input placeholder="password" />
                </label>
                <button>Login</button>
            </form>
    </div>
    );
};

export default LoginUser;