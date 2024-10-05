import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaGithub, FaLaravel, FaPhp } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiMui, SiRuby, SiRubyonrails, SiPostgresql, SiMysql, SiPostman } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";



function Skills({skillsRef}) {

  return (
    <div className='w-full' id="about" ref={skillsRef}>
        <div className='py-5 lg:py-10'>
            <span className='bg-gradient-to-r from-castleton to-emerald text-transparent bg-clip-text text-2xl lg:text-3xl font-black'>SKILLS</span>
        </div>

        <div className="w-full h-fit flex gap-2">
            <div className='w-full h-full flex flex-col items-center gap-2 lg:gap-3'>
                <span className='text-castleton font-semibold text-md lg:text-2xl'>Frontend Skills</span>
                <div className='flex flex-wrap justify-center gap-2 lg:gap-3'>
                    <div className='w-fit flex items-center bg-gradient-to-r from-castleton to-emerald rounded-lg py-1 px-2 md:py-2 md:px-4 gap-1'>
                        <FaHtml5 className='text-white text-md' />
                        <span className='font-semibold text-white text-xs md:text-md lg:text-xl '>HTML</span>
                    </div>
                    <div className='w-fit flex items-center bg-gradient-to-r from-castleton to-emerald rounded-lg py-1 px-2 md:py-2 md:px-4 gap-1'>
                        <FaCss3Alt className='text-white text-md' />
                        <span className='font-semibold text-white text-xs md:text-md lg:text-xl '>CSS</span>
                    </div>
                    <div className='w-fit flex items-center bg-gradient-to-r from-castleton to-emerald rounded-lg py-1 px-2 md:py-2 md:px-4 gap-1'>
                        <DiJavascript className='text-white text-md' />
                        <span className='font-semibold text-white text-xs md:text-md lg:text-xl '>Javascript</span>
                    </div>
                    <div className='w-fit flex items-center bg-gradient-to-r from-castleton to-emerald rounded-lg py-1 px-2 md:py-2 md:px-4 gap-1'>
                        <FaReact className='text-white text-md' />
                        <span className='font-semibold text-white text-xs md:text-md lg:text-xl '>React</span>
                    </div>
                    <div className='w-fit flex items-center bg-gradient-to-r from-castleton to-emerald rounded-lg py-1 px-2 md:py-2 md:px-4 gap-1'>
                        <SiMui className='text-white text-md' />
                        <span className='font-semibold text-white text-xs md:text-md lg:text-xl '>Material UI</span>
                    </div>
                    <div className='w-fit flex items-center bg-gradient-to-r from-castleton to-emerald rounded-lg py-1 px-2 md:py-2 md:px-4 gap-1'>
                        <RiTailwindCssFill className='text-white text-md' />
                        <span className='font-semibold text-white text-xs md:text-md lg:text-xl '>Tailwind</span>
                    </div>
                </div>

                <span className='text-castleton font-semibold text-md lg:text-2xl'>Backend Skills</span>
                <div className='flex flex-wrap justify-center gap-2 lg:gap-3'>
                    <div className='w-fit flex items-center bg-gradient-to-r from-castleton to-emerald rounded-lg py-1 px-2 md:py-2 md:px-4 gap-1'>
                        <SiRuby className='text-white text-md' />
                        <span className='font-semibold text-white text-xs md:text-md lg:text-xl '>Ruby</span>
                    </div>
                    <div className='w-fit flex items-center bg-gradient-to-r from-castleton to-emerald rounded-lg py-1 px-2 md:py-2 md:px-4 gap-1'>
                        <SiRubyonrails className='text-white text-md' />
                        <span className='font-semibold text-white text-xs md:text-md lg:text-xl '>Ruby on Rails</span>
                    </div>
                    <div className='w-fit flex items-center bg-gradient-to-r from-castleton to-emerald rounded-lg py-1 px-2 md:py-2 md:px-4 gap-1'>
                        <FaPhp className='text-white text-md' />
                        <span className='font-semibold text-white text-xs md:text-md lg:text-xl '>PHP</span>
                    </div>
                    <div className='w-fit flex items-center bg-gradient-to-r from-castleton to-emerald rounded-lg py-1 px-2 md:py-2 md:px-4 gap-1'>
                        <FaLaravel className='text-white text-md' />
                        <span className='font-semibold text-white text-xs md:text-md lg:text-xl '>Laravel</span>
                    </div>
                    <div className='w-fit flex items-center bg-gradient-to-r from-castleton to-emerald rounded-lg py-1 px-2 md:py-2 md:px-4 gap-1'>
                        <SiPostgresql className='text-white text-md' />
                        <span className='font-semibold text-white text-xs md:text-md lg:text-xl '>PostgreSQL</span>
                    </div>
                    <div className='w-fit flex items-center bg-gradient-to-r from-castleton to-emerald rounded-lg py-1 px-2 md:py-2 md:px-4 gap-1'>
                        <SiMysql className='text-white text-md' />
                        <span className='font-semibold text-white text-xs md:text-md lg:text-xl '>MySQL</span>
                    </div>
                </div>

                <span className='text-castleton font-semibold text-md lg:text-2xl'>Other Skills</span>
                <div className='flex flex-wrap justify-center gap-2 lg:gap-3'>
                    <div className='w-fit flex items-center bg-gradient-to-r from-castleton to-emerald rounded-lg py-1 px-2 md:py-2 md:px-4 gap-1'>
                        <FaGithub className='text-white text-md' />
                        <span className='font-semibold text-white text-xs md:text-md lg:text-xl '>Github</span>
                    </div>
                    <div className='w-fit flex items-center bg-gradient-to-r from-castleton to-emerald rounded-lg py-1 px-2 md:py-2 md:px-4 gap-1'>
                        <SiPostman className='text-white text-md' />
                        <span className='font-semibold text-white text-xs md:text-md lg:text-xl '>Postman</span>
                    </div>
                </div>
            </div>
        </div>  
    </div>
  );
}

export default Skills;
