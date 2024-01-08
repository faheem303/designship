import React from "react";
import ProjectCard from "../Component/ProjectCard";
import img1 from "../assets/images/recimg1.jpg"
import img2 from "../assets/images/recimg2.jpg"
import img3 from "../assets/images/recimg3.jpg"
import img4 from "../assets/images/recimg4.jpg"
import img5 from "../assets/images/recimg5.jpg"
import img6 from "../assets/images/recimg6.jpg"
import recenticon from "../assets/images/recentIc.svg"

function RecentProject() {
    return (
        <>
            <div className="">
                <div className="w-[95%] max-w-[1240px] py-[100px] mx-auto">
                    <div className="py-12">
                        <h3 className="text-[52px] text-center text-vlack font-[600]">Latest <br />
                            Work</h3>
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
                            <div className="cursor-pointer 2xl:w-[48%] xl:w-[48%] lg:w-[48%] md:w-[100%] sm:w-[100%] w-[100%] ">
                                <ProjectCard

                                    Cardimg={img5}
                                    title="Imaginary Realms"
                                    subtitle="Logo, User Interface"
                                />
                            </div>
                            <div className="cursor-pointer 2xl:w-[48%] xl:w-[48%] lg:w-[48%] md:w-[100%] sm:w-[100%] w-[100%] ">
                                <ProjectCard

                                    Cardimg={img6}
                                    title="Playful Strokes"
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

export default RecentProject;
