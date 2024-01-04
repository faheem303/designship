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

    gsap.to(rowOneRef.current, {
      x: 80, // Adjust the distance to move the row
      ease: 'none',
      duration: 0.8, // Adjust the duration to change the speed
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: 'top 90%',
        end: 'bottom 10%',
        scrub: true,
      },
    });

    gsap.to(rowTwoRef.current, {
      x: -80, // Adjust the distance to move the row
      ease: 'none',
      duration: 0.8, // Adjust the duration to change the speed
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: 'top 90%',
        end: 'bottom 10%',
        scrub: true,
      },
    });
  }, []);

  return (
    <div className='2xl:space-y-8 xl:space-y-8 lg:space-y-8 mg:space-y-8 sm:space-y-8 space-y-0 2xl:py-12 xl:py-12 lg:py-12 md:py-12 sm:py-6 py-4 wrapper relative 2xl:h-[1300px] xl:h-[1100px] lg:h-[852px] md:h-[72vh] sm:h-[52vh]  h-[310px] overflow-hidden' ref={wrapperRef}>
      <div className='flex items-end gap-6 pt-8 row-one 2xl:w-[130%] xl:w-[130%] lg:w-[120%] md:w-[115%] sm:w-[110%] w-[106%]  absolute 2xl:left-[-150px] xl:left-[-150px] lg:left-[-90px] md:left-[-60px] sm:left-[-27px] left-[-8px]' ref={rowOneRef} >
        <div className='2xl:h-[300px] xl:h-[300px] lg:h-[300px] md:h-[auto] sm:h-[auto] h-[auto] w-[600px] flex items-end'><img className='rounded-[20px] overflow w-[100%]' src={img1} alt="" /></div>
        <div className=' w-[1000px]  flex items-end'><img className='rounded-[20px] w-[100%]' src={img2} alt="" /></div>
        <div className='2xl:h-[300px] xl:h-[300px] overflow lg:h-[300px] md:h-[auto] sm:h-[auto] h-[auto] w-[700px] flex items-end'><img className='rounded-[20px] w-[100%]' src={img3} alt="" /></div>
      </div>
      <div className='flex items-start gap-6 pt-8 row-two 2xl:w-[130%] xl:w-[130%] lg:w-[120%] md:w-[115%] sm:w-[110%] w-[106%]  absolute 2xl:left-[-150px] xl:left-[-150px] lg:left-[-90px] md:left-[-60px] sm:left-[-27px] left-[-8px] bottom-[0px]' ref={rowTwoRef} >
        <div className='2xl:h-[300px] xl:h-[300px] lg:h-[300px] md:h-[auto] sm:h-[auto] h-[auto] w-[600px] flex items-start'><img className='rounded-[20px] overflow w-[100%]' src={img4} alt="" /></div>
        <div className=' w-[1000px]  flex items-start'><img className='rounded-[20px] w-[100%]' src={img5} alt="" /></div>
        <div className='2xl:h-[300px] xl:h-[300px] overflow lg:h-[300px] md:h-[auto] sm:h-[auto] h-[auto] w-[700px] flex items-start'><img className='rounded-[20px] w-[100%]' src={img6} alt="" /></div>
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