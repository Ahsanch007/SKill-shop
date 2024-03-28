import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { SlBadge } from "react-icons/sl";
import GenericCarousel from "../Components/GenericCarousel";
const images = [
  { image: '/assets/slide43.png', alt: 'Image 1', },
  { image: '/assets/slide44.png', alt: 'Image 2', },
  { image: '/assets/slide45.png', alt: 'Image 2', },
  { image: '/assets/slide46.png', alt: 'Image 2', },
];
const images2 = [
  { image: '/assets/slide47.png', alt: 'Image 1', width:'502px' },
  { image: '/assets/slide48.png', alt: 'Image 2', },
 
];
const GoogleMeetSection = () => {
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
                    <a href="#StartMeeting" className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Start a meeting from Gmail
                        </h3>
                      </div>
                    </a>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a
                      href="#ScheduleMeeting"
                      className="double_click_protection"
                    >
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Schedule a video meeting from Google Calender
                        </h3>
                      </div>
                    </a>
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a href="#ShareScreen" className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Share your screen in a meeting
                        </h3>
                      </div>
                    </a>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a href="#RaiseHand" className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Raise your hand in a meeting
                        </h3>
                      </div>
                    </a>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a
                      href="#TrackAttendance"
                      className="double_click_protection"
                    >
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Track Attendance in Google Meet
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
                  src="./assets/meet2.png"
                  className="w-[3.2rem] h-[3.2rem]"
                  alt=""
                />
                <h1 className="text-[23px] leading-[1.6rem]">Google Meet</h1>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-[60px] border-[2.5px] px-6 py-2  w-full">
                <img
                  src="./assets/meet3.png"
                  className="w-[3.2rem] h-[3.2rem]"
                  alt=""
                />
                <h1 className="text-[23px] leading-[1.6rem]">
                  Google Calendar
                </h1>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-[60px] border-[2.5px] px-6 py-2 w-full">
                <img
                  src="./assets/meet4.png"
                  className="w-[3.2rem] h-[3.2rem]"
                  alt=""
                />
                <h1 className="text-[23px] leading-[1.6rem]">Gmail</h1>
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
              data-aos="fade-left"
              data-aos-delay="65"
              data-aos-duration="1200"
              className="bg-[#E6E7E9] flex flex-col max-w-[20rem] items-center py-4 rounded-lg gap-y-5 px-4 "
            >
              <img src="./assets/meet5.png" alt="" />
              <p className="text-center paragraph">
                Identify the benefits of real-time, virtual communication with
                students and guardians
              </p>
            </article>
          </div>
        </div>
      </div>
      {/* End oF FiRsT sEctION */}

      {/* SECOND seCTION */}
      <div className="sm:pt-20 pt-12 pb-10">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col sm:gap-6 gap-8">
          <p className="paragraph">
            Organizing a meeting in Google Meet is a great way to connect with
            students or colleagues. With Meet, it is possible to see and hear
            the other person and have a conversation as though you were in the
            same room. Use it to plan with other teachers, talk with a guardian
            who is unable to make it to an in-person meeting or support a
            student who can’t come to school due to illness.{" "}
          </p>
          <div className="flex items-center sm:gap-12 gap-9 border-[3px] border-[#4285f4] rounded-2xl sm:px-8 px-4 sm:py-6 py-5">
            <div>
              <SlBadge className="text-[2.4rem] text-[#4285f4]" />
            </div>
            <p className="paragraph">
              Did you know that you can do more with Google Meet if you have the
              <strong> Teaching and Learning Upgrade</strong> or{" "}
              <strong>Education Plus</strong>
              editions of Google Workspace for Education? With Google Meet
              you'll be able to amplify engagement with increased capabilities,
              like livestreaming a school event, or facilitating group
              discussions with polls, Q&A and breakout rooms. The possibilities
              are endless!
            </p>
          </div>
        </div>
      </div>
      {/*end oF  SECOND seCTION */}

      {/* third SeCtiON */}
      {/* Start a meeting from Gmail */}
      <div
        id="StartMeeting"
        className="bg-[#F9F9FA] top-shadow sm:pb-16 pb-12 md:pt-20 pt-16"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <h1 className="text1 leading-[2.4rem]">
              Start a meeting from Gmail
            </h1>
            <p className="paragraph">
              Imagine having after-school hours for your students during a set
              homework time when they can ask you and each other for help, if
              needed. If you need to reply with more than a single sentence, you
              can be face-to-face with the student in seconds. You might use
              Meet to help with homework or exam prep or to teach a class of
              students in different locations.
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
<iframe class="ev-video-stream-player-iframe" id="video-stream-player-id-654220915b9c3a3ee87f43e8" frameborder="0" allowfullscreen="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="Recreate existing video - Start a meeting from Gmail" width="640" height="360" src="https://www.youtube.com/embed/d9ct6TbXYYQ?autoplay=0&amp;cc_lang_pref&amp;cc_load_policy=0&amp;color=red&amp;disablekb=0&amp;enablejsapi=1&amp;fs=1&amp;hl&amp;loop=0&amp;modestbranding=0&amp;origin=https%3A%2F%2Fskillshop.exceedlms.com&amp;playsinline=1&amp;rel=0&amp;start=0&amp;widgetid=1" data-gtm-yt-inspected-10="true"></iframe>
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
          <div className={`flex flex-col gap-5 ${show ? "block" : "hidden"}`}>
            <p className="paragraph">
              To start a meeting from Gmail, click on the <strong>Meet</strong>{" "}
              button, then click <strong> New meeting</strong>.{" "}
            </p>
            <ol className="list-decimal pl-12 paragraph">
              <li>
                You'll get a pop up asking you to either share your invitation
                or start the meeting now.
              </li>
              <li>
                Click, <strong>Start now</strong>.
              </li>
              <li>Your meeting will now appear.</li>
              <li>
                The exit the meeting click Red phone button to hang up the call.
              </li>
            </ol>
          </div>
          {/* eND oF TRansCrIpt */}
        </div>
      </div>
      {/*End oF third SeCtiON */}

      {/* iMAgE secTIon */}
      <div className="bg-[url('/assets/meet6.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>
    {/* slider section  */}

    <div className="bg-white sm:pb-16 pb-12 md:pt-20 pt-12    ">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <h1 className="text1 leading-[2.4rem]">Try it out</h1>
          </div>

          <article className=" ">
            <p className="paragraph">
            Start a meeting from Gmail. 
            </p>
            <p className="Bold my-4">Click the arrow to learn more.</p>

          </article>
          <GenericCarousel
            images={images}
            slides={[
              <ol key={1} className="list-decimal"><li dir="ltr"><p dir="ltr">Open Gmail.</p></li><li dir="ltr"><p dir="ltr">Navigate to <strong>Meet</strong> on the left side bar, click <strong>New meeting</strong>.</p></li></ol>,
              <div key={2}>
                <div><p dir="ltr">3. To send the meeting invite via link or email, click <strong>Send invite</strong>.</p><ul className="list-disc pl-[40px]"><li dir="ltr"><p dir="ltr">To copy the meeting invite details, click <strong>Copy meeting invite</strong>.</p></li><li dir="ltr"><p dir="ltr">To send an email invite, click <strong>Share via email</strong>.</p></li></ul></div>
              </div>,
              <div key={3}>
                <div><p>4. When you’re ready to join the meeting, click <strong>Join now</strong>. The meeting window will open and before you join your first meeting, allow permissions for your microphone and camera. Once you grant permission:</p><ul className="list-disc pl-[40px]"><li dir="ltr"><p dir="ltr">To turn your microphone on or off, select Turn on / off microphone.</p></li><li dir="ltr"><p dir="ltr">To turn your camera on or off, select Turn on / off camera.</p></li></ul><p dir="ltr">5. To join the call, click <strong>Join now</strong>.</p></div>
              </div>,
              <div key={4}><p>6. To end the call, click <strong>Leave call</strong>.</p></div>
            ]}

          />
        </div>
      </div>
      {/* fOuRtH sEctiON */}
      {/* Schedule a video meeting from Google Calendar */}
      <div
        id="ScheduleMeeting"
        className=" sm:pt-20 pt-16 pb-16 bg-[#F9F9FA] top-shadow"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-6">
          <h1 className="text1 leading-[2.4rem]">
            Schedule a video meeting from Google Calendar
          </h1>
          <p className="paragraph">
            When you create an event on Google Calendar, you can add a video
            meeting link within the event. That way, everyone has the meeting
            link right there in their own calendars. Now, when you need to join
            a specific meeting, you don’t have to search through your email for
            the link as it’s already in your calendar.
          </p>
        </div>
      </div>
      {/*end Of FOURTh sEctiON */}

      {/* iMAgE secTIon */}
      <div className="bg-[url('/assets/meet6.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* fIFTh SeCtion */}
      <div className="bg-white sm:pb-16 pb-12 md:pt-20 pt-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <h1 className="text">Try it out</h1>

          <div className="flex flex-col gap-6">
            <p className="paragraph">
              Schedule a video meeting from your Google Calendar.
            </p>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
              <article className="md:col-span-2 flex flex-col gap-7">
                <ol className="list-decimal pl-12 paragraph">
                  <li>
                    In Google Calendar, click <strong>Create</strong>, then
                    click <strong>Event</strong>.
                  </li>
                  <li>
                    A pop-up window will appear where you can add the event
                    title and details.
                  </li>
                  <li>
                    Click <strong>Add guests</strong>.
                  </li>
                  <li>
                    Enter the names or emails of the people you want to invite.
                  </li>
                  <li>
                    Click <strong>Save</strong>.
                  </li>
                  <li>
                    To notify guests, click <strong>Send</strong>.
                  </li>
                </ol>
                <div className="flex flex-col gap-5">
                  <p className="paragraph">
                    <strong>Google Workspace for Education users</strong>: You
                    can also add a dial-in number to the event.{" "}
                  </p>
                  <p className="paragraph">
                    <strong>Important</strong>: Guests can forward the meeting
                    link to other people. If an uninvited person tries to join a
                    meeting, participants from your organization must accept
                    their request.
                  </p>
                  <div className="flex flex-col gap-0">
                    <p className="font-bold">Join a meeting</p>
                    <p className="paragraph">
                      You can join a video meeting from Google Meet, Google
                      Calendar, or Gmail from your computer. You can also{" "}
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://support.google.com/meet/answer/9303069?hl=en&amp;ref_topic=7192926#zippy=%2Cuse-a-phone-to-dial-into-a-meeting"
                        className="text-[blue] underline"
                      >
                        dial-in to a meeting
                      </a>{" "}
                      from a phone or a meeting room, or you can use Google Meet
                      without a Google account.&nbsp;
                    </p>
                  </div>
                  <p className="paragraph">
                    Mobile users can also join meetings from their mobile using
                    the Android or iOS Google Meet app.
                  </p>
                  <p className="paragraph">
                    Users on a computer or mobile device can communicate by text
                    via the Google Meet chat feature without disrupting the
                    meeting.
                  </p>
                </div>
              </article>
              <article className="md:col-span-1">
                <img src="./assets/meet8.png" alt="" />
              </article>
            </div>
          </div>
        </div>
      </div>
      {/*enD Of fIFTh SeCtion */}

      {/* sIXTH sEctiON */}
      {/* Share your screen in a meeting */}
      <div
        id="ShareScreen"
        className=" sm:pt-20 pt-12 sm:pb-16 pb-12 bg-[#F9F9FA] top-shadow"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-6">
          <h1 className="text1 leading-[2.4rem]">
            Share your screen in a meeting
          </h1>
          <p className="paragraph">
            When you’re in a video call with others, there are times when you
            might need to show them your screen. Maybe you need to demonstrate
            to your students how to solve a math problem, show them an example
            of a project, or just let them see what you’re seeing on your
            screen. This can also be useful for presenting ideas to a group of
            guardians unable to attend a face-to-face meeting. Sharing a screen
            in Google Meet is easy.
          </p>
        </div>
      </div>
      {/*end Of siXTh sEctiON */}

      {/* iMAgE secTIon */}
      <div className="bg-[url('/assets/meet6.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* sEVeNTh SecTION */}
      <div className="sm:pt-20 pt-12 sm:pb-16 pb-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-6">
          <h1 className="text">Try it out</h1>
          <div className="grid md:grid-cols-3 gap-8">
            <article className="flex flex-col gap-5 md:col-span-1">
              <p className="paragraph">Share your screen in Google Meet.</p>
              <ol className="list-decimal pl-12 paragraph">
                <li>Open Gmail.</li>
                <li>
                  Navigate to <strong>Meet</strong> on the left side bar, click
                  New meeting and Join now to practice this.
                </li>
                <li>
                  At the bottom, click <strong>Present now</strong>.
                </li>
                <li>
                  Select <strong>Your entire screen, A window</strong>, or{" "}
                  <strong>A tab</strong>.
                </li>
                <ol className="list-decimal pl-12 paragraph">
                  <li>
                    If you present a Chrome tab, it shares that tab's audio by
                    default. This is useful when sharing a video clip.{" "}
                  </li>
                  <li>
                    To present a different tab then what you are already
                    presenting, select the tab you want to present on your
                    browser, a menu will appear at the top of the page, click
                    <strong>Share this tab instead</strong>.
                  </li>
                </ol>
                <li className="mt-3">
                  {" "}
                  Click <strong>Share</strong>.
                </li>
              </ol>
            </article>
            <article className="md:col-span-2 flex flex-col  gap-5 md:ml-6 ml-0 justify-center">
              <p className="Bold">Click image to enlarge.</p>
              <img src="./assets/meet9.png" alt="" />
            </article>
          </div>
        </div>
      </div>
      {/*enD OF sEVeNTh SecTION */}

      {/* eiGTH sEctiON */}
      {/* Raise your hand in a meeting */}
      <div
        id="RaiseHand"
        className=" sm:pt-20 pt-12 sm:pb-16 pb-12 bg-[#F9F9FA] top-shadow"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-6">
          <h1 className="text1 leading-[2.4rem]">
            Raise your hand in a meeting
          </h1>
          <p className="paragraph">
            In a productive class discussion, all student voices can be heard.
            In Google Meet, students can take turns talking by raising their
            virtual hand without disrupting the flow of the conversation.
            Moderators receive notifications for hands raised in the order
            they’re raised. After a participant speaks or asks a question, you
            can lower their virtual hand so others can speak.
          </p>
        </div>
      </div>
      {/*end Of EIGTh sEctiON */}

      {/* iMAgE secTIon */}
      <div className="bg-[url('/assets/meet6.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* niNTH SecTION */}
      <div className="sm:pt-20 pt-12 sm:pb-16 pb-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-6">
          <h1 className="text">Try it out</h1>
          <div className="grid md:grid-cols-3 gap-8">
            <article className="flex flex-col gap-5 md:col-span-1">
              <p className="paragraph">Raise your hand in a meeting</p>
              <ol className="list-decimal pl-12 paragraph">
                <li>
                  Join a meeting in Google Meet. You can try this on your own or
                  practice with your students in your next meeting.
                </li>
                <li>
                  To raise your hand, at the bottom of the screen click{" "}
                  <strong>Raise hand</strong>.
                </li>
                <li>
                  To lower your hand, click the <strong>Raise hand</strong>{" "}
                  button again.
                </li>
              </ol>
            </article>
            <article className="md:col-span-2 flex flex-col justify-end gap-5 md:ml-6 ml-0 mt-2">
              <p className="Bold">Click image to enlarge.</p>
              <img src="./assets/meet10.png" alt="" />
            </article>
          </div>
        </div>
      </div>
      {/*enD OF NiNTh SecTION */}

      {/* TENTH sEctiON */}
      {/* Track attendance in Google Meet */}
      <div
        id="TrackAttendance"
        className=" sm:pt-20 pt-12 sm:pb-16 pb-12 bg-[#F9F9FA] top-shadow"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-6">
          <h1 className="text1 leading-[2.4rem]">
            Track attendance in Google Meet
          </h1>
          <div className="flex flex-col gap-5">
            <p className="paragraph">
              You can focus on greeting your students as they enter a meeting
              while Google Meet takes the attendance for you. This feature is
              only available in the{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://edu.google.com/intl/ALL_us/workspace-for-education/editions/compare-editions/"
                className="text-[blue] underline"
              >
                <strong>Teaching and Learning, </strong>and{" "}
                <strong>Education Plus&nbsp;</strong>editions
              </a>
              . Attendance tracking reports will be enabled by default for your
              organization and can be turned on or off by administrators. If
              your school’s administration has activated attendance reports, you
              will automatically receive an attendance report for any meeting
              with two or more participants.
            </p>
            <p className="paragraph">
              After the meeting, the meeting organizer will receive an email
              with an attached attendance report in Google Sheets, whether the
              meeting was started from Google Classroom or Google Meet. The
              report will include each participant’s name, email, and length of
              time on a call, including timestamps of when they first joined and
              when they left the call.
            </p>
          </div>
        </div>
      </div>
      {/*end Of tenTH sEctiON */}

      {/* iMAgE secTIon */}
      <div className="bg-[url('/assets/meet6.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      <div className="bg-white sm:pb-16 pb-12 md:pt-20 pt-12    ">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <h1 className="text1 leading-[2.4rem]">Try it out</h1>
          </div>

          <article className=" ">
            <p className="paragraph">
            Track attendance.
            </p>
            <p className="Bold my-4">Click the arrow to learn more.</p>

          </article>
          <GenericCarousel
            images={images2}
            slides={[
              <div key={1}><p dir="ltr">You can turn attendance on or off from inside a meeting.</p><p dir="ltr"><br /></p><ol className="pl-[30px] list-decimal"><li dir="ltr"><p dir="ltr">From the bottom, select <strong>Host controls</strong>.</p></li><li dir="ltr"><p dir="ltr">From the side panel that opens, switch attendance tracking on or off.</p></li></ol></div>,
              <div key={2}><p>Or you can change these settings before a meeting starts from Google Calendar.</p><p><br /></p><ol className="pl-[30px] list-decimal"><li dir="ltr"><p dir="ltr">Go to Google Calendar and choose to create a new event or open an existing event.</p></li><li dir="ltr"><p dir="ltr">Select&nbsp;<strong>Add Google Meet video conferencing</strong>.&nbsp;</p></li><li dir="ltr"><p dir="ltr">Select the&nbsp;<strong>Video call options</strong> icon.&nbsp;</p></li><li dir="ltr"><p dir="ltr">Check the box next to&nbsp;<strong>Attendance tracking</strong>.</p></li><li dir="ltr"><p dir="ltr">Select <strong>Save</strong>.&nbsp;</p></li><li dir="ltr"><p dir="ltr">Finish setting up your event.</p></li></ol></div>
            ]}

          />
        </div>
      </div>

      
      <div className="bg-[url('/assets/meet-12.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* EleveNth sEctIOn */}
      <div className="sm:pt-20 pt-16 pb-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col md:gap-12 gap-8">
          <h1 className="text1 leading-[2.4rem]">
            Reflect on what you have learned
          </h1>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
            {/* TEXt */}
            <article className="flex flex-col gap-4 md:col-span-2">
              <p className="paragraph">
                Now that you’ve learned how Google Meet can be a powerful tool
                for connecting your classroom, it’s your turn to reflect on what
                you have learned.
              </p>
              <div className="flex flex-col gap-4 md:col-span-1">
                <p className="font-bold">
                  Consider the following and make a note of your answers.
                </p>
                <ol className="list-decimal pl-12 paragraph">
                  <li>
                    What are some situations where you could use Google Meet
                    with your students?
                  </li>
                  <li>How can you use Meet to connect with guardians?</li>
                  <li>
                    What skills can students learn by becoming familiar with
                    Meet?{" "}
                  </li>
                  <li>
                    How might you use Meet to collaborate with other educators?
                  </li>
                </ol>
              </div>
            </article>
            <article className="md:mt-0 mt-3">
              <img src="./assets/meet12.png" alt="" />
            </article>
          </div>
        </div>
      </div>
      {/*END oF EleveNth sEctIOn */}
    </div>
  );
};

export default GoogleMeetSection;
