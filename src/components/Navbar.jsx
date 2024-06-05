import { FaGithub, FaLinkedin, FaHome, FaFileDownload, FaLightbulb, FaRegQuestionCircle  } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import logo from '../assets/logo.png';
import { useState } from "react";

function Navbar() {
  const [openSideBar, setOpenSideBar] = useState(false);

  const handleOnClick = () => {
    setOpenSideBar(!openSideBar);
  }

  return (
    <>
      <div className="bg-transparent w-full flex h-12 lg:h-16 fixed z-[100]">
        <div className="w-full flex justify-start items-center gap-2 lg:pl-20 xl:pl-32 2xl:pl-64 pl-7">
          <img className="h-4 md:h-6 lg:h-7 xl:h-8" src={logo} alt="Logo" />
          <p className="font-extrabold text-emerald text-lg lg:text-2xl xl:text-3xl"> mia. </p>
        </div>
        <div className="w-full justify-end gap-2 xl:gap-5 pl-7 lg:pr-20 xl:pr-32 2xl:pr-64 items-center hidden lg:flex">
          <button className="px-2 2xl:px-5 py-3 text-sm text-white font-semibold hover:text-emerald"> Home </button>
          <button className="px-2 2xl:px-5 py-3 text-sm text-white font-semibold hover:text-emerald"> About </button>
          <button className="px-2 2xl:px-5 py-3 text-sm text-white font-semibold hover:text-emerald"> Projects </button>
          <button className="bg-castleton rounded-xl px-7 py-2 font-bold text-white min-w-max	"> Download CV </button>
          <div className="border-r border-white border-2 h-2/4"></div>
          <a href="https://github.com/mrkiyn" target="_blank" rel="noreferrer"><FaGithub className="text-white text-2xl" /></a>
          <a href="https://www.linkedin.com/in/mark-ian-amado/" target="_blank" rel="noreferrer"><FaLinkedin className="text-white text-2xl" /></a>
          {/* <button><FaDiscord className="text-white text-2xl" /></button> */}
        </div>
        <div className="flex lg:hidden justify-end items-center pr-7">
          <button onClick={handleOnClick}>
            {openSideBar ? <IoClose className="text-emerald text-lg" /> : <GiHamburgerMenu className="text-emerald text-lg" />}
          </button>
        </div>
      </div>
      <div className={`fixed bg-onyx w-3/5 md:w-2/5 h-screen right-0 transition-transform duration-300 z-[10] transform ${openSideBar ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-start mt-14">
          <button className="w-full text-left px-2 py-3 text-sm text-medium text-white flex gap-2 items-center"><FaHome /> Home</button>
          <button className="w-full text-left px-2 py-3 text-sm text-medium text-white flex gap-2 items-center"><FaRegQuestionCircle />About</button>
          <button className="w-full text-left px-2 py-3 text-sm text-medium text-white flex gap-2 items-center"><FaLightbulb />Projects</button>
          <button className="w-full text-left px-2 py-3 text-sm text-medium text-white flex gap-2 items-center"><FaFileDownload />Download CV</button>
          <a href="https://github.com/mrkiyn" target="_blank" rel="noreferrer" className="w-full text-left px-2 py-3 text-sm text-medium text-white flex gap-2 items-center"><FaGithub />Github</a>
          <button className="w-full text-left px-2 py-3 text-sm text-medium text-white flex gap-2 items-center"><FaLinkedin />LinkedIn</button>
          {/* <button className="w-full text-left px-2 py-3 text-sm text-medium text-white flex gap-2 items-center"><FaDiscord />Discord</button> */}
        </div>
      </div>
    </>
  );
}

export default Navbar;
