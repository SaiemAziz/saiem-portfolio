import React from "react";
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
const SimpleTest = () => {
  return (
    <div className="card glass" data-aos="fade-left" data-aos-delay="300">
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
            <img className="w-full" alt="" src={img1} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full" alt="" src={img2} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full" alt="" src={img3} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full" alt="" src={img4} />
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
  );
};

export default SimpleTest;
