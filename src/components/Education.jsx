import React, { useEffect, useRef } from 'react';

function Education() {
  const educationRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // Unobserve the element after it becomes visible
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    const items = educationRef.current.querySelectorAll('.fade-in, .fade-in1, .fade-in2');
    items.forEach(item => {
      observer.observe(item);
    });

    return () => {
      items.forEach(item => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <div className=''>
      <div className='pb-10'>
        <span className='bg-gradient-to-r from-castleton to-emerald text-transparent bg-clip-text text-2xl lg:text-3xl font-black'>EDUCATION</span>
      </div>

      <div className="w-full h-fit lg:px-24" ref={educationRef}>
        <div className="relative wrap overflow-hidden h-full">
          <div className="border-2 absolute border-emerald h-full left-1/2 transform -translate-x-1/2"></div>

          {/* Timeline item 1 */}
          <div className="mb-8 flex justify-between items-center w-full fade-in">
            <div className="order-1 w-5/12"></div>
            <div className="order-1 w-5/12 px-1 py-4 text-right">
              <p className="text-md md:text-base leading-snug text-castleton font-semibold">August 2023 - June 2024</p>
              <h4 className="font-bold bg-gradient-to-r from-castleton to-emerald text-transparent bg-clip-text text-sm md:text-2xl">Full Stack Web Development</h4>
              <p className="text-sm lg:text-base text-gray-500">Avion School</p>
            </div>
          </div>

          {/* Timeline item 2 */}
          <div className="mb-8 flex justify-between items-center w-full fade-in1">
            <div className="order-1 w-5/12 px-1 py-4 text-left">
              <p className="text-md md:text-base leading-snug text-castleton font-semibold">June 2018 - July 2023</p>
              <h4 className="font-bold bg-gradient-to-r from-castleton to-emerald text-transparent bg-clip-text text-sm md:text-2xl">Bachelor of Science in Information Technology</h4>
              <p className="text-sm text-gray-500">Our Lady of Fatima University</p>
            </div>
            <div className="order-1 w-5/12"></div>
          </div>

          <div className="mb-8 flex justify-between items-center w-full fade-in">
            <div className="order-1 w-5/12"></div>
            <div className="order-1 w-5/12 px-1 py-4 text-right">
              <p className="text-md md:text-base leading-snug text-castleton font-semibold">June 2016 - March 2018</p>
              <h4 className="font-bold bg-gradient-to-r from-castleton to-emerald text-transparent bg-clip-text text-sm md:text-2xl">IT in Mobile App and Web Development</h4>
              <p className="text-sm lg:text-base text-gray-500">STI College (Senior High School)</p>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}

export default Education;
