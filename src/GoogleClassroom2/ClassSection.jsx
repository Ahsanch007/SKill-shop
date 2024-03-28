import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import GenericCarousel from "../Components/GenericCarousel";
AOS.init();
const images = [
  { image: '/assets/slide13.png', alt: 'Image 1', },
  { image: '/assets/slide-13.png', alt: 'Image 2', },
  { image: '/assets/slide14.png', alt: 'Image 2', },
];
const images2 = [
  { image: '/assets/slide15.png', alt: 'Image 1', },
  { image: '/assets/slide16.png', alt: 'Image 2', },
  { image: '/assets/slide17.png', alt: 'Image 2', },
];
const ClassSection = () => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
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
                    <a
                      href="#CreateAssignment"
                      className="double_click_protection"
                    >
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Create an assignment in Classroom
                        </h3>
                      </div>
                    </a>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a
                      href="#CustomizeAssignment"
                      className="double_click_protection"
                    >
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Customize assignments and resources
                        </h3>
                      </div>
                    </a>
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a
                      href="#ReuseAssignment"
                      className="double_click_protection"
                    >
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Reuse assignments and resources
                        </h3>
                      </div>
                    </a>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <NavLink className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Add links, videos, and files tO assignments in
                          Classroom
                        </h3>
                      </div>
                    </NavLink>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a
                      href="#ViewAssignment"
                      className="double_click_protection"
                    >
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          View assignments
                        </h3>
                      </div>
                    </a>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a href="#ShareFolders" className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Share folders and documents from Drive
                        </h3>
                      </div>
                    </a>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <NavLink className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Best practices for collecting work in CLassroom
                        </h3>
                      </div>
                    </NavLink>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a
                      href="#BestPractices"
                      className="double_click_protection"
                    >
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Best practices for collecting work in Drive
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
              <div className="flex items-center gap-3 bg-white rounded-[60px] border-[2.5px] px-6 py-2  w-full">
                <img
                  src="./assets/google_drive.png"
                  className="w-[3.2rem] h-[3.2rem]"
                  alt=""
                />
                <h1 className="text-[23px] leading-[1.6rem]">Google Drive</h1>
              </div>
            </div>
            {/*end of right side */}
          </div>

          {/* cards ========> */}
          <h1 className="text-[25px] text">
            By the end of the lesson, you’ll be able to:
          </h1>

          {/* cards ======> */}
          <div className="flex justify-center">
            <div className="flex flex-wrap  justify-center gap-6">
              <article
                data-aos="fade-left"
                data-aos-delay="60"
                data-aos-duration="1000"
                className="bg-[#E6E7E9] flex flex-col max-w-[18rem] w-full items-center py-4 rounded-lg gap-y-5 px-4  "
              >
                <img src="./assets/c3.png" alt="" />
                <p className="text-center paragraph">Assign work to students</p>
              </article>
              <article
                data-aos="fade-left"
                data-aos-delay="65"
                data-aos-duration="1200"
                className="bg-[#E6E7E9] flex flex-col max-w-[18rem] w-full items-center py-4 rounded-lg gap-y-5 px-4"
              >
                <img src="./assets/gc2.png" alt="" />
                <p className="text-center paragraph">
                  Share folders and documents from Drive
                </p>
              </article>
              <article
                data-aos="fade-left"
                data-aos-delay="65"
                data-aos-duration="1500"
                className="bg-[#E6E7E9] flex flex-col max-w-[18rem] w-full items-center py-4 rounded-lg gap-y-5 px-4"
              >
                <img src="./assets/gc3.png" alt="" />
                <p className="text-center paragraph">Collect student work</p>
              </article>
            </div>
          </div>
        </div>
      </div>
      {/* End oF FiRsT sEctION */}

      {/* SECOND SeCtiON */}
      {/* Create an assignment in Classroom */}
      <div
        id="CreateAssignment"
        className="bg-[#F9F9FA] top-shadow sm:pb-16 pb-12 md:pt-20 pt-16"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <div className="flex flex-col gap-7">
            <h1 className="text1 leading-[2.4rem]">
              Create an assignment in Classroom
            </h1>
            <p className="paragraph">
              In this lesson, you’ll learn how to create an assignment, set due
              dates, and add resources for your students using the Classwork
              page in Google Classroom. You can also use the Classwork page to
              store student work and organize classroom materials into
              customized educational themes based on specific topics. Creating
              digital resources for your students can help them stay organized,
              know when to submit assignments, and access important documents
              all in one place.
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

            <div class="ev-video-stream-player-iframe-container">
              <iframe class="ev-video-stream-player-iframe" id="video-stream-player-id-64b695446ed6a616c8dd0804" frameborder="0" allowfullscreen="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="Google Classroom Assignments from students and the Comment bank" width="640" height="360" src="https://www.youtube.com/embed/v1WGd-89sho?autoplay=0&amp;cc_lang_pref&amp;cc_load_policy=0&amp;color=red&amp;disablekb=0&amp;enablejsapi=1&amp;fs=1&amp;hl&amp;loop=0&amp;modestbranding=0&amp;origin=https%3A%2F%2Fskillshop.exceedlms.com&amp;playsinline=1&amp;rel=0&amp;start=0&amp;widgetid=1" data-gtm-yt-inspected-10="true"></iframe>
            </div>

            {/* button  */}
            <button
              onClick={toggle}
              className="w-full bg-[#1A73E8] py-2.5 text-white"
            >
              Transcript
            </button>
          </div>

          {/* transcript  ==> */}
          <div className={`flex flex-col gap-5 ${show ? "block" : "hidden"}`}>
            <p className="paragraph">
              In this video we are going to create an assignment in Google
              Classroom.
            </p>
            <div>
              <ol className="list-decimal pl-12 paragraph">
                <li>
                  First, navigate to Classrom by clicking on the App menu in the
                  waffle and scrolling to Google Classroom.
                </li>
                <li>Choose a class to start your assignment in.</li>
                <li>
                  Next, click on the <strong>Classwork page</strong>.
                </li>
                <li>
                  To create an assignment, click the <strong>Create</strong>{" "}
                  button and choose
                  <strong>Assignment</strong>.{" "}
                </li>
                <li>
                  You can then add a title and any other instructions you would
                  like to give your students in the box.
                </li>
                <li>
                  With the Assignment menu here, you can choose multiple classes
                  to assign this classwork to by clicking the dropdown.{" "}
                </li>
                <li>
                  If you teach multiple sections of the same course, you only
                  need to create the assignment once.
                </li>
                <li>You can then set a due date and time. </li>
                <li>
                  Students will be able to see all their upcoming assignment
                  deadlines when they look in their classes.
                </li>
                <li>
                  When you're ready, you can click the <strong>Assign</strong>{" "}
                  button.{" "}
                </li>
                <li>
                  You can also click the dropdown next to Assign to{" "}
                  <strong>Save a draft</strong>
                  of this assignment and continue adding detail later.{" "}
                </li>
                <li>
                  Or, you can select <strong>Schedule</strong> to schedule the
                  assignment to be posted at a later date.
                </li>
              </ol>
            </div>
          </div>
          {/* eND oF TRansCrIpt */}
          <p className="paragraph">
            Watch the video below to learn more about the{" "}
            <strong>Classwork</strong> page in Google Classroom.
          </p>

          {/* ViDEO DIv */}
          <div className="">
            <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
              <div className="flex flex-col gap-2 mt-2 relative">
                <p className="Bold mb-4">
                  Click play to watch the video below.
                </p>
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
                <video preload="auto" controls poster="/assets/original (1).png" src="https://storage.googleapis.com/onboarding_media/onboarding_v2/week3/lesson3_6_classworkpage.mp4 " tabindex="-1" />
                <img src="/assets/63bc36c2a213ce099c3bc3f9.png" alt="" width={100} height={100} className="absolute top-[45%] right-[45%]" />

              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End oF SECOND SeCtiON */}

      {/* ThiRD ScETioN */}
      {/* Customize assignments and resources */}
      <div
        id="CustomizeAssignment"
        className="sm:pb-16 pb-12 md:pt-20 pt-12 bg-[#F9F9FA] shadow-top-bottom-inner"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <h1 className="text1 leading-[2.4rem]">
              Customize assignments and resources
            </h1>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-12">
            <article>
              <img src="./assets/gc6.png" alt="" />
            </article>
            <article className="flex flex-col gap-5">
              <p className="paragraph">
                Each classroom includes a unique group of learners who may need
                different resources at different times. With Google Classroom,
                you can customize learning by sending specific resources to
                individual students.{" "}
              </p>
              <p className="paragraph">
                To do this, first build an assignment. Then use the For
                drop-down menu to click an individual or set of students to
                receive the assignment. Take advantage of this feature to
                challenge students who are ready to move ahead with coursework
                or to support students who need to review course material.
              </p>
              <p className="paragraph">
                To promote collaboration, assign work to groups of students so
                learners can work together to complete projects. If you have
                multiple classes you want to share an assignment with, click{" "}
                <strong>All students</strong> in the <strong>For</strong>{" "}
                section when creating an assignment so they have access. You can
                also schedule posts for multiple classes if you want to plan
                ahead.
              </p>
            </article>
          </div>
        </div>
      </div>
      {/*eND OF ThiRD ScETioN */}

      {/* FourtH sEctiON */}
      {/* Reuse assignments and resources */}
      <div
        id="ReuseAssignment"
        className="bg-[#FFFFFF] sm:pt-20 pt-12 sm:pb-16 pb-12"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-5">
          <h1 className="text1 leading-[2.4rem] mb-2">
            Reuse assignments and resources
          </h1>
          <p className="paragraph">
            You may want to share the same assignments or resources across
            multiple classes, but customize them for each specific class.
            Instead of creating the same assignment from scratch, you can reuse
            the assignment and then add additional resources, change the due
            date, or click the specific students that would benefit from the
            assignment.
          </p>
        </div>
      </div>
      {/*end Of fOURth sEctiON */}

      {/* image section */}
      <div className="bg-[url('/assets/gc7.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* FIfTh SeCtiON */}
      {/* Try it out */}
      <div className="bg-[#F9F9FA] shadow-inner-large sm:pb-16 pb-12 md:pt-20 pt-16">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <h1 className="text">Try it out</h1>
            <p className="paragraph">
              Follow the steps in the video below to reuse an assignment from
              one class in another.
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

            <div class="ev-video-stream-player-iframe-container">
              <iframe class="ev-video-stream-player-iframe" id="video-stream-player-id-64b695446ed6a616c8dd08af" frameborder="0" allowfullscreen="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="Reusing assignments and resources" width="640" height="360" src="https://www.youtube.com/embed/FadheUcD4_Q?autoplay=0&amp;cc_lang_pref&amp;cc_load_policy=0&amp;color=red&amp;disablekb=0&amp;enablejsapi=1&amp;fs=1&amp;hl&amp;loop=0&amp;modestbranding=0&amp;origin=https%3A%2F%2Fskillshop.exceedlms.com&amp;playsinline=1&amp;rel=0&amp;start=0&amp;widgetid=2" data-gtm-yt-inspected-10="true"></iframe>
            </div>

            {/* button  */}
            <button
              onClick={toggle}
              className="w-full bg-[#1A73E8] py-2.5 text-white"
            >
              Transcript
            </button>
          </div>

          {/* transcript  ==> */}
          <div className={`flex flex-col gap-6 ${show ? "block" : "hidden"}`}>
            <p className="paragraph">
              In this video we will reuse an assignment post from one class in
              another class.
            </p>
            <div className="flex flex-col gap-5">
              <p className="paragraph">
                So let's say we created an assignment in this class, and we want
                to use this assignment in another class.{" "}
              </p>
              <ol className="list-decimal pl-12 paragraph">
                <li>
                  So first, navigate to the other class by clicking the{" "}
                  <strong>Main menu</strong> button here, and choosing the class
                  where you want to reuse the post.
                </li>
                <li>Then Navigate to the Classwork page.</li>
                <li>
                  Click the <strong>Create</strong> button and choose{" "}
                  <strong>Reuse post</strong>.
                </li>
                <li>
                  Choose the class where the original post is located, and then
                  find the name of the assignment you would like to use in this
                  class.
                </li>
                <li>
                  Next click <strong>Reuse</strong>.
                </li>
                <li>You can now edit anything in this new post.</li>
                <li>
                  When you’re ready click <strong>Assign</strong>.
                </li>
              </ol>
            </div>
            <p className="paragraph">The assignment has now been reused.</p>
          </div>
          {/* eND oF TRansCrIpt */}
        </div>
      </div>
      {/*End oF fifth SeCtiON */}

      {/* slider section  */}

      <div className="bg-white sm:pb-16 pb-12 md:pt-20 pt-12    ">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <h1 className="text1 leading-[2.4rem]">Add links, videos, and files to assignments in Classroom</h1>
          </div>

          <article className=" ">
            <p className="paragraph">
              In Google Classroom, you can add links, videos, and files to assignments to enhance the way students experience classwork. By adding things like media, rubrics, and personalized documents to Classwork, your students can start each assignment with a better understanding of what you want them to achieve.
            </p>
            <p className="Bold my-4">Click the arrow to learn more.</p>

          </article>
          <GenericCarousel
            images={images}
            slides={[
              <div key={1}>
                <p>For example, instead of assigning students to read a chapter in their world history textbook, create an assignment with an embedded YouTube video or a link to an online article. The YouTube videos you add to lessons from Classroom now have larger thumbnail images. When your students are watching a video, they’ll see a larger video player.</p>
              </div>,
              <div key={2}>
                <p>Then, have students answer questions about the video or article in a form in Google Forms to check their understanding.</p>
              </div>,
              <div key={3}>
                <div><p>To insert the file type you’d like to attach in Classroom, click the icon in the <strong>Attach&nbsp;</strong>section of the assignment. Then, choose your file, YouTube video, or link. You can add one or more elements in a single assignment.&nbsp;</p><p><br /></p><p>When creating an assignment, you can add an individual file or folder from your Drive by clicking the <strong>Drive icon</strong>. If you want to share multiple resource materials with your students, share a folder instead of an individual file.</p></div>
              </div>
            ]}

          />
        </div>
      </div>
      {/* SIXTH ScETioN */}
      {/* View assignments */}
      <div
        id="ViewAssignment"
        className="sm:pb-16 pb-12 md:pt-20 pt-12 bg-[#F9F9FA] shadow-top-bottom-inner"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <h1 className="text1 leading-[2.4rem]">View assignments</h1>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-12">
            <article className="flex flex-col gap-5 md:col-span-1">
              <p className="paragraph">
                To view additional details about an assignment, including
                individual student work, click the assignment. Students can see
                all their coursework in the <strong>Stream</strong> page and
                <strong> Classwork</strong> page.
              </p>
              <p className="paragraph">
                From these pages, students can either start working on an
                assignment or submit their completed work.
              </p>
            </article>
            <article className="md:col-span-2">
              <img src="./assets/gc8.png" alt="" />
            </article>
          </div>
        </div>
      </div>
      {/*eND OF SixtH ScETioN */}

      {/* 7 sEctiON */}
      {/* Share folders and documents from Drive */}
      <div
        id="ShareFolders"
        className="bg-[#FFFFFF] sm:pt-20 pt-12 sm:pb-16 pb-12"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-4">
          {/* fIrsT DiV */}
          <div className="flex flex-col gap-5">
            <h1 className="text1 leading-[2.4rem] mb-2">
              Share folders and documents from Drive
            </h1>
            <p className="paragraph">
              If you don’t have access to Classroom, you can create assignments,
              shared folders for classroom resources, and individual folders for
              each student so they can keep track of their work in Drive. To
              give students access to a file or folder, you can share the URL,
              or ask students to view the <strong>Shared with Me</strong>{" "}
              section in Drive.
            </p>
            <p className="paragraph">
              Before sharing documents and folders, consider what access
              permission you’d like your students to have. For example, if you
              want your students to work together, give students{" "}
              <strong>Editor</strong> access when sharing the file or folder. If
              you want to share a folder containing reading materials, share so
              students have <strong>Viewer</strong> access and cannot change the
              original documents. Students will be able to view every file
              within that folder, meaning you don’t have to update permissions
              and share individual files with students.
            </p>
          </div>

          {/* SecOND Div */}
          <div className="flex flex-col gap-5">
            <img src="./assets/gc9.png" alt="" />
            <p className="paragraph">
              If you have created a worksheet you want your students to access
              but not work directly in, you can assign them the{" "}
              <strong>Viewer</strong> role and have them make a copy. This way,
              students cannot change the original document, but can instead make
              changes to their own copy.{" "}
            </p>
            <p className="paragraph">
              <strong> Tip:</strong> A quick way of allowing others to create
              copies of a document in Google Docs is to share the URL with
              "copy" at the end instead of “edit.” Make sure you've shared the
              document so that 'Anyone with the link' can view.{" "}
            </p>
          </div>

          {/* thirD DIV */}
          <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-3">
            <article>
              <p className="example">For example, use:</p>
              <p className="sm:text-[18px] text-[15px] flex-wrap sm:pl-4 mt-6">
                "https://docs.google.com/document/d/1xTOYv/
                <strong>copy</strong>"
              </p>
            </article>
            <article>
              <p className="Instead">Instead of:</p>
              <p className="sm:text-[18px] text-[15px] flex-wrap sm:pl-8">
                <del className="">
                  "https://docs.google.com/document/d/1xTOYv/
                  <strong>edit</strong>"
                </del>
              </p>
            </article>
          </div>
        </div>
      </div>
      {/*end Of 7 sEctiON */}

      {/* image section */}
      <div className="bg-[url('/assets/gc10.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* 8 sectIOn */}
      {/* Success stories
       */}
      <div className="sm:pt-20 pt-12 sm:pb-16 pb-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <h1 className="text">Success stories</h1>

          {/* cardS */}
          <div className="grid md:grid-cols-2 grid-cols-1 place-content-center gap-16">
            <article
              data-aos="fade-up"
              data-aos-delay="70"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
              className="flex flex-col gap-5 items-center py-4 px-4 bg-[#F9F9FA]"
            >
              <img src="./assets/gc11.png" alt="" />
              <p className="text-center paragraph">
                I teach science, so I prefer to save class time for hands-on
                work. I provide YouTube videos and links for my students to view
                at home in Google Classroom. Then, when they come to class,
                they’ve already reviewed the content so I spend less time
                lecturing. We take a few moments to discuss the material and
                clarify questions, but after that we have more time to spend on
                the fun stuff.
              </p>
            </article>
            <article
              data-aos="fade-up"
              data-aos-delay="70"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
              className="flex flex-col gap-12 items-center py-4 px-4 bg-[#F9F9FA]"
            >
              <img src="./assets/gc12.png" alt="" />
              <p className="text-center paragraph">
                I appreciate being able to choose a due date and time for an
                assignment in Classroom. If my class finishes at 11:55am, that’s
                their due date.
              </p>
            </article>
          </div>
        </div>
      </div>
      {/*enD Of 8 sectIOn */}

      {/* 9 ScETioN */}
      {/* Collect student assignments in Classroom and Drive */}
      <div className="sm:pb-16 pb-12 md:pt-20 pt-12 bg-[#F9F9FA] shadow-top-bottom-inner">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-5">
          <div className="flex flex-col gap-5 mb-2">
            <h1 className="text1 leading-[2.4rem]">
              Collect student assignments in Classroom and Drive
            </h1>
          </div>

          <p className="paragraph">
            Once you create and share an assignment in Classroom, your students
            can complete and submit their work. All sharing rights are
            controlled automatically in Classroom so educators don’t have to
            worry about reminding students to submit their assignments. Using
            Classroom also reduces email traffic so your inbox is not flooded
            with notifications. Each assignment contains the work of each
            student, keeping assignments organized and easy to sort through.{" "}
          </p>
          <p className="paragraph">
            Plus, your notification emails from Classroom are now more useful.
            You and your students can tailor notification settings for email,
            and push notifications for mobile devices, so you can quickly scan
            emails to find key information. Teachers will also be able to reply
            to students directly from their notifications in Gmail and mobile
            devices.
          </p>
        </div>
      </div>
      {/*eND OF 9 ScETioN */}

  {/* slider section  */}

  <div className="bg-white sm:pb-16 pb-12 md:pt-20 pt-12    ">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <h1 className="text1 leading-[2.4rem]">Best practices for collecting work in Classroom</h1>
          </div>

          <article className=" ">
            <p className="paragraph">
            When students complete an assignment in Classroom, they can submit the assignment to be graded. Follow the tips below for collecting work in Classroom to make this process more efficient
            </p>
            <p className="Bold my-4">Click the arrow to learn more.</p>

          </article>
          <GenericCarousel
            images={images2}
            slides={[
              <div key={1}>
           <div><p><strong>Submit project materials.&nbsp;</strong></p><p>If you want your students to submit a project that includes multiple documents, have them submit all project materials in Classroom. To submit multiple materials, students can click on <strong>Add</strong> <strong>or create</strong> to select a Drive file, local file, or URL to attach their materials. </p></div>
                </div>,
              <div key={2}>
                <div><p><strong>Have students mark assignments as done.</strong></p><p> Sometimes your students will have an assignment to complete, but nothing to submit. If you want a record of your students completing a task like watching a video or reading an article, have them select <strong>Mark as done</strong>. Students can add <strong>Private comments</strong> to you about the activity they completed if they have any questions about the material. </p></div>
              </div>,
              <div key={3}>
              <div><p><strong>Return student work. </strong></p><p>After students have submitted their work, you can review it, grade it, and return it so students can see their results. Within each assignment there is a checkbox at the top left of the screen that allows you to select <strong>All students</strong> or individual students, whether they submitted work or not. Click <strong>Return</strong> to send assignments back to students.</p></div>
              </div>
            ]}

          />
        </div>
      </div>


      {/* 10 ScETioN */}
      {/* Best practices for collecting work in Drive */}
      <div
        id="BestPractices"
        className="sm:pb-16 pb-12 md:pt-20 pt-12 bg-[#F9F9FA] top-shadow"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-5">
          <div className="flex flex-col gap-5 mb-2">
            <h1 className="text1 leading-[2.4rem]">
              Best practices for collecting work in Drive
            </h1>
          </div>

          <div className="flex flex-col gap-6">
            <p className="paragraph">
              There are several ways students can submit assignments using
              Drive. Follow the tips below to make this process easier and more
              efficient.
            </p>
            <div className="flex flex-col gap-10">
              <article className="flex items-start gap-6">
                <input
                  type="checkbox"
                  className="circular-checkbox flex-shrink-0"
                  name=""
                  id=""
                />
                <p className="paragraph">
                  If you have only a few students that will be working on just a
                  few assignments, ask students to individually share their
                  documents with you.
                </p>
              </article>
              <article className="flex items-start gap-6">
                <input
                  type="checkbox"
                  className="circular-checkbox flex-shrink-0"
                  name=""
                  id=""
                />
                <p className="paragraph">
                  Create shared folders for each student to submit their work.
                  Then, students can either create a document and move it to
                  their shared folder, or create a document within the shared
                  folder itself. You can easily identify changes to these
                  folders by viewing the activity information.
                </p>
              </article>
              <article className="flex items-start gap-6">
                <input
                  type="checkbox"
                  className="circular-checkbox flex-shrink-0"
                  name=""
                  id=""
                />
                <p className="paragraph">
                  Ask your students to send you a message when they’re done with
                  the assignment. In Google Docs, students and teachers have the
                  ability to send a message directly to a document’s
                  collaborators.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
      {/*eND OF 10 ScETioN */}

      {/* image section */}
      <div className="bg-[url('/assets/gc13.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* 11 ScEtiOn */}
      {/* Reflect on what you have learned */}
      <div className="sm:pt-20 pt-12 sm:pb-16 pb-12 bg-[#F9F9FA]">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-6">
          <h1 className="text1 leading-[2.4rem]">
            Reflect on what you have learned
          </h1>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
            {/* TEXt */}
            <article className="flex flex-col gap-5 md:col-span-2">
              <p className="paragraph">
                Now that you’ve learned how to assign work and collect
                assignments with Google Classroom
              </p>
              <div className="flex flex-col gap-5">
                <p className="font-bold">
                  Consider the following and make a note of your answers.
                </p>
                <ol className="list-decimal pl-12 paragraph">
                  <li>
                    How can I creatively engage my students in Google Classroom?
                  </li>
                  <li>
                    How can Classroom help me streamline grading of assignments?
                  </li>
                </ol>
              </div>
            </article>
            <article className="md:mt-0 sm:mt-3 mt-1 md:col-span-1">
              <img src="./assets/gc15.png" alt="" />
            </article>
          </div>
        </div>
      </div>
      {/*End Of 11 ScEtiOn */}
    </div>
  );
};

export default ClassSection;
