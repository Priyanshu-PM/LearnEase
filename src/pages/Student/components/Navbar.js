import React from 'react'
import { Link} from 'react-router-dom';

function Navbar() {
  return (
    <div>
        <header className=" border-b-[0.1px] border-gray-400">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link to={"/"} className="flex title-font font-medium items-center mb-4 md:mb-0">
      <span className="ml-3 text-xl">StudyAI</span>
    </Link>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center gap-5 text-base justify-center">
      <Link to={'/home'} className="mr-5 hover:text-gray-800">Home</Link>
      <Link to={'/download'} className="mr-5 hover:text-gray-800">Download Extention</Link>
    </nav>
    <button className="inline-flex items-center text-white bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
    Logout
    </button>
  </div>
</header>
    </div>
  )
}

export default Navbar