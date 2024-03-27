import React from "react";

const AdditionalResources = () => {
  return (
    <div>
      {/* 5 seCTion */}
      {/* ​​Additional Resources​​ */}
      <div className="sm:pb-16 pb-12  pt-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col sm:gap-12 gap-8">
          <div className="flex flex-col sm:gap-12 gap-8">
            <h1 className="leading-[2.4rem] text4">​​Additional Resources​​</h1>
            <p className="paragraph">
              Google classroom is a great tool for educators and education
              admins who want to use tech to improve collaboration and
              communication for their students, guardians, and colleagues. If
              you are keen to learn more about ways this tool can enhance your
              work life check out the resources below.
            </p>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-2 md:gap-12">
            <article className="flex flex-col gap-6 md:col-span-2">
              <p className="paragraph">
                To learn more about this topic, click the links below.
              </p>
              <div className="flex flex-col gap-4 md:items-start items-center">
                <button className="bg-[#1a73e8] text-white py-2 px-4 font-medium">
                  <a
                    href="https://edu.google.com/intl/ALL_uk/workspace-for-education/classroom/apps/"
                    className="ev-links-item-link ev-button"
                    target="_blank"
                    role="button"
                  >
                    <span>Apps that work #withClassroom </span>
                  </a>
                </button>
                <button className="bg-[#1a73e8] text-white py-2 px-4 font-medium">
                  <a
                    href="https://edu.google.com/intl/ALL_uk/workspace-for-education/classroom/editions/"
                    className="ev-links-item-link ev-button"
                    target="_blank"
                    role="button"
                  >
                    <span>
                      Choose which edition of Google Classroom works for you{" "}
                    </span>
                  </a>
                </button>
                <button className="bg-[#1a73e8] text-white py-2 px-4 font-medium">
                  <a
                    href="https://edu.google.com/intl/ALL_uk/for-educators/product-guides/classroom/?modal_active=none"
                    class="ev-links-item-link ev-button"
                    target="_blank"
                    role="button"
                  >
                    <span>
                      Quick videos to get you going with Google Classroom
                    </span>
                  </a>
                </button>
                <button className="bg-[#1a73e8] text-white py-2 px-4 font-medium">
                  <a
                    href="https://edu.google.com/intl/ALL_uk/workspace-for-education/classroom/"
                    className="ev-links-item-link ev-button"
                    target="_blank"
                    role="button"
                  >
                    <span>Visit Classroom Help Center</span>
                  </a>
                </button>
              </div>
            </article>
            <article className="md:col-span-1 flex flex-col gap-4 md:items-end items-center">
              <img src="./assets/c9.png" className="cursor-zoom-in" alt="" />
            </article>
          </div>
        </div>
      </div>
      {/*enD oF 5 seCTion */}
    </div>
  );
};

export default AdditionalResources;
