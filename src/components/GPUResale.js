import React, { useEffect } from "react";
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
import PhotoZoom from "./PhotoZoom";
import { Link, useLocation } from "react-router-dom";
const GPUResale = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className="py-20 w-screen overflow-hidden bg-[url('https://i.pinimg.com/originals/20/ae/f2/20aef23d39a8dcb74bf663ed89ab08d6.gif')] text-slate-50 bg-container bg-center" >
      <h1 className="text-6xl font-semibold text-info text-center mb-10">
        GPU Resale Details
      </h1>
    <div className="card max-w-6xl mx-auto glass rounded-3xl overflow-hidden" data-aos='zoom-out' data-aos-easing="ease-in-sine">
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
          <SwiperSlide >
          <PhotoZoom link={'https://i.ibb.co/Nm54Bw3/Screenshot-2022-11-30-162604.jpg'}/>
          </SwiperSlide>
          <SwiperSlide >
            <PhotoZoom link={'https://i.ibb.co/Bzw5SV5/Screenshot-2022-11-30-162643.jpg'}/>
          </SwiperSlide>
          <SwiperSlide >
            <PhotoZoom link={'https://i.ibb.co/sb24PWB/Screenshot-2022-11-30-162702.jpg'}/>
          </SwiperSlide>
          <SwiperSlide >
            <PhotoZoom link={'https://i.ibb.co/CW4Nwp6/Screenshot-2022-11-30-162724.jpg'}/>
          </SwiperSlide>
          <SwiperSlide >
            <PhotoZoom link={'https://i.ibb.co/85RHJT1/Screenshot-2022-11-30-162817.jpg'}/>
          </SwiperSlide>
          <SwiperSlide >
            <PhotoZoom link={'https://i.ibb.co/VxS7RDQ/Screenshot-2022-11-30-162932.jpg'}/>
          </SwiperSlide>
          <SwiperSlide >
            <PhotoZoom link={'https://i.ibb.co/h8LkyGx/Screenshot-2022-11-30-162910.jpg'}/>
          </SwiperSlide>
          <SwiperSlide >
            <PhotoZoom link={'https://i.ibb.co/xHsZ2VJ/Screenshot-2022-11-30-162950.jpg'}/>
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
    <div className="w-fit mx-auto mt-10">
      <Link to = '/#projects'>
        <button className="btn btn-outline btn-accent">Go Back To Projects</button>
      </Link>
    </div>
    </div>
  );
};

export default GPUResale;
