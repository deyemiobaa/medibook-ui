/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assests/logo.png';

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <div className="navigation w-[100%]  sm:w-[25%] bg-gray-300 flex flex-col sm:max-h-full ">
      <div className="logo w-[20%] sm:w-[70%] p-[10px] sm:self-center">
        <img src={logo} className="logo rounded-full" alt="logo" />
      </div>
      <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer sm:hidden">
        <ion-icon name={open ? 'close-outline' : 'menu-outline'} />
      </div>

      <div className={` navLinks flex flex-col  mt-44 items-center sm:items-start h-[10%] w-[100%] sm:pl-[15px] pb-12 pt-0 ${open ? 'top-20 opacity-100 bg-slate-600' : 'top-[-490px]'}`}>
        <NavLink exact to="/" activeClassName="nav-active" className="link-el hover:bg-[#97C02C] text-xl hover:text-[#fff] ease-in duration-300 sm:text-[90%] font-medium mb-2 p-[15px]">Home</NavLink>
        <NavLink exact to="/my-reservations" activeClassName="nav-active" className="link-el hover:bg-[#97C02C] text-xl hover:text-[#fff] ease-in duration-300 sm:text-[90%] font-medium mb-2 p-[15px] whitespace-nowrap">My Reservations</NavLink>
        <NavLink exact to="/book-appointment" activeClassName="nav-active" className="link-el hover:bg-[#97C02C] text-xl hover:text-[#fff] ease-in duration-300 sm:text-[90%] font-medium mb-2 p-[15px] whitespace-nowrap">Book Appointment</NavLink>
      </div>
    </div>
  );
}
