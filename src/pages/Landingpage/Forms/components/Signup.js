import { useState, useEffect } from "react";
import { signupFields } from "../constants/formFields";
import FormAction from "./FormAction";
import Input from "./Input";
import { useNavigate } from "react-router-dom";

import axios from "../../../../axios/axios";
import Select from "react-select";

const fields = signupFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Signup() {
  const navigate = useNavigate();

  const apiKey = process.env.REACT_APP_STUDYAI_API;

  const key = `${apiKey}/teacher/register`;
  const getKey = `${apiKey}/common/new-registration`;

  const [signupState, setSignupState] = useState(fieldsState);

  const handleChange = (e) =>
    setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signupState);
    createAccount();
  };



  const [colleges, setColleges] = useState([]);
  const [selectedCollege, setSelectedCollege] = useState();

useEffect(()=> {

  fetchClgs();
}, []);

  const fetchClgs = () => {

    axios
      .get(
        getKey
      )
      .then((res) => {
        const data = res.data;
        console.log(data.success);
        console.log(data.data);

        let options = [];

        data.data.forEach((clg) => {
          options.push({
            label: clg.name,
            value: clg.name,
            id: clg._id
          });
        });
        
        setColleges(options);

        setSelectedCollege(options[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  //handle Signup API Integration here
  const createAccount = () => {
    axios
      .post(key, {

        firstName: signupState["first-name"],
        lastName: signupState["last-name"],

        emailID: signupState["email-address"],
        password: signupState.password,
        clg: selectedCollege.id

      })
      .then((res) => {
        const data = res.data;
        if (data.success) {
          console.log("teacher registered successfully");
          console.log(data);
          navigate("/teacher/login");
        } else {
          alert("invalid signup");
        }
      })
      .catch((err) => {
        alert("invalid");
        console.log(err);
      });
  };

  return (
    <form className="space-y-3" onSubmit={handleSubmit}>
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



        <Select
                  value={selectedCollege}
                  onChange={(op) => setSelectedCollege(op)}
                  options={colleges}
                />


        <FormAction handleSubmit={handleSubmit} text="Signup" />
      </div>
    </form>
  );
}
