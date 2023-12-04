import React from 'react';
import Image from '../assets/Image.jpeg';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>

          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div >
              <p className='sm:text-right text-4xl font-bold'>Hi. I'm Subhankar Das, </p>
              <p className='text-[#8892b0] sm:text-right text-2xl'>I am a skilled and passionate developer with more than 9 Years of experience in multiple large scale projects. 
                I have worked with diversified companies like Oracle, Netcracker, EY, Wells fargo.
              </p>
            </div>
            <div className ="relative w-56 h-56 pl-5">
             <img className="w-48 mx-auto rounded-full" alt="photo" src={Image}/>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
