import React from "react";
// import Img from "../assets/svgs/twitter.svg";

function AnimateCard({icon, cardHeading, cardPara}) {
  return (
    <>
      <div className=" 2xl:w-[32%] xl:w-[32%] lg:w-[32%] md:w-[45%] sm:w-[80%] w-[90%] ">
        <div className="h-[100%] w-[85%] mx-auto pt-[30px] pb-[20px]">
          <div className="h-[100%]">
            <div className="mb-[30px]   flex items-center justify-center">
              <img className="h-[60px]" src={icon} alt="" />
            </div>
            <div className=" mb-[1rem]">
              <h2 className="2xl:text-[30px] font-[600] text-center leading-[34px] pb-[1rem]  xl:text-[30px] lg:text-[30px] md:text-[30px] sm:text-[23px] text-[23px] ">
              {cardHeading}
              </h2>
              <p className="text-[18px] text-center font-[500] leading-[23px] ">{cardPara}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AnimateCard;
