import React, {useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import  Spinner  from "react-spinkit";

const Navbar = () => {
  const navigate = useNavigate();


  const [student, setStudent] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    var studentData = sessionStorage.getItem("student");
    setStudent(JSON.parse(studentData));
    setLoading(false);

  }, [])

  if(loading) {
    return (
      <div>
      <Spinner name="chasing-dots" style={{ width: 100, height: 100 }} />
      </div>
    )
  }
  
  
  return (
    <div>
      <header className=" border-b-[0.1px]  border-gray-400 p-4">
        <div className=" mx-auto flex flex-row sm:flex-col md:flex-row justify-between items-center">
          <Link
            to={"/student/home"}
            className=" no-underline hover:no-underline font-bold lg:text-3xl"
          >
            <span className="ml-3 flex flex-row text-3xl justify-center items-center">
            <div className="  flex-start justify-center items-center ">
            <p className="text-3xl font-righteous font-bold">
              Learn<span className="text-babyPink">Ease</span>
            </p>
          </div>
          </span>
          </Link>
          <div className="flex flex-row space-x-5 justify-center items-center">
          
          <h1 className=" text-2xl">{student.student.emailID}</h1>

          <nav className="md:ml-auto md:mr-auto flex flex-row items-center gap-5 text-base justify-center">
            <Link to={"/student/home"} className="mr-5 hover:text-gray-800">
              Home
            </Link>
          </nav>
          <button
            className="inline-flex items-center text-white bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base  md:mt-0 "
            onClick={() => {
              sessionStorage.setItem("student", null);
              navigate("/");
            }}
          >
            Logout
          </button>
          </div>

        </div>
      </header>
    </div>
  );
};

export default Navbar;
