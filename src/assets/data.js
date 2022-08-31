import {
  FaTwitter, FaGithub, FaInstagram, FaFacebook, FaReact, FaHeart, FaLinkedin,
} from 'react-icons/fa';
import { SiRubyonrails } from 'react-icons/si';
import { BsPlus } from 'react-icons/bs';

export const icons = [
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

export const technologies = [
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
