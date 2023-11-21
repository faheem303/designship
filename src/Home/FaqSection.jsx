import { FaPlus, FaMinus } from "react-icons/fa6";


import React, { useState } from "react";

const FaqItem = ({ question, answer, isOpen, toggleItem }) => {
  const createMarkup = () => ({ __html: answer });

  return (
    <div className="border-b-[1px] border-[#0000001a] border-solid">
      <div
        className="flex justify-between items-center py-[38px] gap-[25px] cursor-pointer"
        onClick={toggleItem}
      >
        <div
          className={`2xl:text-[25px] xl:text-[25px] lg:text-[25px] md:text-[20px] sm:text-[20px] text-[20px] font-[400] ${
            isOpen ? "text-[#8f78f0]" : ""
          }`}
        >
          {question}
        </div>
        <div className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[18px] sm:text-[18px] text-[18px]">{isOpen ? <FaMinus /> : <FaPlus />}</div>
      </div>
      {isOpen && (
        <div className="pb-[45px] 2xl:w-[90%] xl:w-[90%] lg:w-[90%] md:w-[90%] sm:w-[100%] w-[100%] mx-auto pr-[10px]">
          <p
            className="link 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[14px] text-[14px]"
            dangerouslySetInnerHTML={createMarkup()}
          />
        </div>
      )}
    </div>
  );
};
const FaqSection = () => {
  const faqData = [
    {
      question: "What's the catch?",
      answer:
        "There is no catch. You can submit unlimited requests for any of our services. We will then discuss the priorities with you and start working on these tasks in the agreed order as long as you are subscribed to one of the packages. If you are on the <strong>standard</strong> package, only one person will work on your project at any given time, so only one request or task will be worked on at a time. If you are on the <strong>enterprise</strong> package, we can work on two requests or tasks simultaneously.",
    },
    {
      question: "What counts as a request?",
      answer:
        "A <strong>request</strong> or a <strong>task</strong> is any to-do you assign us. It can be to design a logo, do revisions to an existing design, do website maintenance, or anything else. A <strong>request</strong> is anything that requires someone from our team to work on any of your projects.",
    },
    {
      question: "Who will I be working with?",
      answer:
        "You will have a dedicated account manager who will be your main point of contact, and they will oversee the processes, plans and billing. You will also have a project manager working behind the scenes arranging for the day-to-day tasks to be defined, reviewed and delivered on time by the art director and senior designers assigned to your project.",
    },
    {
      question: "What billing options do you offer and can I cancel anytime?",
      answer:
        "You can pay by a card or bank transfer (international or local), whichever is best for you.",
    },
    {
      question: "How can I cancel my graphic and web design subscription?",
      answer:
        "You can use our subscription for as long as you’d like and can cancel anytime! There are no hidden fees or penalties for cancelation; the subscription will simply not renew from the following month. If you need to cancel the subscription, you can do so from your account or by letting us know.",
    },
    {
      question: "What project management tools do you use?",
      answer:
        "We use ClickUp for our internal processes and for time tracking, so we can invite multiple members of your team to the ClickUp board and manage everything there. We can also join other project management tools that you are already using if you prefer.",
    },
    {
      question: "What services do you offer?",
      answer:
        "We offer a wide range of services, including website design and development, graphic design, e-commerce solutions, branding and identity design, UX/UI design, motion graphics creation and video production.",
    },
    {
      question: "Can you create custom branding and logo designs?",
      answer:
        "Yes, we offer custom branding and logo design services to help establish and strengthen your brand identity.",
    },
    {
      question: "Can you help with website maintenance and updates?",
      answer:
        "Yes, we offer ongoing website maintenance and support services to ensure that your website remains up-to-date and secure.",
    },
    {
      question: "Do you offer training or support for using my website or designs?",
      answer:
        "Yes, we offer training and support services to help our clients effectively use and manage their websites or design assets.",
    },
    {
      question: "Do you provide website hosting and domain registration?",
      answer:
        "Yes, we offer website hosting and domain registration services to simplify the process of launching and maintaining your website.",
    },
    {
      question: "How do you ensure that my website is optimized for mobile devices?",
      answer:
        "We use responsive design techniques to ensure that your website is optimized for viewing on a variety of devices, including mobile.",
    },
    {
      question: "Can you provide analytics and reporting for my website or app??",
      answer:
        "Yes, we can set up analytics and reporting to help track and measure the performance of your website.",
    },
    {
      question: "How do I get started working with Passionates?",
      answer:
        "If you’d like to learn more or speak to an account manager, please <a className='text-[red]' href=''>book a call</a>. If you’re ready to start, simply proceed through the checkout with one of the <a href=''>packages</a>, and we can discuss your tasks and start working on your project immediately.",
    },
    // Add more FAQ items as needed
  ];
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (index) => {
    const isOpen = openItems.includes(index);
    if (isOpen) {
      setOpenItems(openItems.filter((item) => item !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };

  return (
    <>
      <div>
        <div className="w-[95%] mx-auto">
          <div className="2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[90%] w-[100%] mx-auto">
            <h2 className="2xl:text-[40px] xl:text-[40px] lg:text-[40px] md:text-[33px] sm:text-[25px] text-[25px] font-[400] py-[30px]">
              Frequently asked questions
            </h2>
          </div>
          <div className="2xl:w-[90%] xl:w-[90%] lg:w-[90%] md:w-[90%] sm:w-[90%] w-[100%] mx-auto">
            <div className="">
              {faqData.map((faq, index) => (
                <FaqItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openItems.includes(index)}
                  toggleItem={() => toggleItem(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqSection;
