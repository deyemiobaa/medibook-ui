import React from 'react';
// import { unauthenticatedNav } from '../../../assests/navigation';

export default function SignUpPage() {
  return (
    <div className="w-full h-screen font-sans bg-cover bg-landscape">
      <div className="container flex items-center justify-center flex-1 h-full mx-auto">
        <div className="w-full max-w-lg">
          <div className="leading-loose">
            <form className="max-w-sm p-10 m-auto bg-white bg-opacity-25 rounded shadow-xl">
              <p className="mb-8 text-2xl font-light text-center text-blue-600">
                Sign Up
              </p>
              <div className="mb-2">
                <div className="relative ">
                  <input type="text" id="login-with-bg-full-name" className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="full name" />
                </div>
              </div>
              <div className="mb-2">
                <div className="relative ">
                  <input type="text" id="login-with-bg-email" className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="email" />
                </div>
              </div>
              <div className="mb-2">
                <div className="relative ">
                  <input type="text" id="login-with-bg-password" className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="password" />
                </div>
              </div>
              <div className="mb-2">
                <div className="relative ">
                  <input type="text" id="login-with-bg-password" className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="confirm password" />
                </div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <button type="submit" className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ">
                  Sign Up
                </button>
              </div>
              <div className="text-center">
                <a href="vid.com" className="right-0 inline-block text-sm font-light align-baseline text-500 hover:text-gray-800">
                  Login
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
