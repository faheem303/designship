import React from "react";
import PricingCard from "../Component/PricingCard";

function PriceSection() {
  return (
    <>
      <div>
        <div className="w-[95%] py-[100px] mx-auto">
          <div className="flex flex-wrap gap-y-[50px] justify-between mb-[95px]">
            <div className="2xl:w-[59%] xl:w-[59%] lg:w-[59%] md:w-[100%] sm:w-[100%] w-[100%]">
              <h6 className="uppercase text-[14px] font-[700] text-[#ff70d3] tracking-[1px] mb-[24px]">
                pricing
              </h6>
              <h3 className="text-[2rem] text-[#02055d] font-[700] mb-[16px]">
                Choose your plan{" "}
                <span className="text-[2rem] text-[#02055d] font-[400]">
                  – adapt it to your needs
                </span>
              </h3>
              <p className="text-[1rem] text-[#000000bf] font-[400] mb-[16px]">
                Simple pricing. Just like getting a new hire, except you’re
                getting access to a diverse array of experts. Our dedicated team
                plans are perfect for companies looking to complete
                multi-faceted projects while staying lean.
              </p>
            </div>
            <div className="2xl:w-[37%] xl:w-[37%] lg:w-[37%] md:w-[100%] sm:w-[100%] w-[100%] flex items-end pb-[30px]">
              <a
                href="#"
                className=" text-[22px] text-[#02055d] font-[700] border-b-[2px] border-[#02055d] border-solid mr-[18px]"
              >
                Dedicated Team
              </a>
              <a
                href="#"
                className="text-[#000000bf] text-[22px] font-[400]"
              >
                Monthly Buckets
              </a>
            </div>
          </div>
          <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col gap-y-[50px] items-center justify-between">
            <PricingCard isBackground={true}/>
            <PricingCard isBackground={false} isButton={true}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default PriceSection;
