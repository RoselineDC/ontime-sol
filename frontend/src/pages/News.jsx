import React, { useEffect, useState } from "react";
import { Link } from "react-router";

// for swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// for navs
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper/modules";

// import images
import news1 from "../assets/news/news-1.png";
import news2 from "../assets/news/news-2.png";
import news3 from "../assets/news/news-3.png";
import news4 from "../assets/news/news-4.png";

// define categories
const News = () => {
  const news = [
    {
      id: 1,
      title: "Ontime Expands Airtime Coverage Globally",
      description:
        "Ontime Solutions now offers seamless global and local airtime top-ups, making it easier than ever to stay connected with loved ones around the world.",
      image: news1,
    },
    {
      id: 2,
      title: "New Fintech Tools Launched by Ontime",
      description:
        "Ontime Solutions introduces advanced AI-powered tools to streamline bill payments and financial transactions securely and efficiently.",
      image: news2,
    },
    {
      id: 3,
      title: "Ontime Partners with Telcos for Better Rates",
      description:
        "Through strategic partnerships with major telecom providers, Ontime is offering even better airtime and data rates for customers across regions.",
      image: news3,
    },
    {
      id: 4,
      title: "Digital Wallet Boost: Ontime App Hits Milestone",
      description:
        "Ontime Solutions celebrates a major milestone as its mobile wallet app reaches 1 million downloads, enhancing safe and easy transactions for users.",
      image: news4,
    },
    {
      id: 5,
      title: "Smart Recharge Devices Now Available",
      description:
        "Ontime Solutions introduces new smart devices in-store and online to facilitate fast airtime, data, and bill payments for business and personal use.",
      image: news2,
    },
  ];

  return (
    <div className="py-10">
      <h2 className="text-3xl font-semibold mb-6">News</h2>
      {/* {/category fiter*/}
      <div className="mb-8 flex items-center"></div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1800: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {
          // define map operation
          news.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex  flex-col sm:flex-row  sm: justify-between items-center gap-12">
                {/* content */}
                <div className="py-4">
                  <Link to={"/"}>
                    <h3 className="text-lg font-medium hover:text-blue-500 mb-4">
                      {item.title}
                    </h3>
                  </Link>
                  <div className="w-10 bg-yellow-500 mb-5 h-[4px] mb-4"></div>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
                {/* for image */}
                <div className="flex-shrink-0">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
};

export default News;
