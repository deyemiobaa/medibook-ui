import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <div className='navigation w-48 bg-stone-100 max-h-full flex flex-col max-h-full pl-[15px]'>
      <div className="logo ">
        <img src="https://previews.123rf.com/images/lumut/lumut1708/lumut170800467/83730852-medical-logo-template.jpg" className="logo w-16" alt="logo" />
      </div>
      <div className="navLinks flex flex-col mt-44 ">
        <NavLink exact to="/" activeClassName="nav-active" className="link-el hover:bg-[#97C02C] hover:text-[#fff] ease-in duration-300 text-2xl font-medium mb-2 p-[15px]">Reserve</NavLink>
        <NavLink exact to="/Specialization" activeClassName="nav-active" className="link-el hover:bg-[#97C02C] hover:text-[#fff] ease-in duration-300 text-2xl font-medium mb-2 p-[15px]">Specialization</NavLink>
        <NavLink exact to="/SpecialCases" activeClassName="nav-active" className="link-el hover:bg-[#97C02C] hover:text-[#fff] ease-in duration-300 text-2xl font-medium mb-2 p-[15px]">Special cases</NavLink>
      </div>
    </div>
  );
}
