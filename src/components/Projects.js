import React from 'react';
import Clickzzz from './Clickzzz';
import GPUResale from './GPUResale';
import SimpleTest from './SimpleTest';
import WOWLearning from './WOWLearning';

const Projects = () => {



    return (
        <div id='projects' className='mt-10 md:p-20 sm:p-10 p-5'>
            <h1 className='lg:text-7xl sm:text-5xl text-3xl' data-aos='flip-up'>Some of <span className='text-info font-bold italic'>My Works</span></h1>
            <div className='grid grid-cols-1 2xl:grid-cols-2 my-20 gap-10'>
                <GPUResale/>
                <Clickzzz/>
                <WOWLearning/>
                <SimpleTest/>
            </div>
        </div>
    );
};

export default Projects;