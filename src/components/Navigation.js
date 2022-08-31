import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { icons, technologies } from '../assets/data';
import logo from '../assets/logo.png';
import storage from '../app/localStorage';

export default function Navigation({ urls }) {
  const [open, setOpen] = useState(false);
  const role = storage.get('role');

  return (
    <div className="navigation sm:w-[15%] bg-white flex justify-between items-center sm:flex-col sm:border-r sm:border-r-gray-400 border-b border-b-gray-400 fixed top-0 left-0 sm:bottom-0 px-3 sm:pb-10 sm:px-0">
      <div className="logo w-[20%] sm:w-[70%] p-[10px] sm:self-center">
        <img src={logo} className="rounded-full logo" alt="logo" />
      </div>
      <button type="button" onClick={() => setOpen(!open)} className="text-3xl cursor-pointer sm:hidden">
        <ion-icon name={open ? 'close-outline' : 'menu-outline'} />
      </button>
      <div className={`open ${open ? 'fixed top-16 z-20 left-0 right-0' : 'hidden'}`}>
        <div className="flex flex-col pl-3 bg-white navLinks first:border-t last:border-b mobile-nav-container">
          {urls.map(({ path, name }) => (
            <NavLink to={path} className="py-2 mb-2 text-sm font-medium" key={name} style={{ background: 'white', color: 'black' }}>{name}</NavLink>
          ))}
          {role === 'admin' && (
            <>
              <NavLink
                to="/doctors/new"
                className="py-2 mb-2 text-sm font-medium"
              >
                Add Doctor
              </NavLink>
              <NavLink
                to="doctors/delete"
                className="py-2 mb-2 text-sm font-medium"
              >
                Remove Doctor
              </NavLink>
            </>
          )}
        </div>
      </div>
      <div className="hidden w-full text-sm navLinks sm:flex sm:flex-col desktop-nav-container">
        {urls.map(({ path, name }) => (
          <NavLink to={path} className="link-el hover:bg-lime-400 hover:text-[#fff] ease-in duration-300 font-medium mb-2 p-3 pl-10" key={name}>{name}</NavLink>
        ))}
        {role === 'admin' && (
          <>
            <NavLink
              to="/doctors/new"
              className="link-el hover:bg-lime-400 hover:text-[#fff]
           ease-in duration-300 font-medium mb-2 p-3 pl-10"
            >
              Add Doctor
            </NavLink>
            <NavLink
              to="doctors/delete"
              className="link-el hover:bg-lime-400  hover:text-[#fff]
           ease-in duration-300 font-medium mb-2 p-3 pl-10"
            >
              Remove Doctor
            </NavLink>
          </>
        )}
      </div>
      <div className="hidden sm:block">
        <div className="flex gap-4 p-2">
          {icons.map((icon) => (
            <Link to={icon.url} key={icon.title} title={icon.title} className="text-sm font-medium">
              {icon.icon}
            </Link>
          ))}
        </div>
        <div className="flex justify-center p-2">
          {technologies.map((tech) => (
            <div key={tech.title} title={tech.title} className="p-1 text-sm font-medium">
              {tech.icon}
            </div>
          ))}
        </div>
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
