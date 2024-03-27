import React, { useState } from "react";

const UploadMaterial = () => {
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
      {/* first section */}
      <div
        id="UploadMaterial"
        className="sm:pt-20 pt-12 bg-[#F9F9FA] sm:pb-16 pb-12 shadow-top-bottom-inner"
      >
        {/* first section */}
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <p className="text1 leading-[2.4rem] mb-4">Upload your materials</p>
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
          <div class="ev-video-stream-player-iframe-container"><iframe class="ev-video-stream-player-iframe" id="video-stream-player-id-6492ae5c722f4807118d1355" frameborder="0" allowfullscreen="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="Learning Path Intro LP1" width="640" height="360" src="https://www.youtube.com/embed/U2vXLyAZSOs?autoplay=0&cc_lang_pref&cc_load_policy=0&color=red&disablekb=0&enablejsapi=1&fs=1&hl&loop=0&modestbranding=0&origin=https%3A%2F%2Fskillshop.exceedlms.com&playsinline=1&rel=0&start=0&widgetid=2" data-gtm-yt-inspected-10="true"></iframe></div>
 

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
            <p className="paragraph">
              Let's show you how to set up a file and folder in Google Drive.{" "}
            </p>

            <ol className="list-decimal pl-12 paragraph">
              <li>
                To find Google Drive, click on the waffle, then click on the
                Google Drive icon.
              </li>
              <li>Google Drive will launch.</li>
              <li>
                To create a new folder, Click{" "}
                <span className="font-bold">New</span>.{" "}
              </li>
              <li>
                Then click <span className="font-bold">New folder</span>.{" "}
              </li>
              <li>
                Give the folder name and click{" "}
                <span className="font-bold">Create</span>.
              </li>
              <li>
                Once the folder appears you can open it by double clicking.
              </li>
            </ol>

            <p className="paragraph mt-2">
              Now let's show you how to upload a new file.
            </p>

            <ol className="list-decimal pl-12 paragraph">
              <li>
                Click <span className="font-bold">New</span>, then select{" "}
                <span className="font-bold">File upload</span>.
              </li>
              <li>Navigate to the file you would like to upload. </li>
              <li>
                Select it, and then click{" "}
                <span className="font-bold">Open</span>.
              </li>
              <li>This will upload the file to your folder.</li>
              <li>If you would like to upload a whole folder. </li>
              <li>
                Click <span className="font-bold">New</span> and then click{" "}
                <span className="font-bold">Folder upload</span>.
              </li>
            </ol>

            <p className="paragraph">
              And there you have it, creating a folder and uploading a file in
              Google Drive.
            </p>
          </div>
        </div>
      </div>

      {/* second section =====> */}
      <div
        id="OrganizeItems"
        className="sm:pt-20 pt-12 sm:pb-16 pb-12 bg-[#FFFFFF]"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-5">
          <h1 className="text1 leading-[2.4rem] mb-2">
            Organize your items in Google Drive
          </h1>
          <p className="paragraph">
            In Google Drive, you can upload, view, share, and edit documents,
            slideshows, spreadsheets, photos, and videos. Once you’ve uploaded
            something to Drive, it’s saved to the cloud. Unlike saving files on
            a computer’s hard drive, files saved in the cloud are accessible
            from any device as long as you are logged into your Google account.
          </p>
          <p className="paragraph">
            So if you’re working on a lesson plan on your classroom computer,
            you can also work on it later in the computer lab, or on your laptop
            at home. You can drag and drop content into Drive from your laptop
            or desktop. You can also upload content into Drive from your mobile
            device.
          </p>
          <p className="paragraph">
            Once you create or upload files in Google Drive, you can create
            folders to store your content. Creating folders makes it easier to
            organize and share similar materials so you can find what you need.{" "}
          </p>
          <p className="paragraph">
            Once you’ve created a folder, you can drag and drop files that
            belong together to the same location, then rename the folder to
            describe its contents. After renaming your folders, you can change
            their color to make documents even easier to find.{" "}
          </p>
          <p className="paragraph">
            For example, maybe you want a separate folder for assessments and
            worksheets. Color-coding these folders can make it easier when
            searching for a math worksheet or a history test answer key.
          </p>
        </div>
      </div>

      {/* THIrd section iMAGE ====> */}
      <div className="bg-[url('/assets/google_drive_items.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>
    </div>
  );
};

export default UploadMaterial;
