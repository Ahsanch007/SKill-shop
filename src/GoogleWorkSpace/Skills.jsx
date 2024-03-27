import React from "react";

const Skills = () => {
  return (
    <div className="py-16 mt-[2rem]">
      <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-6">
        <h1 className="text1 leading-[2.4rem]">21st century skills</h1>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 gap-y-10">
          {/* text */}
          <article className="flex flex-col gap-4 col-span-2">
            <p className="paragraph">
              These Google tools can help you create a digital classroom where
              students are practicing the 21st century skills they will need in
              future careers. Let’s compare some traditional classroom skills
              and practices to their digital equivalents.
            </p>

            <div>
              <p className="text-[16px] font-bold">
                Traditional classroom skill:
              </p>
              <div className="pl-5">
                <div className="flex">
                  <li></li>
                  <p className="paragraph">
                    Looking up an answer in a textbook.
                  </p>
                </div>
                <div className="flex">
                  <li></li>
                  <p className="paragraph">
                    Working in groups in-person during set hours to collaborate
                    on a joint project.
                  </p>
                </div>
                <div className="flex">
                  <li></li>
                  <p className="paragraph">Filing paper-based documents.</p>
                </div>
                <div className="flex">
                  <li></li>
                  <p className="paragraph">
                    Pinning printed projects on wall displays around the school.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-[16px] font-bold">Digital classroom skill:</p>
              <div className="pl-5">
                <div className="flex">
                  <li></li>
                  <p className="paragraph">
                    Finding the best online resource, information and method to
                    solve a problem.
                  </p>
                </div>
                <div className="flex">
                  <li></li>
                  <p className="paragraph">
                    Remote collaboration and teamwork with multiple people for
                    the best results.
                  </p>
                </div>
                <div className="flex">
                  <li></li>
                  <p className="paragraph">
                    Storing documents in the cloud for easy retrieval and
                    editing.
                  </p>
                </div>
                <div className="flex">
                  <li></li>
                  <p className="paragraph">
                    Communicating to a wide audience by publishing work online.
                  </p>
                </div>
              </div>
            </div>

            <p className="paragraph">
              As you complete this course, you'll use each of these Google tools
              to create materials for your class to make lesson preparation,
              instruction, classroom management, and guardian communication
              easier and more effective throughout the school year.
            </p>
          </article>

          {/* img =======> */}
          <article className="col-span-1">
            <img src="./assets/skill_img.png" alt="" />
          </article>
        </div>
      </div>
    </div>
  );
};

export default Skills;
