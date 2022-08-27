import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../../assests/logo.png';

export default function Navigation({ urls }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="navigation sm:w-[20%] bg-white flex justify-between items-center sm:flex-col sm:border-r sm:border-r-gray-400 border-b border-b-gray-400 fixed top-0 left-0 sm:bottom-0 px-3 sm:justify-start">
      <div className="logo w-[20%] sm:w-[70%] p-[10px] sm:self-center">
        <img src={logo} className="rounded-full logo" alt="logo" />
      </div>
      <button type="button" onClick={() => setOpen(!open)} className="text-3xl cursor-pointer sm:hidden">
        <ion-icon name={open ? 'close-outline' : 'menu-outline'} />
      </button>
      <div className={`open ${open ? 'fixed mt-56 z-20 left-0 right-0' : 'hidden'}`}>
        <div className="flex flex-col pl-3 bg-white navLinks first:border-t last:border-b">
          {urls.map(({ path, name }) => (
            <NavLink to={path} className="py-2 text-xl ease-in duration-300 sm:text-[90%] font-medium mb-2" key={name} style={{ background: 'white', color: 'black' }}>{name}</NavLink>
          ))}
        </div>
      </div>
      <div className="navLinks hidden sm:flex sm:flex-col mt-44 pl-[15px]">
        {urls.map(({ path, name }) => (
          <NavLink to={path} className="link-el hover:bg-[#97C02C] text-xl hover:text-[#fff] ease-in duration-300 sm:text-[90%] font-medium mb-2 p-[15px]" key={name}>{name}</NavLink>
        ))}
      </div>
    </div>
  );
}

Navigation.propTypes = {
  urls: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};
