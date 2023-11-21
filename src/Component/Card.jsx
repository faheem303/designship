import React from "react";
// import Img from "../Assets/svgs/twitter.svg";

function Card({icon, cardHeading, cardPara}) {
  return (
    <>
      <div className="cardContainer 2xl:w-[32%] xl:w-[32%] lg:w-[32%] md:w-[45%] sm:w-[80%] w-[90%] border-[1px] border-[#0000001a] border-solid">
        <div className="h-[100%] w-[85%] mx-auto py-[50px]">
          <div className="h-[100%] flex flex-col justify-between">
            <div className="mb-[30px] w-[40px] h-[40px]  flex items-center justify-center">
              <i className="text-[30px]">{icon}</i>
            </div>
            <div className="animteCard">
              <h2 className="2xl:text-[30px] xl:text-[30px] lg:text-[30px] md:text-[30px] sm:text-[23px] text-[23px] font-[400] mb-[15px]">
              {cardHeading}
              </h2>
              <p className="text-[15px] font-[400]">{cardPara}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
