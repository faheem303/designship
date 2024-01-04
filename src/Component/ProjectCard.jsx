import React, { useState } from "react";


function ProjectCard({ Cardclassmain, Cardimg, btntext1, btntext2, btntext3, footerLogo, para, imgWrapper }) {
    const [showBtn, setShowBtn] = useState(false);

    const handleMouseEnter = () => {
        setShowBtn(true);
    };

    const handleMouseLeave = () => {
        setShowBtn(false);
    };
    return (
        <>
            <div>
                <div className={`${Cardclassmain}`} >
                    <div className={`${imgWrapper} relative `} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                     {
                        showBtn&&
                        <div className="absolute top-[5%] right-[2%]  flex space-x-3">
                        {
                            btntext1&&
                        <button className="py-1 text-[14px] px-5 font-[600] bg-[#02055d] rounded-[30px] text-white">{btntext1}</button>
                        }
                        {
                            btntext2&&
                        <button className="py-1 text-[14px] px-5 font-[600] bg-[#02055d] rounded-[30px] text-white">{btntext2}</button>
                        }
                        {
                           btntext3&&
                        <button className="py-1 text-[14px] px-5 font-[600] bg-[#02055d] rounded-[30px] text-white">{btntext3}</button>
                        }
                    </div>
                     }
                        <img src={Cardimg} alt="" />
                    </div>
                   
                  
                    <div className="flex justify-between">
                        <div><img className="w-[85px] " src={footerLogo} alt="" /></div>
                        <div className="pb-4">
                            <h4 className="text-[16px] text-gray-500">{para}<span className="text-[16px] text-gray-500 italic">Case Study coming soon!</span> </h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectCard;
