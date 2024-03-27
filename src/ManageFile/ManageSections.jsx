import React from "react";
import { Link, NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const ManageSections = () => {
  return (
    <div className="bg-[#F9F9FA] shadow-inner-large sm:mt-[5rem] mt-[3rem] ">
      <div className="pt-6 sm:pb-32 pb-20 max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
        {/* sections ===> */}
        <div className="md:flex items-start justify-between gap-8">
          {/* left side */}
          <div className="flex flex-col gap-4 mb-4">
            <h1 className="text">Sections</h1>
            {/* links ===========> */}
            <div className="pl-4">
              <ul className="activitysection__list courselist">
                <li className="activitysection__item courselist__item">
                  <a href="#google" className="smo double_click_protection">
                    <div className="courselist__marker1"></div>
                    <div className="courselist__itemcontent">
                      <h3 className="sm:text-[22px] text-[11.8px]activitysection__itemname section_links">
                        Use Google Drive to create a document{" "}
                      </h3>
                    </div>
                  </a>{" "}
                </li>
                <li className="activitysection__item courselist__item">
                  <a href="#shareFiles" className="double_click_protection">
                    <div className="courselist__marker1"></div>
                    <div className="courselist__itemcontent">
                      <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                        Shares files and folders
                      </h3>
                    </div>
                  </a>
                </li>
                <li className="activitysection__item courselist__item">
                  <a href="#ConvertFiles" className="double_click_protection">
                    <div className="courselist__marker1"></div>
                    <div className="courselist__itemcontent">
                      <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                        Convert your files
                      </h3>
                    </div>
                  </a>{" "}
                </li>
                <li className="activitysection__item courselist__item">
                  <a href="#Collaboration" className="double_click_protection">
                    <div className="courselist__marker1"></div>
                    <div className="courselist__itemcontent">
                      <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                        Collaborating on Drive
                      </h3>
                    </div>
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
          {/* end of left side */}

          {/* right side */}
          <div className="flex flex-col gap-4">
            <h1 className="text">Tools you'll use</h1>
            <div className="flex items-center justify-start gap-3 bg-white rounded-[60px] w-full py-3 px-8 border-[2.5px] m-auto ">
              <img
                src="./assets/google_drive.png"
                className="w-[3.2rem] h-[3.2rem]"
                alt=""
              />
              <h1 className="text-[20px] max-w-[12rem] leading-[1.6rem]">
                Google Drive
              </h1>
            </div>
          </div>
          {/*end of right side */}
        </div>

        {/* cards ========> */}
        <h1 className="text">By the end of the lesson, you’ll be able to:</h1>

        {/* cards ======> */}
        <div className="flex justify-center items-center">
          <div className="flex flex-wrap  item-center justify-center gap-3 sm:w-[80%] w-[100%]">
            <article
              data-aos="fade-left"
              data-aos-delay="50"
              data-aos-duration="1200"
              className="bg-[#E6E7E9] flex flex-col items-center py-4 rounded-lg gap-y-5 px-4 w-[18rem]  "
            >
              <img src="./assets/Star.png" alt="" />
              <p className="text-center paragraph">
                Demonstrate how to update documents in Google Drive
              </p>
            </article>
            <article
              data-aos="fade-left"
              data-aos-delay="65"
              data-aos-duration="1200"
              className="bg-[#E6E7E9] flex flex-col items-center  py-4 rounded-lg gap-y-5 px-4 w-[18rem] "
            >
              <img src="./assets/doublestar.png" alt="" />
              <p className="text-center paragraph">
                Use Google Drive to create documents
              </p>
            </article>
            <article
              data-aos="fade-left"
              data-aos-delay="80"
              data-aos-duration="1200"
              className="bg-[#E6E7E9] flex flex-col items-center  py-4 rounded-lg gap-y-5 px-4 w-[18rem] "
            >
              <img src="./assets/doublestar.png" alt="" />
              <p className="text-center paragraph">
                Use Google Drive to create documents
              </p>
            </article>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default ManageSections;
