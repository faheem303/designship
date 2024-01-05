
import React from "react";
import card1 from "../assets/images/how.png"
import before from "../assets/images/howbefor.png"
import dots from "../assets/images/dotsimg.png"

function HowItWorkSection() {
    return (
        <div className="howit-img">
            <div className="container mx-auto py-[6rem]">
                <div className="w-[80%] 2xl:w-[66%] xl:w-[66%] lg:w-[66%] md:w-[66%] sm-[80%] m-auto">
                    <div className="text-center">
                        <h3 className="text-[32px] font-[700]">How it <span className="px-3 py-[8px]  border rounded-[8px] border-dashed border-black">works</span></h3>
                    </div>
                    <div className="pt-[4rem] block 2xl:flex xl:flex lg:flex md:block sm:block   justify-between">
                        <div className="w-[100%] 2xl:w-[55%] xl:w-[55%] lg:w-[55%] md:w-[100%] sm-[100%]  p-8 bg-white rounded-[20px] relative ">
                            <img className="absolute  w-[80px] -left-6 top-[60px]" src={before} alt="" />
                            <img src={card1} alt="" />
                            <div className="text-center pt-8">
                                <h3 className="text-[24px] font-[500] pb-1"> Manage with trello</h3>
                                <p className="leading-[18px] text-[#8d8d8d] font-[300]">We'll set up your design board so you can easily manage your requests and designs.</p>
                            </div>
                        </div>
                        <div className=" w-[100%] 2xl:w-[35%] xl:w-[35%] lg:w-[35%] md:w-[100%] sm-[100%] flex items-center space-x-2">
                            <div>
                                <img src={dots} className="h-[350px] w-[12px] " alt="" />
                            </div>
                            <div className="">
                                <div className="pb-[5.5rem]">
                                    <h3 className="text-[24px] font-[500] pb-1">Subscribe</h3>
                                    <p  className="leading-[18px] text-[#8d8d8d] font-[300]">Subscribe and get started straightaway.</p>
                                </div>
                                <div className="pb-[5.5rem]">
                                    <h3 className="text-[24px] font-[500] pb-1">Receive designs</h3>
                                    <p  className="leading-[18px] text-[#8d8d8d] font-[300]">Put in your design requests and receive them within a few days.</p>
                                </div>
                                <div>
                                    <h3 className="text-[24px] font-[500] pb-1">Unlimited revisions</h3>
                                    <p  className="leading-[18px] text-[#8d8d8d] font-[300]">We will keep working on it until you're happy, no extra charge.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HowItWorkSection;
