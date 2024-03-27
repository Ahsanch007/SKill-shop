import React, { useState } from "react";

const PrioritizeEmail = () => {
  const [show, setShow] = useState(null);

  return (
    <div>
      {/* FIRst secTioN  */}
      {/* priritiZE eMAiLs */}
      <div
        id="PrioritizeEmail"
        className="bg-[#F9F9FA] sm:pb-16 pb-12 sm:pt-20 pt-12 top-shadow"
      >
        <div className="max-w-[960px] w-[92vw] m-auto">
          <div className="flex flex-col gap-5">
            <h1 className="text1 leading-[2.4rem]">Prioritize your emails</h1>
            <p className="mt-2 paragraph">
              If your inbox fills up quickly throughout the day, you can enable
              a setting called <span className="font-bold">Priority Inbox</span>{" "}
              to help you organize your emails. When you enable the{" "}
              <span className="font-bold">Priority Inbox</span>
              setting, Gmail automatically splits your inbox into three
              sections:
              <span className="font-bold">
                Important and unread, Starred,
              </span>{" "}
              and <span className="font-bold">Everything else</span>.
            </p>
            <p className="paragraph">
              Gmail will notice your complex email habits — the emails you open,
              mark as important, delete, label, and star — and prioritize those
              conversations at the top of your inbox.{" "}
            </p>
            <p className="paragraph">
              For example, <span className="font-bold">Priority Inbox</span>{" "}
              will recognize that your administrator sends emails that are
              significant to you, categorize them under{" "}
              <span className="font-bold">Important and unread</span>, and give
              you the option to mark a message with a star after reading it so
              that you are reminded to return to it.
            </p>
          </div>

          {/* image div */}
          <div className="flex flex-col gap-6 mt-12">
            <p className="Bold">Click play to watch the video below.</p>
            {/* <img src="./assets/m_1.png" alt="" /> */}
            {/* <video
              preload="auto"
              poster=""
              src="/uploads/resource_courses/targets/1563115/original/course/en/assets/64184c3a2a02b50ac076e11f/video.mp4"
              tabindex="-1"
            ></video> */}
                   <div class="ev-video-stream-player-iframe-container">
                   <iframe class="ev-video-stream-player-iframe" id="video-stream-player-id-64b699709eaecc17131aa9be" frameborder="0" allowfullscreen="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="Gmail Priority Inbox" width="640" height="360" src="https://www.youtube.com/embed/5nt3gE9dGHQ?autoplay=0&amp;cc_lang_pref&amp;cc_load_policy=0&amp;color=red&amp;disablekb=0&amp;enablejsapi=1&amp;fs=1&amp;hl&amp;loop=0&amp;modestbranding=0&amp;origin=https%3A%2F%2Fskillshop.exceedlms.com&amp;playsinline=1&amp;rel=0&amp;start=0&amp;widgetid=1" data-gtm-yt-inspected-6="true"></iframe>
                                       </div>

          </div>
        </div>
      </div>
      {/* iMagE sECTIOn */}
      <div className="bg-[url('/assets/gmail2.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>
      {/* TRY IT ouT */}
      {/* SEcONd SECTiON */}
      <div className="sm:pb-16 pb-12 sm:pt-20 pt-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-5">
          <h1 className="text">Try it out</h1>
          <p className="paragraph">Here's an overview of the Priority Inbox.</p>

          <div className="mt-6">
            <p className="Bold mb-3">Click each button to learn more.</p>

            <div className="relative">
              <button
                onClick={() => setShow(1)}
                className="bg-[#dadce099] absolute top-[10.6%] left-[83%] w-[50px] overflow-visible cursor-pointer h-[50px] rounded-[50%] grid place-content-center hover:text-[white] duration-700 hover:bg-[#1A73E8] sm:p-8 text-[20px]"
              >
                1
              </button>
              <button
                onClick={() => setShow(2)}
                className="bg-[#dadce099] text-[20px] sm:p-8 duration-700 hover:bg-[#1A73E8] hover:text-[white] absolute top-[20.5%] left-[31%] w-[50px] overflow-visible cursor-pointer h-[50px] rounded-[50%] grid place-content-center"
              >
                2
              </button>
              <button
                onClick={() => setShow(3)}
                className="bg-[#dadce099] text-[20px] sm:p-8 duration-700 hover:bg-[#1A73E8] hover:text-[white] absolute top-[30.5%] left-[46%] w-[50px] overflow-visible cursor-pointer h-[50px] rounded-[50%] grid place-content-center"
              >
                3
              </button>
              <button
                onClick={() => setShow(4)}
                className="bg-[#dadce099] text-[20px] sm:p-8 duration-700 hover:bg-[#1A73E8] hover:text-[white] absolute top-[60.5%] left-[12%] w-[50px] overflow-visible cursor-pointer h-[50px] rounded-[50%] grid place-content-center"
              >
                4
              </button>
              <img src="./assets/gmail3.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* end OF SECOND Section  */}
      {/* MODEL */}
      {show && (
        <div className="fixed inset-0 z-10 p-5 bg-[#272727B8] flex justify-center items-center">
          {/* FIrSt MOdeL */}
          <div
            className={`flex flex-col gap-4 max-w-[800px] pt-10 px-8 bg-white ${
              show == 1 ? "block" : "hidden"
            }`}
          >
            <h1 className="text-[25px] text-center">Locating Inbox Settings</h1>
            <p className="text-left paragraph">
              1. Click the Settings icon, then click See all settings.
            </p>
            <div className="py-5 border-t text-center border-gray-400">
              <button
                onClick={() => setShow(null)}
                className="bg-[#1A73E8] px-3 py-2 text-white"
              >
                Close
              </button>
            </div>
          </div>

          {/* SECond MODeL */}
          <div
            className={`flex flex-col gap-4 max-w-[800px] pt-10 px-8 bg-white ${
              show == 2 ? "block" : "hidden"
            }`}
          >
            <h1 className="text-[25px] text-center">Priority Inbox</h1>
            <div className="flex flex-col gap-3">
              <p className="paragraph">
                2. Click the Inbox tab. In the Inbox type dropdown menu, select
                <span className="font-bold"> Priority Inbox</span>.
              </p>
              <p className="paragraph">
                Note: By default Priority Inbox separates important emails into
                3 sections:{" "}
                <span className="font-bold">Important and unread, Starred</span>
                , and
                <span className="font-bold"> Everything else</span>.
              </p>
            </div>
            <div className="py-5 border-t text-center border-gray-400">
              <button
                onClick={() => setShow(null)}
                className="bg-[#1A73E8] px-3 py-2 text-white"
              >
                Close
              </button>
            </div>
          </div>
          {/* EnD oF seCOnD MoDEl */}

          {/* tHIrD MOdeL */}
          <div
            className={`flex flex-col gap-4 max-w-[800px] pt-10 px-8 bg-white ${
              show == 3 ? "block" : "hidden"
            }`}
          >
            <h1 className="text-[25px] text-center">Show and hide emails</h1>
            <div className="">
              <p className="paragraph">
                3. To select which emails you want to prioritize, select the
                drop down menu and choose{" "}
                <span className="font-bold">Priority inbox</span>.
              </p>
            </div>
            <div className="py-5 border-t text-center border-gray-400">
              <button
                onClick={() => setShow(null)}
                className="bg-[#1A73E8] px-3 py-2 text-white"
              >
                Close
              </button>
            </div>
          </div>
          {/*enD of tHIrD MOdeL */}

          {/* forTH MOdeL */}
          <div
            className={`flex flex-col gap-4 max-w-[800px] pt-10 px-8 bg-white ${
              show == 4 ? "block" : "hidden"
            }`}
          >
            <h1 className="text-[25px] text-center">Inbox sections</h1>
            <div className="">
              <p className="paragraph">
                4. This is the section to focus on when defining your priority
                sections.
              </p>
            </div>
            <div className="py-5 border-t text-center border-gray-400">
              <button
                onClick={() => setShow(null)}
                className="bg-[#1A73E8] px-3 py-2 text-white"
              >
                Close
              </button>
            </div>
          </div>
          {/*enD of fOURtH MOdeL */}
        </div>
      )}
      {/* END of modeL */}
    </div>
  );
};

export default PrioritizeEmail;
