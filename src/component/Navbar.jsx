import React from "react";
import logo from '../assets/logo.png';
import {FaBars, FaTimes} from 'react-icons/fa';

const Navbar = () => {
    return {
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        Navbar
        <div>
            <img src={logo} alt="Logo Image"style={{width: '50px'}} />
        </div>
        </div>
    }
}
export default Navbar;