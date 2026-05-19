"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const banners = [
 {
  id: 1,
  image: "/images/banner3.jpg",
  title: "Book Your Sports Facility Easily",
  desc: "Find and reserve football, cricket, badminton & more in seconds.",
 },
 {
  id: 2,
  image: "/images/banner4.jpg",
  title: "Play Anytime, Anywhere",
  desc: "Choose your favorite ground and book your time slot instantly.",
 },
 {
  id: 3,
  image: "/images/banner5.jpg",
  title: "Best Sports Venues Near You",
  desc: "Discover top-rated sports facilities in your city.",
 },

];

export default function HeroBanner() {
 return (
  <div className="w-full">
   <Swiper
    modules={[Autoplay, Pagination]}
    autoplay={{
     delay: 3000,
     disableOnInteraction: false,
    }}
    pagination={{ clickable: true }}
    loop={true}
    className="w-full h-[60vh] md:h-[80vh] lg:h-screen"
   >
    {banners.map((item) => (
     <SwiperSlide key={item.id}>

      <div className="relative w-full h-[60vh] md:h-[80vh] lg:h-screen overflow-hidden">

       <Image
        src={item.image}
        alt="banner"
        fill
        priority
        className="object-cover object-center"
       />


       <div className="absolute inset-0 bg-black/50 flex items-center">

        <div className="px-6 max-w-2xl text-white">

         <h1 className="text-xl md:text-3xl lg:text-5xl font-bold mb-3">
          {item.title}
         </h1>

         <p className="text-sm md:text-base text-gray-200 mb-5">
          {item.desc}
         </p>

         <button className="bg-cyan-500 hover:bg-cyan-600 px-4 md:px-6 py-2 md:py-3 rounded-lg transition">
          Explore Facilities
         </button>

        </div>

       </div>

      </div>

     </SwiperSlide>
    ))}
   </Swiper>
  </div>
 );
}