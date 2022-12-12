import React from 'react';
import PhotoZoom from './PhotoZoom';

const AboutMe = () => {
    return (
        <div>
            <h1 className='text-6xl italic text-warning font-semibold mb-5'>About Me</h1>
            <div className='md:grid grid-cols-2 md:px-20'>
            <div>
                <div className='rounded-full overflow-hidden m-20'>
                <PhotoZoom link={'https://i.ibb.co/N1Sy1q6/Picsart-22-12-07-23-35-28-971.jpg'} />
                </div>
            </div>
            <div className='flex flex-col justify-center gap-5 text-left text-2xl'>
                <p><span className='font-bold'>Name: </span>Md. Abu Saiem Aziz Chowdhury</p>
                <p><span className='font-bold'>Age: </span>24 years</p>
                <p><span className='font-bold'>Education: </span>BSc in CSE</p>
                <p><span className='font-bold'>Institution: </span>Universtity of Chittagong</p>
                <p><span className='font-bold'>Short Description: </span>I am a coder , gamer, and foodie.</p>
            </div>
            </div>
        </div>
    );
};

export default AboutMe;