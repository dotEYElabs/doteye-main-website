import React from "react";
import sliderimg from "../assets/images/slider4.min.png";
import overlayreverse from "../assets/images/overlayreverse.min.png";
import ShieldCheck from "../assets/vector/ShieldCheck.min.png";
import vector1 from "../assets/vector/Vector-1.min.png";

function SliderCardReverse() {
  return (
//     <div className="Slider2CardReverse sm:h-auto h-auto relative sm:h-auto h-auto relative top-5 left-0 px-4">
//       <div className="slide-container flex flex-col sm:flex-row justify-around items-center">
//         <div className="sm:w-[48%] w-full  text-start sm:py-0 py-2 sm:mt-0 mt-3  my-10">
//           <div className="absolute top-8 left-0">
//             <img src={vector1} alt="" className="w-14 px-2" />
//           </div>          
// <img
//             src={slider4}
//             alt=""
//             className="absolute sm:top-[0.5rem] sm:left-44 left-8 z-10 w-80 rounded-xl border-none"
//           />
//           <img
//             src={overlayreverse}
//             alt=""
//             className="absolute sm:top-8  sm:left-56 left-20 w-72"
//           />
//         </div>
//         <div className=" sm:w-[48%] w-full text-white text-start sm:py-0 py-2 sm:mt-0 mt-64  my-10">
//           <div className="shoplifting px-1">
//             <h1 className=" Heading font-bold py-3 text-3xl">{Heading}</h1>
//             <div className="flex flex-col sm:flex-row">
//               <div>
//                 <hr className="line-2" />
//                 <p className="text-base leading-7 px-2">
//                   Shoplifting is a major problem for retail businesses. To help protect against it, we offer a combination of hardware, software, and custom labels.

//                 </p>
//               </div>
//               <div>
//                 <hr className="line-2" />
//                 <p className="text-base leading-7 px-2 ">
//                   This system detects theft and mismanagement of goods at the checkout counter or store in real-time, triggering an alarm to the management. Our system also enables the management to access video clips of any suspicious activity in real-time.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="absolute top-20 right-10 w-7">
//             <img src={ShieldCheck} alt="" />
//           </div>
//         </div>
//       </div>
//     </div>
    <div className="sliderCardReverse sm:h-auto h-auto relative top-5 left-0 px-4">
      <div className="slide-container flex flex-col sm:flex-row justify-around items-center">
        <div className="sm:w-[48%] w-full  text-start sm:py-0 py-2 sm:mt-0 mt-3  my-10">
          <div className="absolute top-8 left-0">
            <img src={vector1} alt="" className="w-14 px-2" />
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
          <div className="absolute bottom-4 right-[700px]">
            <img src={vector1} alt="" className="w-14 px-2" />
          </div>
        </div>
        <div className=" sm:w-[48%] w-full text-white text-start sm:py-0 py-2 sm:mt-0 mt-64  my-10">
          <div className=" px-1">
            <h1 className="Heading py-3 text-3xl font-bold ">ANTI-SHOPLIFTING TECHNOLOGY</h1>
            <ul className="list-disc flex-row sm:flex-col">
              <li className="py-3 sm:px-3 px-1 text-base leading-7  my-1">
                {/* We help transform all retail
                <span className="text-lg px-1">OFFLINE</span>
                businesses in <span className="text-lg pr-1">INDIA</span>
                into self-checkout stores without any additional hardware
                installations. */}
                Shoplifting is a major problem for retail businesses. To help protect against it, we offer a combination of hardware, software, and custom labels.
              </li>

              {/* <li className="py-3 px-3 text-sm my-1">
                To mitigate the risk of theft/mismanagement, we also provide an
                extra layer of security to the existing
                <span className="text-lg px-1">Self-Checkout Stores</span>.
              </li> */}

              <li className="py-3 px-3 text-base leading-7 my-1">
                This system detects theft and mismanagement of goods at the checkout counter or store in real-time, triggering an alarm to the management. Our system also enables the management to access video clips of any suspicious activity in real-time.
              </li>
            </ul>
          </div>
          <div className="absolute top-20 right-10 w-7">
            <img src={ShieldCheck} alt="" />
         </div>
        </div>
      </div>
    </div>
  );
}

export default SliderCardReverse;
