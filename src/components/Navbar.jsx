import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaTwitter  } from 'react-icons/fa'

export const Navbar = () => {

    const [nav, setNav] = useState(false);
    const handleClick = () => { setNav(!nav) }

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
        <div>
            <img src={ Logo } alt="Logo img" style={{width: '100px'}} />
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex">
            <ul className="hidden md:flex">
                <li>Home</li>
                <li>About me</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </div>

        {/* Hamburguer menu */}
        <div onClick={handleClick} className="md:hidden z-10">
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile Menu */}
        <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>
            <li className="py-6 text-4xl">Home</li>
            <li className="py-6 text-4xl">About me</li>
            <li className="py-6 text-4xl">Skills</li>
            <li className="py-6 text-4xl">Projects</li>
            <li className="py-6 text-4xl">Contact</li>
        </ul>

        {/* Social media icons */}
        <div className="flex fixed flex-col top-[35%] left-0">
            <ul>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
                    <a className="flex justify-between items-center w-full text-gray-300" href="/">
                        Linkedin <FaLinkedin size={ 30 } />
                    </a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-800">
                    <a className="flex justify-between items-center w-full text-gray-300" href="/">
                        Github <FaGithub size={ 30 } />
                    </a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-cyan-500">
                    <a className="flex justify-between items-center w-full text-gray-300" href="/">
                        Twitter <FaTwitter size={ 30 } />
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}
