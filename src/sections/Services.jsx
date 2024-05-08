import React from "react";
import bg from "../assets/Bg-Services.png";
import Mobile from "../assets/ServiceBgMobile.png";
import Travel from '../assets/Travel.png'
import Guesthouse from '../assets/Guesthouse.png'
import Laundry from '../assets/Laundry.png'
import Health from '../assets/Health.png'
import Facility from '../assets/Facility.png'
import Outsource from '../assets/Outsource.png'
import Food from '../assets/Food.png'
import Township from '../assets/Township.png'

const Services = () => {
  return (
    <div>
      <div className="absolute w-full hidden md:block  md:px-24 md:py-16">
        <div className="flex justify-between w-full">
          <div className=" flex md:text-4xl text-md justify-center items-center w-full md:justify-start font-bold font-poppins text-[#8BDAFF]">
            Our Services
          </div>
          <div className="">
            <a href="">
              <div className="md:px-16 w-full text-xs md:py-2 mx-4 hidden md:block border rounded text-white border-[#8BDAFF]">
                See All
              </div>
            </a>
          </div>
        </div>
        <div className="font-poppins text-white text-xs flex justify-center md:justify-start items-center w-full mx-2 text-center md:text-lg md:pt-4">
          Take a look at the variety of services we provide to make your dreams
          a reality
        </div>
        <div className="row-1 flex mt-36">
          <div className="w-1/4 md:px-12 mx-4">
            <div className="md:mb-8 md:mt-3"><img src={Facility} alt="" /></div>
            <div className="text-[#8BDAFF] md:text-xl text-xs mt-4 md:mt-12 font-poppins font-bold">
              Facility Management
            </div>
            <div className="text-white font-poppins text-xs text-justify mt-2 ">
              Oversee the upkeep and operation of a building or physical
              location.
            </div>
          </div>
          <div className="w-1/4 md:px-12 mx-4">
            <div className="md:mb-8">
              <img src={Laundry} alt="" />
            </div>
            <div className="text-[#8BDAFF] md:text-xl text-xs font-poppins font-bold">
              Laundry Management
            </div>
            <div className="text-white font-poppins text-xs text-justify mt-2 ">
              Handle the washing, drying, ironing, and overall care of linens
              and garments.
            </div>
          </div>
          <div className="w-1/4 md:px-12 mx-4">
            <div className="md:mb-8"><img src={Food} alt="" /></div>
            <div className="text-[#8BDAFF] md:text-xl text-xs font-poppins font-bold">
              Food Service Management
            </div>
            <div className="text-white font-poppins text-xs text-justify mt-2 ">
              Provides planning, preparation, and serving of meals.
            </div>
          </div>
          <div className="w-1/4 md:px-12 mx-4">
            <div className="md:mb-8"><img src={Township} alt="" /></div>
            <div className="text-[#8BDAFF] md:text-xl hidden md:block text-xs font-poppins font-bold">
              Township Management
            </div>
            <div className="text-white font-poppins text-xs text-justify mt-2 ">
              Oversee the administration of a township, which is a type of
              community.
            </div>
          </div>
        </div>
        <div className="row-2 flex mt-32 mb-16">
          <div className="w-1/4 md:px-12 mx-4">
            <div className="md:mb-8"><img src={Guesthouse} alt="" /></div>
            <div className="text-[#8BDAFF] md:text-xl text-xs font-poppins font-bold">
            Guesthouse Management
            </div>
            <div className="text-white font-poppins text-xs text-justify mt-2 ">
            Managing the operation of a guest house, which is a type of lodging facility.
            </div>
          </div>
          <div className="w-1/4 md:px-12 mx-4">
            <div className="md:mb-8"><img src={Health} alt="" /></div>
            <div className="text-[#8BDAFF] md:text-xl text-xs font-poppins font-bold">
            Healthcare Management
            </div>
            <div className="text-white font-poppins text-xs text-justify mt-2 ">
            Oversee the delivery of healthcare services.
            </div>
          </div>
          <div className="w-1/4 md:px-12 mx-4">
            <div className="md:mb-8"><img src={Travel} alt="" /></div>
            <div className="text-[#8BDAFF] md:md:text-xl  text-xs font-poppins font-bold">
            Travel Management
            </div>
            <div className="text-white font-poppins text-xs text-justify mt-2 ">
            Arrange and manage business travel.
            </div>
          </div>
          <div className="w-1/4 md:px-12 mx-4">
            <div className="md:mb-8"><img src={Outsource} alt="" /></div>
            <div className="text-[#8BDAFF] md:md:text-xl  text-xs font-poppins font-bold">
            Out Source Partnership
            </div>
            <div className="text-white font-poppins text-xs text-justify mt-2 ">
            Oversee the upkeep and operation of a building or physical location.
            </div>
          </div>
        </div>
      </div>
      <div>
        <img className="h-full hidden lg:block" src={bg} alt="" />
        <img className="h-max md:hidden block" src={Mobile} alt="" />
      </div>
    </div>
  );
};

export default Services;
