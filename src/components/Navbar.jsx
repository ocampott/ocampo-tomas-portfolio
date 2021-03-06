import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaTwitter  } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

export const Navbar = () => {

    const { t, i18n } = useTranslation()
    const changeLanguage = lng => {i18n.changeLanguage(lng)}

    const [nav, setNav] = useState(false);
    const handleClick = () => { setNav(!nav) }

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
        <div>
            <Link to="home" smooth={true} duration={500}>
            <img src={ Logo } alt="Logo img" style={{width: '100px', cursor: 'pointer'}} />
            </Link>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex">
            <ul className="hidden md:flex">
                <li>
                <Link to="home" smooth={true} duration={500}>{t("navbar.home")}</Link>
                </li>
                <li>
                <Link to="about-me" smooth={true} duration={500}>{t("navbar.about-me")}</Link>
                </li>
                <li>
                <Link to="skills" smooth={true} duration={500}>{t("navbar.skills")}</Link>
                </li>
                <li>
                <Link to="projects" smooth={true} duration={500}>{t("navbar.projects")}</Link>
                </li>
                <li>
                <Link to="contact" smooth={true} duration={500}>{t("navbar.contact")}</Link>
                </li>
                <li onClick={() => {changeLanguage('es')}}>ES</li>
                <li onClick={() => {changeLanguage('en')}}>EN</li>
            </ul>
        </div>

        {/* Hamburguer menu */}
        <div onClick={handleClick} style={{cursor:'pointer'}} className="md:hidden z-10">
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile Menu */}
        <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>
            <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link>
            </li>
            <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="about-me" smooth={true} duration={500}>About me</Link>
            </li>
            <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link>
            </li>
            <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="projects" smooth={true} duration={500}>Projects</Link>
            </li>
            <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link>
            </li>
            <li className="py-6 text-4xl" onClick={() => {changeLanguage('es'); handleClick();}}>ES</li>
            <li className="py-6 text-4xl" onClick={() => {changeLanguage('en'); handleClick();}}>EN</li>
        </ul>

        {/* Social media icons */}
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
            <ul>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
                    <a className="flex justify-between items-center w-full text-gray-300" href="https://www.linkedin.com/in/tomas-ocampo-753910212/">
                        Linkedin <FaLinkedin size={ 30 } />
                    </a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-800">
                    <a className="flex justify-between items-center w-full text-gray-300" href="https://github.com/ocampott">
                        Github <FaGithub size={ 30 } />
                    </a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-cyan-500">
                    <a className="flex justify-between items-center w-full text-gray-300" href="https://twitter.com/ocampott">
                        Twitter <FaTwitter size={ 30 } />
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}
