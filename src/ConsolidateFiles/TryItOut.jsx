import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const TryItOut = () => {
  const [show, setShow] = useState();

  const toggle = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  return (
    <div className="pt-[5rem] pb-[4rem] ">
      {/* first section =======> */}
      <div className="sm:mb-16 mb-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <h2 className="text1 leading-[2.4rem]">Try it out</h2>
          <p className="paragraph">
            Now it's your chance to try organizing your items by customizing the
            color of the folders in Drive.
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
<iframe class="ev-video-stream-player-iframe" id="video-stream-player-id-651148763ae47cf98721ba69" frameborder="0" allowfullscreen="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="Try it out (Organize your items in Drive)" width="640" height="360" src="https://www.youtube.com/embed/ZaWh1ATKtG0?autoplay=0&amp;cc_lang_pref&amp;cc_load_policy=0&amp;color=red&amp;disablekb=0&amp;enablejsapi=1&amp;fs=1&amp;hl&amp;loop=0&amp;modestbranding=0&amp;origin=https%3A%2F%2Fskillshop.exceedlms.com&amp;playsinline=1&amp;rel=0&amp;start=0&amp;widgetid=3" data-gtm-yt-inspected-6="true"></iframe>
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
            <div className="flex flex-col gap-5 ">
              <p className="paragraph">
                Let’s show you how to organize and color code folders in Google
                Drive.
              </p>
              <ol className="list-decimal pl-12 paragraph">
                <li>
                  Here's an existing folder, to change its name right click the
                  folder and click <span className="font-bold">Rename</span>.{" "}
                </li>
                <li>This will allow you to change the name of the folder. </li>
                <li>
                  Once you're done, click <span className="font-bold">OK</span>.
                </li>
              </ol>
            </div>

            <div className="flex flex-col gap-5 ">
              <p className="paragraph">To color code this folder:</p>
              <ol className="list-decimal pl-12 paragraph">
                <li>
                  Right click and select{" "}
                  <span className="font-bold">color</span>.{" "}
                </li>
                <li>
                  Then select <span className="font-bold"> change color</span> .{" "}
                </li>
                <li>And then choose a color from the palette.</li>
              </ol>
            </div>

            <div className="flex flex-col gap-5 mt-[1.2rem]">
              <p className="paragraph">
                This will change the color of the folder.
              </p>
              <ol className="list-decimal pl-12 paragraph">
                <li>
                  To add files to the folder, you can click{" "}
                  <span className="font-bold">New</span> and
                  <span className="font-bold"> Upload file</span>.
                </li>
                <li>
                  Or you can drag and drop the file directly onto the folder
                  itself.
                </li>
              </ol>
            </div>

            <p className="paragraph">
              That will upload the file, by opening the folder, you can see the
              file has been uploaded.{" "}
            </p>
            <p className="paragraph">Thank you for watching.</p>
          </div>

          {/* CARD =======> */}
          <div
            data-aos="fade-up"
            data-aos-delay="60"
            data-aos-duration="1200"
            className="max-w-[540px] m-auto bg-[#F9F9FA] px-8 py-5 flex flex-col items-center"
          >
            <img src="./assets/citizen2.png" alt="" />
            <p className="text-center paragraph">
              I really like the idea of color-coding. I can organize my folders
              for school, personal, and professional development with different
              colors and find them quickly.
            </p>
          </div>
        </div>
      </div>

      {/*SECOND SECTION  image ===> */}
      <div className="bg-[url('/assets/drive_items2.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* third section  =====> */}
      <div className="max-w-[960px] w-[92vw] m-auto mt-[5rem]">
        <h1 className="text1 leading-[2.4rem]">
          Reflect on what you have learned
        </h1>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-y-5 gap-4 mt-[1.6rem]">
          {/* TEXT =======> */}
          <div className="flex flex-col gap-5 col-span-2">
            <p className="paragraph">
              Now that you’ve learned how to add and organize content in Google
              Drive, reflect on the ways you can use Drive in your classroom.{" "}
            </p>
            <p className="text-[16px] font-bold">
              Consider the following and make a note of your answers.
            </p>

            <ol className="list-decimal pl-12 paragraph">
              <li>
                What are one or two ways you might be able to organize existing
                content for your classroom?{" "}
              </li>
              <li>
                What folders might you add to Drive to keep yourself organized?
              </li>
            </ol>
          </div>

          {/* IMAGE =======> */}
          <div>
            <img src="./assets/reflect_learning.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TryItOut;
