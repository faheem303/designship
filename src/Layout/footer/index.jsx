import React from "react";

import Logo from "../../assets/logo/logo.png"
import { AiFillTwitterCircle } from "react-icons/ai";
import { SlSocialLinkedin } from "react-icons/sl";
import { BiGlobe } from "react-icons/bi";
import { FaBehance } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";

function Footer() {
  return (
    <div className="bg-[#252525] pt-[80px]  ">
   <div className="w-[95%] mx-auto p-2">
   <div className="flex justify-between ">
      <div className="w-[25%]">
        <img className="cursor-pointer w-[210px]" src={Logo} alt="" />
      </div>
      <div className="w-[73%] flex">
        <div className="w-[33%]">
          <h3 className="pb-4 text-[20px] font-[600] text-[#fff]">Who we are</h3>
          <p className="text-[16px] font-[400] hover:text-[red] cursor-pointer text-[#fff]">Services</p>
          <p className="text-[16px] font-[400] hover:text-[red] cursor-pointer text-[#fff]">Pricing Plan</p>
          <p className="text-[16px] font-[400] hover:text-[red] cursor-pointer text-[#fff]">Contact</p>
          <p className="text-[16px] font-[400] hover:text-[red] cursor-pointer text-[#fff]">About</p>
        </div>
        <div className="w-[33%]">
          <h3 className="pb-4 text-[20px] font-[600] text-[#fff]">Useful Links</h3>
          <p className="text-[16px] font-[400] hover:text-[red] cursor-pointer text-[#fff]">Licenses</p>
          <p className="text-[16px] font-[400] hover:text-[red] cursor-pointer text-[#fff]">Style Guides</p>
          <p className="text-[16px] font-[400] hover:text-[red] cursor-pointer text-[#fff]">Changelog</p>
          <p className="text-[16px] font-[400] hover:text-[red] cursor-pointer text-[#fff]">FAQ</p>
        </div>
        <div className="w-[33%]">
          <h3 className="pb-4 text-[20px] font-[600] text-[#fff]">Contact us</h3>
          <p className="text-[16px] font-[400] hover:text-[red] cursor-pointer text-[#fff]">hello@yourmail.com</p>
          <p className="text-[16px] font-[400] hover:text-[red] cursor-pointer text-[#fff]">www.yourdomain.com</p>
          <p className="text-[16px] font-[400] hover:text-[red] cursor-pointer text-[#fff]">(00) 123 456 8899</p>
        </div>
      </div>
    </div>
    <div className="pt-2 pb-[3rem]">
      <h4 className="text-[#fff] text-[16px] font-[400]">Copyright © 2023 Webflow.</h4>
      </div>
      <div className="border-t border-gray-500">
        <div className="flex justify-between py-8 w-[84%] mx-auto">
            <div className="py-4 text-[#fff] border border-gray-400 flex justify-center items-center cursor-pointer w-[200px] bg-[#252525] hover:bg-blue-500 rounded-full text-[18px] font-[600]"><span>Twitter</span> <span className="flex justify-center items-center  w-[53px] ml-7 h-[53px] border border-gray-400 rounded-full"><AiFillTwitterCircle className="text-[30px]" /></span></div>
            <div className="py-4 text-[#fff] border border-gray-400 flex justify-center items-center cursor-pointer w-[200px] bg-[#252525] hover:bg-blue-500 rounded-full text-[18px] font-[600]"><span>Linkedin</span> <span className="flex justify-center items-center  w-[53px] ml-7 h-[53px] border border-gray-400 p-3 rounded-full"><SlSocialLinkedin className="text-[30px]" /></span></div> <div className="py-4 text-[#fff] border border-gray-400 flex justify-center items-center cursor-pointer w-[200px] bg-[#252525] hover:bg-blue-500 rounded-full text-[18px] font-[600]"><span>Dribbble</span> <span className="flex justify-center items-center  w-[53px] ml-7 h-[53px] border border-gray-400 rounded-full"><BiGlobe className="text-[30px]" /></span></div> <div className="py-4 text-[#fff] border border-gray-400 flex justify-center items-center cursor-pointer w-[200px] bg-[#252525] hover:bg-blue-500 rounded-full text-[18px] font-[600]"><span>Behance</span> <span className="flex justify-center items-center  w-[53px] ml-7 h-[53px] border border-gray-400 rounded-full"><FaBehance className="text-[30px]" /></span></div> <div className="py-4 text-[#fff] border border-gray-400 flex justify-center items-center cursor-pointer w-[200px] bg-[#252525] hover:bg-blue-500 rounded-full text-[18px] font-[600]"><span>Instagram</span> <span className="flex justify-center items-center  w-[53px] ml-7 h-[53px] border border-gray-400 rounded-full"><GrInstagram className="text-[30px]" /></span></div>
          
        </div>
      </div>
   </div>
    </div>
  );
}

export default Footer;
