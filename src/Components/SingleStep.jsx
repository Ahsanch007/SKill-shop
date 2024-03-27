import React, { useState } from "react";
import { Collapse } from "react-collapse";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

const SingleStep = ({ open, toggle1, title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="flex flex-col gap-1">
      <article
        onClick={toggle1}
        className={`flex items-center gap-6 px-6 py-5 rounded-md cursor-pointer bg-[#dadce0] hover:bg-[#1A73E8] duration-700 hover:text-white ${
          open === true && "active2"
        }`}
      >
        <button>{open ? <FaMinus /> : <FaPlus />}</button>
        <p className="text-[18px]">{title}</p>
      </article>
      <Collapse isOpened={open}>
        <article>
          <p className="px-6 py-4">{info}</p>
        </article>
      </Collapse>
    </div>
  );
};

export default SingleStep;
