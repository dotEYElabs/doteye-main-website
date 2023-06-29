import React from "react";
import Profile1 from "../assets/images/Profile-1.min.png";
import Profile2 from "../assets/images/Profile-2.min.png";
import ChartLine from "../assets/vector/ChartLine.min.png";

function WhoAre() {
  return (
    <div className="WhoAreWe" id="About">
      <div className="sm:w-[40%] w-full m-auto mt-6  ">
        {/* <div className="relative top-12 left-80 w-7">
          <img src={ChartLine} alt="" />
        </div> */}
        <h1 className="Heading uppercase text-3xl text-center text-black font-black p-3">
          Who <span className="Heading-overlay">Are We</span>
        </h1>

        <p className="text-center text-black py-3 px-1">
          <span className="logo-span font-semibold">DotEYE</span> is born from a strong
          belief that a simplified tech suite is the way forward to help the
          complex retail market.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center text-black m-4 shadow-black">
        <div className="profile-box sm:w-[35%] w-[90%] m-auto h-[365px] xl:h-[365px] lg:h-[410px] md:h-[525px] sm:h-[670px] xs:h-[510px]">
          <div className="m-3">
            <img src={Profile1} alt="" className="mt-2 ml-4 w-16" />
            <h2 className="Heading pt-6 px-4 font-bold">TARUN KOPURI</h2>
            <p className=" py-0 px-4 title">Founder & CEO</p>
            <p className="py-2 px-3 text-base box">
              Meet Tarun. He is a serial entrepreneur with a passion for business. He graduated from Andhra University with a degree in civil engineering. 
              He has a dream of making his business, dotEYE, a global name and providing consumers with the simplest solutions around the world. Tarun is always looking to improve, so he welcomes constructive criticism. He's a man who eats, drinks, and breathes business.
            </p>
          </div>
        </div>
        <div className="profile-box sm:w-[35%] w-[90%] m-auto h-[365px] xl:h-[365px] lg:h-[410px] md:h-[525px] sm:h-[670px] xs:h-[530px]">
          <div className="m-3">
            <img src={Profile2} alt="" className="mt-2 ml-4 w-16" />
            <h2 className="Heading pt-6 px-4 font-bold">GOVARDHAN CHITRADA</h2>
            <p className=" py-0 px-4 title">Co-Founder & CTO</p>
            <p className="py-2 px-3  text-base box">
              Meet Govardhan, He's one smart cookie! holding a postgraduate in Artificial Intelligence and Robotics from the prestigious University of La Sapienza. With a passion for technology and innovation, He is a 2X founder with dotEYE being his second technology venture.
              He is dedicated to upholding the product vision and ensuring success through unwavering focus and determination. <b><i>"Learn, Explore and Thrive to Succeed"</i></b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoAre;
