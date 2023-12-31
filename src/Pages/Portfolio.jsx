import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Dropdown from '../Component/Dropdown';
import FeaturedCard from '../Component/FeatureCard';

import img1 from "../assets/images/Trippant-cover-1-1536x1202.webp"
import img2 from "../assets/images/Stott-and-May-cover-2.webp"
import img3 from "../assets/images/Doorway_passionate_cover-2-1.webp"
import img4 from "../assets/images/Instagram_shot_1_01-1-1536x1536.webp"
import img5 from "../assets/images/Frame-171-1.jpg"


const initialProjects = [
    {

        projectData1: [
            {
                id: 1,
                img: img1,
                service: 'Select service',
                industry: 'Select industry',
                titel: "Consulting",
                subtitel: "Trippant",
                link: "/portfolio/productpagetrippant",

            },
            {
                id: 2,
                img2: img2,
                service: 'Select service',
                industry: 'Select industry',
                titel2: "Recruitment",
                subtitel2: "Stott and May",
                cardtitel2: "Hugh Fraser, Doorway",
                card2para2: "“Their attention to detail was brilliant with great design innovations where there was room for them.”",
                link: "/portfolio/productpagestottandmay",

            },

            {
                id: 3,
                img: img3,
                service: 'Select service',
                industry: 'Select industry',
                titel: "Software",
                subtitel: "Doorway",
                link: "/portfolio/productpage",
            },
            {
                id: 4,
                img2: img4,
                service: 'Select service',
                industry: 'Select industry',
                titel2: "Design",
                subtitel2: "Femme Type",
                cardtitel2: "Aldo Guiducci, Scynce",
                card2para2: "“Their comments and feedback are excellent, and they’ve gone beyond the scope of work. They’ve brought in their point of view and delivered excellent results, which will be the starting point for our company.”",
                link: "/portfolio/productpagefemmetype",
            },
            {
                id: 5,
                img: img2,
                service: 'Select service',
                industry: 'Select industry',
                titel: "Investment company",
                subtitel: "Kommune",
                link: "/portfolio/productpagestottandmay",
            },
            {
                id: 6,
                img: img1,
                titel: "Consulting",
                subtitel: "Trippant",
                service: 'UX/UI',
                industry: 'Music',
                link: "/portfolio/productpagetrippant",

            },
            {
                id: 7,
                img: img4,
                titel: "Consulting",
                subtitel: "Trippant",
                service: 'UX/UI',
                industry: 'Music',
                link: "/portfolio/productpagefemmetype",
            },
            {
                id: 8,
                img: img4,
                titel: "Consulting",
                subtitel: "Trippant",
                service: 'UX/UI',
                industry: 'Education',
                link: "/portfolio/productpagefemmetype",
            },

            {
                id: 9,
                img: img4,
                service: 'Print Design',
                industry: 'Design',
                titel: "Consulting",
                subtitel: "Trippant",
                link: "/portfolio/productpagefemmetype",

            },
            {
                id: 10,
                img: img1,
                service: 'Print Design',
                industry: 'Design',
                titel: "Consulting",
                subtitel: "Trippant",
                link: "/portfolio/productpagetrippant",

            },

            {
                id: 11,
                img: img2,
                titel: "Consulting",
                subtitel: "Trippant",
                service: 'Print Design',
                industry: 'Music',
                link: "/portfolio/productpagestottandmay",
            },

        ]
    },
    {

        projectData2: [
            {
                id: 1,
                img: img1,
                titel: "Investment company",
                subtitel: "Kommune",
                service: 'Print Design',
                industry: 'Education',
                link: "/portfolio/productpagetrippant",

            },
            {
                id: 2,
                img: img4,
                titel: "Stott and May",
                subtitel: "Recruitment",
                service: 'Print Design',
                industry: 'Music',
                link: "/portfolio/productpagefemmetype",
            },
            {
                id: 3,
                img: img2,
                titel: "Design",
                subtitel: "Femme Type",
                service: 'Print Design',
                industry: 'Education',
                link: "/portfolio/productpagestottandmay",
            },
            {
                id: 4,
                img: img4,
                titel: "Recruitment",
                subtitel: "Trippant",
                service: 'Select service',
                industry: 'Education',
                link: "/portfolio/productpagefemmetype",
            },
            {
                id: 5,
                img: img2,
                titel: "Recruitment",
                subtitel: "Trippant",
                service: 'Select service',
                industry: 'Design',
                link: "/portfolio/productpagestottandmay",
            },

            {
                id: 6,
                img: img2,
                titel: "Recruitment",
                subtitel: "Trippant",
                service: 'UX/UI',
                industry: 'Design',
                link: "/portfolio/productpagestottandmay",
            },
            {
                id: 7,
                img: img2,
                titel: "Consulting",
                subtitel: "Trippant",
                service: 'UX/UI',
                industry: 'Select industry',
                link: "/portfolio/productpagestottandmay",
            },
            {
                id: 8,
                img: img1,
                titel: "Recruitment",
                subtitel: "Femme Type",
                service: 'UX/UI',
                industry: 'Select industry',
                link: "/portfolio/productpagetrippant",

            },

            {
                id: 9,
                img: img1,
                titel: "Recruitment",
                subtitel: "Trippant",
                service: 'Select service',
                industry: 'Music',
                link: "/portfolio/productpagetrippant",

            },
            {
                id: 10,
                img: img2,
                titel: "Design",
                subtitel: "Femme Type",
                service: 'Print Design',
                industry: 'Select industry',
                link: "/portfolio/productpagestottandmay",
            },
            {
                id: 11,
                img: img5,
                titel: "Design",
                subtitel: "Femme Type",
                service: 'Web Design',
                industry: 'Select industry',
                link: "/portfolio/productpagekommune",
            },
            {
                id: 12,
                img: img4,
                titel: "Design",
                subtitel: "Femme Type",
                service: 'Web Design',
                industry: 'Design',
                link: "/portfolio/productpagefemmetype",
            },
            {
                id: 13,
                img: img1,
                titel: "Design",
                subtitel: "Femme Type",
                service: 'Web Design',
                industry: 'Education',
                link: "/portfolio/productpagetrippant",

            },
            {
                id: 14,
                img: img2,
                titel: "Design",
                subtitel: "Femme Type",
                service: 'Web Design',
                industry: 'Music',
                link: "/portfolio/productpagestottandmay",
            },

        ]
    },
]




