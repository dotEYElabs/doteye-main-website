import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper";

const Testimonials = () => {
  return (
    <div className="" id="About">
      <div className="sm:w-[40%] w-full m-auto mt-6">
        {/* <div className="relative top-12 left-80 w-7">
          <img src={ChartLine} alt="" />
        </div> */}
        <h1 className="Heading uppercase text-3xl text-center text-white font-black p-3">
          Testimonials
        </h1>
        <p className="text-center text-orange-500">
          Read what our satisfied customers have to say:
        </p>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
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
            <div className="flex flex-col sm:flex-row justify-center items-center text-white m-4 shadow-black">
                <div className="sm:w-[55%] w-[84%] m-auto ">
                    <div className="m-3">
                        <p className="py-2 px-3 text-base box ">
                            "I was truly impressed by how Doteye Labs showcased their prototype and explained their product. I absolutely loved it! The advantages of their platform are incredible. Now, we can effectively target customers who visit our store by providing them with specific product details based on their interests. Additionally, we can send them genuine, personalised discounts. This has significantly reduced our overall marketing costs while allowing us to efficiently manage our campaigns. It's an absolute game-changer for our business!"
                        </p>
                        <h2 className="text-center pt-6 px-4 font-semibold">General merchandise or all in store</h2>
                        <p className="text-center text-gray-400 py-0 px-4">Bangalore</p>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="flex flex-col sm:flex-row justify-center items-center text-white m-4 shadow-black">
                <div className=" sm:w-[55%] w-[84%] m-auto h-auto">
                    <div className="m-3">
                        <p className="py-2 px-3 text-base box ">
                            "Doteye Labs showcased a remarkable demo of their customer analysis and POS verification technology, which impressed us greatly. This kind of innovation is unprecedented, and we believe it's exactly what we need to streamline our operations, even when we're not physically present in the store. Additionally, the affordability of this technology is highly appealing. As a 42-year-old retail business owner, I found it to be a game-changer."
                        </p>
                        <h2 className="text-center pt-6 px-4 font-semibold">Apparel retailer</h2>
                        <p className="text-center text-gray-400 py-0 px-4">Vizag</p>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="flex flex-col sm:flex-row justify-center items-center text-white m-4 shadow-black">
                <div className="  sm:w-[55%] w-[84%] m-auto h-auto ">
                <div className="m-3">
                    <p className="py-2 px-3 text-base box ">
                    "I was thrilled when Doteye Labs presented their prototype demo, especially because I run a jewellery store. This kind of technology is a lifesaver for us, as it provides virtual supervision and enhanced security, allowing us to enjoy stress-free family time. It's like having an extra pair of eyes safeguarding our store. I highly recommend it."
                    </p>
                    <h2 className="text-center pt-6 px-4 font-semibold">Jewellery Srikakulam</h2>
                    <p className="text-center text-gray-400 py-0 px-4">Vizag</p>
                </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="flex flex-col sm:flex-row justify-center items-center text-white m-4 shadow-black">
                <div className="  sm:w-[55%] w-[84%] m-auto h-auto ">
                <div className="m-3">
                    <p className="py-2 px-3 text-base box ">
                    "In today's fast-paced world, technology like what Doteye Labs offers is essential, especially for traditional family businesses like ours. As a new-generation kid, I understand the importance of balancing work and personal life. With Doteye Labs installed in our store, I can finally have some stress-free "me" time. I no longer need to worry about constantly being present in the store, which allows me to spend quality time with my family, friends, and go on trips. It's a game-changer for our cement business, and I highly recommend it to fellow young entrepreneurs."
                    </p>
                    <h2 className="text-center pt-6 px-4 font-semibold">Kalidindi cement dealer</h2>
                    <p className="text-center text-gray-400 py-0 px-4">Vizag</p>
                </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="flex flex-col sm:flex-row justify-center items-center text-white m-4 shadow-black">
                <div className="  sm:w-[55%] w-[84%] m-auto h-auto ">
                <div className="m-3">
                    <p className="py-2 px-3 text-base box ">
                    "I was extremely impressed by the way Doteye Labs explained and demonstrated their anti-theft feature. As someone running multiple stores in three different towns across the Telugu states, I understand the challenges involved. One major issue we face is internal theft, even with barcode systems and security at the store entrances. It's frustrating because it's difficult to trace and predict the causes of retail shrinkage. However, with Doteye's security feature, we can effectively turn those losses into profits. After carefully calculating the numbers, I realised that paying a subscription to Doteye Labs for this security solution is much more affordable than the losses we currently incur. Overall, it leads to significant profit gains."
                    </p>
                    <h2 className="text-center pt-6 px-4 font-semibold">Multi retail chain owner</h2>
                    <p className="text-center text-gray-400 pb-4 px-4">Vizag</p>
                </div>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Testimonials