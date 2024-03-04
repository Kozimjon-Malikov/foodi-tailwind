// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import salad1 from "../images/salad/1.png";
import salad2 from "../images/salad/2.png";
import salad3 from "../images/salad/3.png";
import arr1 from "../images/slider/1.png";
import arr2 from "../images/slider/2.png";
import heart from "../images/heart.png";
import whiteheart from "../images/heart-2.png";
import starlight from "../images/star_light.png";
import "swiper/css";
import { Pagination, Navigation } from "swiper/modules";
export default () => {
  return (
    <div className="mt-40">
      <div className="flex justify-between items-center my-10 px-4">
        <div className="w-1/2">
          <p className="font-bold text-myorange lg:text-xl mg:text-md">Special Dishes</p>
          <h1 className="lg:text-4xl text-xl md:text-2xl my-4 w-18 sm:w-72 font-bold text-mydark">
            Standout Dishes From Our Menu
          </h1>
        </div>
        <div className="w-1/2 flex justify-end z-10 ">
          <div className="flex gap-6">
            <div className="cursor-pointer rounded-full prev p-3 w-10 sm:w-16 flex justify-center items-center h-10 sm:h-16 shadow-2xl active:bg-mygreen">
              <img src={arr2} alt="arrow" />
            </div>
            <div className="rounded-full cursor-pointer next p-3 bg-mygreen w-10 sm:w-16 flex justify-center items-center h-10 sm:h-16 shadow-2xl">
              <img src={arr1} alt="arrow" />
            </div>
          </div>
        </div>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          400:{
            slidesPerView:2,
          },
          639: {
            slidesPerView: 3,
          },
          992:{
            slidesPerView:3
          }
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {/* slide-1  */}
        <SwiperSlide className=" py-7 shadow-lg rounded flex flex-col justify-center  relative">
          <span className="bg-mygreen rounded-bl-3xl rounded-tr-3xl absolute top-0 right-0 w-16 h-16 flex justify-center items-center">
            <img src={heart} alt="heart" />
          </span>
          <img
            className="size-72 object-cover mx-auto"
            src={salad1}
            alt="salad1"
          />
          <h2 className="text-2xl px-3 font-bold">Fattoush salad</h2>
          <p className="text-xl px-3 my-2">Description of the item</p>
          <div className="flex px-3 my-2 w-full justify-between items-center">
            <p className="font-bold text-2xl">
              <span className="text-myorange text-lg">$</span> 24.00
            </p>
            <p className="flex gap-2 items-center">
              <img src={starlight} alt="star" className="" />
              <strong>4.9</strong>
            </p>
          </div>
        </SwiperSlide>
        {/* slide-2          */}
        <SwiperSlide className=" py-7 shadow-lg rounded flex flex-col justify-center  relative">
          <span className="bg-mygreen rounded-bl-3xl rounded-tr-3xl absolute top-0 right-0 w-16 h-16 flex justify-center items-center">
            <img src={whiteheart} alt="heart" />
          </span>
          <img
            className="size-72 object-cover mx-auto"
            src={salad2}
            alt="salad1"
          />
          <h2 className="text-2xl px-3 font-bold">Vegetable salad</h2>
          <p className="text-xl px-3 my-2">Description of the item</p>
          <div className="flex px-3 my-2 w-full justify-between items-center">
            <p className="font-bold text-2xl">
              <span className="text-myorange text-lg">$</span> 21.00
            </p>
            <p className="flex gap-2 items-center">
              <img src={starlight} alt="star" className="" />
              <strong>5.0</strong>
            </p>
          </div>
        </SwiperSlide>
        {/* slide-3          */}
        <SwiperSlide className=" py-7 shadow-lg rounded flex flex-col justify-center  relative">
          <span className="bg-mygreen rounded-bl-3xl rounded-tr-3xl absolute top-0 right-0 w-16 h-16 flex justify-center items-center">
            <img src={whiteheart} alt="heart" />
          </span>
          <img
            className="size-72 object-cover mx-auto"
            src={salad3}
            alt="salad1"
          />
          <h2 className="text-2xl px-3 font-bold">Egg vegi salad</h2>
          <p className="text-xl px-3 my-2">Description of the item</p>
          <div className="flex px-3 my-2 w-full justify-between items-center">
            <p className="font-bold text-2xl">
              <span className="text-myorange text-lg">$</span> 29.00
            </p>
            <p className="flex gap-2 items-center">
              <img src={starlight} alt="star" className="" />
              <strong>3.7</strong>
            </p>
          </div>
        </SwiperSlide>
        {/* sliders 3-4-5  */}
        {/* slide-1  */}
        <SwiperSlide className=" py-7 shadow-lg rounded flex flex-col justify-center  relative">
          <span className="bg-mygreen rounded-bl-3xl rounded-tr-3xl absolute top-0 right-0 w-16 h-16 flex justify-center items-center">
            <img src={heart} alt="heart" />
          </span>
          <img
            className="size-72 object-cover mx-auto"
            src={salad1}
            alt="salad1"
          />
          <h2 className="text-2xl px-3 font-bold">Fattoush salad</h2>
          <p className="text-xl px-3 my-2">Description of the item</p>
          <div className="flex px-3 my-2 w-full justify-between items-center">
            <p className="font-bold text-2xl">
              <span className="text-myorange text-lg">$</span> 24.00
            </p>
            <p className="flex gap-2 items-center">
              <img src={starlight} alt="star" className="" />
              <strong>4.9</strong>
            </p>
          </div>
        </SwiperSlide>
        {/* slide-2          */}
        <SwiperSlide className=" py-7 shadow-lg rounded flex flex-col justify-center  relative">
          <span className="bg-mygreen rounded-bl-3xl rounded-tr-3xl absolute top-0 right-0 w-16 h-16 flex justify-center items-center">
            <img src={whiteheart} alt="heart" />
          </span>
          <img
            className="size-72 object-cover mx-auto"
            src={salad2}
            alt="salad1"
          />
          <h2 className="text-2xl px-3 font-bold">Vegetable salad</h2>
          <p className="text-xl px-3 my-2">Description of the item</p>
          <div className="flex px-3 my-2 w-full justify-between items-center">
            <p className="font-bold text-2xl">
              <span className="text-myorange text-lg">$</span> 21.00
            </p>
            <p className="flex gap-2 items-center">
              <img src={starlight} alt="star" className="" />
              <strong>5.0</strong>
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
