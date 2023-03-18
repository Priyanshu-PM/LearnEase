import { useState } from "react";
import { signupFields } from "../constants/formFields";
import FormAction from "./FormAction";
import Input from "./Input";

import axios from "../../../../axios/axios";
import { useNavigate } from "react-router-dom";

const fields = signupFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));

export default function RegisterStudent() {

  const navigate = useNavigate();
    
  const apiKey = process.env.REACT_APP_STUDYAI_API;
  const key = `${apiKey}/student/register`;

  const [signupState, setSignupState] = useState(fieldsState);

  const handleChange = (e) =>
    setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signupState);
    createAccount();
  };

  //handle Signup API Integration here
  const createAccount = () => {
    axios
      .post(key, {
        firstName: signupState["first-name"],
        lastName: signupState["last-name"],
        emailID: signupState["email-address"],
        password: signupState.password,
      })
      .then((res) => {
        const data = res.data;
        if (data.success) {
          console.log("student registered successfully");
          console.log(data);

          navigate("/loginstudent");
        
        } else {
          alert("invalid");
        }
      })
      .catch((err) => {
        alert("invalid");
        console.log(err);
      });
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={signupState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
        <FormAction handleSubmit={handleSubmit} text="Signup" />
      </div>
    </form>
  );
}
