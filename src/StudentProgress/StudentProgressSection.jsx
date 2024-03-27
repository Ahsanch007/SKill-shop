import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Carousel from "../Components/Carousel";
AOS.init();

const images = [
  { image: '/assets/slide1.png', alt: 'Image 1',title:'In a Google Form, open the Responses tab.' },
  { image: '/assets/slide2.png', alt: 'Image 2',title:'Click Create a new spreadsheet.', },
  { image: '/assets/slide3.png', alt: 'Image 3' ,title:'Rename the spreadsheet of responses.', des:'Then click Create.'}
];
const images2 = [
  { image: '/assets/slide4.png', alt: 'Image 1',title:'In a form, on the Responses tab, click the three dots.' },
  { image: '/assets/slide5.png', alt: 'Image 2',title:'Click Unlink form.' },
  { image: '/assets/slide6.png', alt: 'Image 3',title:'Click Unlink in the pop-up window to confirm.' }
];
const StudentProgressSection = () => {
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
                      href="#AssessStudent"
                      className="double_click_protection"
                    >
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Assess student Knowledge with Google Forms
                        </h3>
                      </div>
                    </a>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a
                      href="#ViewGoogleForm"
                      className="double_click_protection"
                    >
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          View Google Form responses
                        </h3>
                      </div>
                    </a>
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a
                      href="#UseGoogleForm"
                      className="double_click_protection"
                    >
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Use Google Forms for grading
                        </h3>
                      </div>
                    </a>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a href="#KeepYourForm" className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Keep your Forms anonymous
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
                  src="./assets/form1.png"
                  className="w-[3.2rem] h-[3.2rem]"
                  alt=""
                />
                <h1 className="text-[23px] leading-[1.6rem]">Google Forms</h1>
              </div>
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
          <div className="flex flex-wrap  justify-center gap-6">
            <article
              data-aos="fade-left"
              data-aos-delay="60"
              data-aos-duration="1000"
              className="bg-[#E6E7E9] flex flex-col max-w-[20rem] items-center py-4 rounded-lg gap-y-5 px-4 "
            >
              <img src="./assets/form3.png" alt="" />
              <p className="text-center paragraph">
                Recognize which student data is necessary for classroom use
              </p>
            </article>
            <article
              data-aos="fade-left"
              data-aos-delay="65"
              data-aos-duration="1200"
              className="bg-[#E6E7E9] flex flex-col max-w-[20rem] items-center py-4 rounded-lg gap-y-5 px-4 "
            >
              <img src="./assets/work4.png" alt="" />
              <p className="text-center paragraph">
                Identify effective methods for collecting student data
              </p>
            </article>
            <article
              data-aos="fade-left"
              data-aos-delay="65"
              data-aos-duration="1500"
              className="bg-[#E6E7E9] flex flex-col max-w-[20rem] items-center py-4 rounded-lg gap-y-5 px-4 "
            >
              <img src="./assets/s3.png" alt="" />
              <p className="text-center paragraph">
                Use Forms data to assess student knowledge of course material
              </p>
            </article>
          </div>
        </div>
      </div>
      {/* End oF FiRsT sEctION */}

      {/* SEcOnD SecTion  */}
      {/* Assess student knowledge with Google Forms */}
      <div id="AssessStudent" className="py-16">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-6">
          <h1 className="text1 leading-[2.4rem]">
            Assess student knowledge with Google Forms
          </h1>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-10 gap-y-4">
            {/* TeXT */}
            <div className="flex flex-col gap-5">
              <p className="paragraph">
                Forms can be used to assess student knowledge and uncover which
                areas of a topic you need to focus on. Students can even use
                Forms to assess their own learning and set personal learning
                goals. The data from Forms is collected in a spreadsheet,
                allowing for further analysis.Google Forms also offers a{" "}
                <strong>summary of responses</strong> that creates visual
                representations of how respondents answered close-ended
                questions like multiple-choice questions. Forms allows you to
                embed, link, and email forms so it’s easy to share the results
                with others.
              </p>
            </div>

            {/* IMAge Div */}
            <div>
              <img src="./assets/s5.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* 3 SeCtiON */}
      {/* View Google Form responses */}
      <div
        id="ViewGoogleForm"
        className="sm:pb-16 pb-12 md:pt-20 pt-12 bg-[#F9F9FA] top-shadow"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <h1 className="text1 leading-[2.4rem]">
              View Google Form responses
            </h1>
          </div>

          {/* FiRsT DIv */}
          <div className="grid md:grid-cols-3 grid-cols-1 gap-12">
            <article className="flex flex-col gap-5 md:col-span-2">
              <p className="paragraph">
                After you send your form to students, you can easily check their
                individual responses or a summary on the{" "}
                <strong>Responses</strong> tab. The <strong>Questions</strong>{" "}
                tab brings you back to the questions you created.
              </p>
              <p className="paragraph">
                To analyze your responses further, you can send them to a
                spreadsheet.
              </p>
              <p className="paragraph">
                You might want to view responses in a spreadsheet to sort and
                filter them for review or to average student grades.{" "}
              </p>
              <p className="paragraph">
                The spreadsheet is linked to your form, so responses appear in
                real time.
              </p>
            </article>
            <article className="md:col-span-1">
              <img src="./assets/s6.png" className="w-full" alt="" />
            </article>
          </div>

          {/* SeconD Div */}
          <div className="flex flex-col gap-6">
            <p className="paragraph">
              Watch the videos below to learn more about how to view responses
              in Google Forms and Google Sheets.
            </p>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-12">
              <article className="flex flex-col gap-5 relative">
                <p className="font-bold">View responses as a summary</p>
                <p className="Bold">Click play to watch the video below.</p>
                <video preload="auto" controls poster="/assets/original4.png" src="https://storage.googleapis.com/onboarding_media/onboarding_v2/week4/lesson4_5_viewingstudentresponsesasasummary.mp4 " tabindex="-1" />
              <img src="/assets/63bc36c2a213ce099c3bc3f9.png" alt="" width={100} height={100} className="absolute top-[45%] right-[45%]" />
       
              </article>
              <article className="flex flex-col gap-4 relative">
                <p className="font-bold">View responses individually</p>
                <p className="Bold">Click play to watch the video below.</p>
                <video preload="auto" controls poster="/assets/original3.png" src="https://storage.googleapis.com/onboarding_media/onboarding_v2/week4/lesson4_6_viewingstudentresponsesindividually.mp4 " tabindex="-1" />
              <img src="/assets/63bc36c2a213ce099c3bc3f9.png" alt="" width={100} height={100} className="absolute top-[45%] right-[45%]" />
       
              </article>
            </div>
          </div>
        </div>
      </div>
      {/*End oF 3 SeCtiON */}

      {/* ImAge SEctION */}
      <div className="bg-[url('/assets/form8.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>
      <div className="bg-white py-4">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
        <div className="flex flex-col gap-5 py-4">
            <h1 className="text">Try it out</h1>
            <p className="paragraph">Set up a spreadsheet to view responses.</p>
            <p className="Bold mb-4">Click the arrow to learn more. Click each image to enlarge.</p>

          </div>
        <Carousel  images={images}  />

        </div>
      </div>
      <div className="bg-white pb-4 mt-4">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
        <div className="flex flex-col gap-5 py-4">
            {/* <h1 className="text">Try it out</h1> */}
            <p className="paragraph">You may want to stop sending responses to a spreadsheet. For example, if the form was a quiz that has ended, you might not want to collect responses after a certain date.</p>
            <p className="Bold mb-4">Click the arrow to learn more. Click each image to enlarge.</p>

          </div>
        <Carousel  images={images2}  />

        </div>
      </div>

      {/* 4 SeCtiON */}
      {/* Use Google Forms for grading */}
      <div
        id="UseGoogleForm"
        className="sm:pb-16 pb-12 md:pt-20 pt-12 bg-[#F9F9FA] top-shadow"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <h1 className="text1 leading-[2.4rem] mb-1">
              Use Google Forms for grading
            </h1>
            <p className="paragraph">
              You might already use a printed version of a rubric to assess
              student work. Speed up grading by creating your rubric in Google
              Forms instead.
            </p>
            <p className="paragraph">
              For example, create a basic grid-style rubric in Google Forms.
              Each row of your form should include an element of the project or
              paper to assess, like, “student presents information in a logical
              sequence” or “student demonstrates full knowledge by answering all
              questions.” Each column should include a numerical rating, like 1
              to 4. As you review the project, quickly click your rating for
              each element.{" "}
            </p>
            <p className="paragraph">
              You can also use this type of form for student presentations. Just
              quickly fill out the form and move on to the next student form in
              real time. You could even take this idea to the next level and
              have students peer or self-assess using a similar form.
            </p>
            <p className="paragraph">
              Check out this{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://docs.google.com/forms/d/1-I5d5QhB92gD296nC0TNu_UMMOzFfU-5R204oaDGTFY/copy"
                className="text-[blue] underline"
              >
                example form
              </a>{" "}
              to see what this type of rubric looks like using Google Forms.
            </p>
          </div>
        </div>
      </div>
      {/*End oF 4 SeCtiON */}

      {/* ImAge SEctION */}
      <div className="bg-[url('/assets/s8.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* FIfTh SeCtiON */}
      {/* Try it out */}
      <div className="bg-[#FFFFFF] sm:pb-16 pb-12 md:pt-20 pt-16">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <h1 className="text">Try it out</h1>
            <p className="paragraph">Create a grid-type rubric.</p>
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

<div class="ev-video-stream-player-iframe-container"><iframe class="ev-video-stream-player-iframe" id="video-stream-player-id-64b69aaa657b131709cad35a" frameborder="0" allowfullscreen="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="Try it out (Use Google Forms for grading)" width="640" height="360" src="https://www.youtube.com/embed/v1e2pR5138w?autoplay=0&amp;cc_lang_pref&amp;cc_load_policy=0&amp;color=red&amp;disablekb=0&amp;enablejsapi=1&amp;fs=1&amp;hl&amp;loop=0&amp;modestbranding=0&amp;origin=https%3A%2F%2Fskillshop.exceedlms.com&amp;playsinline=1&amp;rel=0&amp;start=0&amp;widgetid=1" data-gtm-yt-inspected-6="true"></iframe></div>

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
                In this video, we'll create a grid type rubric using Google
                forms.
              </p>
              <ol className="list-decimal pl-12 paragraph">
                <li>
                  This type of rubric can be used when assessing student work
                  with a rubric. It can also be used by students when doing a
                  peer review of each other's work.
                </li>
                <li>
                  Start by creating a <strong>New form</strong> in Google Forms.
                </li>
                <li>
                  Give it a title by clicking on the{" "}
                  <strong>Untitled form</strong> header and replacing it with
                  your title.
                </li>
                <li>
                  Next, add a short answer question to collect student names.
                  Click the <strong>Dropdown menu</strong> next to the{" "}
                  <strong>Question type</strong> and select{" "}
                  <strong>Short answer</strong>.
                </li>
                <li>
                  Mark this question as required so you don't forget to include
                  the student name that you are assessing.
                </li>
                <li>
                  Next, add a question by selecting the{" "}
                  <strong>Plus - add question icon</strong>
                  in the <strong>Toolbar</strong>.
                </li>
                <li>
                  This time we're going to add a{" "}
                  <strong>Multiple choice grid</strong>.
                </li>
                <li>
                  A multiple choice grid is a quick way to add more than one
                  question with the same answer options.
                </li>
                <li>
                  Once selected, in the <strong>Question area</strong>, you may
                  want to add instructions. Especially if this is a rubric
                  that's going to be used by students for peer review.{" "}
                </li>
                <li>
                  For example, you might add a question that asks students to
                  score each presentation using the rubric below.
                </li>
                <li>
                  The criteria for your rubric is going to be the rows in this
                  multiple choice grid.
                </li>
                <li>
                  Add in <strong>Rows</strong> the different criteria that you
                  are adding to your rubric.{" "}
                </li>
                <li>
                  Then for the <strong>Columns</strong>, enter the rubric scale.
                  For example, 1 to 4. One, needing improvement and four being
                  excellent.
                </li>
                <li>
                  Add the appropriate scale that you would like to use, and then
                  mark this grid as Require a response in each row so that all
                  areas have to be answered.
                </li>
              </ol>
            </div>
            {/* seconD diV */}
            <div className="flex flex-col gap-5">
              <p className="paragraph">Now it’s time to preview your form.</p>
              <ol className="list-decimal pl-12 paragraph">
                <li>
                  Click the <strong>Preview</strong> icon in the{" "}
                  <strong>Form header</strong>
                  here to preview what this form will look like.{" "}
                </li>
                <li>A preview will then open in a new tab.</li>
                <li>
                  If you need to make edits, you can go back to the original tab
                  or you can click the <strong>Edit</strong> icon here.
                </li>
                <li>
                  Once you are ready to use this form as yourself, as a teacher
                  or with your students, you can simply open the form and fill
                  it out.
                </li>
                <li>
                  As all questions require a response, the form can’t be
                  submitted unless everything is complete and a warning prompt
                  will appear if any fields are incomplete.
                </li>
                <li>
                  When finished, click <strong>Submit</strong>.
                </li>
                <li>The form has now been submitted.</li>
                <li>
                  This is a great type of form to use when students are
                  presenting as you can quickly fill out the form and move on to
                  the next student in real time.{" "}
                </li>
                <li>
                  And as mentioned earlier, you could also take this idea to the
                  next level and have students peer review each other, or even
                  self assess using a similar type of form.
                </li>
              </ol>
            </div>
            <p className="paragraph">
              This is why Google Forms is a great tool for students and
              teachers.
            </p>
          </div>
          {/* eND oF TRansCrIpt */}
        </div>
      </div>
      {/*End oF fifth SeCtiON */}

      {/* 6 SeCtiON */}
      {/* Keep your Google Forms anonymous */}
      <div
        id="KeepYourForm"
        className="sm:pb-16 pb-12 md:pt-20 pt-12 bg-[#F9F9FA] top-shadow"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <h1 className="text1 leading-[2.4rem] mb-1">
              Keep your Google Forms anonymous
            </h1>
            <p className="paragraph">
              To keep forms anonymous, do not add a name section and do not
              collect email addresses. You may want to do this for a feedback
              form so students feel comfortable being honest about their
              responses
            </p>
            <p className="paragraph">
              When you’re done grading and writing feedback, turn all that
              feedback into a spreadsheet. The data is automatically collected
              in a spreadsheet in Google Sheets. Share that spreadsheet with
              students and guardians to clearly communicate student progress and
              results.
            </p>
          </div>
          <div>
            <img src="./assets/s9.png" className="" alt="" />
          </div>
        </div>
      </div>
      {/*End oF 6 SeCtiON */}

      {/* ImAge SEctION */}
      <div className="bg-[url('/assets/s10.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* 7 ScEtiOn */}
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
                Now that you’ve learned how to use Google Forms to collect and
                assess student knowledge, it’s your turn to reflect on what you
                have learned.
              </p>
              <div className="flex flex-col gap-5">
                <p className="font-bold">
                  Consider the following and make a note of your answers.
                </p>
                <ol className="list-decimal pl-12 paragraph">
                  <li>
                    How can you use Google Forms to assess student knowledge?
                  </li>
                  <li>
                    How can you collect anonymous peer feedback on students’
                    projects?
                  </li>
                  <li>
                    How can Google Forms help you grade student work more
                    efficiently?
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
      {/*End Of 7 ScEtiOn */}
    </div>
  );
};

export default StudentProgressSection;
