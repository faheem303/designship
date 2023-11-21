import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import img1 from "../assets/images/Trippant-cover-1-1536x1202.webp"
import img2 from "../assets/images/Stott-and-May-cover-2.webp"
import img3 from "../assets/images/Doorway_passionate_cover-2-1.webp"
import img4 from "../assets/images/Instagram_shot_1_01-1-1536x1536.webp"

function Portfolio() {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [language, setLanguage] = useState('');
    const [language2, setLanguage2] = useState('');

    const toggle = () => {
        setOpen(!open);
    };
    const toggle2 = () => {
        setOpen2(!open2);
    };

    const handleLanguageSelection = (selectedLanguage) => {
        setLanguage(selectedLanguage);
        setOpen(false);
    };
    const handleLanguageSelection2 = (selectedLanguage2) => {
        setLanguage2(selectedLanguage2);
        setOpen2(false);
    };

    return (
        <div className='bg-white'>
            <div className="py-[6rem] container">
                <div className="flex justify-center space-x-8">
                    <div className="relative w-[20rem]">
                        <button
                            onClick={toggle}
                            className={`flex w-full items-center justify-between rounded bg-white p-2 border-b border-gray-300 bg-transparent font-[500] text-gray-500 ${open && 'border-gray-400'}`}
                        >
                            <span>{language === '' ? 'Select service' : language}</span>
                            <FontAwesomeIcon icon={faChevronDown} className="text-xl" />
                        </button>

                        {open && (
                            <ul className="z-2 absolute mt-1 w-full rounded bg-white ring-1 ring-gray-300" onClick={() => setOpen(false)}>
                                <li className="cursor-pointer select-none p-2 hover:bg-gray-200" onClick={() => handleLanguageSelection('UX/UI')}>
                                    UX/UI
                                </li>
                                <li className="cursor-pointer select-none p-2 hover:bg-gray-200" onClick={() => handleLanguageSelection('Web Design')}>
                                    Web Design
                                </li>
                                <li className="cursor-pointer select-none p-2 hover:bg-gray-200" onClick={() => handleLanguageSelection('Print Design')}>
                                    Print Design
                                </li>
                            </ul>
                        )}
                    </div>
                    <div className="relative w-[20rem]">
                        <button
                            onClick={toggle2}
                            className={`flex w-full items-center justify-between rounded bg-white p-2 border-b border-gray-300 bg-transparent font-[500] text-gray-500  ${open2 && 'border-gray-400'}`}
                        >
                            <span>{language2 === '' ? 'Select industry' : language2}</span>
                            <FontAwesomeIcon icon={faChevronDown} className="text-xl" />
                        </button>

                        {open2 && (
                            <ul className="z-2 absolute mt-1 w-full rounded bg-white ring-1 ring-gray-300" onClick={() => setOpen2(false)}>
                                <li className="cursor-pointer select-none p-2 hover:bg-gray-200" onClick={() => handleLanguageSelection2('Design')}>
                                    Design
                                </li>
                                <li className="cursor-pointer select-none p-2 hover:bg-gray-200" onClick={() => handleLanguageSelection2('Education')}>
                                    Education
                                </li>
                                <li className="cursor-pointer select-none p-2 hover:bg-gray-200" onClick={() => handleLanguageSelection2('Music')}>
                                    Music
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
                <div className='block 2xl:flex xl:flex lg:flex md:block sm:block justify-between pt-[5rem]'>
                    <div className='w-[100%] w-[100%] 2xl:w-[48%] xl:w-[48%] lg:w-[48%] md:w-[100%] sm-[100%]'>
                        <div className='space-y-3'>
                            <img src={img1} alt="" />
                            <div className='space-y-1'>
                                <p className='text-[16px] font-[500]'>Consulting</p>
                                <h3 className='text-[22px] font-[600] text-gray-500'>Trippant</h3>
                            </div>
                        </div>
                        <div className='space-y-3 pt-[6rem]'>
                            <img src={img3} alt="" />
                            <div className='space-y-1'>
                                <p className='text-[16px] font-[500]'>Software</p>
                                <h3 className='text-[22px] font-[600] text-gray-500'>Doorway</h3>
                            </div>
                        </div>
                    </div>
                    <div className='w-[100%] w-[100%] 2xl:w-[48%] xl:w-[48%] lg:w-[48%] md:w-[100%] sm-[100%] space-y-[6rem]'>
                        <div className='space-y-[6rem]'>
                            <div className='space-y-3'>
                                <p className='text-[18px] font-[500] '>“Their attention to detail was brilliant with great design innovations where there was room for them.”</p>
                                <h3 className='text-[16px] font-[600] text-gray-500'>Hugh Fraser, Doorway</h3>
                            </div>
                            <div className='space-y-3'>
                            <img src={img2} alt="" />
                            <div className='space-y-1'>
                                <p className='text-[16px] font-[500]'>Recruitment</p>
                                <h3 className='text-[22px] font-[600] text-gray-500'>Stott and May</h3>
                            </div>
                            </div>
                        </div>
                        <div className='space-y-[6rem]'>
                            <div className='space-y-3'>
                                <p className='text-[18px] font-[500] '>“Their comments and feedback are excellent, and they’ve gone beyond the scope of work. They’ve brought in their point of view and delivered excellent results, which will be the starting point for our company.”</p>
                                <h3 className='text-[16px] font-[600] text-gray-500'>Aldo Guiducci, Scynce</h3>
                            </div>
                            <img src={img4} alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Portfolio;
