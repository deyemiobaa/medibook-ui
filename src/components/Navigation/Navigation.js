import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  FaTwitter, FaGithub, FaInstagram, FaFacebook, FaReact, FaHeart, FaLinkedin,
} from 'react-icons/fa';
import { SiRubyonrails } from 'react-icons/si';
import { BsPlus } from 'react-icons/bs'; import logo from '../../assets/logo.png';

export default function Navigation({ urls }) {
  const [open, setOpen] = useState(false);

  const icons = [
    {
      title: 'LinkedIn',
      url: 'https://www.linkedin.com',
      icon: <FaLinkedin />,
    },
    {
      title: 'Twitter',
      url: 'https://twitter.com',
      icon: <FaTwitter />,
    },
    {
      title: 'Github',
      url: 'https://github.com/orgs/medi-book/repositories',
      icon: <FaGithub />,
    },
    {
      title: 'Instagram',
      url: 'https://instagram.com',
      icon: <FaInstagram />,
    },
    {
      title: 'Facebook',
      url: 'https://facebook.com',
      icon: <FaFacebook />,
    },
  ];

  const technologies = [
    {
      title: 'Built with Love',
      icon: <FaHeart />,
    },
    {
      title: 'Plus',
      icon: <BsPlus />,
    },
    {
      title: 'Built with React',
      icon: <FaReact />,
    },
    {
      title: 'Plus+',
      icon: <BsPlus />,
    },
    {
      title: 'Built with Rails',
      icon: <SiRubyonrails />,
    },
  ];

  return (
    <div className="navigation sm:w-[15%] bg-white flex justify-between items-center sm:flex-col sm:border-r sm:border-r-gray-400 border-b border-b-gray-400 fixed top-0 left-0 sm:bottom-0 px-3 sm:pb-10 sm:px-0">
      <div className="logo w-[20%] sm:w-[70%] p-[10px] sm:self-center">
        <img src={logo} className="rounded-full logo" alt="logo" />
      </div>
      <button type="button" onClick={() => setOpen(!open)} className="text-3xl cursor-pointer sm:hidden">
        <ion-icon name={open ? 'close-outline' : 'menu-outline'} />
      </button>
      <div className={`open ${open ? 'fixed mt-56 z-20 left-0 right-0' : 'hidden'}`}>
        <div className="flex flex-col pl-3 bg-white navLinks first:border-t last:border-b">
          {urls.map(({ path, name }) => (
            <NavLink to={path} className="py-2 mb-2 text-xl font-medium duration-300 ease-in sm:text-base" key={name} style={{ background: 'white', color: 'black' }}>{name}</NavLink>
          ))}
        </div>
      </div>
      <div className="hidden w-full navLinks sm:flex sm:flex-col">
        {urls.map(({ path, name }) => (
          <NavLink to={path} className="link-el hover:bg-lime-400 text-base hover:text-[#fff] ease-in duration-300 font-medium mb-2 p-3 pl-10" key={name}>{name}</NavLink>
        ))}
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
