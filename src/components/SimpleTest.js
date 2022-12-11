import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination, EffectFlip, Autoplay } from "swiper";
import img1 from '../assets/SimpleTest/Screenshot 2022-11-30 174157.jpg'
import img2 from '../assets/SimpleTest/Screenshot 2022-11-30 174227.jpg'
import img3 from '../assets/SimpleTest/Screenshot 2022-11-30 174243.jpg'
import img4 from '../assets/SimpleTest/Screenshot 2022-11-30 174254.jpg'
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/effect-flip";
import "swiper/css/effect-coverflow";
import PhotoZoom from "./PhotoZoom";
import { Link, useLocation } from "react-router-dom";
const SimpleTest = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className="py-20 w-screen overflow-hidden bg-[url('https://i.pinimg.com/originals/20/ae/f2/20aef23d39a8dcb74bf663ed89ab08d6.gif')] text-slate-50 bg-container bg-center" >
      <h1 className="text-6xl font-semibold text-info text-center mb-10">
        Simple Test Details
      </h1>
    <div className="card max-w-6xl mx-auto glass rounded-3xl overflow-hidden" data-aos='zoom-out' data-aos-easing="ease-in-sine">
      <div className=" rounded-t-3xl  overflow-hidden">
        <Swiper
          effect={"flip"}
          grabCursor={true}
          loop={true}
          pagination={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[EffectFlip, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <PhotoZoom link={'https://i.ibb.co/cTvgxz9/Screenshot-2022-11-30-174157.jpg'}/>
          </SwiperSlide>
          <SwiperSlide>
            <PhotoZoom link={'https://i.ibb.co/N6BvDJs/Screenshot-2022-11-30-174227.jpg'}/>
          </SwiperSlide>
          <SwiperSlide>
            <PhotoZoom link={'https://i.ibb.co/yR5WZ7S/Screenshot-2022-11-30-174243.jpg'}/>
          </SwiperSlide>
          <SwiperSlide>
            <PhotoZoom link={'https://i.ibb.co/JcvJtLC/Screenshot-2022-11-30-174254.jpg'}/>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="p-10 pt-0">

      <h1 className="text-3xl font-bold text-warning mt-5">SIMPLE TEST</h1>
      <h1 className="text-sm font-semibold italic mb-5">An website for simple quiz test</h1>
      <div className="md:flex gap-5 justify-between items-center">
        <div>
        <h1 className="font-bold text-left">Description</h1>
      <ul className="text-justify max-w-xl mt-5">
        <li>1. A website made of React.js to test your knowledge in some technologies.</li>
        <li>2. Tailwind CSS and DaisyUI are used to completely customise the styles.</li>
        <li>3. React-rechart, React-icons, React-toastify etc packages were used to make. the site more
efficient.</li>
      </ul>
        </div>
      <div className="flex flex-col gap-3 mt-5 bg-[#504B47] rounded-xl p-5">
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://simple-test-assignment-09.netlify.app/"
              className="btn btn-sm btn-outline btn-info font-bold w-fit ml-auto"
            >
              Live Link
            </a>
            <div className="text-left">
              <h1>Technology Used:</h1>
              <h1>
                React.js | Tailwind CSS | DaisyUI | Express.js | Node.js |
                MongoDB | Firebase | GitHub
              </h1>
            </div>
          </div>
      </div>
      </div>
    </div>
    <div className="w-fit mx-auto mt-10">
      <Link to = '/#projects'>
        <button className="btn btn-outline btn-accent">Go Back To Projects</button>
      </Link>
    </div>
    </div>
  );
};

export default SimpleTest;
