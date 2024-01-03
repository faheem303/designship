import React, { useRef } from 'react';
import img1 from "../assets/images/Web-design-1-677x1024.webp"
import img2 from "../assets/images/Packaging-1-677x1024.webp"
import cro1 from "../assets/images/cro (1).jpg"
import cro2 from "../assets/images/cro (1).webp"
import cro3 from "../assets/images/cro (2).webp"
import cro4 from "../assets/images/cro (3).webp"
import cro5 from "../assets/images/cro (4).webp"
import left from "../assets/icons/left.png"
import right from "../assets/icons/right.png"

const Carousel = () => {
    const boxRef = useRef(null);

    const btnpressprev = () => {
        if (boxRef.current) {
            const box = boxRef.current;
            let width = box.clientWidth;
            box.scrollLeft -= width;
            console.log(width);
        }
    }

    const btnpressnext = () => {
        if (boxRef.current) {
            const box = boxRef.current;
            let width = box.clientWidth;
            box.scrollLeft += width;
            console.log(width);
        }
    }

    return (
        <div className="product-carousel">
            <div className='flex justify-between py-4'>
                <div>
                    <h3 className='text-[32px]'>Get your assets as soon as tomorrow! </h3>
                </div>
                <div className='flex justify-between w-[150px]'>
                    <button className="pre-btn" onClick={btnpressprev}><img src={left} alt="" /></button>
                    <button className="next-btn" onClick={btnpressnext}><img src={right} alt="" /></button>
                </div>
            </div>
            <div className="product-container" ref={boxRef}>
                <div className='mycard relative' >
                    <img src={img1} alt="" />
                    <h3 className='absolute bottom-[6%] text-[24px] flex items-center font-[500]' > <hr className='w-[50px] h-[1px] text-white mr-3' /> Website Design</h3>
                </div>
                <div className='mycard relative ' >
                    <img src={img2} alt="" />
                    <h3 className='absolute bottom-[6%] text-[24px] text-black flex items-center font-[500]' > <hr className='w-[50px] h-[2px] hrcolor mr-3' />Packaging</h3>
                </div>
                <div className='mycard relative ' >
                    <img src={cro4} alt="" />
                    <h3 className='absolute bottom-[6%] text-[24px] flex items-center font-[500]' > <hr className='w-[50px] h-[1px] text-white mr-3' /> Web development</h3>
                </div>
                <div className='mycard relative ' >
                    <img src={cro3} alt="" />
                    <h3 className='absolute bottom-[6%] text-[24px] flex items-center font-[500]' > <hr className='w-[50px] h-[1px] text-white mr-3' />UI UX and app design</h3>
                </div>
                <div className='mycard relative ' >
                    <img src={cro1} alt="" />
                    <h3 className='absolute bottom-[6%] text-[24px] flex items-center font-[500]' > <hr className='w-[50px] h-[1px] text-white mr-3' /> Graphic design</h3>
                </div>
                <div className='mycard relative ' >
                    <img src={cro2} alt="" />
                    <h3 className='absolute bottom-[6%] text-[24px] flex items-center font-[500]' > <hr className='w-[50px] h-[1px] text-white mr-3' />Ecommerce</h3>
                </div>
                <div className='mycard relative ' >
                    <img src={cro5} alt="" />
                    <h3 className='absolute bottom-[6%] text-[24px] flex items-center font-[500]' > <hr className='w-[50px] h-[1px] text-white mr-3' />Branging</h3>
                </div>
            </div>
        </div>
    );
};

export default Carousel;





{/* <div className="product-container">
<div className='mycard bg-red-500 ' >
    <img src={img1} alt="" />
</div>
<div className='mycard bg-red-500 ' >
<img src={img2} alt="" />
</div>
<div className='mycard bg-red-500 ' >
<img src={img1} alt="" />
</div>
<div className='mycard bg-red-500 ' >
<img src={img2} alt="" />
</div>
<div className='mycard bg-red-500 ' >
<img src={img1} alt="" />
</div>

</div> */}