import React from "react";
import slider3 from "../assets/images/slider3.min.png";
import overlayimg from "../assets/images/overlayimg.min.png";
import vector1 from "../assets/vector/Vector-1.min.png";

function Slider2Card() {
  return (
    <div className="Slider2Card sm:h-auto h-auto relative sm:h-auto h-auto relative top-5 left-0 px-4">
      <div className="slide-container flex flex-col sm:flex-row justify-around items-center ">
        <div className="vector">
          <img src={vector1} alt="" className="w-14 px-2" />
        </div>
        <div className="sm:w-[48%] w-full text-white text-start sm:py-0 py-2 sm:mt-0 mt-48  my-10">
          <div className=" Slider-bullets px-3 sm:text-start ">
            <h1 className="Heading sm:py-2 py-4 text-3xl ">CUSTOMER RETENTION</h1>
            <ul className="list-disc">
              {/* <li className="py-1 my-1 text-sm leading-8  ">
                Offline retargeting made easy with our INSIGHTFUL DATA analysis
              </li> */}

              <li className="py-1 my-1  text-base leading-7">
                  Our insightful data analysis makes offline retargeting simple. We help understand customer needs and preferences, along with buying patterns which are thoroughly analysed before reaching a final conclusion!  
              </li>
              <hr className="line-3" />

              <li className="py-2 my-1 text-base leading-7">
                  Our unique  CV technology, which  will assist the governing management in tracking detailed user activity information in a manner similar to online retargeting. How this works is that before 12 noon the next day, we deliver our data analysis through email or WhatsApp. 
              </li>
            </ul>
          </div>
          <div className="absolute bottom-2 left-72">
            <img src={vector1} alt="" className="w-14 px-2" />
          </div>
        </div>
        <div className="sm:w-[48%] w-full ">
          <img
            src={slider3}
            alt=""
            className="absolute sm:top-9 top-4 sm:right-24 right-8 z-10 w-80 rounded-xl border-none"
          />
          <img
            src={overlayimg}
            alt=""
            className="absolute sm:top-4 top-2  sm:right-36  right-20 w-72"
          />
        </div>
      </div>
    </div>
  );
}

export default Slider2Card;
