import React from "react";
import call from "../assets/icons/call-16.png"
import img from "../assets/images/bgImg.png"
import ScrollAni from "../Component/Scrollanim";
import Carousel from "../Component/carousel";

function NeedaStartSection() {
    return (
        <div className="containers py-[6rem]">
            <div className="bg-needastart-img">
                <div className=" flex justify-center items-center h-[100%] ">
                 <div className="text-center space-y-6">
                 <h3 className="text-[48px] leading-[130%] m-0 font-[700]">Need a startup name?</h3>
                    <h4 className="text-[20px] leading-[30px] m-0 font-[500] ">Just answer a few questions & we'll craft a name that sparks love at <br /> first read. It's really that simple.</h4>
                    <button className="px-6 py-4 text-[18px font-[600] bg-black text-white rounded-full border border-black hover:bg-[#dbc4f0] hover:text-black">Let's do this!</button>
                 </div>
                </div>
            </div>
        </div>
    );
}

export default NeedaStartSection;
