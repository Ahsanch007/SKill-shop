import React, { useState } from "react";

const StartGoogleDrive = () => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  return (
    <div className="sm:pt-20 pt-12 sm:pb-16 pb-12">
      {/* first section =======> */}
      <div
        id="startDrive"
        className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-10"
      >
        <h2 className="text1 leading-[2.4rem]">
          Get started with Google Drive
        </h2>

        <div className="flex flex-col gap-6">
          <p className="Bold">Click play to watch the video below.</p>
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
<iframe class="ev-video-stream-player-iframe" id="video-stream-player-id-651148763ae47cf98721bab2" frameborder="0" allowfullscreen="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="Consolidate your files in Google Drive" width="640" height="360" src="https://www.youtube.com/embed/w8UYo3m80PI?autoplay=0&amp;cc_lang_pref&amp;cc_load_policy=0&amp;color=red&amp;disablekb=0&amp;enablejsapi=1&amp;fs=1&amp;hl&amp;loop=0&amp;modestbranding=0&amp;origin=https%3A%2F%2Fskillshop.exceedlms.com&amp;playsinline=1&amp;rel=0&amp;start=0&amp;widgetid=1" data-gtm-yt-inspected-6="true"></iframe>  </div>


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
            Imagine being able to find a clean copy of a worksheet or storing a
            year’s worth of lesson plans in your classroom!
          </p>
          <p className="paragraph">
            By transitioning some of your classroom materials from physical
            copies to digital copies, you can stay organized and consolidate
            your documents into one easy location.
          </p>
          <div>
            <p className="paragraph">
              Google Drive can help make this transition a reality.
            </p>
            <p className="paragraph">
              With Drive, you can safely store your documents, presentations,
              spreadsheets, pictures, videos, and more.
            </p>
          </div>
          <p className="paragraph">
            Just like folders saved on your computer’s desktop or in your
            classroom filing cabinet, you can create, organize, and save
            information as files and folders using Drive.{" "}
          </p>
          <p className="paragraph">
            Since they’re all saved in the cloud, you can access your files from
            any device that's connected to the internet, as long as you can sign
            into your Google account.{" "}
          </p>
          <p className="paragraph">
            This makes accessing your files and folders easy to do from almost
            anywhere.
          </p>
          <p className="paragraph">
            You will upload files and folders to Drive, organize and color-code
            your documents, and create a shortcut to a file or folder.{" "}
          </p>
          <p className="paragraph">
            Learning how to consolidate and organize your digital materials
            using Drive is a great way to integrate technology into your
            classroom.{" "}
          </p>
          <p className="paragraph">
            Keep in mind, this is just a quick overview of what you can do in
            Drive.{" "}
          </p>
          <p className="paragraph">There is so much more to discover!</p>
        </div>
      </div>

      {/* second section ==========> */}
      <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-5 mt-[4.2rem] md:mt-[5.5rem]">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-12">
          {/* text ====> */}
          <div className="flex flex-col gap-6">
            <p className="paragraph">
              With Drive, you can safely store your documents, presentations,
              spreadsheets, pictures, videos, and more. Just like folders saved
              on your computer’s desktop or in your classroom filing cabinet,
              you can create, organize, and save information as files and
              folders using Drive.
            </p>
            <p className="paragraph">
              Since they’re all saved in the cloud, you can access your files
              from any device that's connected to the internet, as long as you
              can sign into your Google account. This makes accessing your files
              and folders easy to do from almost anywhere.
            </p>
          </div>

          {/* image =====> */}
          <div>
            <img src="./assets/Google_Drive1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartGoogleDrive;
