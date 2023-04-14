import React, {useState, useEffect} from 'react';
import axios from 'axios';


const CreateClassroom = () => {

    
  const apiKey = process.env.REACT_APP_STUDYAI_API;
  
  const [modal, showModal] = useState(false);
  const [className, setClassName] = useState("");

  var teacherData = sessionStorage.getItem("teacher");
  const tdata = JSON.parse(teacherData);
  console.log("teacher toekm" , tdata.tokem);
  
  const addClassKey = `${apiKey}/teacher/${tdata.teacher._id}/add-new-classroom`;

  const handleAddClass = (event) => {
    event.preventDefault();

    const config = {
      headers: {
        'Authorization': `${tdata.tokem}`,
      }
    }
    const body = {

      clg_id: tdata.teacher.clg,
      classroom: className
    }
      axios
        .patch(addClassKey, body, config)
        .then((res) => {
          const data = res.data;
          console.log(data);

          if (data.success) {
            console.log(data);
            console.log("Class added successfully");

          } else {
            alert("Failed to add Class");
          }
          showModal(false);
        })
        .catch((err) => {
          console.log(err);
        });
    
  };

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <form
        onSubmit={handleAddClass}
        className="max-w-md mx-auto bg-gray-100 shadow-2xl p-5 rounded-md"
      >
        <div className="p-0 flex justify-end items-end">
          <button onClick={() => showModal(false)}>cross</button>
        </div>
        <div className="my-4">
          <label
            htmlFor="question"
            className="block text-gray-700 font-medium mb-2"
          >
            Create New Classroom
          </label>
          <textarea
            id="question"
            className="w-50 border-gray-300 rounded-lg focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
          />
        </div>
        <div className="my-4 ">
          <h3 className="text-red-500">{alert}</h3>
          
          
        </div>
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="w-2/3 px-4 py-2  bg-pink-500 hover:bg-babyPink text-white font-medium rounded-full transition-colors duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateClassroom;