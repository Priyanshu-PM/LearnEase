import React from "react";

const SelectProfile = () => {
  return (
    <div className="flex flex-row align-center justify-center content-center space-x-10">
      <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            class="p-8 rounded-t-lg"
            src="/docs/images/products/apple-watch.png"
            alt="product image"
          />
        </a>
        <div class="px-5 pb-5 space-y-10">
          <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Continue as Teacher
            </h5>
          </a>
          <div class="flex items-center justify-between">
            <a
              href="#"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
            </a>
          </div>
        </div>
      </div>

      <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            class="p-8 rounded-t-lg"
            src="/docs/images/products/apple-watch.png"
            alt="product image"
          />
        </a>
        <div class="px-5 pb-5 space-y-10">
          <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Continue as Student
            </h5>
          </a>
          <div class="flex items-center justify-between">
            <a
              href="#"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectProfile;
