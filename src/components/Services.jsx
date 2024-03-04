import React from "react";
import c1 from "../images/card/1.png";
import c2 from "../images/card/2.png";
import c3 from "../images/card/3.png";
import c4 from "../images/card/4.png";
const Services = () => {
  return (
    <div className="my-16 flex flex-wrap p-4 justify-between">
      <div className="flex-auto md:flex-1 flex flex-col justify-center gap-6">
        <p className="text-myorange font-bold text-xl">Our Story & Services</p>
        <h1 className="text-4xl md:text-6xl my-3 font-bold">
          Our Culinary Journey And Services
        </h1>
        <h4 className="xl text-mygrey  font-medium w-12/12 md:w-8/12 text-justify">
          Rooted in passion, we curate unforgettable dining experiences and
          offer exceptional services, blending culinary artistry with warm
          hospitality.
        </h4>
        <button className="mt-4 inline-block w-32 bg-mygreen shadow-2xl px-6 text-[min(20px,30px)] pt-2 pb-3 rounded-full text-mylight">
          Explore
        </button>
      </div>
      <div className="flex-auto md:flex-1 flex flex-wrap gap-4 justify-evenly">
        <div className="shadow-md w-2/2 md:w-5/12 flex flex-col justify-center items-center rounded-2xl gap-5 py-10">
          <img src={c1} alt="c-1" className="w-16 h-16" />
          <h2 className="text-mygreen font-bold text-2xl">Catering</h2>
          <p className="text-mydarkgreen text-xl text-center">
            Delight your guests with our flavors and presentation
          </p>
        </div>
        <div className="shadow-md w-2/2 md:w-5/12 flex flex-col justify-center items-center rounded-2xl gap-5 py-10">
          <img src={c2} alt="c-1" className="w-16 h-16" />
          <h2 className="text-mygreen font-bold text-2xl">Catering</h2>
          <p className="text-mydarkgreen text-xl text-center">
            Delight your guests with our flavors and presentation
          </p>
        </div>
        <div className="shadow-md w-2/2 md:w-5/12 flex flex-col justify-center items-center rounded-2xl gap-5 py-10 px-4">
          <img src={c3} alt="c-1" className="w-16 h-16" />
          <h2 className="text-mygreen font-bold text-2xl">Catering</h2>
          <p className="text-mydarkgreen text-xl text-center">
            Delight your guests with our flavors and presentation
          </p>
        </div>
        <div className="shadow-md w-2/2 md:w-5/12 flex flex-col justify-center items-center rounded-2xl gap-5 py-10">
          <img src={c4} alt="c-1" className="w-16 h-16" />
          <h2 className="text-mygreen font-bold text-2xl">Catering</h2>
          <p className="text-mydarkgreen text-xl text-center">
            Delight your guests with our flavors and presentation
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
