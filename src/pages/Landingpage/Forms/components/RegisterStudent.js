import { useState, useEffect } from "react";
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
  const getKey = `${apiKey}/common/new-registration`;

  const [signupState, setSignupState] = useState(fieldsState);

  const handleChange = (e) =>
    setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signupState);
    createAccount();
  };



  const collegeOptions = [

    { value: 'option1', label: 'college 1' },
    { value: 'option2', label: 'college 2' },
    { value: 'option3', label: 'college 3' },
  ];

  const classroomOptions = [

    { value: 'option1', label: 'class 1' },
    { value: 'option2', label: 'class 2' },
    { value: 'option3', label: 'class 3' },
  ];
  
  const [dropdown, setDropDown] = useState([]);
  const [dropdownoption, setdropdownoption] = useState([]);
  const [selectedCollege, setSelectedCollege] = useState("");
  const [selectedClass, setSelectedClass] = useState("");

  const handleCollegeChange = (e) => {
    setSelectedCollege(e.target.value);
  }

  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
  }


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


  useEffect(()=> {

    collegeList(getKey);

  }, [getKey])

  const collegeList = async () => {

    try {
      
      const { data }  = await axios.get(getKey);
      const res = data.data;
      setDropDown(res);

      setDropDown(dropdown);
    } catch (error) {
      console.log(error);
    }
  };
  
  console.log(dropdown);

  const updatedList = dropdown.map(({ name, _id, classrooms }) => ({
    name,
    _id,
    classrooms
  }));
  
  console.log(updatedList);

  


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


        <select className="my-5 rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm" value={selectedCollege} onChange={handleCollegeChange}>
          <option value="">Select the college</option>
          {collegeOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        
        <select className="my-5 rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm" value={selectedClass} onChange={handleClassChange}>
        <option value="">Select the classroom</option>
        {classroomOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

        <FormAction handleSubmit={handleSubmit} text="Signup" />
      </div>
    </form>
  );
}
