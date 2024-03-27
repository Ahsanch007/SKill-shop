import React from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const CollaborationSection = () => {
  return (
    <div className="bg-[#F9F9FA] shadow-inner-large sm:mt-[5rem] mt-[3rem] ">
      <div className="pt-6 sm:pb-32 pb-20 max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
        {/* sections ===> */}
        <div className="md:flex items-start justify-between gap-8">
          {/* left side */}
          <div className="flex flex-col gap-8 mb-4">
            <h1 className="text">Sections</h1>
            {/* links ===========> */}
            <div className="pl-4">
              <ul className="activitysection__list courselist">
                <li className="activitysection__item courselist__item">
                  <a href="#ShareDocuments" className="double_click_protection">
                    <div className="courselist__marker1"></div>
                    <div className="courselist__itemcontent">
                      <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                        Share your live document
                      </h3>
                    </div>
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
          {/* end of left side */}

          {/* right side */}
          <div className="flex flex-col gap-7">
            <h1 className="text">Tools you'll use</h1>
            <div className="flex items-center justify-start gap-3 bg-white rounded-[60px] py-3 px-10 w-full border-[2.5px] ">
              <img
                src="./assets/Docs.png"
                className="w-[3.2rem] h-[3.2rem]"
                alt=""
              />
              <h1 className="text-[20px] max-w-[12rem] leading-[1.6rem]">
                Google Docs
              </h1>
            </div>
          </div>
          {/*end of right side */}
        </div>

        {/* cards ========> */}
        <h1 className="text">By the end of the lesson, you’ll be able to:</h1>

        {/* cards ======> */}
        <div className="">
          <div className="grid grid-cols-1 place-items-center">
            <article
              data-aos="fade-left"
              data-aos-delay="65"
              data-aos-duration="1200"
              className="bg-[#E6E7E9] max-w-[20rem] m-auto flex flex-col justify-center items-center  py-4 rounded-lg gap-y-5 px-4"
            >
              <img src="./assets/Star.png" alt="" />
              <p className="text-center paragraph">
                Identify ways to collaborate in Google Docs
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollaborationSection;
