import React from 'react'

const Footer = () => {
  
  return (


    <div className='min-w-full'>
    <footer className="mt-3 min-w-full  border-t-2">
    <div className="mx-auto">
      <div className=" grid grid-cols-5 gap-6 py-6 px-2 ">
        <div className="flex-1 mb-6 text-black">
          <p className="text-2xl font-righteous font-bold">
          Learn<span className="text-babyPink">Ease</span>
        </p>
        </div>
        <div className="flex flex-col">
          <p className="uppercase text-black font-bold md:mb-6">Links</p>
          <ul className="list-reset mb-6">
            <li className="mt-2 md:block md:mr-0">
              <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">FAQ</a>
            </li>
            <li className="mt-2   md:block md:mr-0">
              <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Help</a>
            </li>
            <li className="mt-2  md:block md:mr-0">
              <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Support</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <p className="uppercase text-black font-bold md:mb-6">Legal</p>
          <ul className="list-reset mb-6">
            <li className="mt-2   md:block md:mr-0">
              <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Terms</a>
            </li>
            <li className="mt-2   md:block md:mr-0">
              <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Privacy</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <p className="uppercase text-black font-bold md:mb-6">Social</p>
          <ul className="list-reset mb-6">
            <li className="mt-2   md:block md:mr-0">
              <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Instagram</a>
            </li>
            <li className="mt-2  md:block md:mr-0">
              <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">LinkedIn</a>
            </li>
            <li className="mt-2  md:block md:mr-0">
              <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Twitter</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <p className="uppercase text-black font-bold md:mb-6">Company</p>
          <ul className="list-reset mb-6">
            <li className="mt-2   md:block md:mr-0">
              <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Official Blog</a>
            </li>
            <li className="mt-2   md:block md:mr-0">
              <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">About Us</a>
            </li>
            <li className="mt-2   md:block md:mr-0">
              <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
    </div>
  )
}

export default Footer;