import React, { useState } from "react";
import SingleStep from "../Components/SingleStep";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const DigitalFeedbackSection = () => {
  const [activeIndex, setActiveIndex] = useState(0); // State to track active paragraph index
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  const toggle = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  const toggle1 = (id) => {
    if (open === id) {
      return setOpen(null);
    }
    setOpen(id);
  };
  const handleClick = (index) => {
    setActiveIndex(index);
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
                    <a href="#GiveFeedback" className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Give feedback for student growth
                        </h3>
                      </div>
                    </a>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a
                      href="#GiveFeedback1"
                      className="double_click_protection"
                    >
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Give feedback with Google Docs and Classroom
                        </h3>
                      </div>
                    </a>
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a href="#Grading" className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Grading and returning student work
                        </h3>
                      </div>
                    </a>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a href="#Suggest" className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Suggest edits
                        </h3>
                      </div>
                    </a>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <NavLink className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Give feedback with Forms
                        </h3>
                      </div>
                    </NavLink>{" "}
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
                  src="./assets/Docs.png"
                  className="w-[3.2rem] h-[3.2rem]"
                  alt=""
                />
                <h1 className="text-[23px] leading-[1.6rem]">Google Docs</h1>
              </div>
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
              data-aos="fade-up"
              data-aos-delay="60"
              data-aos-duration="1000"
              className="bg-[#E6E7E9] flex flex-col max-w-[20rem] items-center py-4 rounded-lg gap-y-5 px-4 "
            >
              <img src="./assets/c3.png" alt="" />
              <p className="text-center paragraph">
                Use Forms for students to collect feedback on their work
              </p>
            </article>
            <article
              data-aos="fade-up"
              data-aos-delay="60"
              data-aos-duration="1100"
              className="bg-[#E6E7E9] flex flex-col max-w-[20rem] items-center py-4 rounded-lg gap-y-5 px-4 "
            >
              <img src="./assets/gc2.png" alt="" />
              <p className="text-center paragraph">
                Recognize the value of incorporating digital feedback for
                students
              </p>
            </article>
            <article
              data-aos="fade-up"
              data-aos-delay="60"
              data-aos-duration="1200"
              className="bg-[#E6E7E9] flex flex-col max-w-[20rem] items-center py-4 rounded-lg gap-y-5 px-4 "
            >
              <img src="./assets/gc3.png" alt="" />
              <p className="text-center paragraph">
                Identify different strategies and tools for providing student
                feedback
              </p>
            </article>
            <article
              data-aos="fade-up"
              data-aos-delay="65"
              data-aos-duration="1300"
              className="bg-[#E6E7E9] flex flex-col max-w-[20rem] items-center py-4 rounded-lg gap-y-5 px-4 "
            >
              <img src="./assets/d4.png" alt="" />
              <p className="text-center paragraph">
                Use comments and Workflow in Google Classroom
              </p>
            </article>
            <article
              data-aos="fade-up"
              data-aos-delay="70"
              data-aos-duration="1500"
              className="bg-[#E6E7E9] flex flex-col max-w-[20rem] items-center py-4 rounded-lg gap-y-5 px-4 "
            >
              <img src="./assets/d5.png" alt="" />
              <p className="text-center paragraph">
                Use comments and suggestion mode in Google Docs
              </p>
            </article>
          </div>
        </div>
      </div>
      {/* End oF FiRsT sEctION */}

      {/* sECoND SectION */}
      {/* Give feedback for student growth */}
      <div id="GiveFeedback" className="sm:pt-16 pt-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col sm:gap-12 gap-10">
          <div className="flex flex-col gap-5">
            <h1 className="text1 leading-[2.4rem] mb-2">
              Give feedback for student growth
            </h1>
            <p className="paragraph">
              Students learn best when they are given feedback on how to improve
              their work and what to do differently. It’s equally important to
              provide students with positive feedback so they know what they’re
              doing well. Learning how to give and receive feedback is also
              important for their future career growth in almost any field.
            </p>
            <p className="paragraph">
              Google tools can help you facilitate students’ peer-to-peer
              feedback and student-teacher feedback. With Google tools, you can
              provide feedback throughout the entire lifecycle of an assignment,
              meaning feedback can be shared in real time, inside or outside of
              the classroom.{" "}
            </p>
          </div>
          {/* bUTTONs and pArAGrAPhs ===>*/}
          <div className=" sm:pb-16 pb-12">
            <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-10">
              {/* useSTATE */}
              {/* second div */}
              <div className="flex flex-col gap-3">
                <p className="Bold">Click each tab to learn more.</p>
                {/* buttons ===> */}
                <div className="grid sm:grid-cols-2 grid-cols-1 gap-3 ">
                  <button
                    className={`btn ${
                      activeIndex === 0 && "active1"
                    } bg-[#dadce0] px-2 py-3 rounded-sm duration-700 hover:bg-[#1A73E8] hover:text-[white]`}
                    onClick={() => handleClick(0)}
                  >
                    Give feedback in Google Docs
                  </button>
                  <button
                    className={`btn ${
                      activeIndex === 1 && "active1"
                    } bg-[#dadce0] px-2 py-3 rounded-sm duration-700 hover:bg-[#1A73E8] hover:text-[white]`}
                    onClick={() => handleClick(1)}
                  >
                    Insert comments
                  </button>
                </div>
                {/* end of buttons */}

                {/* paragraph  */}
                <div className="mt-4">
                  <div
                    className={`${
                      activeIndex === 0 ? "block" : "hidden"
                    }  px-6 grid md:grid-cols-2 grid-cols-1 gap-8`}
                  >
                    {/* imaGE */}
                    <div className="">
                      <img src="./assets/d1.png" alt="" />
                    </div>
                    <div className="flex flex-col gap-4">
                      <p className="paragraph">
                        To give feedback in Google Docs, you can use the comment
                        feature or suggest changes directly in a student’s
                        assignment. Students can also use these features to
                        provide each other with feedback when collaborating on
                        an assignment.
                      </p>
                    </div>
                  </div>

                  {/* seConD pArAgrAPh */}
                  <div
                    className={`${
                      activeIndex === 1 ? "block" : "hidden"
                    }  px-6 grid md:grid-cols-2 grid-cols-1 gap-10`}
                  >
                    <div className="flex flex-col gap-4">
                      <ol className="list-decimal pl-12 paragraph">
                        <li>
                          To add comments directly in Google Docs, click the
                          text that you want to leave feedback on, and insert a
                          comment.
                        </li>
                        <li>
                          The selected text will then become highlighted and a
                          pop-up window will appear in the right margin.
                        </li>
                        <li>
                          Type comments in this window and click the{" "}
                          <strong>Comment</strong>
                          button to save your remarks.
                        </li>
                        <li>
                          Anybody with access to the document can see the
                          comments inline with the text.
                        </li>
                        <li>
                          By replying to comments, a student can start a
                          discussion and interact with your feedback. Once
                          students integrate your feedback into their work, they
                          can click <strong>Resolve</strong> to clear the
                          comment.
                        </li>
                      </ol>
                    </div>
                    {/* imaGE */}
                    <div className="">
                      <img src="./assets/d2.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              {/* EnD oF UsEsTate */}
            </div>
          </div>
          {/* End Of ButTONs ===> */}
        </div>
      </div>
      {/*EnD of SEConD SectION */}

      {/* ImaGE SeCtiON */}
      <div className="bg-[url('/assets/d6.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* 3 sectIOn */}
      {/* Success stories
       */}
      <div className="sm:pt-20 pt-12 sm:pb-16 pb-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <h1 className="text">Success stories</h1>

          {/* cardS */}
          <div className="flex flex-col items-center w-full max-w-[32rem] m-auto gap-16">
            <article
              data-aos="fade-up"
              data-aos-delay="70"
              data-aos-duration="1500"
              className="flex flex-col gap-12 items-center py-4 px-4 bg-[#F9F9FA] rounded-lg"
            >
              <img src="./assets/gc12.png" alt="" />
              <p className="paragraph">
                The commenting feature in Docs is a lifesaver for my students.
                They comment heavily on each other’s work through a peer
                feedback protocol we have in place. As they type comments in the
                margins they can even tag each other by using the plus sign and
                typing their name. When doing group projects, this keeps a
                natural conversation going on, as students address a specific
                peer. Another feature I use a lot is looking at the Comments
                history. I often have to reopen a comment if it hasn’t truly
                been addressed by the student, even though they resolved it.
              </p>
            </article>
          </div>
        </div>
      </div>
      {/*enD Of 3 sectIOn */}

      {/* 4 ScETioN */}
      {/* Give feedback with Google Docs and Classroom */}
      <div
        id="GiveFeedback1"
        className="sm:pb-16 pb-12 md:pt-20 pt-12 bg-[#F9F9FA] top-shadow"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-12">
          <div className="flex flex-col gap-5">
            <h1 className="text1 leading-[2.4rem]">
              Give feedback with Google Docs and Classroom
            </h1>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-16">
            <article className="flex flex-col gap-5">
              <p className="paragraph">
                Students can create documents to complete their assignments and
                upload them to an assignment in Classroom for review. There are
                several efficient methods of feedback and grading you can
                provide your students in Docs that work together with Classroom,
                including the comment bank and assignment grading workflow
                features.
              </p>
              <p className="paragraph">
                If your students complete an assignment in Google Docs and
                submit it via Classroom, you can use the comment bank to store
                the comments you’ve made on a student’s document that you might
                want to reuse on other students’ work. For example, you might
                store comments like “Great work!”, “Add more detail”, or other
                comments you use frequently. Then, you can quickly insert the
                comment into a student’s assignment, instead of typing it out
                every time.
              </p>
            </article>
            <article className="justify-self-center">
              <img src="./assets/d8.png" alt="" />
            </article>
          </div>
        </div>
      </div>
      {/*eND OF 4 ScETioN */}

      {/* ImaGE SeCtiON */}
      <div className="bg-[url('/assets/d10.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* FIfTh SeCtiON */}
      {/* Try it out */}
      <div className="sm:pb-16 pb-12 md:pt-20 pt-16">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <h1 className="text">Try it out</h1>
            <p className="paragraph">
              Add comments to student work as well as add comments to a comment
              bank.
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
<iframe class="ev-video-stream-player-iframe" id="video-stream-player-id-64b697d732b57b1799f7012d" frameborder="0" allowfullscreen="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="Google Classroom Assignments from students and the Comment bank" width="640" height="360" src="https://www.youtube.com/embed/v1WGd-89sho?autoplay=0&amp;cc_lang_pref&amp;cc_load_policy=0&amp;color=red&amp;disablekb=0&amp;enablejsapi=1&amp;fs=1&amp;hl&amp;loop=0&amp;modestbranding=0&amp;origin=https%3A%2F%2Fskillshop.exceedlms.com&amp;playsinline=1&amp;rel=0&amp;start=0&amp;widgetid=1" data-gtm-yt-inspected-6="true"></iframe>
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
          <div className={`flex flex-col gap-10 ${show ? "block" : "hidden"}`}>
            <div className="flex flex-col gap-5">
              <p className="paragraph">
                In this video, we'll add comments to student work in Google
                Classroom and also add to our comment bank.
              </p>
              <ol className="list-decimal pl-12 paragraph">
                <li>
                  First, navigate to the <strong>Classwork</strong> page and
                  open up an assignment that students have submitted.
                </li>
                <li>
                  Click <strong>View assignment</strong> and then click on a
                  student to see their assignment.{" "}
                </li>
                <li>
                  To make a comment, highlight the text you'd like to review.
                </li>
                <li>
                  Click the plus <strong>Add comment</strong> icon here, and
                  then type your comment in the box.
                </li>
                <li>
                  Click <strong>Comment</strong> to post.
                </li>
                <li>
                  If this is a phrase you commonly use, click on the comment and
                  then choose the <strong>More options</strong> icon with the
                  three dots
                </li>
                <li>
                  You can then select <strong>Add to comment bank</strong> to
                  save time making future comments.
                </li>
                <li>
                  You can add multiple comments here by adding a new line and
                  then click <strong>Add</strong> when done.
                </li>
                <li>
                  To access your saved comments type the{" "}
                  <strong>Number sign</strong> or <strong>Hashtag</strong> and a
                  keyword in the comment field.{" "}
                </li>
                <li>
                  Your comment bank will pop up and you can choose the comment
                  that you would like to use.
                </li>
              </ol>
            </div>
            <p className="paragraph">
              And that is how to use the comments function.
            </p>
          </div>
          {/* eND oF TRansCrIpt */}
        </div>
      </div>
      {/*End oF fifth SeCtiON */}

      {/* section */}
      {/* Grading and returning student work */}
      <div
        id="Grading"
        className="bg-[#F9F9FA] top-shadow sm:pb-16 pb-12 md:pt-24 pt-12"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-6">
          <h1 className="text1 leading-[2.4rem]">
            Grading and returning student work
          </h1>
          <div className="flex flex-col gap-12">
            {/* first div */}
            <div className="grid md:grid-cols-2 grid-cols-1 gap-[3rem]">
              <article className="flex flex-col gap-5">
                <p className="paragraph">
                  In Classroom, you can give a numeric grade, leave comment-only
                  feedback, or do both. You can also return assignments without
                  grades.
                </p>
                <p className="paragraph">
                  Access student work within an assignment under the Classwork
                  tab. You can make comments on an assignment any time after it
                  has been created, including after students have submitted
                  their work. If students need to make revisions, return the
                  assignment and send a message along with it. Students can only
                  see your feedback as comments once you’ve returned their work.
                  Students can then have an opportunity to make revisions and
                  resubmit their work.
                </p>
                <p className="paragraph">
                  Look through the step by step instructions and then watch the
                  video below to learn more about providing feedback and adding
                  grades in Classroom.
                </p>
              </article>
              {/* Accordian */}
              <article className="flex flex-col justify-end gap-4 md:mt-8 mt-0">
                <p className="Bold">Click each step to expand it.</p>
                {/* Accordian */}
                <div>
                  {data.map((curEle) => {
                    return (
                      <SingleStep
                        key={curEle.id}
                        {...curEle}
                        open={curEle.id === open}
                        toggle1={() => toggle1(curEle.id)}
                      />
                    );
                  })}
                </div>
                {/*end of Accordian */}
              </article>
            </div>
            {/* end of first div */}
            {/* second div */}
            <div className="flex flex-col gap-5 relative">
              <p className="Bold">Click play to watch the video below.</p>
              {/* video */}
              <video preload="auto" controls poster="/assets/original.png" src="https://storage.googleapis.com/onboarding_media/onboarding_v2/week4/lesson4_3_creatingagoogleformquiz.mp4 " tabindex="-1" />
              <img src="/assets/63bc36c2a213ce099c3bc3f9.png" alt="" width={100} height={100} className="absolute top-[45%] right-[45%]" />
               </div>
          </div>
        </div>
      </div>
      {/* end of section */}

      {/* image section */}
      <div className="bg-[url('/assets/d30.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* 6 ScETioN */}
      {/* Success stories */}
      <div className="sm:pb-16 pb-12 md:pt-20 pt-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-12">
          <div className="flex flex-col gap-5">
            <h1 className="text">Success stories</h1>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-12">
            <article className="justify-self-center">
              <img src="./assets/d11.png" alt="" />
            </article>
            <article className="flex flex-col gap-5">
              <p className="paragraph">
                “I love working in Google Classroom! After a piece of work has
                been handed in I give my students feedback in a couple of ways.
                I assign a point value for each assignment and give a number
                grade. It’s great because I see all of the student work and
                scores in one place but students only see the scores that I gave
                directly to them. While that numeric grade is important to
                document their performance, I think the best learning actually
                comes from the individual comments I can leave on the
                assignment. Students not only see their grade but my private
                feedback. We can have conversations about the assignments as
                they can also reply to my comments.”
              </p>
            </article>
          </div>
        </div>
      </div>
      {/*eND OF 6 ScETioN */}

      {/* 7 ScETioN */}
      {/* Suggest edits in Google Docs */}
      <div
        id="Suggest"
        className="sm:pb-16 pb-12 md:pt-20 pt-12 bg-[#F9F9FA] top-shadow"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-12">
          <div className="flex flex-col gap-8">
            <h1 className="text1 leading-[2.4rem]">
              Suggest edits in Google Docs
            </h1>
            <p className="paragraph">
              Suggesting mode is a great tool for giving feedback to students
              that they can learn from. While the comment feature is great for
              discussion, it’s not as useful for pointing out misplaced commas,
              spelling errors, or missing apostrophes. When you want to make
              smaller edits in a document, such as correcting grammar or
              punctuation, use <strong>Suggesting</strong> mode. If you edit a
              document directly when making spelling corrections or other
              changes, students may miss them. Suggesting mode gives students
              the opportunity to learn from their mistakes.
            </p>
          </div>
        </div>
      </div>
      {/*eND OF 7 ScETioN */}

      {/* ImaGE SeCtiON */}
      <div className="bg-[url('/assets/d10.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* 8 SEctIon */}
      <div className="sm:pb-16 pb-12 md:pt-20 pt-12">
        <div className="max-w-[960px] w-[92vw] m-auto">
          <h1 className="text mb-6">Success stories</h1>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-12">
            <article className="md:col-span-1">
              <img src="./assets/d12.png" alt="" />
            </article>
            <article className="md:col-span-2">
              <p className="paragraph">
                “Sometimes people give more honest feedback if it is anonymous.
                Giving constructive, honest but kind feedback anonymously has to
                be taught. Our drama students practice this a lot through Google
                Forms. As part of their project performances we have each
                student create their own feedback form for their work. They get
                to decide the criteria and the levels of success at three
                different levels. During their performance, the rest of the
                students have the link to the Google Form and provide
                constructive comments. We don’t record usernames or identifying
                information of the students filling out the form. Using the
                responses sheet and summary of responses each student gets
                personalized feedback from their peers. Of course at first, the
                kids were a little silly with their comments, but we talked
                about what makes an appropriate comment and what they would like
                to hear about. Now they are champions at it and are engaged with
                helping their classmates become better performers.”
              </p>
            </article>
          </div>
        </div>
      </div>
      {/*eNd Of  8 SEctIon */}

      {/* ImaGE SeCtiON */}
      <div className="bg-[url('/assets/d13.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* 9 ScEtiOn */}
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
                Now that you’ve learned how to give feedback using Google
                Workspace for Education, think about how you could use
                Classroom, Docs, and Forms, or a combination of these, to
                provide feedback to your students.
              </p>
              <div className="flex flex-col gap-5">
                <p className="font-bold">
                  Consider the following and make a note of your answers.
                </p>
                <ol className="list-decimal pl-12 paragraph">
                  <li>
                    Think about the last two pieces of work you gave handwritten
                    feedback on. How could you use Google tools to give feedback
                    digitally?
                  </li>
                  <li>Which apps might work best with these assignments?</li>
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

export default DigitalFeedbackSection;

const data = [
  {
    id: 1,
    title: "Step 1",
    info: `Open one student’s assignment in ${(
      <strong>Docs</strong>
    )} and give feedback, then use the  ${(
      <strong>navigation arrows</strong>
    )}  at the top of the document to cycle through other students’ work.`,
  },
  {
    id: 2,
    title: "Step 2",
    info: `With this feature, you can also click the ${(
      <strong>drop-down menu</strong>
    )} below the student’s name to view the completion status of the assignment. If some students have not turned in their assignment, you can skip their work while providing feedback to make this process move quickly.`,
  },
  {
    id: 3,
    title: "Step 3",
    info: `Grading assignments in Classroom is streamlined, too. After students submit an assignment in Classroom, click on the assignment from ${(
      <strong>Stream</strong>
    )} to open the ${(
      <strong>Student work</strong>
    )} page. Here, you can view each student’s work, input grades, and add comments.`,
  },
  {
    id: 4,
    title: "Step 4",
    info: `To grade an assignment, click the student’s submission, then click on the ${(
      <strong>Grade</strong>
    )} section and enter the number of points you want to give them. To add a comment, simply type in the comment bar and click send.`,
  },
  {
    id: 5,
    title: "Step 5",
    info: `Once you’ve graded the assignment and added comments, click ${(
      <strong>Return</strong>
    )} to send the assignment feedback and grade to your student. Once you return the assignment, students can see their grade and read the feedback you’ve provided.`,
  },
];
