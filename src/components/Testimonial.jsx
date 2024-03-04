import React from "react";
import cooker from "../images/content/cooker.png";
import t1 from "../images/content/t-1.png";
import t2 from "../images/content/t-2.png";
import t3 from "../images/content/t-3.png";
import star from "../images/star_light.png";
import cookerbg from "../images/cooker__bg.png";
const Testimonial = () => {
  return (
    <div className="flex flex-wrap justify-center md:justify-between gap-32 items-center my-24 p-4">
      <div className="cooker flex-grow-0 flex justify-center items-center">
        <img src={cooker} alt="cooker" className="mx-auto" />
      </div>
      <div className="flex-col flex-1  flex gap-10 text-left">
        <p className="text-myorange font-bold text-xl">Testimonials</p>
        <h2 className="text-4xl md:text-6xl my-3 font-bold">
          What Our Customers Say About Us
        </h2>
        <h4 className="xl text-mygrey font-medium w-12/12 md:w-8/12 text-justify">
          “I had the pleasure of dining at Foodi last night, and I'm still
          raving about the experience! The attention to detail in presentation
          and service was impeccable”
        </h4>
        <div className="flex flex-wrap mt-4 items-center">
          <div className="relative left-4 flex">
            <img src={t1} className="relative w-16 h-16" alt="t-1" />
            <img src={t2} className="relative -left-5 w-16 h-16" alt="t-2" />
            <img src={t3} className="relative -left-10 w-16 h-16" alt="t-3" />
          </div>
          <div className="feedback mr-auto">
            <h3>Customer Feedback</h3>
            <div className="flex">
              <img src={star} alt="star" />
              <strong>4.9</strong>
              <p>(18.6k Reviews)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
