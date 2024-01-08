import React from "react";
import HeroSection from "./Herosection";
import YourAssets from "./Yourassets";
import NeedaStartSection from "./NeedAstartSection";
import HowItWorkSection from "./HowItWorkSection";
import Portfolio from "../Pages/Portfolio";
import BrandLogos from "../Component/brandlogo";
import CardSection from "./CardSection";
import PriceSection from "../Home/PriceSection";
import FaqSection from "./FaqSection";
import ProjectSection from "./ProjectSection";
import Services from "./ServicesSection";
import Salary from "./SalarySection";
import OverpaySection from "./OverpaySection";

function Home() {
  return (
    <div className="">
      <div className="pt-[6rem] backgroungmain">
        <HeroSection />
        <HowItWorkSection />
        <ProjectSection />
        <Services />
        <CardSection/>
        <YourAssets />
        {/* <NeedaStartSection /> */}
        <PriceSection/>
        <Salary/>
        <OverpaySection />
        <BrandLogos />
        <FaqSection/>
      </div>
    </div>
  );
}

export default Home;
