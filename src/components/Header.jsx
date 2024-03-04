import React, { useState } from "react";
import search from "../images/icon _search.png";
import shop from "../images/shop.png";
import call from "../images/call.png";
const Header = () => {
  const [open, setOpen] = useState();
  const handleOpen = () => {
    setOpen(true);
  };
  const closeOpen = () => {
    setOpen(false);
  };
  return (
    <div className="mx-auto py-4 sm:px-3">
      <div className="flex flex-wrap justify-between items-center navgaion__bar">
        <div className="logo">
          <h2 className="text-2xl font-bold">
            <span className="bg-mygreen text-mylight px-2  rounded">F</span>{" "}
            OODI
          </h2>
        </div>
        <nav>
          <ul className="flex justify-around gap-4">
            <li>
              <a
                href="#"
                className="hover:text-mygreen text-mydark font-medium"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-mygreen text-mydark font-medium"
              >
                Menu
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-mygreen text-mydark font-medium"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-mygreen text-mydark font-medium"
              >
                Offers
              </a>
            </li>
          </ul>
        </nav>
        <div className="contact">
          <ul className="flex items-center gap-5">
            <li>
              <a href="#">
                <img className="size-6" src={search} alt="search" />
              </a>
            </li>
            <li>
              <a href="#" className="relative">
                <img src={shop} alt="shop" className="size-5" />
                <span className="absolute -top-2 -right-2 bg-mygreen rounded-full text-mylight px-1 text-[min(10px,15px)]">
                  5
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex gap-2 bg-mygreen rounded-full text-mylight px-6 py-3"
              >
                <img className="size-6" src={call} alt="call" />
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="flex lg:hidden">
          <button
            onClick={handleOpen}
            type="button"
            className={
              open
                ? "hidden"
                : "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            }
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              ariahidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {/* mobile  */}
      <div className={open ? "mobile__menu bg-mylight" : "hidden"}>
        <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only "></span>
            </a>
            <button
              onClick={closeOpen}
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root bg-mylight pl-5">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Menu
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Services
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Offers
                </a>
                <div className="contact ">
                  <ul className="flex flex-wrap items-center gap-5">
                    <li>
                      <a href="#">
                        <img className="size-6" src={search} alt="search" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="relative">
                        <img src={shop} alt="shop" className="size-5" />
                        <span className="absolute -top-2 -right-2 bg-mygreen rounded-full text-mylight px-1 text-[min(10px,15px)]">
                          5
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex gap-2 bg-mygreen rounded-full text-mylight px-6 py-3 hover:bg-mylight"
                      >
                        <img className="size-6" src={call} alt="call" />
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
