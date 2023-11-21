import React from "react";
import HeroSection from "./Herosection";
import YourAssets from "./Yourassets";
import NeedaStartSection from "./NeedAstartSection";
import HowItWorkSection from "./HowItWorkSection";
import Portfolio from "../Pages/Portfolio";
import BrandLogos from "../Component/brandlogo";
import Services from "./ServicesSection";
import CardSection from "./CardSection";
import PriceSection from "./PriceSection";
import FaqSection from "./FaqSection";
import SalarySection from "./SalarySection";

function Home() {
  return (
    <div className="">
      <div className="pt-[6rem]">
        <HeroSection />
        <NeedaStartSection />
        <HowItWorkSection />
        <Services />
        <CardSection/>
        <YourAssets />
        <PriceSection/>
        <FaqSection/>
        <SalarySection/>
        <BrandLogos />
      </div>
    </div>
  );
}

export default Home;
