import React from "react";
import SalaryCard from "../Component/SalaryCard";
import GlassDoor from "../assets/logo/glassdoor.svg";
import Indeed from "../assets/logo/indeed.svg";
import SalaryCom from "../assets/logo/salary.svg";
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
const card2 = [
  {
    id: uuidv4(),
    src: GlassDoor,
    amount: "£31k - £53k",
    icon: <IoMdInformationCircleOutline />,
  },
  {
    id: uuidv4(),
    src: Indeed,
    amount: "£32k - £64k",
    icon: <IoMdInformationCircleOutline />,
  },
  {
    id: uuidv4(),
    src: SalaryCom,
    amount: "£31k - £102k",
    icon: <IoMdInformationCircleOutline />,
  },
];

const SalarySection = () => {
  return (
    <>
      <div>
        <div className="w-[95%] mx-auto py-[100px]">
          <h2 className="2xl:text-[40px] xl:text-[40px] lg:text-[40px] md:text-[33px] sm:text-[25px] text-[25px] font-[400] 2xl:w-[55%] xl:w-[55%] lg:w-[55%] md:w-[55%] sm:w-[80%] w-[100%] pb-[60px]">
            For reference our standard package works out to{" "}
            <span className="font-[700]">$60k / £48k</span> per year...
          </h2>
          <div className=" 2xl:flex xl:flex lg:flex md:flex sm:flex block 2xl:w-[80%] xl:w-[80%] lg:w-[80%] md:w-[80%] sm:w-[80%] w-[100%] mx-auto">
            <div className="2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-[50%] w-[100%] border-[1px] border-[#0000001a] border-solid pb-[40px]">
              <div className="w-[90%] mx-auto">
                <div className="flex justify-center border-b-[1px] border-[#0000001a] border-solid py-[20px]">
                  <h3 className="text-center 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[18px] text-[20px] font-[500]">
                    Hiring a designer in the US
                  </h3>
                </div>
                <div className="flex flex-col gap-[25px] pt-[35px]">
                  {card1.map((item, index) => (
                    <SalaryCard
                      src={item.src}
                      amount={item.amount}
                      icon={item.icon}
                      imgClass={`
                      ${
                        index === 0 ? "2xl:w-[120px] xl:w-[120px] lg:w-[120px] md:w-[120px] sm:w-[100px] w-[100px] 2xl:h-[36px] xl:h-[36px] lg:h-[36px] md:h-[36px] sm:h-[30px] h-[30px]" : ""
                      }
                      ${
                        index === 1 ? "2xl:w-[89px] xl:w-[89px] lg:w-[89px] md:w-[89px] sm:w-[80px] w-[80px] 2xl:h-[36px] xl:h-[23px] lg:h-[23px] md:h-[23px] sm:h-[21px] h-[21px]" : ""
                      }
                      ${
                        index === card1.length - 1 ? "2xl:w-[128px] xl:w-[128px] lg:w-[128px] md:w-[128px] sm:w-[100px] w-[100px] 2xl:h-[26px] xl:h-[26px] lg:h-[26px] md:h-[26px] sm:h-[20px] h-[20px]" : ""
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-[50%] w-[100%] border-[1px] border-l-[0] border-[#0000001a] border-solid pb-[40px]">
              <div className="w-[90%] mx-auto">
                <div className="flex justify-center items-center border-b-[1px] border-[#0000001a] border-solid py-[20px]">
                  <h3 className="text-center 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[18px] text-[20px] font-[500]">
                    Hiring a designer in the UK
                  </h3>
                </div>
                <div className="flex flex-col gap-[25px] pt-[35px]">
                  {card2.map((item, index) => (
                    <SalaryCard
                      cardHeader={"Hiring a designer in the US"}
                      src={item.src}
                      amount={item.amount}
                      icon={item.icon}
                      imgClass={`
                      ${
                        index === 0 ? "2xl:w-[120px] xl:w-[120px] lg:w-[120px] md:w-[120px] sm:w-[100px] w-[100px] 2xl:h-[36px] xl:h-[36px] lg:h-[36px] md:h-[36px] sm:h-[30px] h-[30px]" : ""
                      }
                      ${
                        index === 1 ? "2xl:w-[89px] xl:w-[89px] lg:w-[89px] md:w-[89px] sm:w-[80px] w-[80px] 2xl:h-[36px] xl:h-[23px] lg:h-[23px] md:h-[23px] sm:h-[21px] h-[21px]" : ""
                      }
                      ${
                        index === card2.length - 1 ? "2xl:w-[128px] xl:w-[128px] lg:w-[128px] md:w-[128px] sm:w-[100px] w-[100px] 2xl:h-[26px] xl:h-[26px] lg:h-[26px] md:h-[26px] sm:h-[20px] h-[20px]" : ""
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SalarySection;
