import React, { useState } from "react";

const ManageVideoSectIon = () => {
  const [show, setShow] = useState(false);
  const toggle = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  return (
    <div className="pt-12 sm:pt-20 sm:pb-16 pb-12">
      <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
        <h2 className="text1 leading-[2.4rem]">Try it out</h2>
        <p className="paragraph">
          Create a new copy of a document and share it by following the steps in
          the video.{" "}
        </p>

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
<iframe class="ev-video-stream-player-iframe" id="video-stream-player-id-64b6990b06dd5f0fe5303690" frameborder="0" allowfullscreen="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="Try it out (Creating a new copy and sharing it)" width="640" height="360" src="https://www.youtube.com/embed/Z6NbfmjimxU?autoplay=0&amp;cc_lang_pref&amp;cc_load_policy=0&amp;color=red&amp;disablekb=0&amp;enablejsapi=1&amp;fs=1&amp;hl&amp;loop=0&amp;modestbranding=0&amp;origin=https%3A%2F%2Fskillshop.exceedlms.com&amp;playsinline=1&amp;rel=0&amp;start=0&amp;widgetid=1" data-gtm-yt-inspected-6="true"></iframe>
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
          <p className="paragraph">Now let’s show you how to share a file.</p>
          <div className="flex flex-col gap-5">
            <p className="paragraph">Here's a file in Google Drive. </p>
            <ol className="list-decimal pl-12 paragraph">
              <li>
                Right click the file and select{" "}
                <span className="font-bold">Make copy</span>. It will take a
                moment to copy the file.{" "}
              </li>
              <li>Once the copy appears, there are two ways to share it.</li>
              <li>
                You can either right click and select{" "}
                <span className="font-bold">Share</span> or you can click the
                file and then click the <span className="font-bold">Share</span>{" "}
                button.
              </li>
              <li>
                To share the file, type the email address of the person you
                would like to share the file with.
              </li>
              <li>
                You can then select the type of access you'd like that person to
                have. Either{" "}
                <span className="font-bold">Viewer, Commenter</span> or{" "}
                <span className="font-bold">Editor</span>. In this case, let’s
                select <span className="font-bold">Viewer</span>.
              </li>
              <li>
                If you’d like to type a message to the person your sharing with
                you can do so here.
              </li>
              <li>
                When you’re ready click <span className="font-bold"> Send</span>
                .{" "}
              </li>
            </ol>
          </div>
          <p className="paragraph mt-3">
            And that's all you have to do to share a file.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ManageVideoSectIon;
