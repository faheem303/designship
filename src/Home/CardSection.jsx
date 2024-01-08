import React from "react";
// import Img from "../Assets/svgs/twitter.svg";
import { v4 as uuidv4 } from "uuid";
import AnimateCard from "../Component/AnimateCard";
import img1 from "../assets/images/howto (2).gif"
import img2 from "../assets/images/howto (1).gif"
import img3 from "../assets/images/howto (3).gif"
import img4 from "../assets/images/howto (1).png"
import img5 from "../assets/images/howto (4).gif"


const cardsData = [
  {
    id: uuidv4(),
    icon: img1,
    title: "Your board",
    para: "All your designs statuses in one place. Backlog, active requests and approved work.",
  },
  {
    id: uuidv4(),
    icon: img2,
    title: "Your entire team",
    para: "Don’t have time to manage some tasks? Invite unlimited team members.",
  },
  {
    id: uuidv4(),
    icon: img3,
    title: "No commitments",
    para: "Month-to-month collaboration with no contracts. Enjoy it or cancel it. It’s up to you!",
  },
  {
    id: uuidv4(),
    icon: img4,
    title: "Scalable System",
    para: "Freedom to scale your design needs easier than ever.",
  },
  {
    id: uuidv4(),
    icon: img3,
    title: "Outstanding work",
    para: "Tired of templates and boring designs? Take it to the next level and wow your clients.",
  },
  {
    id: uuidv4(),
    icon: img5,
    title: "Custom made",
    para: "All designs with follow the same look and feel of your product. Consistency is the key!",
  },
];

function CardSection() {
  return (
    <>
      <div>
        <div className="w-[95%] mx-auto py-[100px]">
          <h2 className="2xl:text-[40px] xl:text-[40px] lg:text-[40px] md:text-[33px] sm:text-[25px] text-[25px] font-[400] 2xl:w-[50%] xl:w-[50%] lg:w-[55%] md:w-[70%]  sm:w-[80%] w-[100%] pb-[60px]">
            What do you get with our design subscription?
          </h2>
          <div className="flex flex-wrap justify-center mx-auto w-[90%]">
            {cardsData.map((item, id) => (
              <AnimateCard
                icon={item.icon}
                cardHeading={item.title}
                cardPara={item.para}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CardSection;
