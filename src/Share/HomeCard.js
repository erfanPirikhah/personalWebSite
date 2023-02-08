import React from "react";
import {
  FaCalendarAlt,
  FaDribbble,
  FaEnvelopeOpenText,
  FaFacebookF,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaTwitter,
  FaInstagram
} from "react-icons/fa";
import img from "../assets/images/about/erfan.jpg";
import downloadIcon from "../assets/images/download.png";

const HomeCard = () => {
  return (
    <div>
      <div className="w-full mb-6 lg:mb-0  mx-auto relative bg-white text-center dark:bg-[#111111] px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0 ">
        <img src={img}
          className="w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto  rounded-[20px] -mt-[140px]"
          alt=""
        />

        {/* Social card */}
        <div className="pt-[100px] pb-8">
          <h1 className="mt-6 mb-1 text-5xl font-semibold  dark:text-white">Erfan Pirikhah</h1>
          <h3 className="mb-4 text-[#7B7B7B] inline-block dark:bg-[#1D1D1D] px-5 py-1.5 rounded-lg dark:text-[#A6A6A6] ">Backend Developer at Hamrah Houshmand | Nodejs Developer | </h3>

          {/* Social Links */}
          <div className="flex justify-evenly space-s-3">
            {/* facebook link add here */}
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <span className="socialbtn text-[#1773EA]">
                <FaFacebookF />
              </span>
            </a>
            {/* twitter link add here */}
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <span className="socialbtn text-[#1C9CEA]">
                <FaTwitter />
              </span>
            </a>
            {/* drop link add here */}
            <a href="https://www.instagram.com/erfan.pirikhah/" target="_blank" rel="noopener noreferrer">
              <span className="socialbtn text-[#e14a84] ">
                <FaInstagram />
              </span>
            </a>
            {/* linkedin link add here */}
            <a href="https://www.linkedin.com/in/erfan-pirikhah-1628091a2/" target="_blank" rel="noopener noreferrer">
              <span className="socialbtn text-[#0072b1]">
                <FaLinkedinIn />
              </span>
            </a>
          </div>

          {/* personal information */}
          <div className="p-7 rounded-2xl mt-7  bg-[#F3F6F6] dark:bg-[#1D1D1D]">
            <div className="flex justify-between border-b border-[#E3E3E3] dark:border-[#3D3A3A] pb-2.5">
              
              <div className="text-left mr-2.5">
                <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                  Phone
                </p>
                <p className="dark:text-white">+989374867759</p>
              </div>

              <span className="socialbtn bg-white dark:bg-black text-[#E93B81] shadow-md">
                <FaMobileAlt />
              </span>
            </div>
            <div className="flex justify-between border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
              
              <div className="text-left mr-2.5">
                <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                  Email 
                </p>
                <p className="dark:text-white">Erfan.pirikhah97@gmail.com</p>
              </div>

              <span className="socialbtn bg-white dark:bg-black text-[#6AB5B9] shadow-md">
                <FaEnvelopeOpenText />
              </span>
            </div>
            <div className="flex justify-between border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
              
              <div className="text-left mr-2.5">
                <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                  place
                </p>
                <p className="dark:text-white">Semnan - Iran  </p>
              </div>

              <span className="socialbtn bg-white dark:bg-black text-[#FD7590] shadow-md">
                <FaMapMarkerAlt />
              </span>
            </div>
            <div className="flex justify-between  py-2.5">
            
              <div className="text-left mr-2.5">
                <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                Birthday
                </p>
                <p className="dark:text-white">1997 july 31</p>
              </div>

              <span className="socialbtn bg-white dark:bg-black text-[#C17CEB] shadow-md">
                <FaCalendarAlt />
              </span>
            </div>
          </div>
          <button className="flex justify-between items-center mx-auto bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l from-[#DD2476]  to-[#fa5252ef] px-8 py-3 text-lg text-white rounded-[35px] mt-6">
             Download My CV 
            <img src={downloadIcon} alt="icon" className="ml-2" />
            
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
