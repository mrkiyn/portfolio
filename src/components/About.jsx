import React from 'react';
import Education from './Education';
import Skills from './Skills';

function About({ aboutRef, skillsRef }) {
  return (
    <div className='' id="about" ref={aboutRef}>
        <div className="lg:px-20 xl:px-32 2xl:px-64 px-7 py-5 lg:py-24">
            <div className=''>
                <span className='bg-gradient-to-r from-castleton to-emerald text-transparent bg-clip-text text-5xl font-black'>ABOUT ME</span>
            </div>

            <div className='py-10'>
                <p className='text-xl'>
                    Greetings! I am <b className='text-emerald'>Mark Ian Amado</b>, a dedicated <b className='text-emerald'>web developer</b> with expertise in HTML, CSS, JavaScript, React, Tailwind, Material-UI, Ruby, Ruby on Rails, PHP and Laravel.
                    I specialize in developing dynamic and responsive web applications, ensuring high-quality user experiences. My proficiency encompasses both front-end and back-end development,
                    enabling me to create elegant interfaces and robust systems. Committed to continuous professional development and user-centric design principles, I strive to deliver web solutions
                    that are both functional and aesthetically pleasing.
                </p>
            </div>   

            <Education />
            <Skills skillsRef={skillsRef}/>

        </div>
    </div>
  );
}

export default About;
