import React, { useState } from 'react';
import { Link } from "react-router-dom";


import img1 from "../assets/images/prd1 (1).webp"
import img2 from "../assets/images/prd1 (2).webp"
import img3 from "../assets/images/prd1 (3).webp"
import img4 from "../assets/images/prd1 (4).webp"
import back from "../assets/icons/back.png"

function SecProductpage() {



    return (
        <div className='bg-white'>
            <div className='pt-[6rem] containers max-w-[1340px] w-[95%]'>
                <Link to="/portfolio">
                    <div className='flex items-center space-x-2 w-[210px] cursor-pointer pt-4'>
                        <img src={back} className='' alt="" />
                        <h4 className='text-[16px] text-gray-400 font-[600] '>Back to all projects</h4>
                    </div>
                </Link>
                <div className='2xl:pb-[5rem] 2xl:pt-[4rem] xl:pb-[5rem] xl:pt-[4rem] lg:pb-[5rem] lg:pt-[4rem] md:pb-[5rem] md:pt-[4rem] sm:pb-[5rem] sm:pt-[4rem]   pb-[2rem] pt-[2rem] text-center'>
                    <h3 className='2xl:text-[52px] xl:text-[52px] lg:text-[52px] md:text-[52px] sm:text-[52px] text-[32px] font-[400] '>Trippant. <br />
                        International communications consultancy
                    </h3>
                </div>
                <div className='flex justify-between gap-[18px] 2xl:py-12 xl:py-12 lg:py-12 md:py-12 sm:py-12 py-6'>
                    <div className='w-[20%]'>
                        <h5 className='2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[12px] text-gray-300 font-[600]'>Industry</h5>
                        <h4 className='2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[12px] font-[600]'>Consulting</h4>
                    </div>
                    <div className='w-[37%]'>
                        <h5 className='2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[12px] text-gray-300 font-[600]'>Services</h5>
                        <h4 className='2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[12px] font-[600]'>Branding, Animations, Elementor website, Logo design, Presentations, SMM, Web design</h4>
                    </div>
                    <div className='w-[20%]'>
                        <h5 className='2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[12px] text-gray-300 font-[600]'>Link</h5>
                        <h4 className='2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[12px] font-[600]'>View website</h4>
                    </div>
                    <div className='w-[20%]'>
                        <h5 className='2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[12px] text-gray-300 font-[600]'>Share</h5>
                        <h4 className='2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[12px] block font-[600] flex justify-between flex-wrap'><span>Facebook</span> <span>Twitter</span> <span>LinkedIn</span></h4>
                    </div>
                </div>
                <div className='space-y-[5rem] pb-8'>
                    <img src={img1} alt="" />
                    <img src={img4} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                </div>
            </div>
        </div>
    );
}

export default SecProductpage;
