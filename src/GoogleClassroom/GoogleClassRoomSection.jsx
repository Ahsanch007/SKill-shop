import React from "react";
import { NavLink } from "react-router-dom";
import { SlBadge } from "react-icons/sl";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const GoogleClassRoomSection = () => {
  return (
    <div>
      {/* fiRSt sECtION */}
      <div className="bg-[#F9F9FA] shadow-inner-large mt-[3rem] sm:mt-[4rem] ">
        <div className="pt-6 sm:pb-36 pb-20 max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          {/* sections ===> */}
          <div className="md:flex items-start justify-between gap-8">
            {/* left side */}
            <div className="flex flex-col gap-4 mb-4">
              <h1 className="text-[25px] text">Sections</h1>
              {/* links ===========> */}
              <div className="pl-4">
                <ul className="activitysection__list courselist">
                  <li className="activitysection__item courselist__item">
                    <a href="#CreateClass" className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Create a class in Google Classroom
                        </h3>
                      </div>
                    </a>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a href="#AddStudents" className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Add students to your class
                        </h3>
                      </div>
                    </a>
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a href="#ViewClass" className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          viewing your class
                        </h3>
                      </div>
                    </a>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a
                      href="#ImportantResources"
                      className="double_click_protection"
                    >
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Familiarize students with important resources
                        </h3>
                      </div>
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </div>
            {/* end of left side */}

            {/* right side */}
            <div className="flex flex-col items-start gap-4">
              <h1 className="text-[25px] text">Tools you'll use</h1>
              <div className="flex items-center gap-3 bg-white rounded-[60px] border-[2.5px] px-6 py-2  w-full">
                <img
                  src="./assets/c2.png"
                  className="w-[3.2rem] h-[3.2rem]"
                  alt=""
                />
                <h1 className="text-[23px] leading-[1.6rem]">
                  Google Classroom
                </h1>
              </div>
            </div>
            {/*end of right side */}
          </div>

          {/* cards ========> */}
          <h1 className="text-[25px] text">
            By the end of the lesson, you’ll be able to:
          </h1>

          {/* cards ======> */}
          <div className="flex flex-wrap  justify-center gap-6">
            <article
              data-aos="fade-left"
              data-aos-delay="60"
              data-aos-duration="1100"
              className="bg-[#E6E7E9] flex flex-col max-w-[20rem] items-center py-4 rounded-lg gap-y-5 px-4 "
            >
              <img src="./assets/c3.png" alt="" />
              <p className="text-center paragraph">
                Create a class in Google Classroom
              </p>
            </article>
          </div>
        </div>
      </div>
      {/* End oF FiRsT sEctION */}

      {/* SECond SeCtioN */}
      {/* Add students to your class */}
      <div
        id="AddStudents"
        className="sm:pt-20 pt-12 pb-10 bg-[#FFFFFF] top-shadow"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col sm:gap-4 gap-8">
          <h1 className="text1 leading-[2.4rem] mb-2">
            Add students to your class
          </h1>
          <p className="paragraph">
            There are many ways to add students to your class. First, you can
            build a digital classroom list using Google Sheets.
          </p>
          <p className="paragraph">
            Second, add students to your class to create a roster by having your
            students log in to Classroom and join your class by entering the
            class code. When you create a class in Classroom, a unique code is
            automatically generated. When students log in, they click I'm a
            student, join the class, and enter the class code. Once they join,
            their names will appear as active in the People page in Classroom.
            The class code is included there, too, in case you need it again.{" "}
          </p>
          <p className="paragraph">
            If you want to save time, you can now also use{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://clever.com/google-classroom"
              className="text-[blue] underline"
            >
              Clever
            </a>{" "}
            or Elevate Data Sync to sync a classroom list or roster directly
            from any student information system (SIS) to automatically create
            and update courses in Google Classroom.
          </p>
          <p className="paragraph">
            The third way is to enroll or add students to your class from the
            <strong>People</strong> page.
          </p>
          <div className="flex items-center sm:gap-12 gap-9 border-[3px] border-[#4285f4] rounded-2xl sm:px-8 px-4 sm:py-6 py-5">
            <div>
              <SlBadge className="text-[2.4rem] text-[#4285f4]" />
            </div>
            <p className="paragraph">
              Did you know that you can do more with Classroom if you have the
              <strong> Education Plus</strong> edition of Google Workspace for
              Education? Clever is available at no additional cost for districts
              using Education Plus in the U.S.
            </p>
          </div>
        </div>
      </div>
      {/*eND oF SECond SeCtioN */}

      {/* imAGe sECtioN */}
      <div className="bg-[url('/assets/c4.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* 3 SeCtiON */}
      {/* Try it out */}
      <div className="sm:pb-16 pb-12 md:pt-20 pt-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <h1 className="text">Try it out</h1>
            <p className="paragraph">
              Follow the steps in the video below to enroll your students.
            </p>
          </div>

          <div className="flex flex-col gap-2 mt-2">
            <p className="Bold mb-4">Click play to watch the video below.</p>
            {/* video */}
            {/* <video
            tabindex="-1"
            class="video-stream html5-main-video"
            webkit-playsinline=""
            playsinline=""
            controlslist="nodownload"
            style="width: 905px; height: 509px; left: 0px; top: 0px;"
            src="blob:https://www.youtube.com/45b3ff66-03c9-47fd-92d3-3aabe7bbb16d"
          ></video> */}

            <iframe
              //   width="800"
              //   height="600"
              src="https://www.youtube.com/embed/7EHnQ0VM4KY?si=LtrXq2i2uzzHChqw"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              className="max-w-[905px] w-[92vw] m-auto md:h-[509px] min-h-[400px] "
            ></iframe>
          </div>
        </div>
      </div>
      {/*End oF 3 SeCtiON */}

      {/* 4 SeCtiON */}
      {/* Viewing your class */}
      <div
        id="ViewClass"
        className="sm:pb-16 pb-12 md:pt-20 pt-12 bg-[#F9F9FA] shadow-top-bottom-inner"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-10">
          <div className="flex flex-col gap-7">
            <h1 className="text1 leading-[2.4rem]">Viewing your class</h1>
            <p className="paragraph">
              When students have joined your class, you can view them on the
              <strong> People</strong> page. If you’d like to add students to
              your class later in the school year, follow the steps in the
              section above. If you’d like to remove students from class, click
              the checkbox next to their name, open the <strong>Actions</strong>{" "}
              drop- down menu and click <strong>Remove</strong>. You can also
              view, add, or remove co-teachers, or students’ family members if
              you choose to include them in your class.
            </p>
          </div>

          <div className="flex flex-col gap-2 mt-2">
            <p className="Bold mb-4">Click play to watch the video below.</p>
            {/* video */}
            {/* <video
            tabindex="-1"
            class="video-stream html5-main-video"
            webkit-playsinline=""
            playsinline=""
            controlslist="nodownload"
            style="width: 905px; height: 509px; left: 0px; top: 0px;"
            src="blob:https://www.youtube.com/45b3ff66-03c9-47fd-92d3-3aabe7bbb16d"
          ></video> */}

            <iframe
              //   width="800"
              //   height="600"
              src="https://www.youtube.com/embed/7EHnQ0VM4KY?si=LtrXq2i2uzzHChqw"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              className="max-w-[905px] w-[92vw] m-auto md:h-[509px] min-h-[400px] "
            ></iframe>
          </div>
        </div>
      </div>
      {/*End oF 4 SeCtiON */}

      {/* 5 seCTion */}
      {/* Familiarize students with important resources */}
      <div id="ImportantResources" className="sm:pb-16 pb-12 md:pt-20 pt-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <h1 className="text1 leading-[2.4rem]">
              Familiarize students with important resources
            </h1>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-12">
            <article className="">
              <img src="./assets/c6.png" className="cursor-zoom-in" alt="" />
            </article>
            <article className="flex flex-col gap-5">
              <p className="paragraph">
                To share important digital materials and resources for students,
                like a syllabus, schedule, or classroom behavior expectations,
                you can create a <strong>Material</strong> in the{" "}
                <strong>Classwork</strong> page.{" "}
              </p>
              <p className="paragraph">
                Adding resources in this way can help you stay organized
                throughout the school year.
              </p>
            </article>
          </div>
        </div>
      </div>
      {/*enD oF 5 seCTion */}
    </div>
  );
};

export default GoogleClassRoomSection;
