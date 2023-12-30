import React, { useState } from 'react';
import { Link } from "react-router-dom";


import img1 from "../assets/images/Dribbble_shot_1_02-2.jpg"
import img2 from "../assets/images/Dribbble_shot_1_01-2.jpg"
import img3 from "../assets/images/Dribbble_shot_2_01-2.jpg"
import img4 from "../assets/images/Dribbble_shot_2_02-2.jpg"
import img5 from "../assets/images/Dribbble_shot_2_04-2.jpg"
import back from "../assets/icons/back.png"

function Productpage() {



    return (
        <div className='bg-white'>
            <div className='pt-[6rem] containers max-w-[1340px] w-[95%]'>
                <Link to="/portfolio">
                    <div className='flex items-center space-x-2 w-[210px] cursor-pointer pt-4'>
                        <img src={back} className='' alt="" />
                        <h4 className='text-[16px] text-gray-400 font-[600] '>Back to all projects</h4>
                    </div>
                </Link>
                <div className='pb-[5rem] pt-[4rem] text-center'>
                    <h3 className='text-[52px] font-[400] leading-[65px]'>Doorway. <br />
                        Digital Business Cards</h3>
                </div>
                <div className='flex justify-between py-12'>
                    <div className='w-[20%]'>
                        <h5 className='text-[16px] text-gray-300 font-[600]'>Industry</h5>
                        <h4 className='text-[16px] font-[600]'>Software</h4>
                    </div>
                    <div className='w-[37%]'>
                        <h5 className='text-[16px] text-gray-300 font-[600]'>Services</h5>
                        <h4 className='text-[16px] font-[600]'>Web design, Elementor website, UI/UX design</h4>
                    </div>
                    <div className='w-[22%]'>
                        <h5 className='text-[16px] text-gray-300 font-[600]'>Link</h5>
                        <h4 className='text-[16px] font-[600]'>View website</h4>
                    </div>
                    <div className='w-[20%]'>
                        <h5 className='text-[16px] text-gray-300 font-[600]'>Share</h5>
                        <h4 className='text-[16px] font-[600] flex justify-between'><span>Facebook</span> <span>Twitter</span> <span>LinkedIn</span></h4>
                    </div>
                </div>
                <div className='space-y-[5rem] pb-8'>
                    <img src={img3} alt="" />
                    <img src={img2} alt="" />
                    <img src={img1} alt="" />
                    <img src={img4} alt="" />
                    <img src={img5} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Productpage;
