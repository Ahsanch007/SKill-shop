import React from "react";
import { FaRegStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const OrganizeHero = () => {
  return (
    <div>
      <div>
        {/* image */}
        <img src="./assets/s2.png" className=" w-full md:block hidden" alt="" />
        <img
          src="./assets/search.png"
          className="  w-full h-full md:hidden block"
          alt=""
        />

        <div className="sm:mt-[2.5rem] mt-[1rem] max-w-[680px] w-[92vw] m-auto ">
          {/* header title */}
          <div className=" flex flex-col gap-2.5 py-6 border-b border-gray-400">
            <h1 className="Heading leading-[2.9rem]">
              Organize and search your Gmail
            </h1>
            <div className="sm:flex items-center gap-7">
              <div className="  items-center gap-6 hidden">
                <p className="text-[12px]">Published: Jul 18, 2023</p>
                <p className="text-[12px]">7 m</p>
              </div>
              {/* review icon */}
          <div className="hidden items-center gap-2 sm:mt-0 mt-1">
                <div className="flex items-center text-[12px] gap-1">
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                </div>
                <p className="text-[12px]">(4)</p>
              </div>
            </div>
          </div>
          {/* end of header title  */}
          {/* favorites */}
          <div className="mt-3 flex flex-col gap-10">
            <div className="flex items-center gap-2">
              <CiHeart />
              <NavLink>
                <p>Favorites</p>
              </NavLink>
            </div>
            <p className="text-[19px] text-[#393b3d]">
              Stay on top of your digital communication and streamline your
              admin with simple and effective tricks to organize your inbox and
              group your emails.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizeHero;
