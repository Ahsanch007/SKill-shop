import React, { useState } from "react";

const HighLightEmail = () => {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(null);

  const toggle = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  return (
    <div className="">
      {/* Highlight important emails */}
      {/* firSt SEction */}
      <div
        id="HighlightEmail"
        className="bg-[#F9F9FA] top-shadow sm:pb-16 pb-12 sm:pt-20 pt-12"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <div className="flex flex-col gap-5 mb-4">
            <h1 className="text1 leading-[2.4rem] mb-3">
              Highlight important emails
            </h1>
            <p className="paragraph">
              When sending an urgent or time-sensitive email message to your
              team, you can let recipients know a message needs their attention.
              Just add an appropriate heading to the subject of your message to
              highlight your request.
            </p>
            <p className="paragraph">
              To avoid missing important incoming messages, set up a filter and
              automatically apply a label to your messages. Labels are custom
              tags that help to categorize conversations so you can find and
              organize emails easily.
            </p>
            <p className="paragraph">
              With labels in Gmail, you have the flexibility to categorize your
              emails however you want.
            </p>
          </div>

          <div className="flex flex-col gap-2">
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
<iframe class="ev-video-stream-player-iframe" id="video-stream-player-id-64b699719eaecc17131aa9d7" frameborder="0" allowfullscreen="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="Highlight important emails" width="640" height="360" src="https://www.youtube.com/embed/9OCnn1wK9QI?autoplay=0&amp;cc_lang_pref&amp;cc_load_policy=0&amp;color=red&amp;disablekb=0&amp;enablejsapi=1&amp;fs=1&amp;hl&amp;loop=0&amp;modestbranding=0&amp;origin=https%3A%2F%2Fskillshop.exceedlms.com&amp;playsinline=1&amp;rel=0&amp;start=0&amp;widgetid=2" data-gtm-yt-inspected-6="true"></iframe>  </div>


            {/* button  */}
            <button
              onClick={toggle}
              className="w-full bg-[#1A73E8] py-2.5 text-white"
            >
              Transcript
            </button>
          </div>

          {/* transcript  ==> */}
          <div className={`flex flex-col gap-6 ${show ? "block" : "hidden"}`}>
            <div className="flex flex-col gap-5">
              <p className="paragraph">
                Adding labels in Gmail can help you organise your messaged.
              </p>
              <ol className="list-decimal pl-12 paragraph">
                <li>
                  Click on the plus button next to{" "}
                  <span className="font-bold">Label</span>.{" "}
                </li>
                <li>A pop up with launch.</li>
                <li>
                  Give the label a name and click{" "}
                  <span className="font-bold">Create</span>.{" "}
                </li>
                <li>
                  Once that label has been created, you can use the three dot
                  menu to assign a color.
                </li>
                <li>
                  Click <span className="font-sans">Label color</span> and
                  select one from the palette.{" "}
                </li>
              </ol>
            </div>

            <p className="paragraph">
              Now, you can assign this label to existing or incoming emails.
            </p>
          </div>
          {/* eND oF TRansCrIpt */}

          {/* BELOW transcRiPt paRAGraph */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              <p className="paragraph">You can use labels to:</p>
              <ol className="list-decimal pl-12 paragraph">
                <li>
                  Track the status of student projects. For example, create the
                  labels "Student: In Progress" and "Student: Done" to indicate
                  projects students are working on or have completed.
                </li>
                <li>
                  Organize email by nesting labels like subfolders. For example,
                  create the label "Tasks" and under this label, create nested
                  labels by student name.
                </li>
                <li>Identify email that needs a response.</li>
                <li>Identify email that can be read later.</li>
              </ol>
            </div>

            <p className="paragraph">
              When you get an email from someone, its importance is indicated
              with a label (yellow marker) next to the sender’s name. You can
              manually add yellow markers, but Gmail also tries to predict what
              is important and add them automatically for you. You can also
              apply several labels to an email, then later find the email by
              clicking any of its labels from the left panel. You can also
              search by label.
            </p>
          </div>
        </div>
      </div>
      {/* IMaGE SeCtIon */}
      <div className="bg-[url('/assets/gmail4.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>
      {/* END oF imAge SecTION */}
      {/* SeCONd SeCtioN  */}
      {/* try It out */}
      <div className="pt-16 pb-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-6">
          <h1 className="text">Try it out</h1>
          <p className="paragraph">
            Highlight important emails in your inbox by following these steps.
          </p>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-12">
            <article>
              <img src="./assets/gmail6.png" alt="" />
            </article>
            <article className="flex flex-col gap-4">
              <p className="paragraph">
                Practice creating a label in Gmail to automatically categorize
                incoming messages.
              </p>
              <ol className="list-decimal pl-12 paragraph">
                <li>
                  From an email, click <span className="font-bold">Labels</span>{" "}
                  and <span className="font-bold">Create new</span>.
                </li>
                <li>Enter the label name.</li>
                <li>
                  Click <span className="font-bold">Create</span>.
                </li>
              </ol>
            </article>
          </div>
        </div>
      </div>
      {/* end OF secONd sEction */}
      {/* thIRD sceTION */}
      {/* Star important messages */}
      <div
        id="StarMessage"
        className="sm:pb-16 pb-12 sm:pt-20 pt-12 bg-[#F9F9FA] top-shadow"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-6">
          <h1 className="text1 leading-[2.4rem]">Star important messages</h1>
          <p className="paragraph">
            Another way you can organize your inbox is by marking emails as
            Starred so you can return to them and respond later. For example,
            you might receive an important message during the school day that
            you can’t respond to until later, once the students leave for the
            day. Mark important emails as Starred to make them easier to find
            later.
          </p>
        </div>
      </div>
      {/* eND of ThirD sEcTIOn */}
      {/* /IMAGE sEctIOn */}
      <div className="bg-[url('/assets/gmail7.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>
      {/* /EnD OF IMAGE sEctIOn */}
      {/* FourtH secTIOn  */}
      {/* Try it out */}
      <div className="sm:pb-16 pb-12 sm:pt-20 pt-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-5">
          <h1 className="text">Try it out</h1>
          <p className="paragraph">Star important emails in your inbox.</p>

          {/* iMAge & butTonS */}
          <div className="mt-6">
            <p className="Bold mb-3">Click each button to learn more.</p>

            <div className="relative">
              {/* BuTTonS */}
              <button
                onClick={() => setOpen(1)}
                className="bg-[#dadce099] absolute top-[25.6%] left-[22%] w-[50px] overflow-visible cursor-pointer h-[50px] rounded-[50%] grid place-content-center hover:text-[white] duration-700 hover:bg-[#1A73E8] sm:p-8 text-[20px]"
              >
                1
              </button>
              <button
                onClick={() => setOpen(2)}
                className="bg-[#dadce099] text-[20px] sm:p-8 duration-700 hover:bg-[#1A73E8] hover:text-[white] absolute top-[22.5%] left-[12%] w-[50px] overflow-visible cursor-pointer h-[50px] rounded-[50%] grid place-content-center"
              >
                2
              </button>

              {/* iMage  */}
              <img src="./assets/gmail8.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* MOdels */}
      {open && (
        <div className="fixed inset-0 z-10 p-5 bg-[#272727B8] flex justify-center items-center">
          {/* FIrSt MOdeL */}
          <div
            className={`flex flex-col gap-4 max-w-[800px] pt-10 px-8 bg-white ${
              open == 1 ? "block" : "hidden"
            }`}
          >
            <h1 className="text-[25px] text-center">Star Messages</h1>
            <p className="text-left paragraph">
              1. Click the <span className="font-bold">Starred</span> icon on
              the left of each message in your inbox.
            </p>
            <div className="py-5 border-t text-center border-gray-400">
              <button
                onClick={() => setOpen(null)}
                className="bg-[#1A73E8] px-3 py-2 text-white"
              >
                Close
              </button>
            </div>
          </div>

          {/* SECond MODeL */}
          <div
            className={`flex flex-col gap-4 max-w-[800px] pt-10 px-8 bg-white ${
              open == 2 ? "block" : "hidden"
            }`}
          >
            <h1 className="text-[25px] text-center">See Starred Messages</h1>
            <div className="flex flex-col gap-3">
              <p className="paragraph">
                2. To see all your starred emails, in the left sidebar, click
                <span className="font-bold"> Starred</span>.
              </p>
            </div>
            <div className="py-5 border-t text-center border-gray-400">
              <button
                onClick={() => setOpen(null)}
                className="bg-[#1A73E8] px-3 py-2 text-white"
              >
                Close
              </button>
            </div>
          </div>
          {/* EnD oF seCOnD MoDEl */}
        </div>
      )}
      {/*eND oF MOdels */}
      {/*FiFTH sceTION */}
      {/* Search your inbox */}
      <div
        id="SearchInbox"
        className="sm:pb-16 pb-12 sm:pt-20 pt-12 bg-[#F9F9FA] top-shadow"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-6">
          <h1 className="text1 leading-[2.4rem] mb-1">Search your inbox</h1>
          <p className="paragraph">
            If you need to search for a specific email in your inbox, Gmail has
            a search function to help you. Whether emails have a label, filter,
            or star, the search feature in Gmail allows you to find any message
            you’ve ever received. You can search Gmail for conversations based
            on sender, content, time, and attachment using the search bar at the
            top of your inbox.
          </p>
          <p className="paragraph">
            This is helpful if you forget to add a label or mark an email as
            starred or if you need to find an email you didn’t think you would
            need later. For example, if a student says they emailed you a
            document, but you don’t remember seeing it, you could simply search
            their email address to find it.{" "}
          </p>
        </div>
      </div>
      {/* eND of fiftH sEcTIOn */}
      {/* /IMAGE sEctIOn */}
      <div className="bg-[url('/assets/gmail7.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>
      {/* /EnD OF IMAGE sEctIOn */}
      {/* SiXth SeCtioN  */}
      {/* try It out */}
      <div className="sm:pb-16 pb-12 sm:pt-20 pt-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-6">
          <h1 className="text">Try it out</h1>
          <p className="paragraph">
            Search your inbox using search criteria in the search box.
          </p>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-12">
            <article>
              <img src="./assets/gmail9.jpeg" alt="" />
            </article>
            <article className="flex flex-col gap-4">
              <p className="paragraph">Open Gmail.</p>
              <div>
                <ol className="list-decimal pl-12 paragraph">
                  <li>
                    At the top, in the search box, enter your search criteria.
                  </li>
                </ol>

                <ul className="list-disc pl-20 paragraph">
                  <li>
                    Type in a person’s email address, a subject line or any
                    keyword you can think of that would help identify the email
                    you are looking for.{" "}
                  </li>
                  <li>
                    When you search in the From field using a specific email
                    address, the results also return Drive files shared by that
                    email address.
                  </li>
                </ul>
              </div>
              <p className="paragraph">Click Search.</p>
            </article>
          </div>
        </div>
      </div>
      {/* eND oF sIxth SECtiOn */}
      {/* IMAGE SeCTIOn */}
      <div className="bg-[url('/assets/gmail10.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>
      {/* SeveNTH seCTIon */}
      <div className="sm:pt-20 pt-16 pb-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-2">
          <h1 className="text1 leading-[2.4rem]">
            Reflect on what you have learned
          </h1>
          <div className="md:flex justify-between items-center gap-10">
            {/* TEXt */}
            <article className="flex flex-col gap-4">
              <p className="paragraph">
                Now that you’ve learned how to organize your Gmail, reflect on
                the ways you can use the labels, stars, and priority inbox
                features in your classroom.
              </p>
              <div className="flex flex-col gap-4">
                <p className="font-bold">
                  Consider the following and make a note of your answers.
                </p>
                <ol className="list-decimal pl-12 paragraph">
                  <li>
                    What are one or two ways you might be able to organize
                    existing content for your classroom?{" "}
                  </li>
                  <li>
                    What folders might you add to Drive to keep yourself
                    organized?
                  </li>
                </ol>
              </div>
            </article>
            <article className="md:mt-0 mt-3">
              <img src="./assets/g12.png" alt="" />
            </article>
          </div>
        </div>
      </div>
      {/*eND Of  SeveNTH seCTIon */}
    </div>
  );
};

export default HighLightEmail;
