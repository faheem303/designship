import React from "react";
import call from "../assets/icons/call-16.png"
import img from "../assets/images/bgImg.png"
import ScrollAni from "../Component/Scrollanim";

function HeroSection() {
    return (
        <div className="pb-12">
            <div className="hero-bg-img">
                <div className="container mx-auto  py-4 2xl:py-[100px] xl:py-[100px] lg:py-[100px] md:py-[100px] sm:py-6">
                    <div className="text-center space-y-8">
                        <h2 className="text-[80px] leading-[112%] font-[700] text-center  text-[#131313]">One subscription. Unlimited <br />
                            design & no-code requests</h2>
                        <h4 className="w-[80%] m-auto text-[24px] leading-[34px]">A flexible and on-code subscription that you can cancel or pause anytime. <br /> Make Unlimited requests, get unlimited revisions. Fast turn
                        .</h4>
                    </div>
                    <div className="2xl:flex text-center xl:flex lg:flex md:flex sm:flex block justify-center py-12">
                        <button className="py-3 px-7 outline-none rounded-full border border-black hover:bg-black hover:text-white font-[600]">OUR PRICING</button>
                        <p className=" py-3 px-7 text-[#5e5e5e] text-[15px] flex items-center justify-center  m-0 hover:text-gray-400 font-[300] "> <img className=" pb-1 px-3" src={call} alt="" /> SCHEDULE A CALL</p>
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
