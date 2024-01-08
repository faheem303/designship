import React, { useState } from "react";
import PricingCards from "../Component/PricingCards";
import StartedCards from "../Component/StartedCards";
import { v4 as uuidv4 } from "uuid";

const pricingData = [
  {
    id: uuidv4(),
    title: "Standard ",
    subTitleCard:"Design Only",
    para: "Best if you have your own developer and regularly need help with design.",
    amount: "$2,999",
    idata : [
      {
        id: uuidv4(),
        pripara:"One task at a time",
      },
      {
        id: uuidv4(),
        pripara:"1 designer dedicated to your project",
      },
      {
        id: uuidv4(),
        pripara:"Dedicated project manager",
      },
      {
        id: uuidv4(),
        pripara:"Unlimited tasks",
      },
      {
        id: uuidv4(),
        pripara:"Unlimited UI UX design",
      },
      {
        id: uuidv4(),
        pripara:"Unlimited revisions",
      },
      {
        id: uuidv4(),
        pripara:"Unlimited users",
      },
      {
        id: uuidv4(),
        pripara:"Average 48 hour delivery",
      },
      {
        id: uuidv4(),
        pripara:"Webflow developer (Additional $500)",
      },
    ]
  },
  {
    id: uuidv4(),
    title: "Pro",
    subTitleCard:"Design & Development",
    para: "Best if you need beautiful designs & Webflow development on a regularly.",
    amount: "$4,599",
    idata : [
      {
        id: uuidv4(),
        pripara:"Two tasks at a time",
      },
      {
        id: uuidv4(),
        pripara:"2 designers dedicated to your project",
      },
      {
        id: uuidv4(),
        pripara:"1 Webflow developer",
      },
      {
        id: uuidv4(),
        pripara:"Unlimited graphic animation",
      },
      {
        id: uuidv4(),
        pripara:"Dedicated project manager",
      },
      {
        id: uuidv4(),
        pripara:"Unlimited tasks",
      },
      {
        id: uuidv4(),
        pripara:"Unlimited UI UX design",
      },
      {
        id: uuidv4(),
        pripara:"Unlimited revisions",
      },
      {
        id: uuidv4(),
        pripara:"Unlimited users",
      },
      {
        id: uuidv4(),
        pripara:"Average 24 ~ 48 hour delivery",
      },
    ]
  },
  {
    id: uuidv4(),
    title: "Enterprise",
    subTitleCard:"Priority Design, Development & Management",
    para: "More requests, all services and even better support, always at your disposal.",
    amount: "Contact Us",
    idata : [
      {
        id: uuidv4(),
        pripara:"More than two requests at a time",
      },
      {
        id: uuidv4(),
        pripara:"Everything in PRO",
      },
      {
        id: uuidv4(),
        pripara:"Dedicated designer",
      },
      {
        id: uuidv4(),
        pripara:"Customised solution",
      },
      {
        id: uuidv4(),
        pripara:"White glove onboarding",
      },
      {
        id: uuidv4(),
        pripara:"Priority phone support",
      },
      {
        id: uuidv4(),
        pripara:"Pay by invoice option",
      },
      
    ]
  },
];

function Pricing() {

  const [activeTab, setActiveTab] = useState(1)
  // const [isactive, setIsActive] = useState(false)

  const handleClick = (id) => {
    setActiveTab(id)
  }

  return (
    <>
      <div>
        <div className="w-[95%] py-[100px] mx-auto">
          <div className="flex flex-wrap gap-y-[50px] justify-between mb-[95px]">
            <div className="2xl:w-[59%] xl:w-[59%] lg:w-[59%] md:w-[100%] sm:w-[100%] w-[100%]">
              <h6 className="uppercase text-[14px] font-[700] text-[#ff70d3] tracking-[1px] mb-[24px]">
                pricing
              </h6>
              <h3 className="text-[2rem] text-[#02055d] font-[700] mb-[16px]">
                Choose your plan{" "}
                <span className="text-[2rem] text-[#02055d] font-[400]">
                  – adapt it to your needs
                </span>
              </h3>
              <p className="text-[1rem] text-[#000000bf] font-[400] mb-[16px]">
                Simple pricing. Just like getting a new hire, except you’re
                getting access to a diverse array of experts. Our dedicated team
                plans are perfect for companies looking to complete
                multi-faceted projects while staying lean.
              </p>
            </div>
            <div className="2xl:w-[37%] xl:w-[37%] lg:w-[37%] md:w-[100%] sm:w-[100%] w-[100%] flex items-end justify-end pb-[30px]">
              {/* <span onClick={()=> handleClick(1)} className={`cursor-pointer border-b-[2px] border-[#faf3f0] text-[#000000bf] text-[22px] font-[400] hover:text-[#02055d] mr-[18px] pb-[2px] hover:border-b-[2px] hover:border-[#02055d] hover:border-solid ${activeTab === 1?"font-[700] text-[#02055d] border-b-[2px] border-[#02055d] border-solid":""}`}>
                Dedicated Team
              </span> */}
              <span onClick={()=> handleClick(2)} className={`cursor-pointer text-[22px] font-[600] text-[#02055d] mr-[18px] pb-[2px] hover:border-[#02055d] hover:border-solid `}>
                Monthly Buckets
              </span>
            </div>
          </div>
          <div>
          <div className="flex flex-wrap 2xl:justify-between xl:justify-between lg:justify-between md:justify-between sm:justify-center justify-center items-center gap-y-[40px]">
            {pricingData.map((item, id) => (
              <div className="2xl:w-[32%] xl:w-[32%] lg:w-[32%] md:w-[48%] sm:w-[70%] w-[100%] ">
                <StartedCards
                subTitleCard={item.subTitleCard}
                idata={item.idata}
                  cardTitle={item.title}
                  cardPara={item.para}
                  amount={item.amount}
                  hourly={item.hourly}
                />
              </div>
            ))}
          </div>
            {/* {
              activeTab === 1 ?(
          <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col gap-y-[50px] items-center justify-between">
            <div className="2xl:w-[49%] xl:w-[49%] lg:w-[49%] md:w-[60%] sm:w-[70%] w-[100%]">
              <PricingCards isBackground={true} />
            </div>
            <div className="2xl:w-[49%] xl:w-[49%] lg:w-[49%] md:w-[60%] sm:w-[70%] w-[100%]">
              <PricingCards isBackground={false} isButton={true} />
            </div>
          </div>
              ):("")
            }
            {
              activeTab === 2?(
          <div className="flex flex-wrap 2xl:justify-between xl:justify-between lg:justify-between md:justify-between sm:justify-center justify-center items-center gap-y-[40px]">
            {pricingData.map((item, id) => (
              <div className="2xl:w-[32%] xl:w-[32%] lg:w-[32%] md:w-[48%] sm:w-[70%] w-[100%] ">
                <StartedCards
                subTitleCard={item.subTitleCard}
                idata={item.idata}
                  cardTitle={item.title}
                  cardPara={item.para}
                  amount={item.amount}
                  hourly={item.hourly}
                />
              </div>
            ))}
          </div>
              ):("")
            } */}

          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
