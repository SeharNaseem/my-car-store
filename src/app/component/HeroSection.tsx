"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay} from "swiper/modules";
import {Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

// Define a type for each slide's data
interface Slide {
  title: string;
  description: string;
  buttonText: string;
}

// Define the array of slide data with the Slide type
const slides: Slide[] = [
  {
    title: "Find Affordable Dream Car For Rental",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est voluptatibus libero repellat voluptates corporis eius corrupti. Id nisi ut, dignissimos quis voluptatibus alias dolores fuga modi sint eos? Et, neque.",
    buttonText: "Get In Touch",
  },
  {
    title: "Luxury Cars at Affordable Prices",
    description:
      "Discover a wide range of luxury vehicles available for rent. Drive your dream car today at prices that fit your budget!",
    buttonText: "Explore Now",
  },
  {
    title: "Exclusive Offers for Car Rentals",
    description:
      "Don’t miss out on our exclusive rental offers. Choose your favorite car and get the best deals available today!",
    buttonText: "Check Offers",
  },
];

// Define a functional component with FC type from React
const HeroSection: React.FC = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]} // Attach the modules
      autoplay={{ delay: 3000 }} // 3-second delay between slides
      pagination={{ clickable: true }}
      loop={true}
      spaceBetween={30}
      slidesPerView={1}
      speed={1000} // Speed of the transition, 1000ms for a smooth effect
      className="h-[85vh]"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="homebanner py-40 lg:px-20  h-72 mx-auto flex  items-center">
          <div className="space-y-4 text-white w-[50%]  absolute right-5 bottom-40  ">
            <h1 className="lg:text-5xl text-lg font-bold">{slide.title}</h1>
            <p className="text-white lg:text-lg text-[10px]">{slide.description}</p>
            <button className="text-white bg-black shadow-xl rounded-full lg:text-xl text-xs lg:p-3 p-2 w-24 lg:w-44">
              {slide.buttonText}
            </button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSection;
