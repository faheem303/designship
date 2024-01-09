import React from "react";
import Button from "./Button";
// import { useState } from "react";
import tick from "../assets/images/tick.png"

function StartedCards({ isBackground,subTitleCard, cardTitle, idata, cardPara, amount, hourly }) {
  // const [color, setColor] = useState()
  console.log(isBackground, "isbacgrond");
  return (
    <>
      <div
        className={
          "bg-[#f7f7f7] rounded-[24px] border-[1px] h-[810px] flex flex-col  justify-between border-[#d9d9d9] border-solid py-[32px]"
        }
      >
        <div className="px-[32px]">
          <div>
            <div
              className={
                "border-b-[1px] border-[#d9d9d9] border-solid pb-[32px] mb-[32px]"
              }
            >
              <div className="mb-[15px]">
                <h3
                  className={
                    "uppercase text-[#02055d] font-[700] text-[1.87rem] tracking-[1px]"
                  }
                >{cardTitle}</h3>
                <h5>{subTitleCard}</h5>
              </div>
              <p
                className={"text-[#000000bf] font-[400] text-[1rem] mb-[16px]"}
              >{cardPara}</p>
            </div>
            <div
              className={
                "border-b-[1px] border-[#d9d9d9] border-solid pb-[32px] mb-[32px]"
              }
            >
              <div className="flex justify-between items-center">
                <h2 className={"text-[#02055d] leading-[30px] font-[700] 2xl:text-[40px] xl:text-[40px] lg:text-[30px] md:text-[35px] sm:text-[40px] text-[30px]"}>
                  {amount}
                  <span className={"text-[#02055d] font-[700] 2x:text-[16px] xl:text-[16px] lg:text-[14px] md:text-[14px] sm:text-[16px] text-[14px]"}>
                    /mo
                  </span>
                </h2>
                <h5 className={"text-[#000000bf] font-[400] 2x:text-[16px] xl:text-[16px] lg:text-[14px] md:text-[14px] sm:text-[16px] text-[14px]"}>
                  {hourly}
                </h5>
              </div>
              <div>
                <h5>Cancel anytime</h5>
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                {
                  idata && idata.map((idataItem) => (
                    <div key={idataItem.id} className="flex items-center space-x-2">
                      <img src={tick} className="w-[20px] h-[20px]" alt="" />
                      <p>{idataItem.pripara}</p>
                    </div>
                  ))
                }
              </div>
              
            </div>
          </div>
        </div>
        <div>
        <div className="flex px-[32px] items-center">
                <Button
                  className={
                    isBackground === true
                      ? "bg-[#02055d] h-[46px] 2xl:px-[45px] xl:px-[45px] lg:px-[45px] md:px-[45px] sm:px-[45px] px-[32px]  text=[1rem] text-[#fff] rounded-[10px] font-[700] transition delay-150 duration-200 ease-in hover:bg-[#ff6752] hover:translate-y-[-3px]"
                      : "bg-[#ff6752] h-[46px] 2xl:px-[45px] xl:px-[45px] lg:px-[45px] md:px-[45px] sm:px-[45px] px-[32px]  text=[1rem] text-[#fff] rounded-[10px] font-[700] transition delay-100 duration-200 ease-in hover:bg-[#02055d] hover:translate-y-[-3px]"
                  }
                  btnText={"Get Started"}
                />
              </div>
        </div>
      </div>
    </>
  );
}

export default StartedCards;
