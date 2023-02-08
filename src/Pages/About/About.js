import React from "react";
import {
  FaEnvelopeOpenText,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaRegCalendarAlt,
} from "react-icons/fa";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import aboutImage from "../../assets/images/about/about.jpg";
import "../../Share/Style.css";
import Footer from "../../Share/Footer";
import UseData from "../../Hooks/UseData";
import SliderCommon from "../../Share/SliderCommon";
import AboutCard from "./AboutCard";
import PageTitle from "../../Share/PageTitle";

const About = () => {
  const { local, experienceArray } = UseData();
  return (
    <>
      <PageTitle title="About"></PageTitle>
      {/* End pagetitle */}

      <section>
        <div className="container lg:rounded-2xl bg-white dark:bg-[#111111]  px-4 sm:px-5 md:px-10 lg:px-20">
          <div data-aos="fade">
            <div className="py-12">
              {/* Page Title */}
              <h2 className="after-effect after:right-48 mt-12 lg:mt-0 "> About me</h2>
              <div className="grid grid-cols-12 md:gap-10 pt-4 md:pt-[40px] items-center">
                <div className="col-span-12 md:col-span-4">
                  {/* personal images for about page  */}
                  <img
                    className="w-full md:w-[330px] md:h-[400px] object-cover overflow-hidden rounded-[35px] mb-3 md:mb-0"
                    src={aboutImage}
                    alt=""
                  />
                </div>
                <div className="col-span-12 md:col-span-8 space-y-2.5">
                  {/* About me information */}
                  <div className=" md:mr-12 xl:mr-16">
                    <h3 className="text-4xl font-medium dark:text-white mb-2.5">من کی هستم؟</h3>
                    <p className="text-gray-lite text-justify dark:text-color-910 leading-7">
                      من مدیر خلاق و طراح UI/UX از سیدنی هستم،
                      استرالیا که در کار توسعه وب و رسانه های چاپی مشغول فعالیت هستم. من
                      از تبدیل مسائل پیچیده به ساده، زیبا طرح های بصری
                      لذت می برم.
                    </p>
                    <p className="text-gray-lite text-justify leading-7 mt-2.5 dark:text-color-910">
                      هدف من رساندن پیام و هویت شما در خلاقانه ترین راه است
                      من طراحی وب را برای بسیاری از افراد مشهور و شرکت های برند انجام داده ام.
                    </p>
                  </div>

                  {/* personal information */}
                  <div>
                    <h3 className="text-4xl font-medium my-5 dark:text-white">اطلاعات شخصی</h3>
                    <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex">
                        <span className="text-oriange dark:bg-color-990 shadow-icon ml-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                          <FaMobileAlt />
                        </span>
                        <div className="space-y-1">
                          <p className="text-xs text-gray-lite dark:text-color-910">تلفن</p>
                          <h6 className="font-medium dark:text-white">989125226561+</h6>
                        </div>
                      </div>
                      <div className="flex">
                        <span className="text-oriange-lite dark:bg-color-990 shadow-icon ml-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                          <FaMapMarkerAlt />
                        </span>
                        <div className="space-y-1">
                          <p className="text-xs text-gray-lite dark:text-color-910">place</p>
                          <h6 className="font-medium dark:text-white">semnan - iran </h6>
                        </div>
                      </div>
                      <div className="flex">
                        <span className="text-green dark:bg-color-990 shadow-icon ml-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                          <FaEnvelopeOpenText />
                        </span>
                        <div className="space-y-1">
                          <p className="text-xs text-gray-lite dark:text-color-910">
                            Email
                          </p>
                          <h6 className="font-medium dark:text-white">
                            example@mail.com
                          </h6>
                        </div>
                      </div>
                      <div className="flex">
                        <span className="text-color-50 dark:bg-color-990 shadow-icon ml-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                          <FaRegCalendarAlt />
                        </span>
                        <div className="space-y-1">
                          <p className="text-xs text-gray-lite dark:text-color-910">تولد</p>
                          <h6 className="font-medium dark:text-white">11 بهمن 1373</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End personal information */}
                </div>
              </div>
            </div>

            <div className=" pb-12 ">
              <h3 className="text-[35px] dark:text-white font-medium pb-5">
                کارهایی که انجام میدم!
              </h3>
              <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
                {/* Experience information  */}

                {experienceArray.map((item, i) => (
                  <AboutCard key={i} item={item} local={local} />
                ))}
              </div>
            </div>

            <div>
              {/* Slick Slider call here  */}
              <SliderCommon />
            </div>

            {/* Common Footer call here */}
            <Footer condition={false} bg={"#FFFF"} />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
