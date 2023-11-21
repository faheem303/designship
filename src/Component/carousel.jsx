import React, { useRef } from 'react';
import img1 from "../assets/images/Web-design-1-677x1024.webp"
import img2 from "../assets/images/Packaging-1-677x1024.webp"
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