function Portfolio() {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [language, setLanguage] = useState('Select service');
    const [language2, setLanguage2] = useState('Select industry');
    const [showMoreProjects, setShowMoreProjects] = useState(false);
    const [filteredProjects, setFilteredProjects] = useState([]);

    const handleLanguageSelection = (selectedLanguage) => {
        setLanguage(selectedLanguage);
    };

    const handleLanguageSelection2 = (selectedLanguage2) => {
        setLanguage2(selectedLanguage2);
    };

    const handleLoadMore = () => {
        setShowMoreProjects(true);
    };

    const toggle = () => {
        setOpen(!open);
    };

    const toggle2 = () => {
        setOpen2(!open2);
    };

    const filterProjects = () => {
        let filtered = [];
        initialProjects.forEach((project) => {
            if (project.projectData1) {
                filtered = [
                    ...filtered,
                    ...project.projectData1.filter((item) =>
                        (language === '' || item.service === language) &&
                        (language2 === '' || item.industry === language2)
                    ),
                ];
            }
            if (project.projectData2) {
                filtered = [
                    ...filtered,
                    ...project.projectData2.filter((item) =>
                        (language === '' || item.service === language) &&
                        (language2 === '' || item.industry === language2)
                    ),
                ];
            }
        });

        if (language !== '' || language2 !== '') {
            setFilteredProjects(filtered.length > 0 ? filtered : []);
        } else {
            setFilteredProjects([]);
        }
    };



    useEffect(() => {
        filterProjects();
    }, [language, language2]);



    return (
        <div className='z-[1]'>
            <div className="pb-[6rem] pt-[4rem] containers  max-w-[1410px] w-[95%]">
                <div className='text-center  pb-[3.3rem]'>
                    <h3 className='text-[52px]'>Featured projects</h3>
                </div>
                <div className="flex justify-center space-x-8">
                    <Dropdown
                    DropButtonClass="flex w-full items-center justify-between rounded bg-white p-2 border-b border-gray-300 bg-transparent font-[500] text-gray-500"
                        options={['Select service', 'UX/UI', 'Web Design', 'Print Design']}
                        handleSelection={handleLanguageSelection}
                        selectedOption={language}
                        toggleDropdown={toggle}
                    />
                    <Dropdown
                    DropButtonClass="flex w-full items-center justify-between rounded bg-white p-2 border-b border-gray-300 bg-transparent font-[500] text-gray-500"
                        options={['Select industry', 'Design', 'Education', 'Music']}
                        handleSelection={handleLanguageSelection2}
                        selectedOption={language2}
                        toggleDropdown={toggle2}
                    />
                </div>
                <div className='cardswrapper relative grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-x-[7rem] pt-[6rem] pb-[6rem] '>
                    {
                        filteredProjects.map((project) => (
                            <div className='productcard w-[100%] 2xl:h-[630px] xl:h-[620px] lg:h-[530px] md:h-[500px] sm:h-[auto] h-[auto] mb-[6rem]' key={project.id}>
                                <Link to={project.link}>
                                    <FeaturedCard
                                        data={project}
                                        showMoreProjects={showMoreProjects}
                                        classname='w-[100%] cursor-pointer'
                                    />
                                </Link>
                            </div>
                        ))
                    }

                </div>
                {
                    showMoreProjects &&
                    <div className=' flex gap-[7rem] relative'>
                        <div className='w-[46%] mr-auto pt-[10rem] w-[50%] space-y-[6rem]'>
                        <Link to="/portfolio/productpagetrippant">
                            <img src={img1} alt="" />
                            <div className='space-y-3 pt-6'>
                                <p className='text-[18px] font-[500] '>Consulting</p>
                                <h3 className='text-[22px] font-[600] text-gray-500'>Trippant</h3>
                            </div>
                        </Link>
                        </div>
                        <div className='w-[46%] space-y-[6rem] mt-[-15rem]'>
                        <Link to="/portfolio/productpagestottandmay">
                            <img src={img2} alt="" />
                            <div className='space-y-3 pt-6'>
                                <p className='text-[18px] font-[500] '>Recruitment</p>
                                <h3 className='text-[22px] font-[600] text-gray-500'>Stott and May</h3>
                            </div>
                        </Link>
                        </div>
                    </div>
                }
                <div className='flex justify-center absolute bottom-[15%] left-[46%]'>
                    <button
                        className="py-3 px-7 rounded-[14px] border border-black hover:bg-black hover:text-white font-[600]"
                        onClick={handleLoadMore}
                        style={{ display: showMoreProjects ? 'none' : 'block' }}
                    >
                        Load more projects
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
