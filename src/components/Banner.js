import React from 'react';
import bannerImage from '../assets/crop-photo_2022-06-16_22-49-59.jpg'
import {BsArrowRight, BsLinkedin, BsFillTelephoneFill} from 'react-icons/bs'
import {SiGmail} from 'react-icons/si'
import {AiFillFacebook, AiFillInstagram, AiFillGithub} from 'react-icons/ai'
const Banner = () => {
    return (
        <div className="bg-[#000000] min-h-screen flex justify-center items-center">
            <div className='lg:flex w-full justify-center gap-28 items-center' >
                <div className='text-right lg:block hidden' data-aos='fade-right' data-aos-delay='400'>

                    <h1 className='font-semibold xl:text-7xl text-5xl'>Md. Abu Saiem</h1>
                    <h1 className='font-semibold xl:text-7xl text-5xl mb-10'>Aziz Chowdhury</h1>
                    <h1 className='text-3xl italic font-thin'data-aos='fade-right' data-aos-delay='700'>MERN Stack Developer</h1>
                    <div className='w-full flex justify-end gap-5' data-aos='fade-right' data-aos-delay='1000'>
                        <div className='text-4xl mt-10 rounded-full flex w-fit tooltip-bottom tooltip' data-tip='+8801763-536733'><BsFillTelephoneFill/></div>
                        <a target={'_blank'} rel='noreferrer' href="https://github.com/SaiemAziz" className='text-4xl mt-10 rounded-full flex w-fit' ><AiFillGithub/></a>
                        <a target={'_blank'} rel='noreferrer' href="https://www.instagram.com/sayem_aziz_chowdhury/" className='text-4xl mt-10 rounded-full flex w-fit' ><AiFillInstagram/></a>
                        <a target={'_blank'} rel='noreferrer' href="https://www.facebook.com/sayem.azizchowdhury.3" className='text-4xl mt-10 rounded-full flex w-fit' ><AiFillFacebook/></a>
                        <a target={'_blank'} rel='noreferrer' href="mailto:sayemazizchy@gmail.com" className='text-4xl mt-10 rounded-full flex w-fit' ><SiGmail/></a>
                        <a target={'_blank'} rel='noreferrer' href="https://www.linkedin.com/in/md-abu-saiem-aziz-chowdhury-9b7217247/" className='text-4xl mt-10 rounded-full flex w-fit' ><BsLinkedin/></a>
                    </div>
                    <div className='w-full flex justify-end gap-5' data-aos='fade-right' data-aos-delay='1000'>
                        <a target={'_blank'} rel='noreferrer' href="https://drive.google.com/file/d/1gvhKt7IbZXZf9zsESlv662981JMeJ8VF/view" className='btn btn-outline mt-10 rounded-full flex gap-5 w-fit  btn-lg' >Resume</a>
                        <a href="#projects" className='btn btn-outline mt-10 rounded-full flex gap-5 w-fit  btn-lg' >Projects <BsArrowRight/></a>
                    </div>
                    
                </div>
                {/* mobile  */}
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='lg:hidden font-semibold text-4xl sm:text-5xl' data-aos='fade-right' data-aos-delay='400'>Md. Abu Saiem</h1>
                    <h1 className='lg:hidden font-semibold text-4xl sm:text-5xl mb-0' data-aos='fade-left' data-aos-delay='400'>Aziz Chowdhury</h1>
                    <img className='rounded-full' src='https://i.ibb.co/611M4DZ/crop-photo-2022-06-16-22-49-59.jpg' alt="" data-aos='fade-left'/>
                    <h1 className='lg:hidden text-2xl italic font-thin mt-10' data-aos='fade-right' data-aos-delay='700'>MERN Stack Developer</h1>
                    <div className='w-full lg:hidden flex justify-center gap-5' data-aos='fade-left' data-aos-delay='1000'>
                        <div className='text-4xl mt-10 rounded-full flex w-fit tooltip-bottom tooltip' data-tip='+8801763-536733'><BsFillTelephoneFill/></div>
                        <a target={'_blank'} rel='noreferrer' href="https://github.com/SaiemAziz" className='text-4xl mt-10 rounded-full flex w-fit' ><AiFillGithub/></a>
                        <a target={'_blank'} rel='noreferrer' href="https://www.instagram.com/sayem_aziz_chowdhury/" className='text-4xl mt-10 rounded-full flex w-fit' ><AiFillInstagram/></a>
                        <a target={'_blank'} rel='noreferrer' href="https://www.facebook.com/sayem.azizchowdhury.3" className='text-4xl mt-10 rounded-full flex w-fit' ><AiFillFacebook/></a>
                        <a target={'_blank'} rel='noreferrer' href="mailto:sayemazizchy@gmail.com" className='text-4xl mt-10 rounded-full flex w-fit' ><SiGmail/></a>
                        <a target={'_blank'} rel='noreferrer' href="https://www.linkedin.com/in/md-abu-saiem-aziz-chowdhury-9b7217247/" className='text-4xl mt-10 rounded-full flex w-fit' ><BsLinkedin/></a>
                    </div>
                    <div className='w-full lg:hidden flex justify-center gap-3' data-aos='fade-right' data-aos-delay='1000'>
                        <a target={'_blank'} rel='noreferrer' href="https://drive.google.com/file/d/1gvhKt7IbZXZf9zsESlv662981JMeJ8VF/view" className='btn btn-outline mt-5 rounded-full flex gap-5 w-fit ' >Resume</a>
                        <a href="#projects" className='btn btn-outline mt-5 rounded-full flex gap-5 w-fit ' >Projects <BsArrowRight/></a>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;