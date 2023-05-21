import React from "react";
import logo from '../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            
            <div>
                <img src={logo} alt="Logo" style={{ width: '70px' }} />
            </div>
            <div>
            {/* Menu */}
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Work</li>
                    <li>Contact</li>
                </ul>
            </div>
            {/* Hamburger Menu */}
            <div>
                <FaBars/>
            </div>
            {/* Mobile Menu */}
            <div>
                <FaTimes/>
            </div>
        </div>
    );
}

export default Navbar;
