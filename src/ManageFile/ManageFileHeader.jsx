import React from "react";
import { FaRegStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const ManageFileHeader = () => {
  return (
    <div>
      <div>
        {/* image */}
        <img src="./assets/manageFile_mobile.png" className="" alt="" />

        <div className="sm:mt-[2.5rem] mt-[1.5rem] max-w-[680px] w-[92vw] m-auto ">
          {/* header title */}
          <div className=" flex flex-col gap-2.5 py-6 border-b border-gray-400">
            <h1 className="Heading leading-[2.9rem]">
              Manage your files in Google Drive
            </h1>
            <div className="hidden items-center gap-7">
              <div className="flex items-center gap-6">
                <p className="text-[12px]">Published:: Jul 18, 2023</p>
                <p className="text-[12px]">6 m</p>
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
                <p className="text-[12px]">(6)</p>
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
            <p className="text-[19px]  text-[#393b3d]">
              Google Drive lets you create, update and share your documents all
              in one consolidate place. Share resources and learning materials
              with students and collaborate your colleagues.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageFileHeader;
