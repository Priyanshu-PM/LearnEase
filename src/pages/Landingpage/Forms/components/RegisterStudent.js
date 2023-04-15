import { useState, useEffect } from "react";
import { signupFields } from "../constants/formFields";
import FormAction from "./FormAction";
import Input from "./Input";

import axios from "../../../../axios/axios";
import { useNavigate } from "react-router-dom";

import Select from "react-select";

const fields = signupFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));

export default function RegisterStudent() {

  const navigate = useNavigate();
    
  const apiKey = process.env.REACT_APP_STUDYAI_API;
  const key = `${apiKey}/student/register`;
  const getKey = `${apiKey}/common/new-registration`;


  const [signupState, setSignupState] = useState(fieldsState);

  const handleChange = (e) =>
    setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signupState);
    createAccount();
  };


  const [classrooms, setClassrooms] = useState([]);
  const [selectedClassroom, setSelectedClassroom] = useState();
  const [clgs, setClgs] = useState([]);
  const [selectedClg, setSelectedClg] = useState();
  
  const [collegeID, setCollegeID] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(getKey)
      .then((res) => {
        const data = res.data;
        if (data.success) {
          console.log("fetching details");
          console.log(data.data);
          let arrOfClgs = [];
          data.data.forEach((college) => {
            arrOfClgs.push({
              label: college.name,
              value: college.name,
              id: college._id,
              classrooms: college.classrooms,
            });
          });
          setClgs(arrOfClgs);
          console.log(arrOfClgs);
        } else {
          alert("error occured while fetching");
        }
      })
      .catch((err) => {
        alert("invalid from registerstudent");
        console.log(err);
      });
  };


  const createAccount = () => {

  console.log(selectedClg.id);
  console.log(selectedClassroom);


    axios
      .post(key, {
        firstName: signupState["first-name"],
        lastName: signupState["last-name"],
        emailID: signupState["email-address"],
        password: signupState.password,
        clg: selectedClg.id,
        classroom: selectedClassroom.label
      })
      .then((res) => {
        const data = res.data;
        if (data.success) {
          console.log("student registered successfully");
          console.log(data);

          navigate("/student/login");
        
        } else {
          alert("invalid from student");
        }
      })
      .catch((err) => {
        alert("invali  from stduentd");
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
            value={selectedClg}
            onChange={(op) => {
              let arrOfCLassrooms = [];
              op.classrooms.forEach((cl) => {
                arrOfCLassrooms.push({
                  label: cl,
                  value: cl,
                });
              });
              setSelectedClassroom();
              setClassrooms(arrOfCLassrooms);
              setSelectedClg(op);
            }}
            options={clgs}
          />
        </div>
        <div>
          <Select
            value={selectedClassroom}
            onChange={(op) => setSelectedClassroom(op)}
            options={classrooms}
          />

        <FormAction handleSubmit={handleSubmit} text="Signup" />
      </div>
    </form>
    
  );
}
