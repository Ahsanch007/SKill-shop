import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const StudentGrowthSection = () => {
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
                    <a href="#FindAverage" className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Find the average and sum of student grades
                        </h3>
                      </div>
                    </a>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a href="#AverageScore" className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Find the average score of the whole class
                        </h3>
                      </div>
                    </a>
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a
                      href="#SearchFormula"
                      className="double_click_protection"
                    >
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Search for formulas and functions in Google Sheets
                        </h3>
                      </div>
                    </a>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a href="#Counting" className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Counting the number of values in a range
                        </h3>
                      </div>
                    </a>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a href="#FindRange" className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Find the minimum or maximum number in a range
                        </h3>
                      </div>
                    </a>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a
                      href="#FindUniqueValue"
                      className="double_click_protection"
                    >
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Finding unique values from a range
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
                  src="./assets/s4.png"
                  className="w-[3.2rem] h-[3.2rem] flex-shrink-0"
                  alt=""
                />
                <h1 className="text-[23px] leading-[1.6rem]">Google Sheets</h1>
              </div>
            </div>
            {/*end of right side */}
          </div>

          {/* cards ========> */}
          <h1 className="text-[25px] text">
            By the end of the lesson, you’ll be able to:
          </h1>

          {/* cards ======> */}
          <div className="flex flex-wrap justify-center  gap-6">
            <article
              data-aos="fade-left"
              data-aos-delay="60"
              data-aos-duration="1000"
              className="bg-[#E6E7E9] grid place-items-center max-w-[18rem] py-4 rounded-lg gap-y-5 px-4  w-full"
            >
              <img src="./assets/meet5.png" alt="" />
              <p className="text-center paragraph">
                Organize data in Google Sheets
              </p>
            </article>
            <article
              data-aos="fade-left"
              data-aos-delay="65"
              data-aos-duration="1300"
              className="bg-[#E6E7E9] grid place-items-center max-w-[18rem] py-4 rounded-lg gap-y-5 px-4 w-full"
            >
              <img src="./assets/gc2.png" alt="" />
              <p className="text-center paragraph">
                Identify methods for analyzing student data in Google Sheets
              </p>
            </article>
          </div>
        </div>
      </div>
      {/* End oF FiRsT sEctION */}

      {/* 2 SeCtiON */}
      {/* Find the average and sum of student grades */}
      <div id="FindAverage" className="sm:pb-16 pb-12 md:pt-20 pt-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <h1 className="text1 leading-[2.4rem] mb-1">
              Find the average and sum of student grades
            </h1>
            <p className="paragraph">
              Keeping track of student grades is a vital part of teaching.
              Google Sheets can be used as a digital gradebook to help you stay
              organized. It will even do some math calculations for you with the
              built-in formulas.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="Bold">Click to enlarge.</p>
            <img src="./assets/g2.png" className="" alt="" />
          </div>
          <div className="flex flex-col gap-5">
            <p className="paragraph">
              Every formula in Sheets has to start with an equals sign (=). That
              tells Sheets that this is a function rather than ordinary text or
              numbers.
            </p>
            <p className="paragraph">
              After that will be the formula name, followed by the range of data
              being referred to. For example, the formula:{" "}
              <strong>“=Average(A1:A5)” </strong>
              averages together the cells from A1 to A5.{" "}
            </p>
            <p className="paragraph">
              Alternatively, if you needed to add together all the values in the
              “A” column, you could use <strong>(A:A)</strong> for your
              formula’s range:
              <strong>“=Sum(A:A)”</strong>.
            </p>
          </div>
        </div>
      </div>
      {/*End oF 2 SeCtiON */}

      {/* ImAge SEctION */}
      <div className="bg-[url('/assets/g3.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* 3 SecTion  */}
      {/* Try it out */}
      <div className="py-16">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-5">
          <h1 className="text">Try it out</h1>
          <p className="paragraph">
            Practice finding the average grade for individual students in a
            spreadsheet using a formula.{" "}
          </p>
          <p className="paragraph">
            Check out the
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://docs.google.com/spreadsheets/d/1GiOoAEdsU5XeOU5qiswf7d8GymbzA5zLfhFesbuboog/copy?resourcekey=0-IWpOWzctW4StVn9SQ70aiQ#gid=0"
              className="text-[blue] underline"
            >
              {" "}
              example project here
            </a>
            .
          </p>
        </div>
      </div>
      {/* END OF 3 SECTION */}

      {/* 4 SeCtiON */}
      {/* Find the average score of the whole class */}
      <div
        id="AverageScore"
        className="sm:pb-16 pb-12 md:pt-32 pt-16 bg-[#F9F9FA] top-shadow"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <h1 className="text1 leading-[2.4rem] mb-1">
              Find the average score of the whole class
            </h1>
            <p className="paragraph">
              You may need to find the average score of your entire class for
              school reports or reviews. In the example above, you found the
              average grade for each individual student. You can use the same
              formula to calculate the average score for your entire class.
            </p>
          </div>
        </div>
      </div>
      {/*End oF 4 SeCtiON */}

      {/* ImAge SEctION */}
      <div className="bg-[url('/assets/g4.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* 5 SeCtiON */}
      {/* Try it out */}
      <div className="sm:pb-16 pb-12 md:pt-20 pt-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="text">Try it out</h1>
          </div>
          {/* SECOND DIV */}
          <div className="flex flex-col gap-5">
            <p className="paragraph">
              Find the average score of your students using sheets
            </p>
            <ol className="list-decimal pl-12 paragraph">
              <li>
                Select every number in the header column{" "}
                <strong>"Average"</strong>. Do so by clicking on the first
                student average and then hold shift and click on the last one.
                In the example project, this includes cells{" "}
                <strong>H2 to H15</strong>.
              </li>
              <li>
                Select <strong>Insert</strong> from the menu at the top.{" "}
              </li>
              <li>
                Then select <strong>Function</strong> and{" "}
                <strong>AVERAGE</strong>.{" "}
              </li>
              <li>
                The average grade for the entire class will be calculated in the
                next blank cell. In the example, this is cell H16.
              </li>
              <li>
                With the class average selected, bold the number so it stands
                out from the individual student averages.{" "}
              </li>
            </ol>
          </div>
          {/* THIRD DIV */}
          <div className="flex flex-col gap-12">
            <p className="Bold">Click to enlarge.</p>
            <img src="./assets/g5.png" className="" alt="" />
          </div>
        </div>
      </div>
      {/*End oF 5 SeCtiON */}

      {/* 6 SeCtiON */}
      {/* Search for formulas and functions in Google Sheets */}
      <div
        id="SearchFormula"
        className="sm:pb-16 pb-12 md:pt-28 pt-16 bg-[#F9F9FA] top-shadow"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <h1 className="text1 leading-[2.4rem] mb-2">
              Search for formulas and functions in Google Sheets
            </h1>
            <p className="paragraph">
              Determining which formula or function to use depends on the type
              of data you are working with. A good place to start is to search
              the functions list to see what is available and which functions
              you might find most useful. Use keywords to see if any formulas
              can do what you’re looking for.
            </p>
            <p className="paragraph">
              For example, search for “case” to find a formula that will
              instantly change text into lowercase. You can search, “sort” to
              sort the selected rows by the values or by alphabetical order in
              one or more columns. Alternatively, check out the{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://support.google.com/docs/table/25273?hl=en&amp;ref_topic=1361471"
                className="text-[blue] underline"
              >
                Google Sheets functions list
              </a>{" "}
              to see every function available.
            </p>
          </div>
        </div>
      </div>
      {/*End oF 6 SeCtiON */}

      {/* ImAge SEctION */}
      <div className="bg-[url('/assets/g4.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* 7 SeCtiON */}
      {/* Try it out */}
      <div className="sm:pb-28 pb-16 md:pt-20 pt-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="text">Try it out</h1>
          </div>
          {/* SECOND DIV */}
          <div className="flex flex-col gap-5">
            <p className="paragraph">
              Search and add a few popular functions. First, sort a sheet
              alphabetically.
            </p>
            <ol className="list-decimal pl-12 paragraph">
              <li>
                To search for a function, select a cell in your spreadsheet. For
                this example, select cell C1, the cell with the text Last Name.
              </li>
              <li>
                Select <strong>Help</strong> in the top menu. A search bar at
                the top that says <strong>Search the menus (Options +/)</strong>
              </li>
              <li>
                Type in the formula you want to search for. For example, you
                might type "sort".
              </li>
              <li>
                Select the option sort sheet by column C (A to Z). The sheet
                will show the student list in alphabetical order according to
                the last name.
              </li>
            </ol>
          </div>
          {/* THIRD DIV */}
          <div className="flex flex-col gap-6 md:mt-8 sm:mt-6 mt-4">
            <p className="Bold">Click to enlarge.</p>
            <img src="./assets/g6.png" className="" alt="" />
          </div>
        </div>
      </div>
      {/*End oF 7 SeCtiON */}

      {/* 8 SeCtiON */}
      {/* Counting the number of values in a range */}
      <div
        id="Counting"
        className="sm:pb-16 pb-12 md:pt-28 pt-16 bg-[#F9F9FA] top-shadow"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <h1 className="text1 leading-[2.4rem] mb-1">
              Counting the number of values in a range
            </h1>
            <p className="paragraph">
              Use the formula =Count(A:A) when you need to know how many values
              are in a range. It’s important to note that =Count works for
              counting numbers and =CountA works for counting cells with text
              data in them. This function could be useful to determine how many
              questions a student has answered as they fill out a questionnaire
              or to count the number of students on your class roster.
            </p>
          </div>
        </div>
      </div>
      {/*End oF 8 SeCtiON */}

      {/* ImAge SEctION */}

      <div className="bg-[url('/assets/g4.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* 9 SeCtiON */}
      {/* Try it out */}
      <div className="sm:pb-16 pb-12 md:pt-20 pt-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="text">Try it out</h1>
          </div>
          {/* SECOND DIV */}
          <div className="flex flex-col gap-5">
            <p className="paragraph">Try these formulas</p>
            <ol className="list-decimal pl-12 paragraph">
              <li>
                Select cells <strong>B2</strong> to <strong>B15</strong> in the
                example project.
              </li>
              <li>
                Click Insert then, <strong>Function</strong> and{" "}
                <strong>All</strong>.
              </li>
              <li>
                Scroll down to select <strong>CountA</strong>.
              </li>
              <li>
                Type <strong>B2:B15</strong> so the function looks like this{" "}
                <strong>COUNTA(B2:B15)</strong>.
              </li>
              <li>
                The number of student names appears in the next empty cell, B16.
              </li>
            </ol>
          </div>
          {/* THIRD DIV */}
          <div className="flex flex-col gap-6 mt-3">
            <p className="Bold">Click to enlarge.</p>
            <img src="./assets/g7.png" className="" alt="" />
          </div>
        </div>
      </div>
      {/*End oF 9 SeCtiON */}

      {/* 10 SeCtiON */}
      {/* Find the minimum or maximum number in a range */}
      <div
        id="FindRange"
        className="sm:pb-16 pb-12 md:pt-28 pt-16 bg-[#F9F9FA] top-shadow"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          {/* first div */}
          <div className="flex flex-col gap-5">
            <h1 className="text1 leading-[2.4rem] mb-1">
              Find the minimum or maximum number in a range
            </h1>
            <p className="paragraph">
              You might need to find the lowest and highest grade on an
              assignment. This is helpful if you need to calculate a grade
              curve. You can use the MIN and MAX functions to quickly find this
              data.
            </p>
          </div>

          {/* second div */}
          <div className="flex flex-col gap-6 mt-3">
            <p className="Bold">Click to enlarge.</p>
            <img src="./assets/g8.png" className="" alt="" />
          </div>
        </div>
      </div>
      {/*End oF 10 SeCtiON */}

      {/* ImAge SEctION */}

      <div className="bg-[url('/assets/g4.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* 11 SeCtiON */}
      {/* Try it out */}
      <div className="sm:pb-16 pb-12 md:pt-20 pt-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="text">Try it out</h1>
          </div>
          {/* SECOND DIV */}
          <div className="flex flex-col gap-5">
            <p className="paragraph">Use the max and min functions.</p>
            <ol className="list-decimal pl-12 paragraph">
              <li>
                In the example project, select cells <strong>E2 to E15</strong>.
              </li>
              <li>
                Click <strong>Insert</strong> then, <strong>Function</strong>,
                and <strong>MAX</strong> to find the highest score on the
                assignment in column E. The function in the cell will show as
                <strong>=MAX(E2:E15)</strong>. Press <strong>Enter</strong>.
              </li>
              <li>
                The highest score will appear in the next blank cell in column
                E. In this example, it is 92.
              </li>
              <li>
                Next, find the lowest score on an assignment. Select cells{" "}
                <strong>F2 to F15</strong>.
              </li>
              <li>
                Click <strong>Insert</strong> then, <strong>Function</strong>{" "}
                and <strong>MIN</strong>. The function will show as
                <strong>=MIN(F2:F15)</strong>.
              </li>
              <li>
                <strong>Press Enter.</strong>
              </li>
            </ol>
          </div>
          {/* 3 div */}
          <div className="flex flex-col gap-5">
            <p className="paragraph">
              The lowest score will appear in the next, blank cell in column F.
            </p>
            <p className="paragraph">In the example project, it is 56.</p>
          </div>
          {/* 4 DIV */}
          <div className="flex flex-col gap-6 mt-3">
            <p className="Bold">Click to enlarge.</p>
            <img src="./assets/g9.png" className="" alt="" />
          </div>
        </div>
      </div>
      {/*End oF 11 SeCtiON */}

      {/* 12 SeCtiON */}
      {/* Finding unique values from a range */}
      <div
        id="FindUniqueValue"
        className="bg-[#F9F9FA] top-shadow sm:pb-16 pb-12 md:pt-28 pt-16"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <h1 className="text1 leading-[2.4rem]">
              Finding unique values from a range
            </h1>
            <p className="mt-2 paragraph">
              Use “=Unique(A:A)” when you need to find a list of all the unique
              values in a column (column “A” in this case). In effect, this
              formula removes duplicates and can be a very handy technique.{" "}
            </p>
            <p className="paragraph">
              For example, if students entered their names into a form, you
              could use “=Unique” to get an error-free list of every student who
              has participated, even if they submitted the form more than once.
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
<iframe class="ev-video-stream-player-iframe" id="video-stream-player-id-64b694dd6ed6a616c8dcff6c" frameborder="0" allowfullscreen="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="Finding unique values from a range" width="640" height="360" src="https://www.youtube.com/embed/SfYUBB-zYu4?autoplay=0&amp;cc_lang_pref&amp;cc_load_policy=0&amp;color=red&amp;disablekb=0&amp;enablejsapi=1&amp;fs=1&amp;hl&amp;loop=0&amp;modestbranding=0&amp;origin=https%3A%2F%2Fskillshop.exceedlms.com&amp;playsinline=1&amp;rel=0&amp;start=0&amp;widgetid=1" data-gtm-yt-inspected-6="true"></iframe>  </div>

            {/* button  */}
            <button
              onClick={toggle}
              className="w-full bg-[#1A73E8] py-2.5 text-white"
            >
              Transcript
            </button>
          </div>

          {/* transcript  ==> */}
          <div className={`flex flex-col gap-8 ${show ? "block" : "hidden"}`}>
            {/* First div */}
            <div className="flex flex-col gap-5">
              <p className="paragraph">
                In this video we will use the unique function in Google sheets
                to create a list of unique entries to a form.
              </p>
              <p className="paragraph">
                So say, for example, you have a form that students fill out and
                they fill it out multiple times. Maybe it's something that they
                fill out every week or every day and you want to see who has
                filled it out at least one time.
              </p>
              <p className="paragraph">You need a list of unique names.</p>
              <p className="paragraph">
                So in this case, I have a sheet. It has several students
                repeated.
              </p>
              <div className="flex flex-col gap-5">
                <p className="paragraph">
                  And so if I want to just see a list of those who have filled
                  it out at least one time, I can use the UNIQUE function.
                </p>
                <ol className="list-decimal pl-12 paragraph">
                  <li>
                    To do that, go to the cell where you want to list the unique
                    values and type the <strong>Equals</strong> symbol, then
                    type <strong>Unique</strong> followed by an{" "}
                    <strong>Open bracket</strong>. The instructions will then
                    appear. You can do this by one column or multiple columns.
                  </li>
                  <li>
                    In this case, I'm going to use columns A, B, and C, since
                    that is where I have data.{" "}
                  </li>
                  <li>
                    So I'm going to highlight A, B, C, and press{" "}
                    <strong>Enter</strong>.
                  </li>
                </ol>
              </div>
              <div className="flex flex-col gap-5 mt-2">
                <p className="paragraph">
                  Now I have a list of unique entries.
                </p>
                <p className="paragraph">
                  These are the students who have filled out my form at least
                  one time.I can also see on this list if I have any missing
                  students.
                </p>
                <p className="paragraph">
                  And that is the unique function in Google sheets.
                </p>
              </div>
            </div>
          </div>
          {/* eND oF TRansCrIpt */}
        </div>
      </div>
      {/*End oF 12 SeCtiON */}

      {/* ImAge SEctION */}

      <div className="bg-[url('/assets/g11.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* 13 ScEtiOn */}
      {/* Reflect on what you have learned */}
      <div className="sm:pt-20 pt-12 sm:pb-16 pb-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-6">
          <h1 className="text1 leading-[2.4rem]">
            Reflect on what you have learned
          </h1>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
            {/* TEXt */}
            <article className="flex flex-col gap-5 md:col-span-2">
              <p className="paragraph">
                Now that you’ve learned how Google Sheets can help you collect
                data to evaluate student growth more efficiently, reflect on the
                ways you can use Drive in your classroom.
              </p>
              <div className="flex flex-col gap-5">
                <p className="font-bold">
                  Consider the following and make a note of your answers.
                </p>
                <ol className="list-decimal pl-12 paragraph">
                  <li>
                    What formulas might be most useful for you to use when
                    analyzing assignment or class data?
                  </li>
                  <li>
                    How might you make decisions around teaching and learning in
                    your classroom more data-driven?
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
      {/*End Of 12 ScEtiOn */}
    </div>
  );
};

export default StudentGrowthSection;
