import React from "react";
import ProjectCard from "../Component/ProjectCard";
import img1 from "../assets/images/img (1).jpg"
import img2 from "../assets/images/img (2).jpg"
import img3 from "../assets/images/img (3).jpg"
import img4 from "../assets/images/img (4).jpg"
import logoft from "../assets/images/procrd.svg"
import logoft2 from "../assets/images/procrd (1).svg"
import logoft3 from "../assets/images/procrd (2).svg"
import logoft4 from "../assets/images/procrd (3).svg"

function ProjectSection() {
    return (
        <>
            <div className="bg-white">
                <div className="w-[95%] py-[100px] mx-auto">
                    <div className="pb-4">
                        <h3 className="text-[16px] text-[#ff70d3] font-[600]">RECENT WORK</h3>
                    </div>
                    <div className="2xl:flex xl:flex lg:flex md:block sm:block block justify-between">
                        <div className="2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-[100%] sm:w-[100%] w-[100%] ">
                            <div className="space-y-3">
                                <h3 className="text-[42px] font-[700] text-[#02055d]">When it comes to web, you can trust we’ve seen quite a bit —</h3>
                                <h4 className="text-[40px] font-[500] text-[#02055d]">from elegant interface redesigns to complex CMS migrations.</h4>
                                    <h4 className="text-[40px] font-[500] text-[#02055d]">100s of projects under our belt make our team just get it.</h4>
                            </div>
                            <div>
                            <ProjectCard  
                                Cardclassmain="border-b space-y-5 border-gray-400 pt-[10rem] 2xl:w-[80%] xl:w-[80%] lg:w-[80%] md:w-[100%] sm:w-[100%] w-[100%] 2xl:px-0 xl:px-0 lg:px-0 md:px-0 sm:px-0 px-4"
                                imgWrapper="filter" 
                                Cardimg={img2}
                                footerLogo={logoft}
                                para="Hubspot theme — "
                                btntext1="WEB DESIGN"
                                btntext2="WEBFLOW"
                                btntext3="BRANDING"
                            />

                            </div>
                            <div>
                            <ProjectCard  
                                Cardclassmain="border-b space-y-5 border-gray-400 pt-[10rem] 2xl:w-[80%] xl:w-[80%] lg:w-[80%] md:w-[100%] sm:w-[100%] w-[100%] 2xl:px-0 xl:px-0 lg:px-0 md:px-0 sm:px-0 px-4"
                                imgWrapper="filter" 
                                Cardimg={img3}
                                footerLogo={logoft4}
                                para="New web and brand experience — "
                                btntext1="WEB DESIGN"
                                btntext2="WEBFLOW"
                            />
                            </div>
                        </div>
                        <div className="2xl:w-[40%] xl:w-[40%] lg:w-[40%] md:w-[100%] sm:w-[100%] w-[100%] ">
                            <div>
                            <ProjectCard  
                                Cardclassmain="border-b space-y-5 border-gray-400 pt-[10rem] 2xl:px-0 xl:px-0 lg:px-0 md:px-0 sm:px-0 px-4"
                                imgWrapper="filter" 
                                Cardimg={img4}
                                footerLogo={logoft2}
                                para="A new web for Defiance — "
                                btntext1="WEB DESIGN"
                                btntext2="DEVELOPMENT"
                            />
                            </div>
                            <div>
                            <ProjectCard  
                                Cardclassmain="border-b space-y-5 border-gray-400 pt-[10rem] 2xl:px-0 xl:px-0 lg:px-0 md:px-0 sm:px-0 px-4"
                                imgWrapper="filter" 
                                Cardimg={img1}
                                footerLogo={logoft3}
                                para="Fresh new site for Elevate Brands — "
                                btntext1="WEB DESIGN"
                                btntext2="WEBFLOW"
                                btntext3="BRANDING"
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
