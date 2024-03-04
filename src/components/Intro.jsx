import React from "react";
import start from "../images/start.png";
import opa from "../images/opa.png";
import spicy from "../images/spicy.png";
import img_0 from "../images/img_0.png";
import img_1 from "../images/img_1.png";
import star_light from "../images/star_light.png";
import star_dark from "../images/star_dark.png";

const Intro = () => {
  return (
    <div className="flex flex-wrap min-h-fit items-center gap-1 intro__block">
      <div className="md:flex-1 sm:flex-auto sm:text-center md:text-start flex flex-col gap-6">
        <h2 className="md:w-11/12 sm:w-12/12 text-[min(2.5rem,4.5rem)] md:text-[min(4.5rem)] leading-normal font-bold">
          Dive into Delights Of Delectable
          <span className="text-mygreen">Food</span>
        </h2>
        <p className="text-2xl md:w-8/12 sm:w-full">
          Where Each Plate Weaves a Story of Culinary Mastery and Passionate
          Craftsmanship
        </p>
        <div className="my-3 btn__group flex gap-3 items-center sm:justify-center md:justify-start">
          <button className="bg-mygreen shadow-2xl px-6 text-[min(20px,30px)] pt-2 pb-3 rounded-full text-mylight">
            Order now
          </button>
          <button className="items-center gap-3 flex px-6 text-[min(20px,30px)] pt-2 pb-3 img_my text-mydark">
            Watch Video{" "}
            <span className="shadow-lg rounded-full px-3 py-3 flex items-center">
              <img src={start} alt="start" />
            </span>
          </button>
        </div>
      </div>
      <div className="flex-1 relative">
        <div className="spicy absolute -left-8 top-5">
          <img src={spicy} alt="spicy" />
        </div>
        <div className="sister flex items-center justify-center">
          <img src={opa} className="relative size-12/12" alt="sister" />
        </div>
        <div className="flex relative -top-10 flex-wrap justify-center  bottom-0 inset-x-0 gap-10">
          <div className="food__cards flex-wrap flex gap-3">
            <div className="shadow-lg py-2 pl-5 pr-10 flex gap-2">
              <img src={img_0} alt="spicy" />
              <div className="food__info flex-wrap">
                <h4 className="text-mydark font-bold">Spicy noodles</h4>
                <div className="star flex-wrap flex items-center gap-1 my-2">
                  <img src={star_light} alt="light star" />
                  <img src={star_light} alt="light star" />
                  <img src={star_light} alt="light star" />
                  <img src={star_dark} alt="dark star" />
                  <img src={star_dark} alt="dark star" />
                </div>
                <h6>
                  <span className="text-myorange">$</span> 18.00
                </h6>
              </div>
            </div>
          </div>
          <div className="food__cards flex-wrap flex gap-3">
            <div className="shadow-lg py-2 pl-5 pr-10 flex gap-2">
              <img src={img_1} alt="spicy" />
              <div className="food__info flex-wrap">
                <h4 className="text-mydark font-bold">Vegetarian salad</h4>
                <div className="stars flex-wrap flex items-center gap-1 my-2">
                  <img src={star_light} alt="light star" />
                  <img src={star_light} alt="light star" />
                  <img src={star_light} alt="light star" />
                  <img src={star_light} alt="light star" />
                  <img src={star_dark} alt="dark star" />
                </div>
                <h6>
                  <span className="text-myorange">$</span> 23.00
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
