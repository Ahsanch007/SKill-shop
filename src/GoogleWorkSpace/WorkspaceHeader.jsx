import React from "react";
import { FaRegStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const WorkspaceHeader = () => {
  return (
    <div className="">
      <div>
        {/* image */}
        <img
          src="./assets/workspace_full.png"
          className="w-full h-full"
          alt=""
        />

        <div className="sm:mt-[2.5rem] mt-[1rem] max-w-[680px] w-[92vw] m-auto ">
          {/* header title */}
          <div className=" flex flex-col gap-2.5 py-6 border-b border-gray-400">
            <h1 className="Heading leading-[2.9rem]">
              Introduction to using Google Workspace for Education in the
              classroom
            </h1>
            <div className="sm:flex items-center gap-7">
              <div className="flex items-center gap-6">
                <p className="text-[12px]">Published: Jun 21, 2023</p>
                <p className="text-[12px]">8 m</p>
                {/* <p className="text-[12px]">Beginner</p> */}
                <img
                  src="./assets/award.svg"
                  className="w-[15px] h-[15px]"
                  alt=""
                />
              </div>
              {/* review icon */}
              <div className="flex items-center gap-2 sm:mt-0 mt-1">
                <div className="flex items-center text-[12px] gap-1">
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                </div>
                <p className="text-[12px]">(29)</p>
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
              Explore the many ways Google Workspace for Education tools can be
              used in the classroom.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkspaceHeader;
