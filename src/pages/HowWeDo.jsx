import React from "react";
import lshape from "../assets/vector/L-shape.min.png";

function HowWeDo() {
  return (
    <>
      <div className="relative top-0 left-0">
        <img src={lshape} alt="" className="absolute bottom-2 right-0" />
      </div>
      <div className="howwedoit flex flex-col sm:flex-row justify-center items-center">
        <div className="HowWeDo text-white sm:w-[60%] w-[90%]">
          <h1 className=" Heading text-4xl font-bold">How We DO IT</h1>

          <p className="font-thin text-base py-3 leading-6">
            With our cloud-based platform, users can access their services from anywhere, at any time. Our Artificial Intelligence, Internet of Things, and Computer Vision technology allow us to offer a wide range of services, allowing our customers to save time, money, and resources. We are dedicated to providing excellent customer service and support, and strive to exceed expectations.
          </p>
        </div>
      </div>
    </>
  );
}

export default HowWeDo;
