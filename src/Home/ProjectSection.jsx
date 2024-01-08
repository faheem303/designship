import React from "react";
import ProjectCard from "../Component/ProjectCard";
import img1 from "../assets/images/recimg1.jpg"
import img2 from "../assets/images/recimg2.jpg"
import img3 from "../assets/images/recimg3.jpg"
import img4 from "../assets/images/recimg4.jpg"

function ProjectSection() {
    return (
        <>
            <div className="bg-white">
                <div className="w-[95%] py-[100px] mx-auto">
                    <div className="pb-4">
                        <h3 className="text-[16px] text-[#ff70d3] font-[600]">RECENT WORK</h3>
                    </div>
                    <div >
                        <div className="2xl:flex xl:flex lg:flex md:block sm:block block justify-between flex-wrap gap-10" >
                           
                            <div className="cursor-pointer 2xl:w-[45%] xl:w-[45%] lg:w-[45%] md:w-[100%] sm:w-[100%] w-[100%] ">
                            <ProjectCard  
                                
                                imgWrapper="filter" 
                                Cardimg={img1}
                                title="Dreamy Visions"
                                subtitle="Logo, User Interface"
                            />

                            </div>
                            <div className="cursor-pointer 2xl:w-[45%] xl:w-[45%] lg:w-[45%] md:w-[100%] sm:w-[100%] w-[100%] ">
                            <ProjectCard  
                                
                                Cardimg={img2}
                                title="Whimsy Tales"
                                subtitle="UI, UX, Development"
                            />
                            </div>
                            <div className="cursor-pointer 2xl:w-[45%] xl:w-[45%] lg:w-[45%] md:w-[100%] sm:w-[100%] w-[100%] ">
                            <ProjectCard  
                               
                                Cardimg={img3}
                                title="Colorful Journeys"
                                subtitle="Font, User Interface"
                            />
                            </div>
                            <div className="cursor-pointer 2xl:w-[45%] xl:w-[45%] lg:w-[45%] md:w-[100%] sm:w-[100%] w-[100%] ">
                            <ProjectCard  
                               
                                Cardimg={img4}
                                title="Night Desert"
                                subtitle="UI, UX, Development"
                            />
                            </div>
                        </div>
                      
                       
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectSection;
