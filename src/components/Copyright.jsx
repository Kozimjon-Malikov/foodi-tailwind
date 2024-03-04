import React from "react";
import facebook from "../images/social/f.png";
import youtobe from "../images/social/y.png";
import instagram from "../images/social/i.png";
import twitter from "../images/social/t.png";
const Copyright = () => {
  return (
    <div className="flex flex-wrap items-center justify-center my-12 gap-5">
      <div className="flex gap-2 flex-wrap mr-auto w-">
        <div className="flex bg-mygreen justify-center w-10  h-10 items-center rounded-full">
          <img src={facebook} className="" alt="socal" />
        </div>
        <div className="flex bg-mylightgreen justify-center w-10 p-2 h-10 items-center rounded-full hover:bg-mygreen hover:scale-125 transition">
          <img src={instagram} className="size-4" alt="socal" />
        </div>
        <div className="flex bg-mylightgreen justify-center hover:bg-mygreen hover:scale-125 transition w-10 p-2 h-10 items-center rounded-full">
          <img src={twitter} className="size-4" alt="socal" />
        </div>
        <div className="flex bg-mylightgreen justify-center hover:bg-mygreen hover:scale-125 transition w-10 p-2 h-10 items-center rounded-full">
          <img src={youtobe} className="size-4" alt="socal" />
        </div>
      </div>
      <p className="text-mygrey mr-auto font-semibold">
        &copy; Copyright {new Date().getFullYear()} | Created By Kozimjon
        Malikov
      </p>
      <p></p>
      <a href="#">
        
      </a>
    </div>

  );
};

export default Copyright;
