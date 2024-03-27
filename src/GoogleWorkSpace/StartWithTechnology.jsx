import React, { useState } from "react";

const StartWithTechnology = () => {
  const [activeIndex, setActiveIndex] = useState(0); // State to track active paragraph index

  // Function to handle button click and update active index
  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <div
        id="technology"
        className="mt-[1rem] sm:pt-24 pt-12 sm:pb-16 pb-12 shadow-xl"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          {/* first duv */}
          <div className="flex flex-col gap-3">
            <h4 className="text1">Get started with technology</h4>
            <p className="paragraph">
              As a teacher, you understand the importance of teaching academic
              subjects, like reading, writing, and math. But for students to be
              prepared for future careers and thrive in an ever-changing
              society, they also need to practice critical thinking,
              communication, collaboration, and working creatively.
            </p>
          </div>

          {/* second div */}
          {/* <div className="flex items-center gap-5">
          <article>
            <button
              className={`btn ${activeIndex === 0 && "active"}`}
              onClick={() => handleClick(0)}
            >
              Technology integration
            </button>
            <p className={`${activeIndex === 0 ? "block" : "hidden"}`}>
              Integrating technology in your classroom better prepares students
              to enter an increasingly connected and competitive workforce.
              Studies show that students need digital skills to succeed in new
              career fields. Lightcast, an industry expert on job skills,
              workforce talent, and labor market dynamics, estimates that “
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://blog.google/outreach-initiatives/google-org/goodwill-digital-skills/"
                class="ev-inline-link"
              >
                80% of ‘middle-skill’ U.S. jobs now require digital skills
              </a>
              .” Meanwhile, the World Economic Forum estimates that "
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www3.weforum.org/docs/WEF_Future_of_Jobs.pdf"
                class="ev-inline-link"
              >
                up to 50% of workers will need to add new [digital] skills to
                keep up with the requirements of in-demand careers
              </a>
              ” and that 65% of today’s grade school students will be working in
              a job that currently doesn’t exist.
            </p>
          </article>
          <article>
            <button
              className={`btn ${activeIndex === 1 && "active"}`}
              onClick={() => handleClick(1)}
            >
              Using digital tools
            </button>
            <p className={`${activeIndex === 1 ? "block" : "hidden"}`}>
              There are many digital tools that can help teachers streamline
              daily processes and incorporate these critical skills into
              students’ learning. For example, when working on group projects,
              students can leverage Google Workspace for Education tools to
              collaborate remotely in real-time instead of being limited to
              school hours. Technology can also lower printing and copier costs
              with online resources and file storage like Google Drive.
            </p>
          </article>
          <article>
            <button
              className={`btn ${activeIndex === 2 && "active"}`}
              onClick={() => handleClick(2)}
            >
              Differentiation
            </button>
            <p className={`${activeIndex === 2 ? "block" : "hidden"}`}>
              Students can gain access to different types of information from a
              range of sources for enhanced problem-solving instead of relying
              solely on prescriptive teaching methods that do not allow for
              teacher creativity in class instruction or materials. Furthermore,
              teachers can customize lessons and provide resources relevant to
              student’s varying learning abilities, avoiding one-size fits all
              standardized resources.
            </p>
          </article>
        </div> */}

          {/* second div */}
          <div className="flex flex-col gap-2">
            {/* buttons ===> */}
            <div className="grid sm:grid-cols-3 grid-cols-1 gap-3 ">
              <button
                className={`btn ${
                  activeIndex === 0 && "active1"
                } bg-[#dadce0] px-2 py-3 rounded-sm duration-700 hover:bg-[#1A73E8] hover:text-[white]`}
                onClick={() => handleClick(0)}
              >
                Technology integration
              </button>
              <button
                className={`btn ${
                  activeIndex === 1 && "active1"
                } bg-[#dadce0] px-2 py-3 rounded-sm duration-700 hover:bg-[#1A73E8] hover:text-[white]`}
                onClick={() => handleClick(1)}
              >
                Using digital tools
              </button>
              <button
                className={`btn ${
                  activeIndex === 2 && "active1"
                } bg-[#dadce0] px-2 py-3 rounded-sm dura hover:bg-[#1A73E8] hover:text-[white]`}
                onClick={() => handleClick(2)}
              >
                Differentiation
              </button>
            </div>
            {/* end of buttons */}

            {/* paragraph  */}
            <div className="mt-4">
              <p
                className={`${
                  activeIndex === 0 ? "block" : "hidden"
                }  px-6 #3c4043 paragraph`}
              >
                Integrating technology in your classroom better prepares
                students to enter an increasingly connected and competitive
                workforce. Studies show that students need digital skills to
                succeed in new career fields. Lightcast, an industry expert on
                job skills, workforce talent, and labor market dynamics,
                estimates that “
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://blog.google/outreach-initiatives/google-org/goodwill-digital-skills/"
                  className="ev-inline-link text-[blue] underline"
                >
                  80% of ‘middle-skill’ U.S. jobs now require digital skills
                </a>
                .” Meanwhile, the World Economic Forum estimates that "
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www3.weforum.org/docs/WEF_Future_of_Jobs.pdf"
                  className="ev-in line-link text-[blue] underline"
                >
                  up to 50% of workers will need to add new [digital] skills to
                  keep up with the requirements of in-demand careers
                </a>
                ” and that 65% of today’s grade school students will be working
                in a job that currently doesn’t exist.
              </p>
              <p
                className={`${
                  activeIndex === 1 ? "block" : "hidden"
                }  px-6 paragraph`}
              >
                There are many digital tools that can help teachers streamline
                daily processes and incorporate these critical skills into
                students’ learning. For example, when working on group projects,
                students can leverage Google Workspace for Education tools to
                collaborate remotely in real-time instead of being limited to
                school hours. Technology can also lower printing and copier
                costs with online resources and file storage like Google Drive.
              </p>
              <p
                className={`${
                  activeIndex === 2 ? "block" : "hidden"
                } px-6 paragraph`}
              >
                Students can gain access to different types of information from
                a range of sources for enhanced problem-solving instead of
                relying solely on prescriptive teaching methods that do not
                allow for teacher creativity in class instruction or materials.
                Furthermore, teachers can customize lessons and provide
                resources relevant to student’s varying learning abilities,
                avoiding one-size fits all standardized resources.
              </p>
            </div>
          </div>

          {/* third div  */}
          <div className="flex flex-col gap-4">
            <div>
              <h4 className="text">Benefits for teaching and learning</h4>
              <p className="paragraph">
                Throughout this course, you will identify several ways that
                technology (and having digital skills) benefits teaching and
                learning. To get started, this section explores three benefits
                for teachers and students:{" "}
              </p>
            </div>
            <div className="px-7">
              <div className="flex">
                <li></li>
                <p className="paragraph">
                  Extending the textbook content with digital access.
                </p>
              </div>
              <div className="flex">
                <li className=""></li>
                <p className="paragraph">Creating good digital citizens.</p>
              </div>
              <div className="flex">
                <li className=""></li>
                <p className="paragraph">
                  Building a personal learning network.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* IMage SeCtiON */}
      <div className="">
        <div className="bg-[url('/public/assets/awards.png')] bg-center bg-no-repeat bg-cover h-[70px] sm:h-[110px] md:h-[120px]"></div>
      </div>
    </>
  );
};

export default StartWithTechnology;
