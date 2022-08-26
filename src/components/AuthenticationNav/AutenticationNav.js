import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assests/logo.png';

export default function AutenticationNav() {
  return (
    <div className=" hidden sm:block sm:w-[20%] bg-gray-300 flex flex-col sm:max-h-full ">
      <div className="logo w-[20%] sm:w-[70%] p-[10px] sm:self-center">
        <img src={logo} className="logo rounded-full" alt="logo" />
      </div>

      <div className="navLinks flex flex-col  mt-44 items-center h-[10%] w-[100%] sm:pl-[15px] pb-12 pt-0">
        <NavLink exact to="/" activeClassName="nav-active" className="rounded-lg border-transparent py-2 px-4 hover:bg-indigo-700 text-xl hover:text-[#fff] ease-in duration-300 sm:text-[90%] font-medium mb-2 ">Login</NavLink>
        <NavLink exact to="/Signup" activeClassName="nav-active" className=" rounded-lg border-transparent ewpy-2 px-4 hover:bg-indigo-700 text-xl hover:text-[#fff] ease-in duration-300 sm:text-[90%] font-medium mb-2 ">Sign up</NavLink>
      </div>
    </div>
  );
}
