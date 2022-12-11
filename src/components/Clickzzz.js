import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Zoom, Pagination, Autoplay } from "swiper";
import img1 from "../assets/Clickzzz/Screenshot 2022-11-30 154114.jpg";
import img2 from "../assets/Clickzzz/Screenshot 2022-11-30 154226.jpg";
import img3 from "../assets/Clickzzz/Screenshot 2022-11-30 154258.jpg";
import img4 from "../assets/Clickzzz/Screenshot 2022-11-30 154344.jpg";
import img5 from "../assets/Clickzzz/Screenshot 2022-11-30 154406.jpg";
import img6 from "../assets/Clickzzz/Screenshot 2022-11-30 154423.jpg";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import PhotoZoom from "./PhotoZoom";
import { Link, useLocation } from "react-router-dom";
const Clickzzz = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className="py-20 w-screen overflow-hidden bg-[url('https://i.pinimg.com/originals/20/ae/f2/20aef23d39a8dcb74bf663ed89ab08d6.gif')] text-slate-50 bg-container bg-center" >
      <h1 className="text-6xl font-semibold text-info text-center mb-10">
        Clickzzz Details
      </h1>
    <div className="card max-w-6xl mx-auto glass rounded-3xl overflow-hidden" data-aos='zoom-out' data-aos-easing="ease-in-sine">
      <div className="rounded-t-3xl overflow-hidden">
        <Swiper
          effect={"cube"}
          grabCursor={true}
          loop={true}
          zoom={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={true}
          modules={[EffectCube, Zoom, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <PhotoZoom link={'https://i.ibb.co/4pZbV9x/Screenshot-2022-11-30-154114.jpg'}/>
          </SwiperSlide>
          <SwiperSlide>
          <PhotoZoom link={'https://i.ibb.co/3YfbBtZ/Screenshot-2022-11-30-154226.jpg'}/>
          </SwiperSlide>
          <SwiperSlide>
          <PhotoZoom link={'https://i.ibb.co/qMmTSd7/Screenshot-2022-11-30-154258.jpg'}/>
          </SwiperSlide>
          <SwiperSlide>
          <PhotoZoom link={'https://i.ibb.co/TMNy0kh/Screenshot-2022-11-30-154344.jpg'}/>
          </SwiperSlide>
          <SwiperSlide>
          <PhotoZoom link={'https://i.ibb.co/zF2vPp5/Screenshot-2022-11-30-154423.jpg'}/>
          </SwiperSlide>
          <SwiperSlide>
          <PhotoZoom link={'https://i.ibb.co/j8Zsjyz/Screenshot-2022-11-30-154406.jpg'}/>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="p-10 pt-0">
        <h1 className="text-3xl font-bold text-warning mt-5">CLICKZZZ</h1>
        <h1 className="text-sm font-semibold italic mb-5">
          A website for a professional photographer
        </h1>
        <div className="md:flex gap-5 justify-between items-center">
          <div className="text-left">
            <h1 className="font-bold">Description</h1>
            <ul className="text-justify max-w-xl mt-5">
              <li>
                1. A full-stack web site made of React.js & Tailwind CSS of a
                professional photographer about his services. Anyone can see
                others reviews and can submit one also.
              </li>
              <li>
                2. Firebase authentication is used to check authentications in
                front-end.
              </li>
              <li>
                3. Express.js is used in backend. MongoDB is used here for the
                database.
              </li>
              <li>
                4. React-icons, React-toastify, React-photo-view etc packages
                used.
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3 mt-5 bg-[#504B47] rounded-xl p-5">
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://service-review-827b3.firebaseapp.com/"
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

export default Clickzzz;
