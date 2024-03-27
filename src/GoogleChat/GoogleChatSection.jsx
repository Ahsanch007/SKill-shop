import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const GoogleChatSection = () => {
  const [activeIndex, setActiveIndex] = useState(0); // State to track active paragraph index

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
                    <a href="#GoogleChat" className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Communicate with Google Chat
                        </h3>
                      </div>
                    </a>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a href="#CreateChat" className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Create and name group Chats
                        </h3>
                      </div>
                    </a>
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a
                      href="#Chatnotification"
                      className="double_click_protection"
                    >
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Chat notifications
                        </h3>
                      </div>
                    </a>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a href="#ChatHistory" className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Manage/delete your chat history
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
                  src="./assets/chat2.png"
                  className="w-[3.2rem] h-[3.2rem]"
                  alt=""
                />
                <h1 className="text-[23px] max-w-[12rem] leading-[1.6rem]">
                  Google Chat
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
          <div className="flex flex-wrap justify-center gap-6">
            <article
              data-aos="fade-up"
              data-aos-delay="65"
              data-aos-duration="1500"
              className="bg-[#E6E7E9] flex flex-col max-w-[20rem] items-center py-4 rounded-lg gap-y-5 px-4 "
            >
              <img src="./assets/chat3.png" alt="" />
              <p className="text-center paragraph">
                Identify the benefits of real-time, virtual communication with
                colleagues and guardians
              </p>
            </article>
          </div>
        </div>
      </div>
      {/* End oF FiRsT sEctION */}

      {/* SEcOnD SecTion  */}
      <div className="py-16">
        <div className="max-w-[960px] w-[92vw] m-auto md:flex justify-between gap-10">
          {/* TeXT */}
          <div className="flex flex-col gap-4 md:mb-0 mb-3">
            <p className="paragraph">
              instant messaging in Chat can be used in a number of ways. For
              example, you can remind staff of upcoming deadlines, use it as a
              backchannel during teacher-led instruction, or while watching an
              instructional YouTube video.
            </p>
            <p className="paragraph">
              You can use Chat in your Gmail inbox or use the app. If you use a
              work or school account, your organization determines which options
              are available. Regardless of the ways you choose to incorporate
              Google Chat in your teaching, you will extend your reach by being
              able to communicate with all educators quickly and easily.
            </p>
          </div>

          {/* IMAge Div */}
          <div>
            <img src="./assets/chat4.png" alt="" />
          </div>
        </div>
      </div>
      {/* ENd of secoND  scEtIOn */}

      {/* thIRD sceTION */}
      {/* Communicate with Google Groups */}
      <div
        id="GoogleChat"
        className="sm:pt-20 pt-16 pb-16 bg-[#F9F9FA] top-shadow"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-6">
          <h1 className="text1 leading-[2.4rem]">
            Communicate with Google Groups
          </h1>
          <p className="paragraph">
            Google Groups is an easy-to-use application that acts as a
            discussion board and mailing list to reach large groups of people,
            like your entire class or student guardians. Participants in a
            Google Group can create, post, and respond to discussions and
            questions by web interface and email. Use Google Groups to share
            ideas, documents, and events with students, guardians, or anyone
            with an email address.
          </p>
        </div>
      </div>
      {/* eND of ThirD sEcTIOn */}

      {/* IMAgE sECTioN */}
      <div className="bg-[url('/assets/chat5.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* try iT out ===> */}
      {/* fOURtH SEcTIOn */}
      <div className="bg-[#F9F9FA] sm:pt-20 pt-12 sm:pb-16 pb-12 shadow-inner-large">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-5">
          <h1 className="text">Try it out</h1>
          <div className="flex flex-col gap-5">
            <p className="paragraph">Set up and communicate on Google Chat. </p>
            <ol className="list-decimal pl-12 paragraph">
              <li>
                Start by opening <strong>Google Chat</strong> on your computer
                by using the Chrome app or extension from the Chrome Web Store,
                through Gmail, or by visiting{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://chat.google.com"
                  className="text-[blue] underline"
                >
                  chat.google.com
                </a>
                .&nbsp;
              </li>
              <li>
                Or, access Google Chat on your Android or iOS device by
                downloading the Chat app from the Play or App store.{" "}
              </li>
              <li>
                Once you’ve opened Chat, find people you want to communicate
                with by entering their first and last name in the search bar.
              </li>
            </ol>
          </div>
          {/* imaGe */}
          <div className="flex justify-center mt-5">
            <img src="./assets/chat6.png" alt="" />
          </div>
        </div>
      </div>
      {/* End of fourtH sEcTiON */}

      {/* fiFTH SEctION */}
      {/* Create and name group chats */}
      <div
        id="CreateChat"
        className="sm:pt-20 pt-12 sm:pb-16 pb-12 bg-[#FFFFFF]"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-6">
          <h1 className="text1 leading-[2.4rem]">
            Create and name group chats
          </h1>
          <p className="paragraph">
            At times, you may want to include more than one person in your
            conversation and hold a group chat. You can hold one chat for
            sharing important information with all of your teachers or one chat
            to share announcements or data with all of your students' guardians.
            Group chats can accommodate up to 400 people in a text chat.
          </p>
        </div>
      </div>
      {/* END of fiFTH SEctION */}

      {/* IMAgE secTioN */}
      <div className="bg-[url('/assets/chat7.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* sIxtH SectION */}
      <div className="sm:pt-16 pt-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col sm:gap-12 gap-10">
          <div className="flex flex-col gap-5">
            <h1 className="text">Try it out</h1>
            <p className="paragraph">
              Have a go at setting up your own group chat or a collaborative
              space.
            </p>
          </div>
          {/* bUTTONs and pArAGrAPhs ===>*/}
          <div className=" sm:pb-16 pb-12">
            <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-10">
              {/* useSTATE */}
              {/* second div */}
              <div className="flex flex-col gap-3">
                <p className="Bold">
                  Click each tab to learn more. Click image to enlarge.
                </p>
                {/* buttons ===> */}
                <div className="grid sm:grid-cols-2 grid-cols-1 gap-3 ">
                  <button
                    className={`btn ${
                      activeIndex === 0 && "active1"
                    } bg-[#dadce0] px-2 py-3 rounded-sm duration-700 hover:bg-[#1A73E8] hover:text-[white]`}
                    onClick={() => handleClick(0)}
                  >
                    Start a group chat
                  </button>
                  <button
                    className={`btn ${
                      activeIndex === 1 && "active1"
                    } bg-[#dadce0] px-2 py-3 rounded-sm duration-700 hover:bg-[#1A73E8] hover:text-[white]`}
                    onClick={() => handleClick(1)}
                  >
                    Create a space
                  </button>
                </div>
                {/* end of buttons */}

                {/* paragraph  */}
                <div className="mt-4">
                  <div
                    className={`${
                      activeIndex === 0 ? "block" : "hidden"
                    }  px-6 grid md:grid-cols-3 grid-cols-1 gap-8`}
                  >
                    {/* imaGE */}
                    <div className="col-span-2">
                      <img src="./assets/chat8.png" alt="" />
                    </div>
                    <div className="col-span-1 flex flex-col gap-4">
                      <ol className="list-decimal pl-12 paragraph">
                        <li>
                          Click the + icon at the top of the chat window.{" "}
                        </li>
                        <li>
                          Click <strong>Start group conversation</strong>.
                        </li>
                        <li>
                          Search for students, staff, or guardians (by name,
                          email, or phone number), check the box next to their
                          name, and click the blue check mark button at the
                          bottom of the window.
                        </li>
                      </ol>
                    </div>
                  </div>

                  {/* seConD pArAgrAPh */}
                  <div
                    className={`${
                      activeIndex === 1 ? "block" : "hidden"
                    }  px-6 grid md:grid-cols-2 grid-cols-1 gap-6`}
                  >
                    {/* imaGE */}
                    <div className="">
                      <img src="./assets/chat9.png" alt="" />
                    </div>
                    <div className="flex flex-col gap-4">
                      <p className="paragraph">
                        You can create a space in Google Chat to provide a place
                        where a group can communicate and collaborate. For
                        example, if you are working on a team and want a place
                        where team members can ask questions and collaborate,
                        you might start a chat, name it and add the people on
                        your team. Students can use a chat space as a support
                        group for completing homework or studying for exams.
                      </p>
                      <ol className="list-decimal pl-12 paragraph">
                        <li>
                          At the top of the Chat window, click the + icon.
                        </li>
                        <li>
                          Then, choose the option to{" "}
                          <strong>Create space</strong>.
                        </li>
                        <li>
                          Enter a name for your space, add a description, and
                          set your preferences for the space.{" "}
                        </li>
                        <li>
                          Add the names, email, or group of the people you want
                          in the space.
                        </li>
                        <li>
                          Click <strong>Create</strong>.
                        </li>
                      </ol>
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
      {/*EnD of sIxtH SectION */}

      {/* SEveNTH section  */}
      {/* Chat notifications */}
      <div
        id="Chatnotification"
        className="sm:pt-20 pt-16 pb-16 bg-[#F9F9FA] top-shadow"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-6">
          <h1 className="text1">Chat notifications</h1>
          <p className="paragraph">
            You can mute Chat notifications so that you aren’t notified every
            time someone contributes to the chat. This can help set clear
            boundaries for notifications after your work hours or when you are
            busy. Muting a conversation will not prevent you from seeing
            messages in a conversation later.
          </p>
        </div>
      </div>
      {/* ENd oF SEveNtH SEctIoN */}

      {/* iMage SeCtiOn */}
      <div className="bg-[url('/assets/chat5.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>
    </div>
  );
};

export default GoogleChatSection;
