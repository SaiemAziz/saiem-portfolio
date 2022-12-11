import React from 'react';
import { Link } from 'react-router-dom';
import Clickzzz from './Clickzzz';
import GPUResale from './GPUResale';
import PhotoZoom from './PhotoZoom';
import SimpleTest from './SimpleTest';
import WOWLearning from './WOWLearning';

const Projects = () => {



    return (
        <div id='projects' className='mt-10 md:p-20 sm:p-10 p-5'>
            <h1 className='lg:text-7xl sm:text-5xl text-3xl' data-aos='flip-up'>Some of <span className='text-info font-bold italic'>My Works</span></h1>
            <div className='grid grid-cols-1 2xl:grid-cols-2 mt-20 gap-10'>
                <div className='card glass rounded-none' data-aos='fade-right'>
                    <div className='cursor-pointer'>
                        <PhotoZoom className='' link = 'https://i.ibb.co/Nm54Bw3/Screenshot-2022-11-30-162604.jpg'/>
                    </div>
                    <div className='flex justify-between items-center p-5'>
                    <h1 className='text-2xl text-info font-semibold my-5 italic'>GPU Resale</h1>
                    <Link to='/gpu-resale' className='btn btn-success btn-outline'>Details</Link>
                    </div>
                </div>
                <div className='card glass rounded-none' data-aos='fade-left'>
                    <div className='cursor-pointer'>
                        <PhotoZoom className='' link = 'https://i.ibb.co/4pZbV9x/Screenshot-2022-11-30-154114.jpg'/>
                    </div>
                    <div className='flex justify-between items-center p-5'>
                    <h1 className='text-2xl text-info font-semibold my-5 italic'>Clickzzz</h1>
                    <Link to='/clickzzz' className='btn btn-success btn-outline'>Details</Link>
                    </div>
                </div>
                <div className='card glass rounded-none' data-aos='fade-right'>
                    <div className='cursor-pointer'>
                        <PhotoZoom className='' link = 'https://i.ibb.co/9bnSsYN/Screenshot-2022-11-30-163746.jpg'/>
                    </div>
                    <div className='flex justify-between items-center p-5'>
                    <h1 className='text-2xl text-info font-semibold my-5 italic'>Wow Learning</h1>
                    <Link to='/wow-learning' className='btn btn-success btn-outline'>Details</Link>
                    </div>
                </div>
                <div className='card glass rounded-none' data-aos='fade-left'>
                    <div className='cursor-pointer'>
                        <PhotoZoom className='' link = 'https://i.ibb.co/N6BvDJs/Screenshot-2022-11-30-174227.jpg'/>
                    </div>
                    <div className='flex justify-between items-center p-5'>
                    <h1 className='text-2xl text-info font-semibold my-5 italic'>Simple Test</h1>
                    <Link to='/simple-test' className='btn btn-success btn-outline'>Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;