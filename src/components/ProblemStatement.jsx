import React from 'react'
import shield from '../assets/images/shield.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Autoplay, Pagination } from "swiper";

const ProblemStatement = () => {
  return (
    <div className='' id = 'ProblemStatement'>
      <div className="" id="Testimonials">
        <div className=" w-full 2xl:w-full xl:w-[60%] lg:w-[70%] md:w-[80%] sm:w-[80%] m-auto mt-6">
          <div className='w-[30px]'>
            <img src={shield} alt="" />
          </div>
          <h1 className="Heading text-black text-center text-3xl 2xl:w-full xl:text-3xl lg:text-3xl md:text-3xl sm:text-2xl xs:text-[21px] py-4">
            Problem <span className="Heading-overlay">Statement</span>
          </h1>
        </div>
      <div className='flex xl:flex lg:flex md:flex sm:flex xs:hidden'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 7500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
          style={{
            "--swiper-pagination-color": "#ff7c08",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "16px",
            "--swiper-pagination-bullet-horizontal-gap": "6px"
          }}
        >
          <SwiperSlide>
              <div className='flex flex-row flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-row xs:flex-col w-full px-[20px] pb-[20px]'>
                <div className='w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-1/2 xs:w-full flex justify-end xl:justify-end lg:justify-end md:justify-end sm:justify-end xs:justify-start pb-[20px] pl-[440px] xs:pl-[0px] sm:pl-[20px] md:pl-[120px] lg:pl-[240px] xl:pl-[300px] 2xl:pl-[320px]'>
                  <div className='profile-box'>
                  <p className="text-center text-black font-semibold text-[17px] pt-6 px-4">Inadequate data for store, customer, and employee analysis.</p>
                  <div className="flex flex-col sm:flex-row justify-center items-center text-black m-2 shadow-black">
                      <div className="m-3">
                          <p className=""> This refers to a lack of comprehensive and detailed information about various aspects of the store's operations, customer behavior, and employee performance. Without sufficient data, it becomes challenging to gain insights into these areas and make informed business decisions.
                          </p>
                      </div>
                  </div>
                  </div>
            </div>
            <div className='w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-1/2 xs:w-full flex justify-start pb-[20px] pl-[440px] xs:pl-[0px] sm:pr-[20px] md:pr-[120px] lg:pr-[240px] xl:pr-[300px] 2xl:pr-[320px]'>
              <div className='profile-box'>
              <p className="text-center text-black font-semibold text-[17px] pt-6 px-4">Lack of customized retargeting option for customer</p>
                <div className="flex flex-col sm:flex-row justify-center items-center text-black m-2 shadow-black">
                    <div className="m-3">
                      <p className=""> Without customized retargeting options, businesses struggle to personalize marketing campaigns, resulting in less effective efforts, lower conversion rates, and missed opportunities to engage and retain customers. Customized retargeting is crucial for delivering relevant content and promotions.
                      </p>
                    </div>
                </div>
              </div>
            </div>
            <div className='w-[30px] flex items-center pr-[5px]'>
              <img src={shield} alt="" />
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className='flex flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-row xs:flex-col w-full px-[20px] pb-[20px]'>
                  <div className='w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-1/2 xs:w-full flex justify-end xl:justify-end lg:justify-end md:justify-end sm:justify-end xs:justify-start pb-[20px] pl-[440px] xs:pl-[0px] sm:pl-[20px] md:pl-[120px] lg:pl-[240px] xl:pl-[300px] 2xl:pl-[320px]'>
                  <div className='profile-box'>
                  <p className="text-center text-black pt-6 px-4 font-semibold text-[17px]">Insufficient control over inventory shrinkage</p>
                  <div className="flex flex-col sm:flex-row justify-center items-center text-black m-2 shadow-black">
                      <div className="m-3">
                          <p className=""> Insufficient control over inventory shrinkage leads to financial losses, inaccurate inventory records, and reduced profitability. Effective measures such as inventory management systems, security protocols, employee training, and regular audits are crucial to minimize shrinkage and maintain accurate stock levels.
                          </p>
                      </div>
                  </div>
                  </div>
            </div>
            <div className='w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-1/2 xs:w-full flex justify-start pb-[20px] pl-[440px] xs:pl-[0px] sm:pr-[20px] md:pr-[120px] lg:pr-[240px] xl:pr-[300px] 2xl:pr-[320px]'>
              <div className='profile-box'>
              <p className="text-center text-black pt-6 px-4 font-semibold text-[18px]">Limited control and countermeasures for ERP/POS</p>
                <div className="flex flex-col sm:flex-row justify-center items-center text-black m-2 shadow-black">
                    <div className="m-3">
                      <p className=""> Limited control and countermeasures for ERP/POS systems pose operational inefficiencies and security risks. Without proper access controls and countermeasures, unauthorized access, system failures, and data breaches can occur, impacting business operations and customer satisfaction.
                      </p>
                    </div>
                </div>
              </div>
            </div>
            <div className='w-[30px] flex items-center pr-[5px]'>
              <img src={shield} alt="" />
            </div>
          </div>
          </SwiperSlide>
        </Swiper>
      </div>
      
      {/*4 cards visible for mobile instead of two in other breakpoint*/}
        <div className='flex xl:hidden lg:hidden md:hidden sm:hidden xs:flex'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 75000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
          style={{
            "--swiper-pagination-color": "#ff7c08",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "16px",
            "--swiper-pagination-bullet-horizontal-gap": "6px"
          }}
        >
          <SwiperSlide>
              <div className='flex flex-row flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-row xs:flex-col w-full px-[20px] pb-[20px]'>
                <div className='w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-1/2 xs:w-full flex justify-end xl:justify-end lg:justify-end md:justify-end sm:justify-end xs:justify-start pb-[20px] pl-[440px] xs:pl-[0px] sm:pl-[20px] md:pl-[120px] lg:pl-[240px] xl:pl-[300px] 2xl:pl-[320px]'>
                  <div className='profile-box'>
                  <p className="text-center text-black pt-6 px-4 font-semibold text-[17px]">Inadequate data for store, customer, and employee analysis.</p>
                  <div className="flex flex-col sm:flex-row justify-center items-center text-black m-2 shadow-black">
                      <div className="m-3">
                          <p className=""> This refers to a lack of comprehensive and detailed information about various aspects of the store's operations, customer behavior, and employee performance. Without sufficient data, it becomes challenging to gain insights into these areas and make informed business decisions.
                          </p>
                      </div>
                  </div>
                  </div>
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='flex flex-row flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-row xs:flex-col w-full px-[20px] pb-[20px]'>
            <div className='w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-1/2 xs:w-full flex justify-end xl:justify-end lg:justify-end md:justify-end sm:justify-end xs:justify-start pb-[20px] pl-[440px] xs:pl-[0px] sm:pl-[20px] md:pl-[120px] lg:pl-[240px] xl:pl-[300px] 2xl:pl-[320px]'>
            <div className='w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-1/2 xs:w-full flex justify-start pb-[20px] pl-[440px] xs:pl-[0px] sm:pr-[20px] md:pr-[120px] lg:pr-[240px] xl:pr-[300px] 2xl:pr-[320px]'>
              <div className='profile-box'>
              <p className="text-center text-black pt-6 px-4 font-semibold text-[17px]">Lack of customized retargeting option for customer</p>
                <div className="flex flex-col sm:flex-row justify-center items-center text-black m-2 shadow-black">
                    <div className="m-3">
                      <p className=""> Without customized retargeting options, businesses struggle to personalize marketing campaigns, resulting in less effective efforts, lower conversion rates, and missed opportunities to engage and retain customers. Customized retargeting is crucial for delivering relevant content and promotions.
                      </p>
                    </div>
                </div>
              </div>
            </div>
            </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex flex-row flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-row xs:flex-col w-full px-[20px] pb-[20px]'>
              <div className='w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-1/2 xs:w-full flex justify-end xl:justify-end lg:justify-end md:justify-end sm:justify-end xs:justify-start pb-[20px] pl-[440px] xs:pl-[0px] sm:pl-[20px] md:pl-[120px] lg:pl-[240px] xl:pl-[300px] 2xl:pl-[320px]'>
                  <div className='profile-box'>
                    <p className="text-center text-black pt-6 px-4 font-semibold text-[17px]">Insufficient control over inventory shrinkage</p>
                    <div className="flex flex-col sm:flex-row justify-center items-center text-black m-2 shadow-black">
                        <div className="m-3">
                            <p className=""> Insufficient control over inventory shrinkage leads to financial losses, inaccurate inventory records, and reduced profitability. Effective measures such as inventory management systems, security protocols, employee training, and regular audits are crucial to minimize shrinkage and maintain accurate stock levels.
                            </p>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='flex flex-row flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-row xs:flex-col w-full px-[20px] pb-[20px]'>
            <div className='w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-1/2 xs:w-full flex justify-start pb-[20px] pl-[440px] xs:pl-[0px] sm:pr-[20px] md:pr-[120px] lg:pr-[240px] xl:pr-[300px] 2xl:pr-[320px]'>
                <div className='profile-box'>
                <p className="text-center text-black pt-6 px-4 font-semibold text-[17px]">Limited control and countermeasures for ERP/POS</p>
                  <div className="flex flex-col sm:flex-row justify-center items-center text-black m-2 shadow-black">
                      <div className="m-3">
                        <p className=""> Limited control and countermeasures for ERP/POS systems pose operational inefficiencies and security risks. Without proper access controls and countermeasures, unauthorized access, system failures, and data breaches can occur, impacting business operations and customer satisfaction.
                        </p>
                      </div>
                  </div>
                </div>
              </div>
              </div>
          </SwiperSlide>
        </Swiper>
        </div>
    </div>
    </div>
  )
}

export default ProblemStatement