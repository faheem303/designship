import React from "react";
import { v4 as uuidv4 } from 'uuid';
import img1 from "../assets/logo/logo.png"
import img2 from "../assets/logo/2.png"
import img3 from "../assets/logo/3.png"
import img4 from "../assets/logo/4.png"
import img5 from "../assets/logo/5.png"
import img6 from "../assets/logo/6.png"
import img7 from "../assets/logo/7.png"
import img8 from "../assets/logo/8.png"
import img9 from "../assets/logo/9.png"
import img10 from "../assets/logo/10.png"
import img11 from "../assets/logo/11.png"
import img12 from "../assets/logo/12.png"



const ImgData =[
  {
    id:1,
    logo:img1,
  },
  {
    id:2,
    logo:img1,
  },
  {
    id:3,
    logo:img1,
  },
  {
    id:4,
    logo:img1,
  },
  {
    id:5,
    logo:img1,
  },
  {
    id:6,
    logo:img1,
  },
  {
    id:7,
    logo:img1,
  },
  {
    id:8,
    logo:img1,
  },
  {
    id:9,
    logo:img1,
  },
  {
    id:10,
    logo:img1,
  },
  {
    id:11,
    logo:img1,
  },
  {
    id:12,
    logo:img1,
  },

]
const BrandLogos = ({className}) => {
  return (
    <>
      <section className="logoMarqueeSection py-[100px]">
        <div className="container" id="logoMarqueeSection">
          <div className="default-content-container flex items-center">
            <div className="default-content-container-inner marquee-wrapper ">
              <div className="marquee">
                {
                  ImgData.map((item)=>(
                    <a target="_blank">
                    <img src={item.logo} className={className} />
                  </a>
                  ))
                }
              
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default BrandLogos;
