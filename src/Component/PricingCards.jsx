import React from "react";
import Button from "./Button";
// import { useState } from "react";

function PricingCards({
  isBackground,
  isButton,
}) {
  // const [color, setColor] = useState()
  console.log(isBackground, "isbacgrond");
  return (
    <>
      <div
        className={
          isBackground === true 
            ? "2xl:h-[520px] xl:h-[520px] lg:h-[520px] md:h-[520px] sm:h-[520px] h-[550px] bg-[#f7f7f7] rounded-[24px] border-[1px] border-[#d9d9d9] border-solid py-[32px]"
            : "2xl:h-[520px] xl:h-[520px] lg:h-[520px] md:h-[520px] sm:h-[520px] h-[550px] bg-[#02055d] rounded-[24px] border-[1px] border-[#d9d9d9] border-solid py-[32px]"
        }
      >
        <div className="w-[90%] mx-auto">
          <div>
            <div className={
                    isBackground === true
                      ? "border-b-[1px] border-[#d9d9d9] border-solid pb-[32px] mb-[32px]"
                      : "border-b-[1px] border-[#d9d9d940] border-solid pb-[32px] mb-[32px]"
                  }>
              <div className="flex items-center justify-between mb-[8px]">
                <h3
                  className={
                    isBackground === true
                      ? "uppercase text-[#02055d] font-[700] text-[1.87rem] tracking-[1px]"
                      : "uppercase text-[#fff] font-[700] text-[1.87rem] tracking-[1px]"
                  }
                >
                  {isBackground === true?"Part time":"Full time"}
                </h3>
                {
                    isButton === true?(
                        <Button btnText={"BEST VALUE"} className={"h-[26px] px-[12px] bg-[#ff6752] text-[#02055d] text-[.87rem] font-[700] uppercase rounded-[100px] traking-[1px]"} />
                    ):("")
                }
              </div>
              <h4
                className={
                  isBackground === true
                    ? "uppercase text-[#02055d] font-[700] text-[.87rem] mb-[32px] tracking-[1px]"
                    : "uppercase text-[#fff] font-[700] text-[.87rem] mb-[32px] tracking-[1px]"
                }
              >
                <span
                  className={
                    isBackground === true
                      ? "text-[#02055d] font-[400]"
                      : "text-[#fff] font-[400]"
                  }
                >
                  up to
                </span>{" "}
                {isBackground === true?"80 HOURS PER MONTH":"160 HOURS PER MONTH"}
              </h4>
              <p className={
                  isBackground === true
                    ? "text-[#000000bf] font-[400] text-[1rem] mb-[16px]"
                    : "text-[#ffffffbf] font-[400] text-[1rem] mb-[16px]"
                }> {isBackground === true?"Have a trusted bench of top-notch designers, developers, and strategists ready to tackle your next web challenge. Make use of the whole Elastico team to accomplish your goals.":"Your very own dependable team dedicated to conquering any web challenge you face. Leverage the full force of our digital expertise to grow your brand."}</p>
            </div>
           <div className={
                    isBackground === true
                      ? "border-b-[1px] border-[#d9d9d9] border-solid pb-[32px] mb-[32px]"
                      : "border-b-[1px] border-[#d9d9d940] border-solid pb-[32px] mb-[32px]"
                  }>
           <div className="flex justify-between items-center">
              <h2  className={
                    isBackground === true
                      ? "text-[#02055d] font-[700] text-[ 2.62rem]"
                      : "text-[#fff] font-[700] text-[ 2.62rem]"
                  }>
                {isBackground === true?"$6,800":"$11,200"}
                <span  className={
                    isBackground === true
                      ? "text-[#02055d] font-[700] text-[16px]"
                      : "text-[#fff] font-[700] text-[16px]"
                  }>
                  /mo
                </span>
              </h2>
              <h5  className={
                    isBackground === true
                      ? "text-[#000000bf] font-[400] text-[1rem]"
                      : "text-[#fff] font-[400] text-[1rem]"
                  }>{isBackground === true?"Pay $85/hr":"Pay $70/hr"}</h5>
            </div>
           </div>
            <div className="flex justify-between items-center">
              <Button className={isBackground === true?"bg-[#02055d] h-[46px] 2xl:px-[45px] xl:px-[45px] lg:px-[45px] md:px-[45px] sm:px-[45px] px-[32px]  text=[1rem] text-[#fff] rounded-[10px] font-[700] transition delay-150 duration-200 ease-in hover:bg-[#ff6752] hover:translate-y-[-3px]":"bg-[#ff6752] h-[46px] 2xl:px-[45px] xl:px-[45px] lg:px-[45px] md:px-[45px] sm:px-[45px] px-[32px]  text=[1rem] text-[#fff] rounded-[10px] font-[700] transition delay-150 duration-200 ease-in hover:bg-[#db5745] hover:translate-y-[-3px]"} btnText={"Get Started"} />
              <Button className={isBackground === true?"bg-[transparent] h-[46px] 2xl:px-[45px] xl:px-[45px] lg:px-[45px] md:px-[45px] sm:px-[45px] px-[32px]  text=[1rem] text-[#02055d] border-[#02055d] border-[1px] rounded-[10px] font-[700] transition delay-150 duration-200 ease-in hover:text-[#ff6752] hover:border-[#ff6752] hover:translate-y-[-3px]":"bg-[transparent] h-[46px] 2xl:px-[45px] xl:px-[45px] lg:px-[45px] md:px-[45px] sm:px-[45px] px-[32px]  text=[1rem] text-[#fff] border-[#fff] border-[1px] rounded-[10px] font-[700] transition delay-150 duration-200 ease-in hover:text-[#db5745] hover:border-[#ff6752] hover:translate-y-[-3px]"}  btnText={"Book a call"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PricingCards;
