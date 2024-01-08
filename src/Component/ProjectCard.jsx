import React, { useState } from "react";

import recico from "../assets/images/recico.svg"


function ProjectCard({Cardimg,title,subtitle}) {
   
    return (
        <>
             <div className="space-y-6 card-container">
      <div className="relative flex justify-center items-center">
        <img className="w-[100%] max-h-[500px] rounded-[32px] card-image" src={Cardimg} alt="" />
        <div className="play w-[120px] h-[120px] absolute play-icon">
          <div className="w-[100%] h-[100%] bg-[#ffffffbf] flex justify-center items-center rounded-full">
            <img src={recico} className="h-[15px]" alt="" />
          </div>
        </div>
      </div>
      <div className="flex justify-between  card-text">
        <h4 className="font-[700] text-[22px] border-b-4 border-transparent title">{title}</h4>
        <h4 className="font-[600] opacity-[0.7] text-[18px] subtitle">{subtitle}</h4>
      </div>
    </div>
        </>
    );
}

export default ProjectCard;
