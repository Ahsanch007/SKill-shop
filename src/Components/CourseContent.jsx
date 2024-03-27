import Wrapper from "../Components/Wrapper";
import Accordian, { AccordianItem } from "../Components/Accordian";
import { NavLink } from "react-router-dom";

const CourseContent = () => {
  return (
    <section className="py-8">
      <Wrapper styles={"px-0"}>
        <div className="flex gap-6">
          <div className="flex flex-1 flex-col space-y-8">
            <div>
              <Accordian className="flex flex-col space-y-4">
                <AccordianItem
                  value="1"
                  trigger="Google Workspace for Education Introduction"
                >
                  <div className="flex flex-col space-y-4">
                    <p className="text-[19px]">
                      Get started with an introduction to the wide range of
                      tools available within Google Workspace for Education
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-[21px] h-[21px] rounded-[50%] border-[1px] border-solid border-[#767676] flex-shrink-0 "></div>
                      <h1>
                        <NavLink to={"./GoogleWorkspace"}>
                          <span className="text-[17px] hover:underline u-headingitem cursor-pointer">
                            Introduction to using Google Workspace for Education
                            in the classroom
                          </span>
                        </NavLink>
                        <span className="text-[12px] ml-3 font-normal hover:no-underline">
                          {" "}
                          8 m
                        </span>
                      </h1>
                    </div>
                  </div>
                </AccordianItem>
                <AccordianItem value="2" trigger="Organize your classroom">
                  <div className="flex flex-col space-y-4">
                    <p className="text-[19px]">
                      In this unit, you will continue building your digital
                      skills by learning how Google Workspace for Education can
                      help you organize your digital classroom so you can focus
                      on what matters most: teaching your students. With Google
                      applications like Drive, Docs, Forms, and Sheets, you can
                      share classroom materials and collaborate with your
                      students more effectively. Plus, by using Google Workspace
                      for Education to manage your materials digitally, you can
                      stay organized throughout the school year.
                    </p>
                    {/* links ===========> */}
                    <div className="">
                      <ul className="activitysection__list courselist">
                        <li className="activitysection__item courselist__item">
                          <NavLink
                            to={"/ConsolidateFiles"}
                            className="double_click_protection"
                          >
                            <div className="courselist__marker"></div>
                            <div className="courselist__itemcontent">
                              <h3 className="u-headingitem activitysection__itemname hover:underline">
                                Consolidate your files in Google Drive
                              </h3>
                              <ul className="activitymeta activitymeta--inline">
                                <li className="activitymeta__item text-[12px]">
                                  7 m
                                </li>
                              </ul>
                            </div>
                          </NavLink>{" "}
                        </li>
                        <li className="activitysection__item courselist__item">
                          <NavLink
                            to={"/ManageFile"}
                            className="double_click_protection"
                          >
                            <div className="courselist__marker"></div>
                            <div className="courselist__itemcontent">
                              <h3 className="u-headingitem activitysection__itemname hover:underline">
                                Manage your files in Google Drive
                              </h3>
                              <ul className="activitymeta activitymeta--inline">
                                <li className="activitymeta__item text-[12px]">
                                  6 m
                                </li>
                              </ul>
                            </div>
                          </NavLink>{" "}
                        </li>
                        <li className="activitysection__item courselist__item">
                          <NavLink
                            to={"./Collaboration"}
                            className="double_click_protection"
                          >
                            <div className="courselist__marker"></div>
                            <div className="courselist__itemcontent">
                              <h3 className="u-headingitem activitysection__itemname hover:underline">
                                Collaborate and share with Google Docs
                              </h3>
                              <ul className="activitymeta activitymeta--inline">
                                <li className="activitymeta__item text-[12px]">
                                  5 m
                                </li>
                              </ul>
                            </div>
                          </NavLink>{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                </AccordianItem>
                <AccordianItem
                  value="3"
                  trigger="Communicate with students and parents"
                >
                  <div className="flex flex-col space-y-4">
                    <p className=" text-[19px]">
                      One of the most important roles as a teacher is
                      communication. In this unit, you will learn about the
                      powerful communication features of Gmail, Meet, Groups,
                      and Sites. With these applications, you can communicate
                      easily and effectively with students, guardians, and
                      staff. Gmail allows you to translate emails into various
                      languages and prioritize important emails. You can teach a
                      virtual class, in real time, with Google Meet or schedule
                      virtual meetings with guardians after school. Groups and
                      Sites allow you to collaborate and share information
                      easily with the whole class or small groups of students.
                    </p>
                    {/* links */}
                    <div className="">
                      <ul className="activitysection__list courselist">
                        <li className="activitysection__item courselist__item">
                          <NavLink
                            to={"/OrganizeSearchGmail"}
                            className="double_click_protection"
                          >
                            <div className="courselist__marker"></div>
                            <div className="courselist__itemcontent">
                              <h3 className="u-headingitem activitysection__itemname hover:underline">
                                Organize and search your Gmail
                              </h3>
                              <ul className="activitymeta activitymeta--inline">
                                <li className="activitymeta__item text-[12px]">
                                  7 m
                                </li>
                              </ul>
                            </div>
                          </NavLink>{" "}
                        </li>
                        <li className="activitysection__item courselist__item">
                          <NavLink
                            to={"/GoogleChat"}
                            className="double_click_protection"
                          >
                            <div className="courselist__marker"></div>
                            <div className="courselist__itemcontent">
                              <h3 className="u-headingitem activitysection__itemname hover:underline">
                                Message colleagues instantly with Google Chat
                              </h3>
                              <ul className="activitymeta activitymeta--inline">
                                <li className="activitymeta__item text-[12px]">
                                  5 m
                                </li>
                              </ul>
                            </div>
                          </NavLink>{" "}
                        </li>
                        <li className="activitysection__item courselist__item">
                          <NavLink
                            to={"/ShareStudentWork"}
                            className="double_click_protection"
                          >
                            <div className="courselist__marker"></div>
                            <div className="courselist__itemcontent">
                              <h3 className="u-headingitem activitysection__itemname hover:underline">
                                Share student work with Google sites
                              </h3>
                              <ul className="activitymeta activitymeta--inline">
                                <li className="activitymeta__item text-[12px]">
                                  7 m
                                </li>
                              </ul>
                            </div>
                          </NavLink>{" "}
                        </li>
                        <li className="activitysection__item courselist__item">
                          <NavLink
                            to={"/GoogleMeet"}
                            className="double_click_protection"
                          >
                            <div className="courselist__marker"></div>
                            <div className="courselist__itemcontent">
                              <h3 className="u-headingitem activitysection__itemname hover:underline">
                                Hold virtual conversations with Google Meet
                              </h3>
                              <ul className="activitymeta activitymeta--inline">
                                <li className="activitymeta__item text-[12px]">
                                  6 m
                                </li>
                              </ul>
                            </div>
                          </NavLink>{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                </AccordianItem>
                <AccordianItem value="4" trigger="Manage time effectively">
                  <div className="flex flex-col space-y-4">
                    <p className="text-[19px]">
                      In this unit, you will learn to make the most of your
                      limited time in a work day with the help of Google
                      Calendar, Tasks, and Keep. These tools can help you
                      increase your productivity and manage your time
                      effectively.
                    </p>
                    {/* links ===========> */}
                    <div className="">
                      <ul class="activitysection__list courselist">
                        <li class="activitysection__item courselist__item">
                          <NavLink
                            to={"./GoogleCalender"}
                            class="double_click_protection"
                          >
                            <div class="courselist__marker"></div>
                            <div class="courselist__itemcontent">
                              <h3 class="u-headingitem activitysection__itemname hover:underline">
                                Create and maintain schedules with Google
                                Calender and Plan effective meetings
                              </h3>
                              <ul class="activitymeta activitymeta--inline">
                                <li class="activitymeta__item text-[12px]">
                                  7 m
                                </li>
                              </ul>
                            </div>
                          </NavLink>{" "}
                        </li>
                        <li class="activitysection__item courselist__item">
                          <NavLink
                            to={"./GoogleTasks"}
                            class="double_click_protection"
                          >
                            <div class="courselist__marker"></div>
                            <div class="courselist__itemcontent">
                              <h3 class="u-headingitem activitysection__itemname hover:underline">
                                Stay organized with Google Tasks and Keep
                              </h3>
                              <ul class="activitymeta activitymeta--inline">
                                <li class="activitymeta__item text-[12px]">
                                  7 m
                                </li>
                              </ul>
                            </div>
                          </NavLink>{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                </AccordianItem>
                <AccordianItem value="5" trigger="Manage student work">
                  <div className="flex flex-col space-y-4">
                    <p className="text-[19px]">
                      In this unit, you will Continue building your digital
                      skills by learning how Google Classroom can help you
                      manage student work. You can use Classroom to create a
                      class; assign, grade, and collect work from students;
                      share learning materials; and give and receive feedback in
                      one single platform. If Classroom is not an option for
                      your school, you can use other Google Workspace for
                      Education tools, like Drive, Docs, and Sheets instead.
                    </p>
                    {/* links ===========> */}
                    <div className="">
                      <ul className="activitysection__list courselist">
                        <li className="activitysection__item courselist__item">
                          <NavLink
                            to={"./GoogleClassRoom"}
                            className="double_click_protection"
                          >
                            <div className="courselist__marker"></div>
                            <div className="courselist__itemcontent">
                              <h3 className="u-headingitem activitysection__itemname hover:underline">
                                Create your roster in Google Classroom
                              </h3>
                              <ul className="activitymeta activitymeta--inline">
                                <li className="activitymeta__item text-[12px]">
                                  5 m
                                </li>
                              </ul>
                            </div>
                          </NavLink>{" "}
                        </li>
                        <li className="activitysection__item courselist__item">
                          <NavLink
                            to={"/GoogleClassroom2"}
                            className="double_click_protection"
                          >
                            <div className="courselist__marker"></div>
                            <div className="courselist__itemcontent">
                              <h3 className="u-headingitem activitysection__itemname hover:underline">
                                Assign work and collect assignments with Google
                                Classroom
                              </h3>
                              <ul className="activitymeta activitymeta--inline">
                                <li className="activitymeta__item text-[12px]">
                                  8 m
                                </li>
                              </ul>
                            </div>
                          </NavLink>{" "}
                        </li>
                        <li className="activitysection__item courselist__item">
                          <NavLink
                            to={"./DigitalFeedback"}
                            className="double_click_protection"
                          >
                            <div className="courselist__marker"></div>
                            <div className="courselist__itemcontent">
                              <h3 className="u-headingitem activitysection__itemname hover:underline">
                                Give and receive digital feedback
                              </h3>
                              <ul className="activitymeta activitymeta--inline">
                                <li className="activitymeta__item text-[12px]">
                                  8 m
                                </li>
                              </ul>
                            </div>
                          </NavLink>{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                </AccordianItem>
                <AccordianItem
                  value="6"
                  trigger="Measure students progress
"
                >
                  <div className="flex flex-col space-y-4">
                    <p className="text-[19px] font-normal">
                      One of the most universal goals of teaching is to help
                      students grow and become better learners. Teachers
                      routinely collect information from students, guardians,
                      and other teachers to measure student growth and ensure
                      that the teaching method is benefiting the students.
                      However, recording and reporting on this data can be
                      time-consuming. In this unit, you will learn how to use
                      tools that increase efficiency and save time when
                      measuring student progress. Without duplicating your
                      existing workflow, Google tools can collect additional
                      types of student data to be stored and analyzed. These
                      include attendance, contact information, behavior reports,
                      guardian communication, and examples of student work
                      itself.
                    </p>
                    {/* links ===========> */}
                    <div className="">
                      <ul className="activitysection__list courselist">
                        <li className="activitysection__item courselist__item">
                          <NavLink
                            to={"./GoogleForms"}
                            className="double_click_protection"
                          >
                            <div className="courselist__marker"></div>
                            <div className="courselist__itemcontent">
                              <h3 className="u-headingitem activitysection__itemname hover:underline">
                                Create surveys and quizzes in Google Forms
                              </h3>
                              <ul className="activitymeta activitymeta--inline">
                                <li className="activitymeta__item text-[12px]">
                                  7 m
                                </li>
                              </ul>
                            </div>
                          </NavLink>{" "}
                        </li>
                        <li className="activitysection__item courselist__item">
                          <NavLink
                            to={"./StudentProgress"}
                            className="double_click_protection"
                          >
                            <div className="courselist__marker"></div>
                            <div className="courselist__itemcontent">
                              <h3 className="u-headingitem activitysection__itemname hover:underline">
                                Use Google Forms to gather data and track your
                                students progression
                              </h3>
                              <ul className="activitymeta activitymeta--inline">
                                <li className="activitymeta__item text-[12px]">
                                  7 m
                                </li>
                              </ul>
                            </div>
                          </NavLink>{" "}
                        </li>
                        <li className="activitysection__item courselist__item">
                          <NavLink
                            to={"./StudentGrowth"}
                            className="double_click_protection"
                          >
                            <div className="courselist__marker"></div>
                            <div className="courselist__itemcontent">
                              <h3 className="u-headingitem activitysection__itemname hover:underline">
                                Analyze student growth
                              </h3>
                              <ul className="activitymeta activitymeta--inline">
                                <li className="activitymeta__item text-[12px]">
                                  8 m
                                </li>
                              </ul>
                            </div>
                          </NavLink>{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                </AccordianItem>
              </Accordian>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default CourseContent;
