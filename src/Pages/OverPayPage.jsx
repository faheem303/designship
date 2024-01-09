import React, { useState, useEffect } from "react";

import payimg from "../assets/images/freel.png"
import Dropdown from "../Component/Dropdown";

function OverPayPage() {
    const [open, setOpen] = useState(false);
    const [dropOption, setDropOption] = useState('Main technology');
    const [open2, setOpen2] = useState(false);
    const [dropOption2, setDropOption2] = useState('Country of residence');


    const handleDropOption = (dropOption) => {
        setDropOption(dropOption);
    };
    const toggle2 = () => {
        setOpen2(!open2);
    };
    const handleDropOption2 = (dropOption2) => {
        setDropOption2(dropOption2);
    };
    const toggle = () => {
        setOpen(!open);
    };
    return (
        <>
            <div className="">
                <div className="w-[95%] max-w-[1040px] space-y-12 max-w-[1240px] pt-[30px] pb-[50px] mx-auto">
                    <div className="space-y-4 ">
                        <h3 className="text-[56px] text-vlack font-[600]">Don’t overpay freelance designers 😱</h3>
                        <p className="text-[20px] ">Calculate how you can save up to $70k / year. Real rates disclosed based on experience, stack and country.</p>
                    </div>
                    <div className="flex justify-between">
                        <div className="pt-[4rem] pb-[8rem]  flex justify-center bg-white rounded-[10px] w-[38%]">
                            <div className="space-y-10">
                                <p className="text-[18px]">Select the following:</p>
                                <div className="space-y-10">
                                    <Dropdown
                                        DropButtonClass="flex w-full items-center justify-between rounded bg-white p-2 border border-gray-300 bg-transparent font-[500] text-gray-500"
                                        options={['Main technology', 'Figma', 'Sketch', 'Adobe XD', 'Adobe Photoshop']}
                                        handleSelection={handleDropOption}
                                        selectedOption={dropOption}
                                        toggleDropdown={toggle} />
                                    <Dropdown
                                        DropButtonClass="flex w-full items-center justify-between rounded bg-white p-2 border border-gray-300 bg-transparent font-[500] text-gray-500"
                                        options={['Country of residence', 'Australia', 'United States', 'Austria', 'Belgium']}
                                        handleSelection={handleDropOption2}
                                        selectedOption={dropOption2}
                                        toggleDropdown={toggle2} />
                                </div>
                            </div>
                        </div>
                        <div className="w-[58%]">
                            <img src={payimg} alt="" />
                        </div>

                    </div>
                </div>

            </div>
        </>
    );
}

export default OverPayPage;
