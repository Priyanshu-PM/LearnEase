import React, {useState, useNavigate} from "react";
import { Navigate } from "react-router-dom";

import './Forms.css';

const Forms = () => {

    const Users = [

        {
            username: "priyanshumahukhaye@gmail.com",
            password: "123456",
        },

        {
            username: "pranaychavhan@gmail.com",
            password: "123456",
        },

        {
            username: "someshsomani@gmail.com",
            password: "123456",
        },
    ]

    const [loginusername, setLoginUserName] = useState("");
    const [loginpass, setLoginPass] = useState("");

    const [showValue, setShowValue] = useState("");

    function handleLoginUserName(event) {
        setLoginUserName(event.target.value);
    }


    function handleLoginPassword(event) {
        setLoginPass(event.target.value);
    }

    const [signusername, setsignusername] = useState("");
    const [signemail, setsignemail] = useState("");
    const [signpass, setsignpass] = useState("");

    const [message, setMessage] = useState("");

    function handleSignUsername(event) {
        setsignusername(event.target.value);
    }

    function handleSignEmail(event) {
        setsignemail(event.target.value);
    }

    function handleSignPass(event) {
        setsignpass(event.target.value);
    }



    function handleLogin(event) {
        event.preventDefault();
        setShowValue(true);

        Users.forEach((user) => {
            if(user.username === loginusername && user.password === loginpass) {

                setShowValue(true);
                Navigate('/home');
                setMessage("Login Successful");
                
            }

            else if(user.username === loginusername && user.password !== loginpass) {

                setShowValue(true);
                setMessage("Incorrect Password");

            }

            else  
            {
                setMessage("Incorrect details !!");
            }
        });

    }

    function handleSignin(event) {
        event.preventDefault();
    }

  return (
    <div>
      <div class="container">
        <input id="register_toggle" type="checkbox" />
        <div class="slider">

          <form class="form" onSubmit={handleLogin}>
            <span class="title">Login</span>
            <div class="form_control">
              <input required="" class="input" type="text" value={loginusername} onChange={handleLoginUserName}/>
              <label class="label">Username</label>
            </div>
            <div class="form_control">
              <input required="" class="input" type="password" value={loginpass} onChange={handleLoginPassword}/>
              <label class="label">Password</label>
            </div>
            <button>Login</button>

            <span class="bottom_text">
              Don't have an account?{" "}
              <label class="swtich" for="register_toggle">
                Sign Up
              </label>{" "}
            </span>
          </form>

          <form class="form" onSubmit={handleSignin}>
            <span class="title">Sign Up</span>
            <div class="form_control">
              <input required="" class="input" type="text" value={signusername} onChange={handleSignUsername} />
              <label class="label">Username</label>
            </div>
            <div class="form_control">
              <input required="" class="input" type="email" value={signemail} onChange={handleSignEmail} />
              <label class="label">Email</label>
            </div>
            <div class="form_control">
              <input required="" class="input" type="password" value={signpass} onChange={handleSignPass} />
              <label class="label">Password</label>
            </div>
            <button>Sign Up</button>

            <span class="bottom_text">
              Already have an account?{" "}
              <label class="swtich" for="register_toggle">
                Sign In
              </label>{" "}
            </span>
          </form>
        </div>
        {showValue === true && <p>{message}</p>}
      </div>
    </div>
  );
};

export default Forms;
