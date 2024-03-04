import React from "react";
import img1 from "../images/food/1.png";
import img2 from "../images/food/2.png";
import img3 from "../images/food/3.png";
import img4 from "../images/food/4.png";
const Catagories = () => {
  return (
    <div className="mt-16">
      <div className="text-center">
        <p className="text-myorange font-bold text-xl">Customer Favorites</p>
        <h2 className="text-mydark my-2 text-5xl font-bold">
          Popular Catagories
        </h2>
      </div>
      <div className="flex  gap-10 flex-wrap px-4">
        <div className="cards py-8 flex-auto flex-col flex justify-center items-center">
          <div className="bg__img">
            <img className="size-12/12" src={img1} alt="image-1" />
          </div>
          <h2 className="text-mydark font-bold text-2xl my-2">Main Dish</h2>
          <p>(86 dishes)</p>
        </div>
        <div className="cards py-8 flex-auto flex-col flex justify-center items-center">
          <div className="bg__img">
            <img className="size-12/12" src={img2} alt="image-1" />
          </div>
          <h2 className="text-mydark font-bold text-2xl my-2">Break Fast</h2>
          <p>(12 break fast)</p>
        </div>
        <div className="cards py-8 flex-auto flex-col flex justify-center items-center">
          <div className="bg__img">
            <img className="size-12/12" src={img3} alt="image-1" />
          </div>
          <h2 className="text-mydark font-bold text-2xl my-2">Dessert</h2>
          <p>(48 dessert)</p>
        </div>
        <div className="cards py-8 flex-auto flex-col flex justify-center items-center">
          <div className="bg__img">
            <img className="size-12/12" src={img4} alt="image-1" />
          </div>
          <h2 className="text-mydark font-bold text-2xl my-2">Browse All</h2>
          <p>(255 Items)</p>
        </div>
      </div>
    </div>
  );
};

export default Catagories;
