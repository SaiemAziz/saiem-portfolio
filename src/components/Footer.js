import React from "react";
import { BsArrowRight, BsLinkedin, BsFillTelephoneFill } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { AiFillFacebook, AiFillInstagram, AiFillGithub } from "react-icons/ai";
const Footer = () => {
  return (
    <div className=""
    data-aos="zoom-in">
      <h1 className="font-bold text-accent-focus">Md. Abu Saiem Aziz Chowdhury</h1>
      <h1 className=" text-sm font-bold text-accent-focus">Address: Imam-Nagar, Bhatiary, Sitakund, Chitagong, Bangladesh</h1>
      <div
        className="w-full  p-5 flex justify-center gap-5 text-warning"
      >
        <div
          className="text-4xl rounded-full flex w-fit tooltip-top tooltip font-bold tooltip-warning"
          data-tip="+8801763-536733"
        >
          <BsFillTelephoneFill className="text-warning font-normal"/>
        </div>
        <a
          target={"_blank"}
          rel="noreferrer"
          href="https://github.com/SaiemAziz"
          className="text-4xl rounded-full flex w-fit"
        >
          <AiFillGithub />
        </a>
        <a
          target={"_blank"}
          rel="noreferrer"
          href="https://www.instagram.com/sayem_aziz_chowdhury/"
          className="text-4xl rounded-full flex w-fit"
        >
          <AiFillInstagram />
        </a>
        <a
          target={"_blank"}
          rel="noreferrer"
          href="https://www.facebook.com/sayem.azizchowdhury.3"
          className="text-4xl rounded-full flex w-fit"
        >
          <AiFillFacebook />
        </a>
        <a
          target={"_blank"}
          rel="noreferrer"
          href="mailto:sayemazizchy@gmail.com"
          className="text-4xl rounded-full flex w-fit"
        >
          <SiGmail />
        </a>
        <a
          target={"_blank"}
          rel="noreferrer"
          href="https://www.linkedin.com/in/md-abu-saiem-aziz-chowdhury-9b7217247/"
          className="text-4xl rounded-full flex w-fit"
        >
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
