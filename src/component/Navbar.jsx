import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={logo} alt="Logo" style={{ width: "70px" }} />
      </div>
      {/* Menu */}
      <div>
        <ul className="hidden md:flex">
          <li>
          <Link to="home" spy={true} smooth={true} duration={500}>
          Home
        </Link>
          </li>
          <li>
          <Link to="about" spy={true} smooth={true} duration={500}>
          About
        </Link>
          </li>
          <li>
          <Link to="skills" spy={true} smooth={true} duration={500}>
          Skills
        </Link>
          </li>
          <li>
          <Link to="work" spy={true} smooth={true} duration={500}>
          Work
        </Link>
          </li>
          <li>
          <Link to="contact" spy={true} smooth={true} duration={500}>
          Contact
        </Link>
          </li>
        </ul>
      </div>
      {/* Hamburger Menu */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
        <Link onClick={handleClick} to="home" spy={true} smooth={true} duration={500}>
          Home
        </Link>
        </li>
        <li className="py-6 text-4xl">
        <Link  onClick={handleClick} to="about" spy={true} smooth={true} duration={500}>
          About
        </Link>
        </li>
        <li className="py-6 text-4xl">
        <Link onClick={handleClick} to="skills" spy={true} smooth={true} duration={500}>
          Skills
        </Link>
        </li>
        <li className="py-6 text-4xl">
        <Link onClick={handleClick} to="work" spy={true} smooth={true} duration={500}>
          Work
        </Link>
        </li>
        <li className="py-6 text-4xl">
        <Link onClick={handleClick} to="contact" spy={true} smooth={true} duration={500}>
          Contact
        </Link>
        </li>
      </ul>
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        {/* <FaTimes /> */}
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-grey-300"
              href="https://www.linkedin.com/in/subodh-poudel/"
            >
              linkedin
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-grey-300 "
              href="https://github.com/subodhpoudel12"
            >
              GitHub
              <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#3a23ba]">
            <a
              className="flex justify-between items-center w-full text-grey-300 "
              href="https://github.com/subodhpoudel12"
            >
              Email
              <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#891313]">
            <a
              className="flex justify-between items-center w-full text-grey-300 "
              href="https://github.com/subodhpoudel12"
            >
              Resume
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
