import React from "react";
// import Img from "../assets/svgs/twitter.svg";

function AnimateCard({icon, cardHeading, cardPara}) {
  return (
    <>
      <div className="cardContainer 2xl:w-[32%] xl:w-[32%] lg:w-[32%] md:w-[45%] sm:w-[80%] w-[90%] border-[1px] border-[#0000001a] border-solid">
        <div className="h-[100%] w-[85%] mx-auto pt-[50px] pb-[30px]">
          <div className="h-[100%] flex flex-col justify-between">
            <div className="mb-[30px] w-[60px] h-[60px]  flex items-center justify-center">
              {/* <img className="" src={icon} alt="" /> */}
              <i className="text-[45px]">{icon}</i>
            </div>
            <div className="animteCard mb-[1rem]">
              <h2 className="2xl:text-[30px] leading-[34px] pb-[1rem]  xl:text-[30px] lg:text-[30px] md:text-[30px] sm:text-[23px] text-[23px] ">
              {cardHeading}
              </h2>
              <p className="text-[18px] font-[400] leading-[23px] ">{cardPara}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AnimateCard;
