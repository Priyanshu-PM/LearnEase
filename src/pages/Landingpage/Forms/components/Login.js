import { useState } from "react";
import { loginFields } from "../constants/formFields";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";
import Spinner from "react-spinkit";

import axios from "axios";

import { useNavigate } from "react-router-dom";

const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Login() {
  const apiKey = process.env.REACT_APP_STUDYAI_API;
  const key = `${apiKey}/teacher/login`;

  const [loginState, setLoginState] = useState(fieldsState);

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser();
  };

  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(null);

  //Handle Login API Integration here
  const authenticateUser = () => {
    setIsLoading(true);

    axios
      .post(key, {
        emailID: loginState["email-address"],
        password: loginState.password,
      })
      .then((res) => {
        const data = res.data;
        if (data.success) {
          setIsLoading(false);
          setIsLoggedIn(true);
          console.log("teacher login successfully");
          console.log(data);

          sessionStorage.setItem("teacher", JSON.stringify(data.data));
          var teacherData = sessionStorage.getItem("teacher");
          console.log(teacherData);
          navigate("/teacher/home");
        } else {
          setIsLoading(false);
          alert("invalid");
        }
      })
      .catch((err) => {
        setIsLoading(false);
        // alert("err invalid");
        console.log(err);
        setError("user does not exist");
      });
  };

  return (
    <form className=" space-y-6" onSubmit={handleSubmit}>
      {error && (
        <div>
          <h5 className="text-center">{error}</h5>
        </div>
      )}
      <div className="-space-y-px">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={loginState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
      </div>

      <FormExtra />
      <FormAction
        handleSubmit={handleSubmit}
        text={
          isLoading ? (
            <div>
              <Spinner
                name="chasing-dots"
                style={{ width: 20, height: 20 }}
              />
            </div>
          ) : (
            "login"
          )
        }
      />
    </form>
  );
}
