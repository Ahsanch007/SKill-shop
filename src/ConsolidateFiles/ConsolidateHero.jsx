import React from "react";
import { FaRegStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const ConsolidateHero = () => {
  return (
    <div>
      <div>
        {/* image */}
        <img
          src="./assets/consolodate_full.png"
          className="sm:block hidden"
          alt=""
        />
        <img
          src="./assets/Consolidate_tablet.png"
          className="sm:hidden block"
          alt=""
        />

        <div className="sm:mt-[2.5rem] mt-[1.5rem] max-w-[680px] w-[92vw] m-auto ">
          {/* header title */}
          <div className=" flex flex-col gap-2.5 py-6 border-b border-gray-400">
            <h1 className="Heading leading-[2.9rem]">
              Consolidate your files in Google Drive
            </h1>
            <div className="hidden items-center gap-7">
              <div className="flex items-center gap-6">
                <p className="text-[12px]">Published: May 17, 2023</p>
                <p className="text-[12px]">7 m</p>
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
                <p className="text-[12px]">(10)</p>
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
              Learning how to consolidate and organize your digital materials
              using Drive is a great way to integrate technology into your
              classroom. Keep in mind, this is just a quick overview of what you
              can do in Drive. In this lesson, you will upload files and folders
              to Drive, organize and color-code your documents, and create a
              shortcut to a file or folder.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsolidateHero;
