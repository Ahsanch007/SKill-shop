import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";

const CollaborationFooter = () => {
  return (
    <div>
      <div className="mt-[0rem]">
        <img src="./assets/clip.png" alt="" />
      </div>
      {/* fourth section seCoND laST footer section =======> */}
      <div className="bg-[#F9F9FA] pt-[2.2rem] pb-[4rem]">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-4">
          <h1 className="text-[30px] text-[#ea8600]">Knowledge check</h1>

          {/* TABLE  ========> */}
          <div className="table-container px-6 pt-10 pb-6 flex flex-col gap-5">
            <h1 className="text-[20px]">
              Select the three benefits of a live document
            </h1>

            {/* CHECKS  ========>*/}
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-1">
              <article className="flex items-center gap-4 border-[#e37400] border-[2px] py-4 px-5 rounded-md hover:bg-[#e37400] hover:text-white">
                <input
                  type="checkbox"
                  className="form-checkbox border-2 border-red-400  h-5 w-5 flex-shrink-0 rounded-[50%]"
                  name=""
                  id=""
                />
                <p className="text-[16px] font-medium">
                  You can use it as a tool in the classroom for your students to
                  collaborate together.
                </p>
              </article>
              <article className="flex items-center gap-4 border-[#e37400] border-[2px] py-4 px-5  rounded-md hover:bg-[#e37400] hover:text-white">
                <input
                  type="checkbox"
                  name=""
                  className="flex-shrink-0 h-5 w-5"
                  id=""
                />
                <p className="text-[16px] font-medium">
                  You can use it for gathering feedback.
                </p>
              </article>
              <article className="flex items-center gap-4 border-[#e37400] border-[2px] py-4 px-5  rounded-md hover:bg-[#e37400] hover:text-white">
                <input
                  type="checkbox"
                  name=""
                  className=" flex-shrink-0 h-5 w-5"
                  id=""
                />
                <p className="text-[16px] font-medium">
                  You can use it to collaborate on a single document as a group.
                </p>
              </article>
              <article className="flex items-center gap-4 border-[#e37400] border-[2px] py-4 px-5  rounded-md hover:bg-[#e37400] hover:text-white">
                <input
                  type="checkbox"
                  name=""
                  className="flex-shrink-0 h-5 w-5"
                  id=""
                />
                <p className="text-[16px] font-medium">
                  You can use it to save multiple versions.
                </p>
              </article>
            </div>

            {/* bUTtONS */}
            <div className="grid grid-cols-2 gap-2">
              <button className="bg-white py-2 table-container1 border border-black font-medium">
                Submit
              </button>
              <button className="bg-white py-2 table-container1 border border-black font-medium">
                Show Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* eND Of SECOND LasT  FOoTer sEctIoN */}

      {/* FOOtER SEctioN */}
      <div className="pt-16 pb-24 bg-[#3C4043] grid place-items-center">
        <div className="grid place-items-center gap-y-3">
          {/*  */}
          <FaRegCheckCircle className="text-white text-[3.3rem]" />
          <p className="text-white">
            It looks like you've completed this lesson.
          </p>
        </div>
      </div>
      {/*End of FOOtER SEctioN */}
    </div>
  );
};

export default CollaborationFooter;
