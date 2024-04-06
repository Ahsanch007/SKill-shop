import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { Collapse } from "react-collapse";
import AOS from "aos";
import "aos/dist/aos.css";
import Carousel from "../Components/Carousel";
AOS.init();

const images = [
  { image: '/assets/slide7.png', alt: 'Image 1',title:'1. Select a quClick Create a new spreadsheet.estion type. Then type the question you’d like to ask your students along with the corresponding answer choices. If you’ve selected a multiple choice question option, select Add option to add more than one answer choice to your question.' },
  { image: '/assets/slide8.png', alt: 'Image 2',title:'2. Add 2-3 questions to your form.  ', des:'3. Try out a few different question type options as you are building your survey or quiz.  ' },
];
const GoogleFormSection = () => {
  const [display, setDisplay] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoPlaying2, setIsVideoPlaying2] = useState(false);

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  const handleVideoPause = () => {
    setIsVideoPlaying(false);
  };
  const handleVideoPlay2 = () => {
    setIsVideoPlaying2(true);
  };

  const handleVideoPause2 = () => {
    setIsVideoPlaying2(false);
  };
  const toggle = () => {
    if (display) {
      setDisplay(false);
    } else {
      setDisplay(true);
    }
  };
  
  return (
    <div>
      {/* fiRSt sECtION */}
      <div className="bg-[#F9F9FA] mt-[3rem] sm:mt-[4rem] ">
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
                      href="#UseGoogleForm"
                      className="double_click_protection"
                    >
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Use Google Forms to create a survey Or Quiz
                        </h3>
                      </div>
                    </a>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a href="#AddQuestion" className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Add questions in Google Forms
                        </h3>
                      </div>
                    </a>
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a href="#EditQuestion" className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Editing a question in Google Forms
                        </h3>
                      </div>
                    </a>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a href="#MakeQuestion" className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Make questions required{" "}
                        </h3>
                      </div>
                    </a>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a href="#FinalizeForm" className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Finalize your form
                        </h3>
                      </div>
                    </a>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a href="#SendForm" className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Send your form
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
                Create surveys and quizzes in Google Forms
              </p>
            </article>
          </div>
        </div>
      </div>
      {/* End oF FiRsT sEctION */}

      {/* 2 ScETioN */}
      {/* Use Google Forms to create a survey or quiz */}
      <div id="UseGoogleForm" className="sm:pb-16 pb-12 md:pt-20 pt-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-12">
          <div className="flex flex-col gap-5">
            <h1 className="text1 leading-[2.4rem]">
              Use Google Forms to create a survey or quiz
            </h1>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-x-16 gap-y-6">
            <article className="flex flex-col gap-4">
              <p className="paragraph">
                Google Forms is a great tool for collecting and analyzing data.
                It provides a fast way to grade assessments and access
                easy-to-read performance data so you can better understand your
                students. You can use Forms to create things like quizzes,
                assessments, and surveys. For example, create a form to assess
                student knowledge at the beginning of a school year or for an
                end-of-lesson quiz before students leave class. Create a survey
                using Forms to collect family information or student information
                for clubs and extracurricular activities.
              </p>
            </article>
            <article className="justify-self-center">
              <img src="./assets/form4.png" alt="" />
            </article>
            <article className="justify-self-center">
              <img src="./assets/form5.png" alt="" />
            </article>
            <article className="flex flex-col gap-4">
              <p className="paragraph">
                Forms are easy to change if you need to add or delete questions
                on a survey or quiz. You can also collaborate with colleagues on
                a form. For example, if you were making a unit assessment for a
                history course, you could collaborate with other history
                teachers to ensure the assessment is ready for students. Forms
                aren’t just for teachers, though. Students can also use Forms to
                collect research data and collaborate on a group project.
              </p>
            </article>
          </div>
        </div>
      </div>
      {/*eND OF 2 ScETioN */}

      {/* ImAge SEctION */}
      <div className="bg-[url('/assets/form6.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* 3 ScETioN */}
      {/* Try it out */}
      <div className="sm:pb-16 pb-12 md:pt-20 pt-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-12">
          <div className="flex flex-col gap-5">
            <h1 className="text">Try it out</h1>
            <p className="paragraph">Creating a form in Google Forms.</p>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-x-16 gap-y-6">
            <article className="flex flex-col gap-5 md:col-span-2">
              <p className="Bold">Click the image to enlarge.</p>
              <img src="./assets/form7.png" alt="" />
            </article>
            <article className="flex flex-col justify-center gap-10 md:col-span-1">
              <ol className="list-decimal pl-12 paragraph">
                <li>Open the apps menu.</li>
                <li>
                  Then click on <strong>Forms</strong>.
                </li>
                <li>Click on the plus button to create a new form.</li>
                <li>Rename your form “Classroom Survey.”</li>
              </ol>
              <p className="paragraph">
                Tip: You can also go directly to{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://forms.new"
                  className="text-[blue] underline"
                >
                  forms.new
                </a>{" "}
                to quickly make a new form without entering Google Drive.
              </p>
            </article>
          </div>
        </div>
      </div>
      {/*eND OF 3 ScETioN */}

      {/* 4 SeCtiON */}
      {/* Add questions in Google Forms */}
      <div
        id="AddQuestion"
        className="sm:pb-16 pb-12 md:pt-20 pt-12 bg-[#FFFFFF] top-shadow"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <h1 className="text1 leading-[2.4rem]">
              Add questions in Google Forms
            </h1>
            <p className="paragraph">
              There are many types of questions you can ask with Google Forms
              including multiple choice, text input, checkboxes, and scales. You
              can also add videos and images to make your quiz or survey more
              engaging.
            </p>
          </div>

          <div className="flex flex-col gap-2 mt-2 relative">
            <p className="Bold mb-4">
              Watch the video below to learn more about adding questions in
              Google Forms.
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

              <video preload="auto" controls poster="/assets/original.png" src="https://storage.googleapis.com/onboarding_media/onboarding_v2/week4/lesson4_3_creatingagoogleformquiz.mp4 " tabindex="-1" onPlay={handleVideoPlay} onPause={handleVideoPause} />
              {!isVideoPlaying && (
              <img
                src="/assets/63bc36c2a213ce099c3bc3f9.png"
                alt=""
                width={100}
                height={100}
                className="absolute top-[45%] right-[45%]"
              />
            )}

          </div>
        </div>
      </div>
      {/*End oF 4 SeCtiON */}

      {/* ImAge SEctION */}
      <div className="bg-[url('/assets/form6.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>
      <div className="bg-white py-4">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col  ">
        <div className="flex flex-col gap-5 py-4">
            <h1 className="text">Try it out</h1>
            <p className="paragraph">Add a question in Google Forms.</p>
            <p className="Bold mb-4">Click the arrow to learn more.</p>

          </div>
        <Carousel  images={images}  />

        </div>
      </div>
      {/* 5 ScETioN */}
      {/* Editing a question in Google Forms */}
      <div
        id="EditQuestion"
        className="sm:pb-16 pb-12 md:pt-20 pt-12 bg-[#FFFFFF]"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-12">
          <div className="flex flex-col gap-6">
            <h1 className="text1 leading-[2.4rem]">
              Editing a question in Google Forms
            </h1>
            <p className="paragraph">
              As you create your quiz, you can edit or change questions as
              needed. To change the title of a question, simply click in the
              title text box and retype the question or title. To change the
              question type, select the question type drop-down and select a new
              option.
            </p>
          </div>

          <div className="grid place-content-center ">
            <p className="Bold">Click the image to enlarge.</p>
            <article className="flex flex-col items-center gap-5 mt-3">
              <img src="./assets/form10.png" alt="" />
            </article>
          </div>
        </div>
      </div>
      {/*eND OF 5 ScETioN */}

      {/* ImAge SEctION */}
      <div className="bg-[url('/assets/form11.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* 6 ScETioN */}
      {/* Try it out */}
      <div className="sm:pb-16 pb-12 md:pt-20 pt-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <h1 className="text">Try it out</h1>
            <p className="paragraph">Edit a question type in a form.</p>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-x-16 gap-y-6">
            <article className="flex flex-col gap-5">
              <p className="Bold">Click the image to enlarge.</p>
              <img src="./assets/form13.png" alt="" />
            </article>
            <article className="flex flex-col justify-center gap-4">
              <ol className="list-decimal pl-12 paragraph">
                <li>
                  In your form, select a question you’ve added and change the
                  title.{" "}
                </li>
                <li>Then change the question to a new type.</li>
              </ol>
            </article>
          </div>
        </div>
      </div>
      {/*eND OF 6 ScETioN */}

      {/* 7 ScETioN */}
      {/* Make questions required */}
      <div
        id="MakeQuestion"
        className="sm:pb-20 pb-12 md:pt-28 pt-12 bg-[#F9F9FA] shadow-top-bottom-inner"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-12">
          <div className="flex flex-col gap-5">
            <h1 className="text1 leading-[2.4rem]">Make questions required</h1>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-x-16 gap-y-6">
            <article className="flex flex-col gap-5">
              <p className="Bold">Click the image to enlarge.</p>
              <img src="./assets/form15.svg" alt="" />
            </article>
            <article className="flex flex-col justify-center gap-5">
              <p className="paragraph">
                Within Google Forms, there are a lot of options for customizing
                your quiz or survey. You can make questions required or
                optional.{" "}
              </p>
              <p className="paragraph">
                To make a question <strong>required</strong>, click the Required
                switch on each individual question. To make all questions
                required, navigate to the <strong>Settings</strong> tab in your
                quiz. Under
                <strong>Defaults</strong> and then{" "}
                <strong>Question defaults</strong>, click the switch for making
                questions required.
              </p>
            </article>
          </div>
        </div>
      </div>
      {/*eND OF 7 ScETioN */}

      {/* 8 ScETioN */}
      {/* Finalize your form */}
      <div id="FinalizeForm" className="sm:pb-16 pb-12 md:pt-20 pt-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-16">
          <div className="flex flex-col gap-6">
            <h1 className="text1 leading-[2.4rem]">Finalize your form</h1>
            <p className="paragraph">
              To finalize your form, click on the <strong>Settings</strong> tab
              and click the switch for making your form a quiz. This will allow
              you to make an answer key for your survey or quiz and customize a
              variety of settings on your form including:
            </p>
            <ul className="list-disc pl-12 paragraph">
              <li>When grades will be released to students.</li>
              <li>
                If the quiz is locked, meaning students won’t be allowed to have
                other tabs or applications open while completing the form.
              </li>
              <li>
                If students can see missed or correct answers, including points
                received for each question.
              </li>
              <li>And default point values for each question.</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-x-16 gap-y-6">
            <article className="flex flex-col gap-5 md:col-span-2">
              <p className="Bold">Click the image to enlarge.</p>
              <img src="./assets/form17.png" alt="" />
            </article>
            <article className="flex flex-col justify-center gap-4 md:col-span-1">
              <p className="paragraph">
                In <strong>Settings</strong>, you can also customize the
                presentation of your quiz or survey by adding a completion bar,
                shuffling the question order, or adding a confirmation message
                to alert students that their responses have been recorded.
              </p>
              <p className="paragraph">
                To choose correct answers and point values for each question,
                navigate back to the <strong>Questions</strong> tab, select a
                question, then click <strong>Answer key</strong>. Add the point
                value for the question, and select the correct answer. Then
                click <strong>Done</strong> to finalize.{" "}
              </p>
            </article>
          </div>
        </div>
      </div>
      {/*eND OF 6 ScETioN */}

      {/* 4 SeCtiON */}
      {/* Send your form */}
      <div
        id="SendForm"
        className="sm:pb-16 pb-12 md:pt-20 pt-12 bg-[#F9F9FA] top-shadow"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <h1 className="text1 leading-[2.4rem]">Send your form</h1>
            <p className="paragraph">
              After you have created your form, share it with your students to
              complete.
            </p>
          </div>

          <div className="flex flex-col gap-2 mt-2 relative">
            <p className="Bold mb-4">Click play to watch the video below.</p>
            

<video preload="auto" controls poster="/assets/original2.png" src="https://storage.googleapis.com/onboarding_media/onboarding_v2/week4/lesson4_4_sharingagoogleform.mp4 " tabindex="-1" onPlay={handleVideoPlay2} onPause={handleVideoPause2} />
{!isVideoPlaying2 && (
              <img
                src="/assets/63bc36c2a213ce099c3bc3f9.png"
                alt=""
                width={100}
                height={100}
                className="absolute top-[45%] right-[45%]"
              />
            )}
          </div>
        </div>
      </div>
      {/*End oF 4 SeCtiON */}

      {/* ImAge SEctION */}
      <div className="bg-[url('/public/assets/form8.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* 8 ScETioN */}
      {/* Try it out */}
      <div className="sm:pb-16 pb-12 md:pt-20 pt-12 bg-[#F9F9FA]">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <h1 className="text">Try it out</h1>
            <p className="paragraph">
              Create and share quizzes in Google Forms.
            </p>
          </div>
          {/* first div */}
          <div className="grid md:grid-cols-2 grid-cols-1 gap-x-12 gap-y-4">
            <article className="flex flex-col gap-5">
              <p className="paragraph">
                A history teacher needs students to have a thorough
                understanding of the events that led to World War I. Before
                beginning the lesson, the teacher wants to assess what each
                student already knows about World War I and have them answer a
                few open-ended questions about the topic.
              </p>
              <p className="paragraph">
                How might the teacher use Google Forms in this scenario?
              </p>
            </article>
            <article className="flex flex-col gap-5">
              <img src="./assets/form18.png" alt="" />
            </article>
          </div>
          {/* second div faq */}
          <div className="flex flex-col gap-5">
            <p className="Bold">Click below to expand each item.</p>
            <div className="flex flex-col gap-6">
              <article
                onClick={toggle}
                className={`flex items-center gap-6 px-6 py-5 rounded-md cursor-pointer bg-[#dadce0] ${display === true && "active2"
                  } hover:bg-[#1A73E8] duration-700 hover:text-white`}
              >
                {display ? (
                  <FaMinus className="text-[2rem]" />
                ) : (
                  <FaPlus className="text-[2rem]" />
                )}
                <p className="text-[18px]">Try it out: solution</p>
              </article>
              <Collapse isOpened={display}>
                <p className="paragraph">
                  The teacher can use Google Forms to gather a variety of answer
                  types from students. For the factual questions, the teacher
                  can use multiple choice, checkboxes, or dropdown question
                  types. To gather open-ended responses, the teacher can utilize
                  paragraph style question types. The benefits of using a form
                  in Google Forms is that all the responses are gathered in a
                  single location, which makes reviewing students' answers much
                  easier. For example, if most of the students knew the answer
                  to question 1 but missed question 7, the teacher knows which
                  topics to be reviewed in the first lecture on the topic.
                </p>
              </Collapse>
            </div>
          </div>
        </div>
      </div>
      {/*eND OF 7 ScETioN */}

      {/* ImAge SEctION */}
      <div className="bg-[url('/assets/form19.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* 11 ScEtiOn */}
      {/* Reflect on what you have learned */}
      <div className="sm:pt-20 pt-12 sm:pb-16 pb-12 bg-[#FFFFFF]">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-6">
          <h1 className="text1 leading-[2.4rem]">
            Reflect on what you have learned
          </h1>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
            {/* TEXt */}
            <article className="flex flex-col gap-5 md:col-span-2">
              <p className="paragraph">
                Now that you’ve learned how to use Google Forms, reflect on the
                ways you can use Drive in your classroom.
              </p>
              <div className="flex flex-col gap-5">
                <p className="font-bold">
                  Consider the following and make a note of your answers.
                </p>
                <ol className="list-decimal pl-12 paragraph">
                  <li>
                    How might you collborate with a colleague on a Google Form?
                  </li>
                  <li>
                    What are one or two ways you may use Google Forms to learn
                    more about your students?
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
      {/*End Of 11 ScEtiOn */}
    </div>
  );
};

export default GoogleFormSection;
