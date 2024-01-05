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
      x: 100, // Adjust the distance to move the row
      ease: 'none',
      duration: 1.5, // Adjust the duration to change the speed
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: 'top 90%',
        end: 'bottom 10%',
        scrub: true,
      },
    });

    gsap.to(rowTwoRef.current, {
      x: -100, // Adjust the distance to move the row
      ease: 'none',
      duration: 1.5, 
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: 'top 90%',
        end: 'bottom 10%',
        scrub: true,
      },
    });
  }, []);

  return (
    <div className=' 2xl:py-12 xl:py-12 lg:py-12 md:py-12 sm:py-6 py-4 wrapper  overflow-hidden' ref={wrapperRef}>
      <div className='flex items-end justify-center gap-6 pt-8 row-one 2xl:w-[130%] xl:w-[130%] lg:w-[120%] md:w-[115%] sm:w-[110%] w-[106%] ' ref={rowOneRef} >
       <div className='flex fstbox gap-6'>
       <div className='w-[28%]  flex items-end'><img className='rounded-[20px] h-[auto] max-h-[280px] overflow w-[100%]' src={img1} alt="" /></div>
        <div className='w-[44%]  flex items-end'><img className='rounded-[20px] w-[100%]' src={img2} alt="" /></div>
        <div className='w-[28%] flex items-end'><img className='rounded-[20px] h-[auto] max-h-[280px] w-[100%]' src={img3} alt="" /></div>
       </div>
      </div>
      <div className='flex items-start justify-center gap-6 pt-8 row-two 2xl:w-[130%] xl:w-[130%] lg:w-[120%] md:w-[115%] sm:w-[110%] w-[106%]  ' ref={rowTwoRef} >
        <div className='flex sndbox gap-6'>
        <div className='w-[28%] flex items-start'><img className='rounded-[20px] h-[auto] max-h-[280px] overflow w-[100%]' src={img4} alt="" /></div>
        <div className='w-[44%]  flex items-start'><img className='rounded-[20px] w-[100%]' src={img5} alt="" /></div>
        <div className='w-[28%] flex items-start'><img className='rounded-[20px] h-[auto] max-h-[280px] w-[100%]' src={img6} alt="" /></div>
        </div>
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