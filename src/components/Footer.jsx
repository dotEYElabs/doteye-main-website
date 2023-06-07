import React from "react";
import { FaFacebook, FaTwitter, IoLocationOutline, FaEnvelope, FaPhoneAlt, FaLinkedin, FaRegAddressCard } from 'react-icons/fa';
import { RiMapPin2Line } from 'react-icons/ri';
function Footer() {
  return (
    <>   
      <footer className="flex flex-col bg-gray-900 py-8 text-center">
        <div className="container mx-auto flex flex-wrap ">
          <div className="w-full md:w-1/3 mb-4 md:mb-0 flex flex-col  items-center text-base">
            <h3 className="text-white font-bold text-xl mb-2">Contact Us</h3>
            <div className="flex items-center mb-2">
              <FaEnvelope className="text-gray-400 mr-2" />
              <p className="text-gray-400">info@doteyelabs.com</p>
            </div>
            <div className="flex items-center">
              <FaPhoneAlt className="text-gray-400 mr-2" />
              <p className="text-gray-400">+91-9293455889</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex flex-col mb-4 items-center text-base ">
            <div className="flex items-center">

              <FaRegAddressCard size={24} className="text-gray-400 mr-2 mb-2" /><h3 className="text-white font-bold text-xl mb-2"> Registered Address</h3></div>
            <div className="flex items-center">
              <p className="text-gray-400">11-6-18/1,
                Champagalli Street,</p>
            </div>
            <div className="flex items-center">
              <p className="text-gray-400">Srikakulam-532001,</p>
            </div>
            <div className="flex items-center">
              <p className="text-gray-400">Andhra Pradesh</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex flex-col mb-4 items-center text-base ">
            <div className="flex items-center">

              <RiMapPin2Line size={24} className="text-gray-400 mr-2 mb-2" /><h3 className="text-white font-bold text-xl mb-2"> Office Address</h3></div>
            <div className="flex items-center">
              <p className="text-gray-400">Ground Floor, Building-1, Hustlehub </p>
            </div>
            <div className="flex items-center">
              <p className="text-gray-400">Tech Park, 36/5, Somasundarapalya</p>
            </div>
            <div className="flex items-center">
              <p className="text-gray-400">Main Rd, HaralukunteVillage, Sector 2,</p>
            </div>
            <div className="flex items-center">
              <p className="text-gray-400">HSR Layout, Bengaluru, Karnataka, 560102</p>
            </div>
            {/* <div className="flex items-center">
              <p className="text-gray-400"></p>
            </div> */}
          </div>
        </div>
        <div className="w:100% flex flex-col items-center">
            <h3 className="text-white font-bold text-xl mb-2">Follow Us</h3>
            <div className="w: 100% flex justify-center">
              {/* <a href="#" className="text-gray-400 mr-4"><FaFacebook /></a> */}
              <a href="https://twitter.com/doteyelabs" className="text-gray-400 mr-4"><FaTwitter /></a>
              <a href="https://www.linkedin.com/company/doteyelabs" className="text-gray-400"><FaLinkedin /></a>
            </div>
        </div>
      </footer>
      <footer className="bg-gray-800 py-4 flex justify-center items-center text-base">
        <div className="text-center text-gray-400 text-sm">
          <p  ><a href="#" className="text-sm" >Privacy Policy</a> | <a href="#" className="text-sm">Terms of Service</a></p>

       <p>&copy; 2023 DotEYE. All rights reserved.</p>
          {/* <p>TM, R, and SM are trademarks of DotEYE.</p> */}
        </div>
      </footer>
    </>
  );
}

export default Footer;
