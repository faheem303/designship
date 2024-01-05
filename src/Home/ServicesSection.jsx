import React, { useState } from "react";
import Button from "../Component/Button";
import { v4 as uuidv4 } from "uuid";

const btnData1 = [
  {
    id: uuidv4(),
    btnText: "WEBFLOW MIGRATIONS",
  },
  {
    id: uuidv4(),
    btnText: "WEBFLOW SEO",
  },
  {
    id: uuidv4(),
    btnText: "WEBFLOW DEVELOPMENT",
  },
  {
    id: uuidv4(),
    btnText: "WEBFLOW DESIGN",
  },
  {
    id: uuidv4(),
    btnText: "WEBFLOW LANDING PAGES",
  },
  {
    id: uuidv4(),
    btnText: "WEBFLOW CMS",
  },
  {
    id: uuidv4(),
    btnText: "WEBFLOW INTEGRATIONS",
  },
  {
    id: uuidv4(),
    btnText: "AUTOMATIONS",
  },
  {
    id: uuidv4(),
    btnText: "SPEED OPTIMIZATION",
  },
  {
    id: uuidv4(),
    btnText: "WEBFLOW",
  },
];
const btnData2 = [
  {
    id: uuidv4(),
    btnText: "WEB DESIGN",
  },
  {
    id: uuidv4(),
    btnText: "BRANGING",
  },
  {
    id: uuidv4(),
    btnText: "UI DESIGN",
  },
  {
    id: uuidv4(),
    btnText: "INTERACTIONS",
  },
  {
    id: uuidv4(),
    btnText: "UX DESIGN",
  },
  {
    id: uuidv4(),
    btnText: "PRODUCT DESIGN",
  },
  {
    id: uuidv4(),
    btnText: "VISUAL DESIGN",
  },
  {
    id: uuidv4(),
    btnText: "PITCH DECKS",
  },
  {
    id: uuidv4(),
    btnText: "BRAND GUIDES",
  },
  {
    id: uuidv4(),
    btnText: "WIREFRAMES",
  },
  {
    id: uuidv4(),
    btnText: "DESIGN SYSTEMS",
  },
  {
    id: uuidv4(),
    btnText: "PROTOTYPING",
  },
];
const btnData3 = [
  {
    id: uuidv4(),
    btnText: "STRATEGY",
  },
  {
    id: uuidv4(),
    btnText: "SITEMAPS",
  },
  {
    id: uuidv4(),
    btnText: "UX AUDITS",
  },
  {
    id: uuidv4(),
    btnText: "UI / UX STRATEGY",
  },
  {
    id: uuidv4(),
    btnText: "COMPETITOR ANALYSIS",
  },
  {
    id: uuidv4(),
    btnText: "MESSAGING FRAMEWORK°",
  },
  {
    id: uuidv4(),
    btnText: "CUSTOMER JOURNEYS",
  },
  {
    id: uuidv4(),
    btnText: "USER PERSONAS",
  },
  {
    id: uuidv4(),
    btnText: "CRO",
  },
  {
    id: uuidv4(),
    btnText: "CONSULTATION",
  },
  {
    id: uuidv4(),
    btnText: "WORKSHOPS",
  },
  {
    id: uuidv4(),
    btnText: "BRAND STRATEGY",
  },
  {
    id: uuidv4(),
    btnText: "CONTENT STRATEGY",
  },
];

function Services() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isAnimating2, setIsAnimating2] = useState(false);
  const [isAnimating3, setIsAnimating3] = useState(false);

  const handleMouseEnter = () => {
    setIsAnimating(true);
  };
  const handleMouseLeave = () => {
    setIsAnimating(true);
  };
  const handleMouseEnter2 = () => {
    setIsAnimating2(true);
  };
  const handleMouseLeave2 = () => {
    setIsAnimating2(true);
  };
  const handleMouseEnter3 = () => {
    setIsAnimating3(true);
  };
  const handleMouseLeave3 = () => {
    setIsAnimating3(true);
  };

  return (
    <>
      <div className="py-[45px]">
        <div className="w-[95%] mx-auto">
          <h6 className="uppercase text-[14px] font-[700] text-[#ff70d3] tracking-[1px] mb-[24px]">
            SERVICES
          </h6>
          <div className="2xl:w-[90%] xl:w-[90%] lg:w-[90%] md:w-[98%] sm:w-[90%] w-[100%]">
            <h3 className="2xl:text-[2.62rem] xl:text-[2.62rem] lg:text-[2.62rem] md:text-[2rem] sm:text-[23px] text-[20px] text-[#02055d] font-[400]">
              Partner with Elastico to{" "}
              <span className="font-[700]">
                extend the reach of your marketing and creative teams.
              </span>{" "}
              Get access to a full range of web experts that will help you scale
              your impact.{" "}
              <span className="font-[700]">
                All at the cost of a single hire.
              </span>
            </h3>
          </div>
        </div>
        <div className="servicecls pt-[95px] flex flex-col gap-[34px]">
          <div
            className={`slider1 w-[3810px] ${isAnimating ? "animate-slide" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex gap-x-10 startSlide">
              {btnData1.map((item, id) => (
                <Button
                  className={`bg-[#d9d9d9] px-[48px] py-[18px]  text-[24px]  text-[#FFF] font-[600] leading-[29px] rounded-[100px] ${isAnimating ? "bg-[#ff70d3]":"bg-[#d9d9d9] "}`}
                  btnText={item.btnText}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              ))}
            </div>
          </div>
          <div
            className={`slider2 w-[3646px] ${isAnimating2 ? "animate-slide2" : ""}`}
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
          >
            <div className="flex gap-x-10 startSlide">
              {btnData2.map((item, id) => (
                <Button
                  className={`bg-[#d9d9d9] px-[48px] py-[18px] text-[24px]  text-[#FFF] font-[600] leading-[29px] rounded-[100px] ${isAnimating2 ? "btn2 ":"bg-[#d9d9d9] "}`}
                  btnText={item.btnText}
                  onMouseEnter={handleMouseEnter2}
                  onMouseLeave={handleMouseLeave2}
                />
              ))}
            </div>
          </div>
          <div
            className={`slider3 w-[4346px] ${isAnimating3 ? "animate-slide3" : ""}`}
            onMouseEnter={handleMouseEnter3}
            onMouseLeave={handleMouseLeave3}
          >
            <div className="flex gap-x-10 startSlide">
              {btnData3.map((item, id) => (
                <Button
                  className={`bg-[#d9d9d9] px-[48px] py-[18px] text-[24px]   text-[#FFF] font-[600] leading-[29px] rounded-[100px] ${isAnimating3 ? "btn3 ":"bg-[#d9d9d9] "}`}
                  btnText={item.btnText}
                  onMouseEnter={handleMouseEnter3}
                  onMouseLeave={handleMouseLeave3}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
