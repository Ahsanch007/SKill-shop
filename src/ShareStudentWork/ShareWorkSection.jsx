import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const ShareWorkSection = () => {
  const [show, setShow] = useState(false);
  const [activeModel, setActiveModel] = useState(null);

  const toggleModel = (model) => {
    setActiveModel(model === activeModel ? null : model);
  };

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
                    <a href="#CreateSite" className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Creating a site in Google Sites
                        </h3>
                      </div>
                    </a>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a href="#nameSite" className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Name your site
                        </h3>
                      </div>
                    </a>
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a href="#CreatePage" className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Create pages within a site
                        </h3>
                      </div>
                    </a>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a href="#AddResources" className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Add text, images and resources
                        </h3>
                      </div>
                    </a>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a href="#Preview" className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Preview and publish
                        </h3>
                      </div>
                    </a>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a href="#InviteOthers" className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Invite others to edit your site
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
              <h1 className="text-[25px] text">Tools you'll use</h1>
              <div className="flex items-center justify-start gap-3 bg-white rounded-[60px] py-3 px-16 border-[2.5px] m-auto">
                <img
                  src="./assets/work2.png"
                  className="w-[3.2rem] h-[3.2rem]"
                  alt=""
                />
                <h1 className="text-[23px] max-w-[12rem] leading-[1.6rem]">
                  Google Sites
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
          <div className="flex md:flex-row flex-col flex-wrap md:justify-center items-center gap-6">
            <article
              data-aos="fade-left"
              data-aos-delay="65"
              data-aos-duration="1200"
              className="bg-[#E6E7E9] flex flex-col max-w-[20rem] items-center py-4 rounded-lg gap-y-5 px-4 "
            >
              <img src="./assets/work3.png" alt="" />
              <p className="text-center paragraph">
                Identify the value of having a class website
              </p>
            </article>
            <article
              data-aos="fade-left"
              data-aos-delay="65"
              data-aos-duration="1600"
              className="bg-[#E6E7E9] flex flex-col max-w-[20rem] items-center py-4 rounded-lg gap-y-5 px-4 "
            >
              <img src="./assets/work4.png" alt="" />
              <p className="text-center paragraph">
                Create a customized website for the classroom using Google Sites
              </p>
            </article>
          </div>
        </div>
      </div>
      {/* End oF FiRsT sEctION */}

      {/* SEcOnD SecTion  */}
      {/* Creating a site in Google Sites */}
      <div id="CreateSite" className="sm:pt-16 pt-12 sm:pb-16 pb-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            <h1 className="text1 leading-[2.4rem]">
              Creating a site in Google Sites
            </h1>
            <p className="paragraph">
              Google Sites are easy to create and personalize so students and
              teachers can be creative while building a website. For example,
              during your next design thinking activity, students can develop a
              site to promote the new product they’ve created. Students can
              publish details of their project, and share their creations with
              friends and family outside of class.
            </p>
          </div>
          <div className="md:flex justify-between gap-8">
            {/* TeXT */}
            <div className="flex flex-col gap-4">
              <p className="paragraph">
                Communicating to a wider audience keeps them informed about
                classroom successes and emphasizes the authenticity and
                importance of your students’ work.
              </p>
              <p className="paragraph">
                You’re likely already sharing your students’ work with the
                community when teachers meet with guardians or display student
                artwork on the walls.
              </p>
              <p className="paragraph">
                Read on and learn how to create and customize a site of your
                own.
              </p>
            </div>

            {/* IMAge Div */}
            <div>
              <img src="./assets/work5.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* ENd of secoND  scEtIOn */}

      {/* ImAgE sEcTIOn */}
      <div className="bg-[url('/assets/work6.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* Try iT OUT  */}
      {/* ThirD seCTIoN */}
      <div className="bg-[#FFFFFF] sm:pb-16 pb-12 md:pt-20 pt-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <h1 className="text">Try it out</h1>
            <p className="paragraph">Create and customize your site.</p>
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
<iframe class="ev-video-stream-player-iframe" id="video-stream-player-id-64b69a30da686616fb9b142a" frameborder="0" allowfullscreen="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="Creating a site in Google Sites" width="640" height="360" src="https://www.youtube.com/embed/ESdAN3IDKwE?autoplay=0&amp;cc_lang_pref&amp;cc_load_policy=0&amp;color=red&amp;disablekb=0&amp;enablejsapi=1&amp;fs=1&amp;hl&amp;loop=0&amp;modestbranding=0&amp;origin=https%3A%2F%2Fskillshop.exceedlms.com&amp;playsinline=1&amp;rel=0&amp;start=0&amp;widgetid=1" data-gtm-yt-inspected-6="true"></iframe>
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
              In this video we’ll create a new Google site, give it a name and a
              page title, and format the page title to look the way that we
              would like it to look.{" "}
            </p>
            <div className="flex flex-col gap-5">
              <p className="paragraph">
                To start, create a new Google Site from Google Drive.
              </p>
              <ol className="list-decimal pl-12 paragraph">
                <li>
                  Click <strong>New</strong> and then <strong>More</strong>, and
                  choose <strong>Google Sites</strong>.
                </li>
                <li>Your new Google site is automatically created.</li>
                <li>
                  To give it a file name, select <strong>Untitled Site</strong>{" "}
                  and type the name of your site.
                </li>
                <li>
                  This site and any edits will save automatically in Drive
                </li>
                <li>
                  To change the page title, click into the{" "}
                  <strong>Page title</strong> and rename it.
                </li>
                <li>
                  Once you’ve done that, you can format the text by highlighting
                  everything in the cell and using the tools on the Toolbar.
                </li>
                <li>
                  You can change the font by selecting the{" "}
                  <strong>Existing font name</strong>
                  and scrolling to see more font options.
                </li>
                <li>
                  You can change the size of the text by selecting the existing
                  <strong>Text size</strong> and using the drop down.
                </li>
                <li>
                  You can also play around with the bold, italics and underline
                  options.
                </li>
                <li>
                  To resize the text box, click and drag the{" "}
                  <strong>Border markers</strong>.
                </li>
                <li>
                  Or move the text box by moving your mouse to the edge of the
                  text box until you see the crosshairs.{" "}
                </li>
                <li>
                  You can then click and drag it to where you would like the
                  title to appear.
                </li>
              </ol>
            </div>

            <p className="paragraph">
              And that’s all you need to do to create and format a new Google
              Site.
            </p>
          </div>
          {/* eND oF TRansCrIpt */}
        </div>
      </div>
      {/* END of ThirD seCTIoN */}

      {/* FoURTh SECtIOn */}
      {/* Name your site */}
      <div
        id="nameSite"
        className="sm:pb-16 pb-12 shadow-top-bottom-inner  bg-[#F9F9FA] sm:pt-20 pt-12"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col sm:gap-5 gap-2">
          <h1 className="text1 leading-[2.4rem]">Name your site</h1>
          <p className="paragraph">
            Next, update the site document name, site name, and page title.
          </p>

          <div className="mt-6 flex flex-col gap-3">
            <p className="Bold mb-3">Click each button to learn more.</p>

            <div className="relative flex justify-center">
              <button
                onClick={() => toggleModel("model1")}
                className="bg-[#dadce099] font-bold absolute -top-[1%] -left-[1%] w-[50px] overflow-visible cursor-pointer h-[50px] rounded-[50%] grid place-content-center hover:text-[white] duration-700 hover:bg-[#1A73E8] sm:p-8 text-[20px]"
              >
                1
              </button>
              <button
                onClick={() => toggleModel("model2")}
                className="bg-[#dadce099] text-[20px] sm:p-8 duration-700 hover:bg-[#1A73E8] hover:text-[white] absolute top-[12%] -left-[1%] w-[50px] overflow-visible cursor-pointer h-[50px] rounded-[50%] grid place-content-center"
              >
                2
              </button>
              <button
                onClick={() => toggleModel("model3")}
                className="bg-[#dadce099] text-[20px] sm:p-8 duration-700 hover:bg-[#1A73E8] hover:text-[white] absolute top-[33.5%] left-[72%] w-[50px] overflow-visible cursor-pointer h-[50px] rounded-[50%] grid place-content-center"
              >
                3
              </button>
              <img src="./assets/work7.png" alt="" />
              {/* mOdelS */}
              {/* FIrSt MOdeL */}
              <div
                className={` ${
                  activeModel === "model1" ? "block" : "hidden"
                } fixed inset-0 z-10 p-5 bg-[#272727B8] flex justify-center items-center`}
              >
                <div
                  className={`flex flex-col gap-4 max-w-[800px] pt-10 px-8 bg-white`}
                >
                  <p className="text-left paragraph">
                    1. The document name is the name of the file you will see in
                    Google Drive. Only editors of the site will see this name.
                  </p>
                  <div className="py-5 border-t text-center border-gray-400">
                    <button
                      onClick={() => setActiveModel(null)}
                      className="bg-[#1A73E8] px-3 py-2 text-white"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
              {/*  end of fIRsT MOdEl  */}
              {/* SecoND MOdeL */}
              <div
                className={` ${
                  activeModel === "model2" ? "block" : "hidden"
                } fixed inset-0 z-10 p-5 bg-[#272727B8] flex justify-center items-center`}
              >
                <div
                  className={`flex flex-col gap-4 max-w-[800px] pt-10 px-8 bg-white`}
                >
                  <p className="text-left paragraph">
                    2. Site name is the name of the site itself.
                  </p>
                  <div className="py-5 border-t text-center border-gray-400">
                    <button
                      onClick={() => setActiveModel(null)}
                      className="bg-[#1A73E8] px-3 py-2 text-white"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
              {/* End Of SECOND mODEl */}
              {/* THIrd mODEL */}
              <div
                className={` ${
                  activeModel === "model3" ? "block" : "hidden"
                } fixed inset-0 z-10 p-5 bg-[#272727B8] flex justify-center items-center`}
              >
                <div
                  className={`flex flex-col gap-4 max-w-[800px] pt-10 px-8 bg-white`}
                >
                  <p className="text-left paragraph">
                    3. And the page title is the eye catching text that will
                    appear at the top of the page. It will also appear in the
                    navigation menu.
                  </p>
                  <div className="py-5 border-t text-center border-gray-400">
                    <button
                      onClick={() => setActiveModel(null)}
                      className="bg-[#1A73E8] px-3 py-2 text-white"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
              {/*ENd OF THIrd mODEL */}
            </div>
          </div>
        </div>
      </div>
      {/*ENd of FoURTh SECtIOn */}

      {/* FiFtH SECtIOn */}
      {/*  */}
      <div className="sm:pb-16 pb-12 sm:pt-20 pt-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col sm:gap-5 gap-2">
          <h1 className="text1 leading-[2.4rem]">
            Change your site’s background image, header type, and theme
          </h1>
          <p className="paragraph">
            Customize parts of your Google Site to make your creation unique.
            Change the background image, header type, and theme. Theme changes
            affect the entire site. If a theme is changed on one page, then the
            entire site will reflect the changes. Themes provide a unified style
            with consistent colors and fonts.
          </p>
          <p className="paragraph">
            Change your site's background image, header type, and theme:
          </p>

          <div className="mt-6 flex flex-col gap-3">
            <p className="Bold mb-3">Click each button to learn more.</p>

            <div className="relative flex justify-center">
              <button
                onClick={() => toggleModel("model4")}
                className="bg-[#dadce099] font-bold absolute top-[9%] left-[91%] w-[50px] overflow-visible cursor-pointer h-[50px] rounded-[50%] grid place-content-center hover:text-[white] duration-700 hover:bg-[#1A73E8] sm:p-8 text-[20px]"
              >
                1
              </button>
              <button
                onClick={() => toggleModel("model5")}
                className="bg-[#dadce099] text-[20px] sm:p-8 duration-700 hover:bg-[#1A73E8] hover:text-[white] absolute top-[19%] left-[75%] w-[50px] overflow-visible cursor-pointer h-[50px] rounded-[50%] grid place-content-center font-bold"
              >
                2
              </button>
              <img src="./assets/work10.png" alt="" />
              {/* mOdelS */}
              {/* FIrSt MOdeL */}
              <div
                className={` ${
                  activeModel === "model4" ? "block" : "hidden"
                } fixed inset-0 z-10 p-5 bg-[#272727B8] flex justify-center items-center`}
              >
                <div
                  className={`flex flex-col gap-4 max-w-[800px] pt-10 px-8 bg-white items-center`}
                >
                  <h1 className="text">Themes</h1>
                  <p className="text-left paragraph">
                    1. Select <strong> Themes</strong> to view theme options.
                  </p>
                  <div className="py-5 border-t text-center border-gray-400">
                    <button
                      onClick={() => setActiveModel(null)}
                      className="bg-[#1A73E8] px-3 py-2 text-white"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
              {/*  end of fIRsT MOdEl  */}
              {/* SecoND MOdeL */}
              <div
                className={` ${
                  activeModel === "model5" ? "block" : "hidden"
                } fixed inset-0 z-10 p-5 bg-[#272727B8] flex justify-center items-center`}
              >
                <div
                  className={`flex flex-col gap-4 max-w-[800px] pt-10 px-8 bg-white`}
                >
                  <p className="text-left paragraph">
                    2. Under <strong>Created by Google</strong>, select a
                    pre-made theme.
                  </p>
                  <p className="paragraph">
                    Note: You can also create a custom theme or import a custom
                    theme from another site.
                  </p>
                  <div className="py-5 border-t text-center border-gray-400">
                    <button
                      onClick={() => setActiveModel(null)}
                      className="bg-[#1A73E8] px-3 py-2 text-white"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
              {/* End Of SECOND mODEl */}
            </div>
          </div>
        </div>
      </div>
      {/*ENd of FoURTh SECtIOn */}

      {/* sIXTH sEctiON */}
      {/* CreatePage */}
      <div
        id="CreatePage"
        className="sm:pt-20 pt-16 pb-16 bg-[#F9F9FA] top-shadow"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-6">
          <h1 className="text1 leading-[2.4rem]">Create pages within a site</h1>
          <p className="paragraph">
            If your site only has one page, that will be your homepage. Most
            sites will have more than one page so you can decide which one is
            the homepage. For example, you or your students may want different
            pages for different projects. The homepage might be the title of
            your class with general information like the time and location of
            the class. Then you can create additional pages for certain projects
            you will assign.
          </p>
        </div>
      </div>
      {/*end Of sIXTH sEctiON */}

      {/* ImAgE sEcTIOn */}
      <div className="bg-[url('/assets/work8.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* SeVEnTh sEctiON */}
      {/* Add text, images, and resources */}
      <div
        id="AddResources"
        className=" sm:pt-20 pt-16 pb-16 bg-[#F9F9FA] top-shadow"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-6">
          <h1 className="text1 leading-[2.4rem]">
            Add text, images, and resources
          </h1>
          <p className="paragraph">
            Next, add text, images, and resources to add information to your
            site. When you add an image or text box to part of a page, grid
            lines appear to help you align text, images, and other content so
            the final product looks great on phones, tablets, and computers. You
            might want to create a site at the beginning of the year for the
            students to reference your class syllabus. You can upload the
            syllabus and add subpages with any info they need for upcoming exams
            and final projects.
          </p>
        </div>
      </div>
      {/*end Of SEveNtH sEctiON */}

      {/* ImAgE sEcTIOn */}
      <div className="bg-[url('/assets/work8.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* eIGTh seCTIOn */}
      <div className="sm:pt-20 pt-16 sm:pb-16 pb-12 ">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-6">
          <h1 className="text">Try it out</h1>
          <p className="paragraph">
            Add text, images and resources to your site.
          </p>

          <div className="grid md:grid-cols-3 grid-cols-1 place-content-center gap-10">
            <article className="md:col-span-1">
              <img src="./assets/work11.png" alt="" />
            </article>
            <article className="md:col-span-2 flex flex-col gap-5">
              <ol className="list-decimal pl-12 paragraph">
                <li>
                  To add text and images to your site, double-click the white
                  space or select <strong>Text box</strong> from the{" "}
                  <strong>Insert</strong>
                  menu.{" "}
                </li>
                <li>You can then add text by typing directly into the box.</li>
                <li>
                  Use the font formatting tools to get the look you want.{" "}
                </li>
                <li>
                  From the <strong>Insert</strong> tab, you can also choose the
                  options to add <strong>Images</strong> and Embed{" "}
                  <strong>Embed</strong> resources.
                </li>
                <li>
                  To insert a document from Google Docs, a spreadsheet from
                  Google Sheets (including live charts within a spreadsheet), a
                  presentation from Google Slides, or a form from Google Forms,
                  click the <strong>Insert</strong> tab, then select the
                  intended application.
                </li>
                <li>
                  You can also choose the items you’d like to insert from Google
                  Drive.
                </li>
              </ol>
              <p className="Bold">Click image to enlarge.</p>
            </article>
          </div>
        </div>
      </div>
      {/*EnD oF eIGTh seCTIOn */}

      {/* ninth sEctiON */}
      {/* Preview and publish */}
      <div
        id="Preview"
        className=" sm:pt-20 pt-16 pb-16 bg-[#F9F9FA] top-shadow"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-6">
          <h1 className="text1 leading-[2.4rem]">Preview and publish</h1>
          <p className="paragraph">
            Finally, preview your site so you can see how the website will look
            once it’s published online. You can preview it for multiple screen
            sizes, like a computer or mobile phone. Your website will
            automatically adjust to fit the type of device it’s being accessed
            from, but depending on the site, you may need to make some
            adjustments. Preview allows you to see and fix mistakes before
            publishing.
          </p>
        </div>
      </div>
      {/*end Of ninth sEctiON */}

      {/* ImAgE sEcTIOn */}
      <div className="bg-[url('/assets/work8.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* TENTh secTION */}
      {/* Try iT OUT  */}
      <div className="bg-[#FFFFFF] sm:pb-16 pb-12 md:pt-20 pt-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <h1 className="text">Try it out</h1>
            <p className="paragraph">Preview and publish your site.</p>
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
<iframe class="ev-video-stream-player-iframe" id="video-stream-player-id-64b69a30da686616fb9b145e" frameborder="0" allowfullscreen="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="Preview and publish" width="640" height="360" src="https://www.youtube.com/embed/hlk4zG-DrxY?autoplay=0&amp;cc_lang_pref&amp;cc_load_policy=0&amp;color=red&amp;disablekb=0&amp;enablejsapi=1&amp;fs=1&amp;hl&amp;loop=0&amp;modestbranding=0&amp;origin=https%3A%2F%2Fskillshop.exceedlms.com&amp;playsinline=1&amp;rel=0&amp;start=0&amp;widgetid=2" data-gtm-yt-inspected-6="true"></iframe>  </div>

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
              In this video, we'll preview and publish a Google site.
            </p>
            <div className="flex flex-col gap-5">
              <p className="paragraph">
                Before you publish your site, you can preview what it will look
                like on different types of devices.{" "}
              </p>
              <ol className="list-decimal pl-12 paragraph">
                <li>
                  Select the <strong>Preview icon</strong> in the upper toolbar
                  to generate the preview.
                </li>
                <li>
                  You can also use the Selections toolbox to preview what your
                  site will look like on different mobile devices.
                </li>
                <li>On a phone, on a tablet and on a laptop.</li>
                <li>
                  When you're done previewing, click the <strong>X</strong> on
                  the toolbar to exit the preview.
                </li>
                <li>
                  When you are ready for your site to be published to the web
                  click the <strong>Publish</strong> button in the upper
                  toolbar.{" "}
                </li>
                <li>
                  This will then allow you to make some final checks and changes
                  before publishing.
                </li>
                <li>
                  After you check the web address is correct you can then click
                  <strong>Manage</strong> to choose who can view your site.
                </li>
                <li>
                  You can publish your site to School only which means only
                  people within your school logged in will be able to view your
                  site.
                </li>
                <li>Or you can click the dropdown and publish to Public.</li>
                <li>
                  You can also just publish to specific people by typing their
                  names in the Add people and groups search bar.
                </li>
                <li>
                  Once you're ready, click <strong>Done</strong> and{" "}
                  <strong>Publish</strong>.{" "}
                </li>
              </ol>
            </div>

            <div className="flex flex-col gap-4">
              <p className="paragraph">Your site is now live.</p>
              <p className="paragraph">
                You can unpublish your site at any time by clicking the dropdown
                arrow next to the <strong>Publish</strong> option on the toolbar
                and choosing
                <strong> Unpublish</strong>.{" "}
              </p>
              <p className="paragraph">
                It will also give you the option to review and alter all of your
                publish settings if you wish.
              </p>
            </div>
          </div>
          {/* eND oF TRansCrIpt */}
        </div>
      </div>
      {/*END OF TENTh secTION */}

      {/* ELEVenTh sEctiON */}
      {/* Invite others to edit your site */}
      <div
        id="InviteOthers"
        className=" sm:pt-20 pt-16 sm:pb-16 pb-12 bg-[#F9F9FA] top-shadow"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-6">
          <h1 className="text1 leading-[2.4rem]">
            Invite others to edit your site
          </h1>
          <p className="paragraph">
            You might want to include others as collaborators to your site. If
            you are co-teaching, you and another teacher can build a site
            together.
          </p>
        </div>
      </div>
      {/*end Of ELEVenTh sEctiON */}

      {/* ImAgE sEcTIOn */}
      <div className="bg-[url('/assets/work8.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* TWeLTh SECtION */}
      <div className="sm:pt-20 pt-16 sm:pb-16 pb-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-6">
          <h1 className="text">Try it out</h1>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
            <article className="flex flex-col gap-5">
              <p className="paragraph">
                Invite others to collaborate on your site.
              </p>
              <div className="flex flex-col gap-4">
                <p className="paragraph">
                  To share your site with a collaborator, follow these steps.
                </p>
                <ol className="list-decimal pl-12 paragraph">
                  <li>
                    To the left of the <strong>Publish</strong> button, click
                    the <strong>Share with others</strong> button.
                  </li>
                  <li>
                    Add the email or username of the collaborator and click
                    <strong>Done</strong>.
                  </li>
                </ol>
              </div>
              <p dir="ltr" className="paragraph mt-3">
                Explore the{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://sites.google.com/applieddigitalskills.google/3rd-period-history/home?authuser=1"
                  className="text-[blue] underline"
                >
                  example project website
                </a>{" "}
                for ideas on how to build your own.
              </p>
            </article>
            <article className="flex flex-col gap-4 mt-4">
              <p className="Bold">Click image to enlarge.</p>
              <img src="./assets/work13.png" alt="" />
            </article>
          </div>
        </div>
      </div>
      {/*END OF TWeLTh SECtION */}

      {/* IMaGe SceTIoN */}
      <div className="bg-[url('/assets/work15.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* 13 ScEtiOn */}
      {/* Reflect on what you have learned */}
      <div className="sm:pt-20 pt-12 sm:pb-16 pb-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-6">
          <h1 className="text1 leading-[2.4rem]">
            Reflect on what you have learned
          </h1>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
            {/* TEXt */}
            <article className="flex flex-col gap-4 md:col-span-2">
              <p className="paragraph">
                Take some time to reflect on the ways you can customize sites to
                create a well-designed workspace for students.
              </p>
              <div className="flex flex-col gap-4">
                <p className="font-bold">
                  Consider the following and make a note of your answers.
                </p>
                <ol className="list-decimal pl-12 paragraph">
                  <li>
                    What are some situations where you could use Google Sites
                    within your school community?
                  </li>
                  <li>
                    What skills can students learn by creating their own site?{" "}
                  </li>
                  <li>
                    How might you use Google Sites to collaborate with other
                    educators?
                  </li>
                </ol>
              </div>
            </article>
            <article className="md:mt-0 sm:mt-3 mt-1 md:col-span-1">
              <img src="./assets/W17.png" alt="" />
            </article>
          </div>
        </div>
      </div>
      {/*End Of 13 ScEtiOn */}
    </div>
  );
};

export default ShareWorkSection;
