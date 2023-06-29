import React from "react";
import sliderimg from "../assets/images/slider2.min.png";
import overlayreverse from "../assets/images/overlayreverse.min.png";
import vector1 from "../assets/vector/Vector-1.min.png";
import shield from '../assets/images/shield.png'

function SliderCardReverse() {
  return (
    <div className="sliderCardReverse sm:h-auto h-auto relative top-5 left-0 px-4">
      <div className="slide-container flex flex-col sm:flex-row justify-around items-center">
        <div className="sm:w-[48%] w-full  text-start sm:py-0 py-2 sm:mt-0 mt-3  my-10">
          <div className="absolute top-8 left-0">
            <img src={shield} alt="" className="w-[35px] px-2" />
          </div>
          <img
            src={sliderimg}
            alt=""
            className="absolute  top-[3rem] sm:left-44 left-8 z-10 w-80 rounded-xl border-none"
          />
          <img
            src={overlayreverse}
            alt=""
            className="absolute sm:top-16 top-16 sm:left-56 left-20 w-72"
          />
          {/* <div className="absolute bottom-4 right-[700px]">
            <img src={shield} alt="" className="w-[30px] px-2" />
          </div> */}
        </div>
        <div className=" sm:w-[48%] w-full text-black text-start sm:py-0 py-2 sm:mt-0 mt-64  my-10">
          <div className=" px-1">
            <h1 className="Heading py-3 text-3xl font-bold ">SELF-CHECKOUT VERIFICATION</h1>
            <ul className="list-disc flex-row sm:flex-col">
              <li className="py-3 sm:px-3 px-1 text-base leading-7  my-1">
                {/* We help transform all retail
                <span className="text-lg px-1">OFFLINE</span>
                businesses in <span className="text-lg pr-1">INDIA</span>
                into self-checkout stores without any additional hardware
                installations. */}
                As the name suggests, self-checkout verification requires customers to scan their items, enter their payment information, and provide their phone number/ID to confirm their identity.
                We offer a service to help retail businesses which are currently offline in India transition into self-checkout stores without the need for extra hardware. 
              </li>

              {/* <li className="py-3 px-3 text-sm my-1">
                To mitigate the risk of theft/mismanagement, we also provide an
                extra layer of security to the existing
                <span className="text-lg px-1">Self-Checkout Stores</span>.
              </li> */}

              <li className="py-3 px-3 text-base leading-7 my-1">
                To protect them from theft or mismanagement, we provide an extra layer of security that triggers an alarm with video clips to the management if needed. Thus, making it hassle-free for both customers and retailers!
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderCardReverse;
