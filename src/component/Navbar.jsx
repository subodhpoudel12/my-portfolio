import React from "react";
import logo from '../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            
            <div>
                <img src={logo} alt="Logo" style={{ width: '70px' }} />
            </div>
            {/* Menu */}
           <div>
                <ul className="hidden md:flex">
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Work</li>
                    <li>Contact</li>
                </ul>
           </div>
            {/* Hamburger Menu */}
            <div className="md:hidden">
                <FaBars/>
            </div>
            {/* Mobile Menu */}
            <ul className="absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center">
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
            <div className="hidden">
                <FaTimes/>
            </div>
        </div>
    );
}

export default Navbar;
