import { useState, useEffect} from 'react';
import { signupFields } from "../constants/formFields"
import FormAction from "./FormAction";
import Input from "./Input";
import { useNavigate } from 'react-router-dom';

import axios from "../../../../axios/axios";

const fields=signupFields;
let fieldsState={};

fields.forEach(field => fieldsState[field.id]='');

export default function Signup(){

  const navigate = useNavigate();
  
  const apiKey = process.env.REACT_APP_STUDYAI_API;
  
  const key = `${apiKey}/teacher/register`;
  const getKey = `${apiKey}/common/new-registration`;

  const [signupState,setSignupState]=useState(fieldsState);

  const handleChange=(e)=>setSignupState({...signupState,[e.target.id]:e.target.value});

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(signupState);
    createAccount();
  }


  
  const options = [

    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];
  
  const [dropdown, setDropDown] = useState();
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  }

  
  console.log(getKey);
  useEffect(() => {
    axios
    .get(getKey, {
      
    })
    .then((res) => {
      const data = res.data;
      console.log(data.success);
      setDropDown(data)
    })
    .catch((err) => {
      alert("invalid");
      console.log(err);
    });
}, [key]);

console.log(dropdown.data);

  //handle Signup API Integration here
  const createAccount=()=>{

    axios
      .post(key, {

        firstName: signupState["first-name"],
        lastName: signupState["last-name"],

        emailID: signupState["email-address"],
        password: signupState.password,

      })
      .then((res) => {
        const data = res.data;
        if (data.success) 
        {
          console.log("teacher registered successfully");
          console.log(data);
          navigate("/login");
        } 
        else 
        {
          alert("invalid");
        }
      })
      .catch((err) => {
        alert("invalid");
        console.log(err);
      });

  }

    return(
        <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="">
        {
                fields.map(field=>
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
                
                )
            }<select value={selectedOption} onChange={handleOptionChange}>
<option value="">Select an option</option>
{options.map((option) => (
  <option key={option.value} value={option.value}>
    {option.label}
  </option>
))}
</select>'

          <FormAction handleSubmit={handleSubmit} text="Signup" />
        </div>

         

      </form>
    )
}