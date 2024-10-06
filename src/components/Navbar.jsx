import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaHome, FaFileDownload, FaRegQuestionCircle } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
import logo from '../assets/logo.png';
import cv from '../assets/CV.pdf'

function Navbar({ scrollToMain, scrollToAbout, scrollToSkills }) {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleOnClick = () => {
    setOpenSideBar(!openSideBar);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  const sideBarClick = (scrollTo) => {
    if(scrollTo === 'Main') {
      scrollToMain();
    }
    else if (scrollTo === 'About') {
      scrollToAbout();
    }
    else if (scrollTo === 'Skills') {
      scrollToSkills();
    }
    setOpenSideBar(!openSideBar);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`w-full flex h-12 lg:h-16 fixed z-[100] navbar ${scrolling ? 'nav-bg' : ''}`}>
        <div className="w-full flex justify-start items-center gap-2 lg:pl-20 xl:pl-32 2xl:pl-64 pl-7">
          <img className="h-4 md:h-5 lg:h-6 xl:h-7" src={logo} alt="Logo" />
          <p className="font-extrabold text-castleton text-lg lg:text-2xl xl:text-3xl"> mia. </p>
        </div>
        <div className="w-full justify-end gap-2 xl:gap-5 pl-7 lg:pr-20 xl:pr-32 2xl:pr-64 items-center hidden lg:flex">
          <button onClick={scrollToMain} className="px-2 2xl:px-5 py-3 text-sm text-castleton font-semibold hover:text-emerald"> Home </button>
          <button onClick={scrollToAbout} className="px-2 2xl:px-5 py-3 text-sm text-castleton font-semibold hover:text-emerald"> About </button>
          <button onClick={scrollToSkills} className="px-2 2xl:px-5 py-3 text-sm text-castleton font-semibold hover:text-emerald"> Skills </button>
          <button className="bg-castleton rounded-xl px-7 py-2 font-bold text-white min-w-max" onClick={() => window.open(cv, '_blank')}> Download CV </button>
          <div className="border-r border-castleton border-2 h-2/4"></div>
          <a href="https://github.com/mrkiyn" target="_blank" rel="noreferrer"><FaGithub className="text-castleton text-2xl" /></a>
          <a href="https://www.linkedin.com/in/mark-ian-amado/" target="_blank" rel="noreferrer"><FaLinkedin className="text-castleton text-2xl" /></a>
        </div>
        <div className="flex lg:hidden justify-end items-center pr-7">
          <button onClick={handleOnClick}>
            {openSideBar ? <IoClose className="text-emerald text-lg" /> : <GiHamburgerMenu className="text-emerald text-lg" />}
          </button>
        </div>
      </div>
      <div className={`fixed bg-onyx w-3/5 md:w-2/5 h-screen right-0 transition-transform duration-300 z-[10] transform ${openSideBar ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-start mt-14">
          <button onClick={() => sideBarClick('Main')} className="w-full text-left px-2 py-3 text-sm text-medium text-white flex gap-2 items-center"><FaHome /> Home</button>
          <button onClick={() => sideBarClick('About')} className="w-full text-left px-2 py-3 text-sm text-medium text-white flex gap-2 items-center"><FaRegQuestionCircle /> About</button>
          <button onClick={() => sideBarClick('Skills')} className="w-full text-left px-2 py-3 text-sm text-medium text-white flex gap-2 items-center"><FaRegQuestionCircle /> Skills</button>
          <button className="w-full text-left px-2 py-3 text-sm text-medium text-white flex gap-2 items-center"><FaFileDownload /> Download CV</button>
          <a href="https://github.com/mrkiyn" target="_blank" rel="noreferrer" className="w-full text-left px-2 py-3 text-sm text-medium text-white flex gap-2 items-center"><FaGithub /> Github</a>
          <button className="w-full text-left px-2 py-3 text-sm text-medium text-white flex gap-2 items-center"><FaLinkedin /> LinkedIn</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
