import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper";
import img1 from '../assets/WOWLearning/Screenshot 2022-11-30 163746.jpg'
import img2 from '../assets/WOWLearning/Screenshot 2022-11-30 163810.jpg'
import img3 from '../assets/WOWLearning/Screenshot 2022-11-30 163831.jpg'
import img4 from '../assets/WOWLearning/Screenshot 2022-11-30 163846.jpg'
import img5 from '../assets/WOWLearning/Screenshot 2022-11-30 163937.jpg'
import img6 from '../assets/WOWLearning/Screenshot 2022-11-30 163950.jpg'
import img7 from '../assets/WOWLearning/Screenshot 2022-11-30 164016.jpg'
import img8 from '../assets/WOWLearning/Screenshot 2022-11-30 164027.jpg'

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import PhotoZoom from "./PhotoZoom";
const WOWLearning = () => {
  return (
    <div className="card glass rounded-3xl overflow-hidden" data-aos="fade-right" data-aos-delay="300">
      <div className="rounded-t-3xl overflow-hidden">
        <Swiper
          effect={"fade"}
          grabCursor={true}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[EffectFade,  Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <PhotoZoom link={'https://i.ibb.co/9bnSsYN/Screenshot-2022-11-30-163746.jpg'}/>
          </SwiperSlide>
          <SwiperSlide>
            <PhotoZoom link={'https://i.ibb.co/nbynJhb/Screenshot-2022-11-30-163810.jpg'}/>
          </SwiperSlide>
          <SwiperSlide>
            <PhotoZoom link={'https://i.ibb.co/b7Fs4wk/Screenshot-2022-11-30-163831.jpg'}/>
          </SwiperSlide>
          <SwiperSlide>
            <PhotoZoom link={'https://i.ibb.co/hCH4qK1/Screenshot-2022-11-30-163846.jpg'}/>
          </SwiperSlide>
          <SwiperSlide>
            <PhotoZoom link={'https://i.ibb.co/pX2wrhs/Screenshot-2022-11-30-163937.jpg'}/>
          </SwiperSlide>
          <SwiperSlide>
            <PhotoZoom link={'https://i.ibb.co/hcY56DH/Screenshot-2022-11-30-163950.jpg'}/>
          </SwiperSlide>
          <SwiperSlide>
            <PhotoZoom link={'https://i.ibb.co/RpSKzYD/Screenshot-2022-11-30-164016.jpg'}/>
          </SwiperSlide>
          <SwiperSlide>
            <PhotoZoom link={'https://i.ibb.co/fr03bMk/Screenshot-2022-11-30-164027.jpg'}/>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="p-10 pt-0">
      <h1 className="text-3xl font-bold text-warning mt-5">WOW LEARNING</h1>
      <h1 className="text-sm font-semibold italic mb-5">A website for a online teaching platform</h1>
      <div className="md:flex gap-5 justify-between items-center">
        <div>
        <h1 className="font-bold text-left">Description</h1>
      <ul className="text-justify max-w-xl mt-5">
        <li>1. A web site made of React.js & Tailwind CSS where someone can buy courses. from an institution.</li>
        <li>2. Firebase authentication is used to check authentications in front-end.</li>
        <li>3. Express.js is used in backend. Fake data is used here for the courses.</li>
      </ul>
        </div>
        <div className="flex flex-col gap-3 mt-5 bg-[#504B47] rounded-xl p-5">
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://wow-learning.web.app/"
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

export default WOWLearning;
