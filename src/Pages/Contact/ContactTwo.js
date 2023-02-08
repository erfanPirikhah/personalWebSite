import React from "react";
import Footer from "../../Share/Footer";
import PageTitle from "../../Share/PageTitle";
import CommonContact from "./CommonContact";

const ContactTwo = () => {
  return (
    <>
      <PageTitle title="تماس با من"></PageTitle>
      {/* End pagetitle */}

      <div className="bg-white lg:rounded-2xl dark:bg-[#111111]">
        {/* Contact page title */}
        <h2 className="after-effect after:right-72 after:top-[76px] mb-12 md:mb-[30px] pr-4 md:pr-[60px] pt-12">تماس با من</h2>
        <CommonContact condition={true} />
        <Footer bg={"#F8FBFB"} />
      </div>
    </>
  );
};

export default ContactTwo;
