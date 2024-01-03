import React from "react";
// import Img from "../Assets/svgs/twitter.svg";
import { v4 as uuidv4 } from "uuid";
import AnimateCard from "../Component/AnimateCard";
import { FaRegClock } from "react-icons/fa6";

const cardsData = [
  {
    id: uuidv4(),
    icon: <FaRegClock />,
    title: "Unlimited requests",
    para: "Make unlimited requests while subscribed, just like having an in-house designer. However many tasks or revisions you may have, we'll tackle them all in order, working on up to one or two requests at a time, depending on your subscription plan.",
  },
  {
    id: uuidv4(),
    icon: <FaRegClock />,
    title: "Full ownership",
    para: "You will receive complete ownership of all designs or other assets produced as part of the engagement, including source files. You will also have access to dozens of licenses, plugins and tools free of charge!",
  },
  {
    id: uuidv4(),
    icon: <FaRegClock />,
    title: "No obligation contract",
    para: "You can use our subscription for as long as you’d like and can cancel anytime! There are no hidden fees or penalties for cancelation; the subscription will simply not renew from the following month. You can cancel from your account or by letting us know.",
  },
  {
    id: uuidv4(),
    icon: <FaRegClock />,
    title: "Premium quality without the price tag",
    para: "Access the top 0.5% of talent for branding, graphic design, motion graphics, video production, UI/UX, web design, and web development for the cost of hiring a mid-level designer. Get premium design agency services with project management and art direction without a hefty price tag.",
  },
  {
    id: uuidv4(),
    icon: <FaRegClock />,
    title: "Seamless integration",
    para: "We will create a ClickUp task board where you and your team can review progress. You can also email in tasks, and we're happy to integrate with your existing communication flows; if you want us to join your Slack or use another tool, just let us know!",
  },
  {
    id: uuidv4(),
    icon: <FaRegClock />,
    title: "Flexibility and lightning speed",
    para: "We pride ourselves on a very fast turnaround speed by all design agency standards. Typically, you can expect to receive an update from us every 1-3 working days (depending on the size of the request), so you’ll never be left waiting for long!",
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
