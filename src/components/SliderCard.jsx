import React from "react";
import sliderimg from "../assets/images/slider1.min.png";
import overlayimg from "../assets/images/overlayimg.min.png";
import vector1 from "../assets/vector/Vector-1.min.png";

function SliderCard() {
  return (
    <div className="SliderCard sm:h-auto h-auto relative top-5 left-0 px-4">
      <div className="slide-container flex flex-col sm:flex-row justify-around items-center">
        <div className="vector">
          <img src={vector1} alt="" className="w-14 px-2" />
        </div>
        <div className="sm:w-[48%] w-full text-white sm:text-start text-center sm:py-0 py-2 sm:mt-0 mt-48  my-10">
          <div className=" Slider-bullets px-3 sm:text-start">
            <h1 className="Heading sm:py-2 py-4 text-3xl">POS Verifcation</h1>
            <ul className="list-disc">
              <li className="py-1 my-1 text-base leading-7 ">
                The counter where a consumer pays for their items at a retail establishment is known as the "point of sale," or "POS." This cash register uses computers to process sales and payments. The customer's selections are processed at the POS counter, and a bill is generated. 
              </li>

              {/* <hr className="line-3" />

              <li className="py-2 my-1  text-sm">
                It enables us to put a check on duplicate bills.
              </li> */}
              <hr className="line-3" />

              <li className="py-2 my-1 text-base leading-7 ">


                We provide a specific API that links to the existing POS billing software(s) in the stores. It enables us to put a check on duplicate bills.  In case of discrepancies, the trigger points along with the specific video clippings will be shared with the client on their registered WhatsApp/email.
              </li>
              {/* <hr className="line-3" /> */}
            </ul>
          </div>
        </div>
        <div className="sm:w-[48%] w-full m-auto ">
          <img
            src={sliderimg}
            alt=""
            className="absolute sm:top-9 top-4 sm:right-24 right-8 z-10 w-80 rounded-xl border-none"
          />
          <img
            src={overlayimg}
            alt=""
            className="absolute sm:top-4 top-2  sm:right-36  right-20 w-72"
          />
        </div>
        <div className="absolute top-4 right-10">
          <img src={vector1} alt="" className="w-14 px-2" />
        </div>
      </div>
    </div>
  );
}

export default SliderCard;
