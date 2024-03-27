import React, { useState } from "react";
import Model from "../Components/Model";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const cards = [
  {
    id: 1,
    img: "./assets/teacher1.png",
    text: "My teaching partner uses Google Drawings to make manipulatives and sorting activities for her students.",
  },
  {
    id: 2,
    img: "./assets/teacher2.png",
    text: "I have students plot their learning about Ancient Egypt on a Google Map instead of using paper and colored pencils.",
  },
  {
    id: 3,
    img: "./assets/teacher3.png",
    text: "I’ve seen an activity where students were responsible for summarizing different parts of a chapter in a novel, then they recorded the main plot points in a shared presentation in Google Slides.",
  },
];

const citizens = [
  {
    id: 1,
    img: "./assets/citizen1.png",
    text: "Open transcript",
  },
  {
    id: 2,
    img: "./assets/citizen2.png",
    text: "Open transcript",
  },
  {
    id: 3,
    img: "./assets/citizen3.png",
    text: "Open transcript",
  },
];

const citizens1 = [
  {
    id: 1,
    img: "./assets/citizen2.png",
    text: "I am the only physics teacher in my school. Using online communities and forums, like Google Groups helps me find other physics teachers around the world to share ideas with.",
  },
  {
    id: 2,
    img: "./assets/citizen1.png",
    text: "I recently did a lesson with my students using Drawings in Google Drive. I couldn’t find many resources online, so I shared my resources with my PLN so others can benefit from my experience.",
  },
  {
    id: 3,
    img: "./assets/citizen3.png",
    text: "I am looking for another language classroom with whom my students can share their writing and feedback. By creating a PLN, I can find other teachers who might want to connect classrooms with mine.",
  },
];
const SuccessStories = () => {
  const [showModel, setShowModel] = useState(false);

  return (
    <div className="bg-[#F9F9FA]">
      {/* first section */}
      <div className="sm:pt-20 pt-12 sm:pb-16 pb-12 shadow-xl">
        {/* <img src="./assets/awards.png" className="absolute -top-4" alt="" /> */}
        <div className="max-w-[960px] w-[92vw] m-auto">
          {/* cards */}
          <div className="flex flex-col gap-5">
            <h1 className="text">Success stories</h1>
            <p className="paragraph">
              Let’s explore how the digital classroom helps teachers and
              students alike.
            </p>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 ">
              {cards.map((card) => {
                const { id, img, text } = card;
                return (
                  <article
                    key={id}
                    data-aos-delay="65"
                    data-aos-duration="2000"
                    data-aos="fade-up"
                    className="bg-[white] p-4 rounded-md"
                  >
                    {/* <div>{img}</div> */}
                    {/* {img} */}
                    <img src={img} alt="" />
                    <p className="paragraph ">{text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* section section */}
      <div
        id="textbook"
        className="shadow-inner-large sm:pt-20 pt-12 sm:pb-16 pb-12"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-4 ">
          <div className="flex flex-col gap-3">
            <h3 className="text1">Think beyond the textbook</h3>
            <p className="paragraph">
              A lot of classrooms have - and will continue to have - textbooks.
              They’re an important part of the classroom, and aren’t
              disappearing any time soon. But that doesn’t mean you can’t
              augment them to further engage students and make connections to
              the real world.
            </p>
          </div>

          <p className="paragraph">
            Explore the attributes of digital content and textbook content:
          </p>

          <div>
            <h5 className="text-[16px] font-bold">Digital Content:</h5>
            <div className="px-7">
              <div className="flex">
                <li className=""></li>
                <p className="paragraph">
                  Information can be accessed by anyone, anywhere.
                </p>
              </div>
              <div className="flex">
                <li className=""></li>
                <p className="paragraph">
                  Information is continuously being updated.
                </p>
              </div>
              <div className="flex">
                <li className=""></li>
                <p className="paragraph">
                  Multiple sources are available to verify and challenge
                  information.
                </p>
              </div>
              <div className="flex">
                <li className=""></li>
                <p className="paragraph">
                  Additional information can be found to support the primary
                  subject for a broader understanding.
                </p>
              </div>
              <div className="flex">
                <li className=""></li>
                <p className="paragraph">
                  Vast amount of information available on a given topic.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h5 className="text-[16px] font-bold">Textbook:</h5>
            <div className="px-7">
              <div className="flex">
                <li className=""></li>
                <p className="paragraph">
                  A finite number of copies so students may need to share.
                </p>
              </div>
              <div className="flex">
                <li className=""></li>
                <p className="paragraph">
                  Information can go out of date very quickly.
                </p>
              </div>
              <div className="flex">
                <li className=""></li>
                <p className="paragraph">
                  School policies can restrict the removal of school property
                  from the site.
                </p>
              </div>
              <div className="flex">
                <li className=""></li>
                <p className="paragraph">
                  Physical damage can make content unusable.
                </p>
              </div>
              <div className="flex">
                <li className=""></li>
                <p className="paragraph">
                  Limited amount of information on a given topic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* third section */}
      <div
        id="safe"
        className=" border-[4px] shadow-xl sm:pt-20 pt-12 sm:pb-16 pb-12"
      >
        <div className="max-w-[960px] w-[92vw] m-auto">
          <div className="flex flex-col gap-5">
            <h1 className="text1">Create safe, responsible digital citizens</h1>
            <p className="paragraph">
              As teachers, we know the value of good citizenship in the
              classroom and school community. But today, students need to be
              good citizens in the digital world as well. Their digital behavior
              has a big impact on themselves and others, and what makes good or
              bad digital citizenship may not always be clear.
            </p>
            <p className="paragraph">
              At the school level, policies and procedures and a defined digital
              citizenship curriculum can help guide you in the classroom. These
              help make students aware of what they should and shouldn’t be
              doing, with the goal of keeping themselves safe online.
            </p>
            <p className="paragraph">
              Listen to the following teachers talk about how they address
              online safety, copyright and fair use, and online communications.
            </p>
          </div>
          {/* cards ========> */}
          <div className="mt-10 flex flex-col gap-6">
            <p className="Bold">
              Click play to listen to each teacher. You can also open each
              transcript to read at your own pace.
            </p>

            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 p-3">
              {citizens.map((citizen) => {
                const { id, img, text } = citizen;
                return (
                  <article
                    key={id}
                    className="flex flex-col items-center gap-4"
                  >
                    <img src={img} alt="" />
                    <button
                      onClick={() => setShowModel(id)}
                      className="bg-[#1A73E8] py-2 text-white w-full font-bold"
                    >
                      {text}
                    </button>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
        {/* Model */}
        {showModel && (
          <Model
            setShowModel={setShowModel}
            showModel={showModel}
            closeModel={() => setShowModel(false)}
          />
        )}
      </div>

      {/* fourth section  */}
      <div
        id="learningnetwork"
        className="shadow-inner-large bg-[#F9F9FA] sm:pt-20 pt-12 sm:pb-16 pb-12"
      >
        <div className="max-w-[960px] w-[92vw] m-auto">
          <div className="flex flex-col gap-4">
            {/* text */}
            <div className="flex flex-col gap-4">
              <h4 className="text1">Build your learning network</h4>
              <p className="paragraph">
                When you have a question about teaching, technology, or anything
                related to education, you can ask your Personal Learning Network
                (PLN). Someone, somewhere, will have ideas and resources for
                you. You only need to ask. Likewise, when you build a community
                of learning professionals, you are also able to share your
                expertise and experience with others.
              </p>
            </div>

            {/* cards ==========> */}
            <div className="flex flex-col gap-4">
              <p className="paragraph">See what another educator said: </p>

              {/* cards */}
              <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 ">
                {citizens1.map((card) => {
                  const { id, img, text } = card;
                  return (
                    <article
                      key={id}
                      data-aos-delay="65"
                      data-aos-duration="2000"
                      data-aos="fade-up"
                      className="bg-[white] p-4 rounded-md"
                    >
                      {/* <div>{img}</div> */}
                      {/* {img} */}
                      <img src={img} alt="" />
                      <p className="paragraph ">{text}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* fifth section */}
      <div
        id="tools"
        className="bg-[white] shadow-xl sm:pt-20 pt-12 sm:pb-16 pb-12"
      >
        <div className="flex flex-col gap-5 max-w-[960px] w-[92vw] m-auto">
          <h1 className="text1">Tools for the Classroom</h1>
          <p className="paragraph">
            Google Workspace for Education is a suite of applications that can
            help you increase opportunities for critical thinking,
            communication, collaboration, and creativity, all while supporting
            the learning objectives that you have for your students.{" "}
          </p>
          <p className="paragraph">
            These tools are relevant, easy to use, and introduce students to new
            ways of learning. And they will help make your work more efficient
            by streamlining processes like how you organize and store your class
            materials, create and maintain your grade book, communicate
            important class updates, contact guardians, and schedule
            conferences.
          </p>
          <p className="paragraph">
            Throughout this course, we'll introduce you to the basics of using
            Google Workspace for Education in your classroom through videos,
            examples, reflection points, and more. But before you get started,
            here's a quick overview of some Google tools.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
