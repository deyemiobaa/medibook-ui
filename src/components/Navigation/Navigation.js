import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <div className='navigation w-48 bg-stone-100 max-h-full flex flex-col max-h-full'>
      <div className="logo ">
        <img src="https://previews.123rf.com/images/lumut/lumut1708/lumut170800467/83730852-medical-logo-template.jpg" className="logo w-16" alt="logo" />
      </div>
      <div className="navLinks flex flex-col ">
        <NavLink exact to="/" activeClassName="nav-active" className="link-el hover:bg-yellow-300">Reserve</NavLink>
        <NavLink exact to="/Specialization" activeClassName="nav-active" className="link-el hover:bg-yellow-300">Specialization</NavLink>
        <NavLink exact to="/SpecialCases" activeClassName="nav-active" className="link-el hover:bg-yellow-300">Special cases</NavLink>
      </div>
    </div>
  );
}
