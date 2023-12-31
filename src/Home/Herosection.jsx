import React from "react";
import call from "../assets/images/call.gif"
import img from "../assets/images/bgImg.png"
import ScrollAni from "../Component/Scrollanim";

function HeroSection() {
    return (
        <div className="pb-12 ">
            <div className="">
                <div className="container mx-auto  py-4 2xl:pt-[100px] xl:pt-[100px] lg:pt-[100px] md:pt-[100px] sm:pt-6">
                    <div className="text-center space-y-8">
                        <h2 className=" 2xl:text-[80px] xl:text-[80px] lg:text-[80px] md:text-[80px] sm:text-[80px] text-[60px] 2xl:leading-[112%] xl:leading-[112%] lg:leading-[112%] md:leading-[112%] sm:leading-[112%] leading-[100%] font-[700] text-center  text-[#131313]">One subscription. Unlimited <br />
                            design & no-code requests</h2>
                        <h4 className="w-[80%] m-auto text-[24px] leading-[34px]">A flexible and on-code subscription that you can cancel or pause anytime. <br /> Make Unlimited requests, get unlimited revisions. Fast turn.</h4>
                    </div>
                    <div className="2xl:flex text-center xl:flex lg:flex md:flex sm:flex block justify-center py-12">
                        <a href="#pricing">
                        <button className="py-3 px-7 outline-none rounded-full border border-black hover:bg-black hover:text-white font-[600]">OUR PRICING</button>
                        </a>
                        <p className=" py-3 px-7 text-[#5e5e5e] text-[15px] flex items-center justify-center  m-0 hover:text-gray-400 font-[300] "> <img className=" pb-1 pr-2 w- h-[28px]" src={call} alt="" /> SCHEDULE A CALL</p>
                    </div>
                </div>
            </div>
            <div className="">
                <ScrollAni />
            </div>
        </div>
    );
}

export default HeroSection;
