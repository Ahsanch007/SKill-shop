import React from "react";
import { FaRegStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const ShareStudentWorkHero = () => {
  return (
    <div>
      <div>
        {/* image */}
        <img src="./assets/work1.png" className="w-full" alt="" />

        <div className="sm:mt-[2.5rem] mt-[1.5rem] max-w-[680px] w-[92vw] m-auto ">
          {/* header title */}
          <div className=" flex flex-col gap-2.5 py-6 border-b border-gray-400">
            <h1 className="Heading leading-[2.9rem]">
              Share student work with Google Sites
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
                <p className="text-[12px]">(5)</p>
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
              With the skills identified in this lesson, you will learn to
              design and customize your class site and create a convenient,
              well-designed workspace for students. Learn how to create and
              customize a site of your own.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareStudentWorkHero;
