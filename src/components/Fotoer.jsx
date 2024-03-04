import React from "react";

const Fotoer = () => {
  return (
    <div className="flex footer flex-wrap">
      <div className="w-full sm:w-1/2 md:w-3/12">
        <h2 className="text-2xl font-bold">
          <span className="bg-mygreen text-mylight px-2  rounded">F</span> OODI
        </h2>
        <p className="text-mygrey font-medium">
          Savor the artistry where every dish is a culinary masterpiece
        </p>
      </div>
      <div className="w-full sm:w-1/2 md:w-3/12">
        <h2 className="text-2xl font-bold">
        Useful links
        </h2>
        <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">FAQ</a></li>
        </ul>
      </div>
      <div className="w-full sm:w-1/2 md:w-3/12">
        <h2 className="text-2xl font-bold">
        Main Menu
        </h2>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Offers</a></li>
            <li><a href="#">Menus</a></li>
            <li><a href="#">Reservation</a></li>
        </ul>
      </div>
      <div className="w-full sm:w-1/2 md:w-3/12">
        <h2 className="text-2xl font-bold">
        Contact Us
        </h2>
        <ul>
            <li><a href="#">example@email.com</a></li>
            <li><a href="#">+64 958 248 966</a></li>
            <li><a href="#">Menus</a></li>
            <li><a href="#">Social media</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Fotoer;
