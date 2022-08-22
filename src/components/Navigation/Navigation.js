import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../assests/logo.png"

export default function Navigation() {
  return (
    <div className="navigation w-48 bg-gray-300  max-h-full flex flex-col max-h-full pl-[15px]">
      <div className="logo w-[70%] self-center">
        <img src={logo} className="logo rounded-full" alt="logo" />
      </div>
      <div className="navLinks flex flex-col mt-44 ">
        <NavLink exact to="/" activeClassName="nav-active" className="link-el hover:bg-[#97C02C] hover:text-[#fff] ease-in duration-300 text-lg font-medium mb-2 p-[15px]">Home</NavLink>
        <NavLink exact to="/Specialization" activeClassName="nav-active" className="link-el hover:bg-[#97C02C] hover:text-[#fff] ease-in duration-300 text-lg font-medium mb-2 p-[15px]">My Reservations</NavLink>
        <NavLink exact to="/SpecialCases" activeClassName="nav-active" className="link-el hover:bg-[#97C02C] hover:text-[#fff] ease-in duration-300 text-lg font-medium mb-2 p-[15px]">Book Appointment</NavLink>
      </div>
    </div>
  );
}
