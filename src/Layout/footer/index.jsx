import React from "react";
import ftrimg from "../../assets/logo/ftr.png"
import pen from "../../assets/logo/pen.png"

function Footer() {
  return (
    <div className="bg-[#4a4f74] bg-main  ">
      <div className="py-[5rem] containers xs:space-y-8 2xl:flex xl:flex lg:flex md:flex sm:flex block justify-betwen">
        <div className="2xl:w-[35%] xl:w-[35%] lg:w-[35%] md:w-[35%] sm:w-[35%] w-[100%]">
          <img className="w-[150px]" src={ftrimg} alt="" />
        </div>
        <div className="2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-[50%] w-[100%]  border-l border-white pl-3 space-y-2">
          <h3><a href="" className="text-[16px] text-white">Work</a></h3>
          <h3><a href="" className="text-[16px] text-white">Services</a></h3>
          <h3><a href="" className="text-[16px] text-white">Pricing</a></h3>
          <h3><a href="" className="text-[16px] text-white">FAQ</a></h3>
          <h3><a href="" className="text-[16px] text-white">Terms and Conditions</a></h3>
          <h3><a href="" className="text-[16px] text-white">Privacy Policy</a></h3>
          <h3><a href="" className="text-[16px] text-white">Contact Us</a></h3>
   
        </div>
        <div className="2xl:w-[200px] text-center xl:w-[200px] lg:w-[200px] md:w-[200px] sm:w-[200px] w-[100%]  space-y-2">
          <h3 className="text-white text-center text-[16px] font-[500]">Ready to get going? </h3>
          <button className="text-center rounded-[10px] px-12 py-2 font-[600] text-[18px] border-2 border-white bg-[#4a4f74] text-white">Get started</button>
        </div>
      </div>
    
    </div>
  );
}

export default Footer;
