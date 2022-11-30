import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination, EffectCoverflow, Autoplay } from "swiper";
import img1 from '../assets/GPUResale/Screenshot 2022-11-30 162604.jpg'
import img2 from '../assets/GPUResale/Screenshot 2022-11-30 162643.jpg'
import img3 from '../assets/GPUResale/Screenshot 2022-11-30 162702.jpg'
import img4 from '../assets/GPUResale/Screenshot 2022-11-30 162724.jpg'
import img5 from '../assets/GPUResale/Screenshot 2022-11-30 162817.jpg'
import img6 from '../assets/GPUResale/Screenshot 2022-11-30 162910.jpg'
import img7 from '../assets/GPUResale/Screenshot 2022-11-30 162932.jpg'
import img8 from '../assets/GPUResale/Screenshot 2022-11-30 162950.jpg'
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
const GPUResale = () => {
  return (
    <div className="card glass" data-aos="fade-right" data-aos-delay="300">
      <div className=" rounded-t-3xl overflow-hidden">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          loop={true}
          pagination={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img alt="" src={img1} />
          </SwiperSlide>
          <SwiperSlide>
            <img alt="" src={img2} />
          </SwiperSlide>
          <SwiperSlide>
            <img alt="" src={img3} />
          </SwiperSlide>
          <SwiperSlide>
            <img alt="" src={img4} />
          </SwiperSlide>
          <SwiperSlide>
            <img alt="" src={img5} />
          </SwiperSlide>
          <SwiperSlide>
            <img alt="" src={img7} />
          </SwiperSlide>
          <SwiperSlide>
            <img alt="" src={img8} />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="p-10 pt-0">

      <h1 className="text-3xl font-bold text-warning mt-5">GPU RESALE</h1>
      <h1 className="text-sm font-semibold italic mb-5">An e-commarce website for 2nd hand Graphics Cards</h1>
      <div className="md:flex gap-5 justify-between items-center">
        <div>
        <h1 className="font-bold text-left">Description</h1>
      <ul className="text-justify max-w-xl mt-5">
        <li>1. Full stack web site about a graphics card resale online platform. Where Sellers can upload their
products and Buyers can buy 2

nd hand products. Admin can delete any user or or products.</li>
        <li>2. Tailwind CSS and DaisyUI are used to completely customise the styles.</li>
        <li>3. React-rechart, React-icons, React-toastify etc packages were used to make. the site more
efficient.</li>
      </ul>
        </div>
      <div className="flex flex-col gap-3 mt-5 bg-[#504B47] rounded-xl p-5">
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://dp-sale.web.app/"
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

export default GPUResale;
