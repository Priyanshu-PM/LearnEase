import React, {useState, useEffect} from "react";
import { Collapse } from 'flowbite';



import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

const $targetEl = document.getElementById('targetEl');

// optionally set a trigger element (eg. a button, hamburger icon)
const $triggerEl = document.getElementById('triggerEl');
const options = {
  onCollapse: () => {
      console.log('element has been collapsed')
  },
  onExpand: () => {

      console.log('element has been expanded')
  },
  onToggle: () => {
      console.log('element has been toggled')
  }
};


const collapse = new Collapse($targetEl, $triggerEl, options);

const [login, setLogin] = useState(false);
const [data, setData] = useState(null);
const [type, setType] = useState();

const [loading, setLoading] = useState(true)
const [navPath, setNavPath] = useState("/select");

useEffect(()=> {

  if(sessionStorage.getItem("teacher") != null)
  {

  const teacherData = sessionStorage.getItem("teacher");
  setData(JSON.parse(teacherData));
  
  setType("teacher");
  setLogin(true);
  setLoading(false);

} 
else if(sessionStorage.getItem("student") != null) 
{

  const studentData = sessionStorage.getItem("student");
  // console.log(JSON.parse(studentData))
  setData(JSON.parse(studentData));

  setType("student");
  setLogin(true);

  setLoading(false)

  

}
else {

  setLogin(false);

}

}, []);

console.log(login);
console.log(type);

  return (
    
<nav class="bg-white border-gray-200 dark:bg-gray-900">
<div class=" flex flex-wrap items-center justify-between mx-auto py-4 px-2">
<div className="flex-start">
        <p className="text-3xl font-righteous font-bold">
          Learn<span className="text-babyPink">Ease</span>
        </p>
      </div>
<div class="flex items-center md:order-2">

{
  login ? ( 
    
    <button  type="button" class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
  <span class="sr-only">Open user menu</span>
  <img class="w-10 h-10 drop-shadow-xl rounded-full" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="user"/>
</button>
    
    ): (

      
    <button onClick={()=> navigate(navPath)} className="bg-babyPink text-white p-2 rounded-lg font-poppins font-bold">Sign In</button>
  
)
}
    
    <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
      <div class="px-4 py-3">
        <span class="block text-sm text-gray-900 dark:text-white">
      {loading===false && data[type].firstName}

        </span>
        <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">
        {loading===false && data[type].emailID}

{/*{data.type.emailID}*/}
        </span>
      </div>
      <ul class="py-2 px-1 " aria-labelledby="user-menu-button">

        <li><button  onClick={()=> navigate(`${type}/home`)} className="w-full flex flex-start  px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white transition-all rounded-lg">
       Home
        </button>
          
        </li>
        <li><button onClick={() => {
          sessionStorage.removeItem(type);
          // sessionStorage.setItem(type, null);
          setLogin(false);
          
          // setData(null);
          navigate("/");
        }} className="w-full flex flex-start  px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white transition-all rounded-lg">
          Sign out
          </button>
        </li>
      </ul>
    </div>
    

</div>
<div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
  <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
    <li>
      <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
    </li>
    <li>
      <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
    </li>
  </ul>
</div>
</div>
</nav>

  );
};

export default Navbar;