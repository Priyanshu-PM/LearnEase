import { useState } from "react";
import { loginFields } from "../constants/formFields";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";

import axios from 'axios';

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

  //Handle Login API Integration here
  const authenticateUser = () => {

    axios
      .post(key, {

        emailID: loginState["email-address"],
        password: loginState.password,
        
      })
      .then((res) => {
        const data = res.data;
        if (data.success) 
        {
          console.log("teacher login successfully");
          console.log(data);

          // ReactSession.setStoreType("localStorage");
          sessionStorage.setItem("teacher", JSON.stringify(data.data));
          // ReactSession.set();
           var teacherData = sessionStorage.getItem("teacher");
          console.log(teacherData)
          navigate("/teacher/home")
        } else 
        {
          alert("invalid");
        }
      })
      .catch((err) => 
      {
        alert("err invalid");
        console.log(err);
      });
  };

  return (
    <form className=" space-y-6" onSubmit={handleSubmit}>
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
      <FormAction handleSubmit={handleSubmit} text="Login" />
    </form>
  );
}
