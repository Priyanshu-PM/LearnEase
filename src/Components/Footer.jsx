import React from 'react'

const Footer = () => {
  
  return (


    <div className='min-w-full'>
    <footer class="mt-3 min-w-full  border-t-2">
    <div class="mx-auto">
      <div class=" grid grid-cols-5 gap-6 py-6 px-2 ">
        <div class="flex-1 mb-6 text-black">
          <p className="text-2xl font-righteous font-bold">
          Learn<span className="text-babyPink">Ease</span>
        </p>
        </div>
        <div class="flex flex-col">
          <p class="uppercase text-black font-bold md:mb-6">Links</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block  md:block md:mr-0">
              <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">FAQ</a>
            </li>
            <li class="mt-2 inline-block  md:block md:mr-0">
              <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Help</a>
            </li>
            <li class="mt-2 inline-block md:block md:mr-0">
              <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Support</a>
            </li>
          </ul>
        </div>
        <div class="flex flex-col">
          <p class="uppercase text-black font-bold md:mb-6">Legal</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block  md:block md:mr-0">
              <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Terms</a>
            </li>
            <li class="mt-2 inline-block  md:block md:mr-0">
              <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Privacy</a>
            </li>
          </ul>
        </div>
        <div class="flex flex-col">
          <p class="uppercase text-black font-bold md:mb-6">Social</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block  md:block md:mr-0">
              <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Instagram</a>
            </li>
            <li class="mt-2 inline-block md:block md:mr-0">
              <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">LinkedIn</a>
            </li>
            <li class="mt-2 inline-block md:block md:mr-0">
              <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Twitter</a>
            </li>
          </ul>
        </div>
        <div class="flex flex-col">
          <p class="uppercase text-black font-bold md:mb-6">Company</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block  md:block md:mr-0">
              <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Official Blog</a>
            </li>
            <li class="mt-2 inline-block  md:block md:mr-0">
              <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">About Us</a>
            </li>
            <li class="mt-2 inline-block  md:block md:mr-0">
              <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Contact</a>
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