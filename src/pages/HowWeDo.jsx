import React from "react";
import shield from "../assets/images/shield.png";

function HowWeDo() {
  return (
    <> 
      <div className="howwedoit flex flex-col sm:flex-row justify-center items-center">
        <div className="HowWeDo text-black sm:w-[60%] w-[90%]">
        <h1 className="Heading text-center text-3xl py-4">
          How <span className="Heading-overlay">We Do</span>
        </h1>
          <p className="font-thin text-base py-3 leading-6">
            With our cloud-based platform, users can access their services from anywhere, at any time. Our Artificial Intelligence, Internet of Things, and Computer Vision technology allow us to offer a wide range of services, allowing our customers to save time, money, and resources. We are dedicated to providing excellent customer service and support, and strive to exceed expectations.
          </p>
        </div>
        {/* <div className="w-[25px]">
        <img src={shield} alt="" />
      </div> */}
      </div>
    </>
  );
}

export default HowWeDo;