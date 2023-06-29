import React from "react";
import feature from "../assets/images/feature.min.png";
import overlayreverse from "../assets/images/overlayreverse.min.png";
import vector2 from "../assets/vector/Vector-2.min.png";
import ChartLine from "../assets/vector/ChartLine.min.png";

function FutureLine() {
  return (
    <div
      div className=" FutureLine relative sm:h-auto h-[830px] top-0 left-0" id="FutureLine">
      <div className="absolute top-0 right-[700px]">
        {/* <img src={vector2} alt="" className="w-8" /> */}
      </div>
      <div className="absolute top-14 left-5">
        <img src={ChartLine} alt="" className="w-14 px-2" />
      </div>
      <div className="absolute bottom-0 right-2">
        <img src={ChartLine} alt="" className="w-10 px-2" />
      </div>
      <div className="absolute bottom-2 left-2">
        <img src={ChartLine} alt="" className="w-10 px-2" />
      </div>
      <div className="absolute top-2 right-2">
        <img src={ChartLine} alt="" className="w-10 px-2" />
      </div>
      <div className="flex flex-col sm:flex-row justify-around items-center">
        <div className="sm:w-[48%] w-full  text-start sm:py-0 py-2 sm:mt-0 mt-3  my-10">
          <img
            src={feature}
            alt=""
            className="absolute sm:top-3 top-2 sm:left-44 left-14 z-10 w-64 rounded-xl border-none"
          />
          <img
            src={overlayreverse}
            alt=""
            className="absolute sm:top-6 top-5 sm:left-40 left-10 w-72"
          />
        </div>
        <div className=" sm:w-[48%] w-full text-black text-start sm:py-0 py-2 sm:mt-0 mt-60  my-10">
          <div className=" px-5">
            <h1 className="py-3 text-4xl font-bold">
              OUR FUTURE LINE OF <span className="Heading-overlay-future">PRODUCTS</span>
            </h1>
            <ul>
              <li className="py-2 my-1 text-base">
                  We are here to provide a revolutionary new generation of IoT-based security products to stores that will allow their customers to make informed decisions about the products they try on. 

              </li>

              <li className="py-3 text-base">
                  Our products act as a bridge between online virtual try-ons and real-time human suggestions allowing customers to find the perfect fit for their needs. We utilize cutting-edge AI technology to provide customers with the most accurate and detailed product suggestions.

                  {/* <span className="text-white"> B2B Model,</span>
                  we offer Quarterly, Half-yearly and Annual subscription plans */}
              </li>
              <li className="py-3 text-orange-500 font-semibold text-base">
                At dotEYE, we make sure your data is locked up as tight as Fort Knox
                
              </li>

              {/* <li className="py-3 text-base">
                  Our products are built with cutting edge security protocols, ensuring that you're always one step ahead of potential threats.
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FutureLine;
