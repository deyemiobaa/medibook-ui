import React from 'react';
import { Link } from 'react-router-dom';
// import { unauthenticatedNav } from '../../../assests/navigation';

export default function SignUpPage() {
  return (
    <div className="w-full px-5 py-24 text-gray-600 justify-self-center sm:w-4/5 bg-lime-400 sm:justify-self-end sm:py-16">
      <div className="max-w-sm m-auto bg-white bg-opacity-25 rounded shadow-xl">
        <form className="p-10">
          <p className="mb-8 text-2xl font-light text-center text-blue-600">
            Sign up
          </p>
          <div className="mb-2">
            <input type="text" id="login-with-bg-email" className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Username" />
          </div>
          <div className="mb-2">
            <input type="password" id="login-with-bg-password" className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent" placeholder="Password" />
          </div>
          <div className="mb-2">
            <input type="password" id="login-with-bg-password" className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent" placeholder="Confirm Password" />
          </div>
          <div className="flex items-center justify-between mt-4">
            <button type="submit" className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in rounded-lg shadow-md bg-lime-800 hover:bg-lime-500 focus:ring-lime-400 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ">
              Signup
            </button>
          </div>
        </form>
        <div className="py-5 text-center">
          <Link to="/login" className="text-base font-medium align-baseline hover:text-gray-800">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
