import React, { useState } from 'react';
import "./ForgetPwd.css";

import PersonOutlinedIcon from "@mui/icons-material/PersonOutline";

function ForgetPwd() {

    const [user, setUser] = useState({
        email: ""
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    }

    return (
        <>
            <div className="container">
                <div className="background">
                    <div className="box">
                        <h2 className="heading1"><strong>Use this form to reset your <br /> forgotten old password </strong></h2>
                        <p className="para">Enter the email address you registered with and we will send you a link to reset your
                            password.</p>
                        <form className="inputContainer">
                            <div className="emailContainer">
                                <div className="iconContainer">
                                   <PersonOutlinedIcon/>
                                </div>
                                <input title="Please enter the valid email address" name='email' value={user.email} onChange={handleChange} className="emailInput" type="text" required />
                                <span className="floatingEmail">Email</span>
                            </div>
                            <button type="submit" className="btn">Reset Password</button>
                        </form>
                        <div className="routes1">
                            <div className="route1"><a href="/login">Back to login page</a></div>
                            <div className="route1"><a href="/register">Register of a new account</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ForgetPwd;
