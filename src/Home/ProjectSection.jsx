import React from "react";
import { Link } from "react-router-dom";

import ProjectCard from "../Component/ProjectCard";
import img1 from "../assets/images/Trippant-cover-1-1536x1202.webp"
import img2 from "../assets/images/Stott-and-May-cover-2.webp"
import img3 from "../assets/images/Doorway_passionate_cover-2-1.webp"
import img4 from "../assets/images/Instagram_shot_1_01-1-1536x1536.webp"

import recenticon from "../assets/images/recentIc.svg"

function ProjectSection() {
    return (
        <>
            <div className="bg-white">
                <div className="w-[95%] max-w-[1240px] py-[100px] mx-auto">
                    <div className="pb-8">
                        <h3 className="text-[32px] text-center text-vlack font-[600]">Recent Work</h3>
                    </div>
                    <div >
                        <div className="2xl:flex xl:flex lg:flex md:block sm:block block justify-between flex-wrap gap-10" >
                           
                            <div className="cursor-pointer 2xl:w-[48%] xl:w-[48%] lg:w-[48%] md:w-[100%] sm:w-[100%] w-[100%] ">
                            <ProjectCard  
                                
                                imgWrapper="filter" 
                                Cardimg={img1}
                                title="Dreamy Visions"
                                subtitle="Logo, User Interface"
                            />

                            </div>
                            <div className="cursor-pointer 2xl:w-[48%] xl:w-[48%] lg:w-[48%] md:w-[100%] sm:w-[100%] w-[100%] ">
                            <ProjectCard  
                                
                                Cardimg={img2}
                                title="Whimsy Tales"
                                subtitle="UI, UX, Development"
                            />
                            </div>
                            <div className="cursor-pointer 2xl:w-[48%] xl:w-[48%] lg:w-[48%] md:w-[100%] sm:w-[100%] w-[100%] ">
                            <ProjectCard  
                               
                                Cardimg={img3}
                                title="Colorful Journeys"
                                subtitle="Font, User Interface"
                            />
                            </div>
                            <div className="cursor-pointer 2xl:w-[48%] xl:w-[48%] lg:w-[48%] md:w-[100%] sm:w-[100%] w-[100%] ">
                            <ProjectCard  
                               
                                Cardimg={img4}
                                title="Night Desert"
                                subtitle="UI, UX, Development"
                            />
                            </div>
                        </div>
                        <div className="flex justify-center items-center py-[2rem]">
                            <Link to="/portfolio">
                            <button className="font-[600] flex items-center justify-center  text-[18px] bg-[black] text-white rounded-[15px] w-[180px] py-3">View all work < span className="ml-[0.5rem]" ><img className="h-[15px]" src={recenticon} alt="" /></span></button>
                            </Link>
                        </div>
                      
                       
                    </div>
                <p id="services"></p>
                </div>
            </div>
        </>
    );
}

export default ProjectSection;
