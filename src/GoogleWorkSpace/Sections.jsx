import React from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Sections = () => {
  return (
    <div className="bg-[#F9F9FA] mt-10 sm:pt-20 pt-12 pb-16 shadow-inner-large ">
      <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
        {/* sections ===> */}
        <div className="md:flex items-start justify-between gap-8">
          {/* left side */}
          <div className="flex flex-col gap-4 mb-4">
            <h1 className="text">Sections</h1>
            {/* links ===========> */}
            <div className="pl-4">
              <ul className="activitysection__list courselist">
                <li className="activitysection__item courselist__item">
                  <a href="#technology" className="double_click_protection">
                    <div className="courselist__marker1"></div>
                    <div className="courselist__itemcontent">
                      <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                        Get started with technology
                      </h3>
                    </div>
                  </a>{" "}
                </li>
                <li className="activitysection__item courselist__item">
                  <a href="#textbook" className="double_click_protection">
                    <div className="courselist__marker1"></div>
                    <div className="courselist__itemcontent">
                      <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                        Think beyond the textbook
                      </h3>
                    </div>
                  </a>
                </li>
                <li className="activitysection__item courselist__item">
                  <a href="#safe" className="double_click_protection">
                    <div className="courselist__marker1"></div>
                    <div className="courselist__itemcontent">
                      <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                        Create safe, responsible digital citizens
                      </h3>
                    </div>
                  </a>{" "}
                </li>
                <li className="activitysection__item courselist__item">
                  <a
                    href="#learningnetwork"
                    className="double_click_protection"
                  >
                    <div className="courselist__marker1"></div>
                    <div className="courselist__itemcontent">
                      <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                        Build your learning network
                      </h3>
                    </div>
                  </a>{" "}
                </li>
                <li className="activitysection__item courselist__item">
                  <a href="#tools" className="double_click_protection">
                    <div className="courselist__marker1"></div>
                    <div className="courselist__itemcontent">
                      <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                        Tools for the classroom
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
            <div className="flex items-center gap-3 bg-white rounded-[60px] py-3 px-6 border-[2.5px] m-auto">
              <img
                src="./assets/Google.jpeg"
                className="w-[3.2rem] h-[3.2rem]"
                alt=""
              />
              <h1 className="text-[20px] max-w-[12rem] leading-[1.6rem]">
                Google Workspace for Education
              </h1>
            </div>
          </div>
          {/*end of right side */}
        </div>

        {/* cards ========> */}
        <h1 className="text">By the end of the lesson, you’ll be able to:</h1>

        {/* cards ======> */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          <article
            data-aos-delay="60"
            data-aos-duration="1000"
            data-aos="fade-up"
            className="bg-[#E6E7E9] grid place-items-center py-4 rounded-lg gap-y-5 px-4 md:col-span-1"
          >
            <img src="./assets/Star.png" alt="" />
            <p className="text-center">
              Identify how digital skills can benefit teaching and learning
            </p>
          </article>
          <article
            data-aos-delay="60"
            data-aos-duration="1100"
            data-aos="fade-up"
            className="bg-[#E6E7E9] grid place-items-center py-4 rounded-lg gap-y-5 px-4 md:col-span-1"
          >
            <img src="./assets/doublestar.png" alt="" />
            <p className="text-center">
              Recognize Google Workspace for Education applications
            </p>
          </article>
          <article
            data-aos-delay="65"
            data-aos-duration="1200"
            data-aos="fade-up"
            className="bg-[#E6E7E9] grid place-items-center py-4 rounded-lg gap-y-5 px-4 md:col-span-1"
          >
            <img src="./assets/threestar.png" alt="" />
            <p className="text-center">
              Apply digital tools to support the work you currently do
            </p>
          </article>
          {/* fourth card */}
          <div class="md:col-span-1 md:block hidden"></div>
          {/* fifth card */}
          <article
            data-aos-delay="65"
            data-aos-duration="1500"
            data-aos="fade-up"
            className="bg-[#E6E7E9] grid place-items-center py-4 rounded-lg gap-y-5 px-4 md:col-span-1 md:row-span-2"
          >
            <img src="./assets/fourstar.png" alt="" />
            <p className="text-center">
              Illustrate how you can use technology to prepare your students for
              the future
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Sections;
