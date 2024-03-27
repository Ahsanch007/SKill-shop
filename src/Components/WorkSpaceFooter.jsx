import React from "react";
import { CiWarning } from "react-icons/ci";
import { AiOutlineWarning } from "react-icons/ai";

const WorkSpaceFooter = () => {
  return (
    <div className="bg-[#F9F9FA] py-20">
      <div className="flex flex-col gap-3 items-center">
        {/* / */}
        {/* <img
          src="./assets/symbol.avif"
          className="w-[5rem] h-[5rem] bg-[#F9F9FA] "
          alt=""
        /> */}
        {/* <CiWarning className="w-[5rem] h-[5rem] text-[#c5221f]" /> */}
        <AiOutlineWarning className="w-[3.7rem] h-[3.7rem] text-[#c5221f]" />

        <p className="text-[#c5221f] text-center">
          It looks like you've still got some items to complete.
        </p>
        <a
          href="#"
          className="ev-links-item-link ev-links-internal ev-links-page-element ev-links-anchor text-[blue] underline"
        >
          <span>Check here for any sections you've missed</span>
        </a>
      </div>
    </div>
  );
};

export default WorkSpaceFooter;
