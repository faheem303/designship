import React from "react";
import { Link } from "react-router-dom";

import GlassDoor from "../assets/svgs/indeed.svg";
import Indeed from "../assets/svgs/indeed.svg";
import SalaryCom from "../assets/svgs/salary.svg";
import freel from "../assets/images/freel.png"

import { IoMdInformationCircleOutline } from "react-icons/io";
import { v4 as uuidv4 } from "uuid";

const card1 = [
  {
    id: uuidv4(),
    src: GlassDoor,
    amount: "$47k - $119k",
    icon: <IoMdInformationCircleOutline />,
  },
  {
    id: uuidv4(),
    src: Indeed,
    amount: "$42k - $124k",
    icon: <IoMdInformationCircleOutline />,
  },
  {
    id: uuidv4(),
    src: SalaryCom,
    amount: "$52k -$156k",
    icon: <IoMdInformationCircleOutline />,
  },
];


const OverpaySection = () => {
  return (
    <>
      <div>
        <div className="w-[85%] mx-auto">
          <div>
            <div className="2xl:flex xl:flex lg:flex md:block sm:block block 2xl:space-y-0 xl:space-y-0 lg:space-y-0 md:space-y-[3rem] sm:space-y-[3rem] space-y-[3rem] justify-between items-center ">
              <div className="space-y-4 2xl:w-[45%] xl:w-[45%] lg:w-[45%] md:w-[100%] sm:w-[100%] w-[100%] ">
              <h3 className="text-[40px] font-[900] leading-[50px]">Don’t overpay 😱 <br /> freelance designers</h3>
              <p className="text-[18px] pb-5">Calculate how you can save up to $70k / year. Real rates disclosed based on experience, stack and country.</p>
             <Link to="/overpay">
             <button className="bg-[#4807ea]  text-white text-[18px] py-2 px-6 rounded-[10px] font-[500]">Calculate now</button>
             </Link>
              </div>
              <div className="2xl:w-[48%] xl:w-[48%] lg:w-[48%] md:w-[100%] sm:w-[100%] w-[100%] ">
                <img src={freel} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OverpaySection;
