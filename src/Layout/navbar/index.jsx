import React, {useState} from "react";
import Logo from "../../assets/logo/logo.png"
import menu from "../../assets/icons/menu.svg"
import { Link } from "react-router-dom";


function Navbar() {

  const [navBarOpen, setNavBarOpen] = useState(false);

  const handleNavbarMenu = () => {
      setNavBarOpen(!navBarOpen)
  }
  const handleNavbarMenuClose = () => {
      setNavBarOpen(false)

  }
  return (
    <div className="w-[100%] z-[99]">
      <div className="containers min-h-[84px] flex items-center ">
        <div className="flex items-center justify-between w-[100%]  ">
          <div className="max-w-[200px] 2xl:w-[200px] xl:w-[200px] lg:w-[200px] md:w-[200px] sm:w-[200px] w-[120px]">
          <Link to="/" >
            <img src={Logo} alt="" />
            </Link>
          </div>
          <div className=" items-center space-x-12 2xl:flex xl:flex lg:flex  hidden sm:hidden md:hidden">
            <a href="#services" className="font-[600] text-[16px] outline-none">Services</a>
            <Link to="portfolio" >
            <a href="" className="font-[600] text-[16px] outline-none">Portfolio</a>
            </Link>
            <a href="#pricing" className="font-[600] text-[16px] outline-none">Pricing</a>
            <a href="" className="font-[600] text-[16px] outline-none">About</a>
            <a href="" className="font-[600] text-[16px] outline-none">Blog</a>
          </div>
          <div className="flex items-center justify-end space-x-3 2xl:w-[auto] xl:w-[auto] lg:w-[auto] md:w-[auto] sm:w-[auto] w-[80%]">
            <button className="py-3 px-7 rounded-[14px] border border-black hover:bg-black hover:text-white font-[600]">Book a Call</button>
            <div className='2xl:hidden xl:hidden lg:hidden md:block sm:block xs:block '>
              <img src={menu} onClick={handleNavbarMenu} alt="" />
            </div>
          </div>
          {
                            navBarOpen &&
                            <div className='  ' >

                                <div className='absolute bg-black left-0 top-20 w-[100%] z-[9999] h-[full] space-y-8 py-12 px-6 2xl:hidden xl:hidden lg:hidden text-center   '>
                                    <h4 className='text-white font-[poppins] text-[16px] font-[400] hover:text-[#a0a0a0]' onClick={handleNavbarMenuClose}  ><a href="">Services</a></h4>
                                    <h4 className='text-white font-[poppins] text-[16px] font-[400] hover:text-[#a0a0a0]' onClick={handleNavbarMenuClose} > <a href="#">Portfolio</a> </h4>
                                    <h4 className='text-white font-[poppins] text-[16px] font-[400] hover:text-[#a0a0a0]' onClick={handleNavbarMenuClose} > <a href="#">Pricing</a> </h4>
                                    <h4 className='text-white font-[poppins] text-[16px] font-[400] hover:text-[#a0a0a0]' onClick={handleNavbarMenuClose} > <a href="#">About</a> </h4>
                                    <h4 className='text-white font-[poppins] text-[16px] font-[400] hover:text-[#a0a0a0]' onClick={handleNavbarMenuClose}> <a href="#">Blog</a></h4>
                                    <li className='flex items-center'>


                                    </li>

                                </div>
                            </div>
                        }

        </div>
      </div>
    </div>
  );
}

export default Navbar;
