import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import img1 from "../assets/images/1c.jpg";
import img2 from "../assets/images/2c.jpg";
import img3 from "../assets/images/3c.png";
import img4 from "../assets/images/4c.png";
import img5 from "../assets/images/5c.jpg";
import img6 from "../assets/images/6c.png";

const ScrollAni = () => {
  const wrapperRef = useRef(null);
  const rowOneRef = useRef(null);
  const rowTwoRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const animateRow = (rowRef, start, end) => {
      gsap.to(rowRef, {
        x: end,
        ease: 'none',
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: 'top 80%', // Adjust the start position as needed
          end: 'bottom 20%', // Adjust the end position as needed
          scrub: true,
        },
      });
    };

    animateRow(rowOneRef.current, 0, 50);
    animateRow(rowTwoRef.current, 0, -50);
  }, []);

  return (
    <div className='space-y-8 2xl:py-12 xl:py-12 lg:py-12 md:py-12 sm:py-6 py-4 wrapper overflow-hidden' ref={wrapperRef}>
      <div className='flex items-end gap-6 pt-8 row-one' ref={rowOneRef}>
        <div className='2xl:h-[300px] xl:h-[300px] lg:h-[300px] md:h-[auto] sm:h-[auto] h-[auto] w-[30%] flex items-end'><img className='rounded-[20px]' src={img1} alt="" /></div>
        <div className='2xl:h-[400px] xl:h-[400px] lg:h-[400px] md:h-[auto] sm:h-[auto] h-[auto] w-[50%]  flex items-end'><img className='rounded-[20px]' src={img2} alt="" /></div>
        <div className='2xl:h-[300px] xl:h-[300px] lg:h-[300px] md:h-[auto] sm:h-[auto] h-[auto] w-[30%] flex items-end'><img className='rounded-[20px]' src={img3} alt="" /></div>
      </div>
      <div className='flex items-start gap-6 row-two' ref={rowTwoRef}>
        <div className='2xl:h-[300px] xl:h-[300px] lg:h-[300px] md:h-[auto] sm:h-[auto] h-[auto] w-[30%] flex items-start'><img className='rounded-[20px]' src={img4} alt="" /></div>
        <div className='2xl:h-[400px] xl:h-[400px] lg:h-[400px] md:h-[auto] sm:h-[auto] h-[auto] w-[50%] flex items-start'><img className='rounded-[20px]' src={img5} alt="" /></div>
        <div className='2xl:h-[300px] xl:h-[300px] lg:h-[300px] md:h-[auto] sm:h-[auto] h-[auto] w-[30%] flex items-start'><img className='rounded-[20px]' src={img6} alt="" /></div>
      </div>
    </div>
  );
};

export default ScrollAni;










{/* <div className='flex items-end gap-6 row-one' ref={rowOneRef}>
<div className='h-[300px] w-[25%] flex items-end'><img className='rounded-[20px]' src={img1} alt="" /></div>
<div className='h-[300px]  w-[50%] flex items-end'><img className='rounded-[20px]' src={img2} alt="" /></div>
<div className='h-[300px]  w-[25%] flex items-end'><img className='rounded-[20px]' src={img3} alt="" /></div>
</div>
<div className='flex items-start gap-6 row-two' ref={rowTwoRef}>
<div className='h-[300px] w-[25%] flex items-start'><img className='rounded-[20px]' src={img4} alt="" /></div>
<div className='h-[300px]  w-[50%] flex items-start'><img className='rounded-[20px]' src={img5} alt="" /></div>
<div className='h-[300px]  w-[25%] flex items-start'><img className='rounded-[20px]' src={img6} alt="" /></div>
</div> */}