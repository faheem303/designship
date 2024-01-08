import React, { useRef, useState  } from 'react';
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
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const boxRef = useRef(null);


    const handleTouchStart = (e) => {
        setIsDragging(true);
        const touch = e.touches[0];
        setStartX(touch.clientX - boxRef.current.offsetLeft);
        setScrollLeft(boxRef.current.scrollLeft);
    };
    const handleTouchMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const touch = e.touches[0];
        const x = touch.clientX - boxRef.current.offsetLeft;
        const walk = (x - startX) * 2; 
        boxRef.current.scrollLeft = scrollLeft - walk;
    };
    const handleTouchEnd = () => {
        setIsDragging(false);
    };


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
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - boxRef.current.offsetLeft);
        setScrollLeft(boxRef.current.scrollLeft);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.clientX - startX;
        const walk = (x - startX) * 2; // Adjust the scrolling speed
        boxRef.current.scrollLeft = scrollLeft - walk;
      };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

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
            <div 
            className="product-container  cursor-grab"
            ref={boxRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchEnd}
            style={{ touchAction: 'pan-y', width: "100%" }}
           
            >
                <div className='mycard relative' >
                    <img src={img1} alt=""  onDragStart={(e) => e.preventDefault()} />
                    <h3 className='absolute bottom-[6%] text-[24px] flex items-center font-[500]' > <hr className='w-[50px] h-[1px] text-white mr-3' /> Website Design</h3>
                </div>
                <div className='mycard relative ' >
                    <img src={img2} alt=""  onDragStart={(e) => e.preventDefault()}/>
                    <h3 className='absolute bottom-[6%] text-[24px] text-black flex items-center font-[500]' > <hr className='w-[50px] h-[2px] hrcolor mr-3' />Packaging</h3>
                </div>
                <div className='mycard relative ' >
                    <img src={cro4} alt=""  onDragStart={(e) => e.preventDefault()} />
                    <h3 className='absolute bottom-[6%] text-[24px] flex items-center font-[500]' > <hr className='w-[50px] h-[1px] text-white mr-3' /> Web development</h3>
                </div>
                <div className='mycard relative ' >
                    <img src={cro3} alt=""  onDragStart={(e) => e.preventDefault()} />
                    <h3 className='absolute bottom-[6%] text-[24px] flex items-center font-[500]' > <hr className='w-[50px] h-[1px] text-white mr-3' />UI UX and app design</h3>
                </div>
                <div className='mycard relative ' >
                    <img src={cro1} alt=""  onDragStart={(e) => e.preventDefault()} />
                    <h3 className='absolute bottom-[6%] text-[24px] flex items-center font-[500]' > <hr className='w-[50px] h-[1px] text-white mr-3' /> Graphic design</h3>
                </div>
                <div className='mycard relative ' >
                    <img src={cro2} alt=""  onDragStart={(e) => e.preventDefault()} />
                    <h3 className='absolute bottom-[6%] text-[24px] flex items-center font-[500]' > <hr className='w-[50px] h-[1px] text-white mr-3' />Ecommerce</h3>
                </div>
                <div className='mycard relative ' >
                    <img src={cro5} alt=""  onDragStart={(e) => e.preventDefault()} />
                    <h3 className='absolute bottom-[6%] text-[24px] flex items-center font-[500]' > <hr className='w-[50px] h-[1px] text-white mr-3' />Branding</h3>
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