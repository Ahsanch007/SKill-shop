import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const UseGoogleDrive = () => {
  const [activeIndex, setActiveIndex] = useState(0); // State to track active paragraph index

  // Function to handle button click and update active index
  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const [show, setShow] = useState(null);
  return (
    <div>
      <div className="max-w-[960px] w-[92vw] m-auto mt-[3rem] sm:mt-[5rem]">
        <h1 className="text1">Use Google Drive to create a document</h1>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-y-5 gap-10 mt-[1.6rem]">
          {/* TEXT =======> */}
          <div className="flex flex-col gap-5">
            <p className="paragraph">
              Now that you’ve learned how to consolidate and organize your files
              and folders using Google Drive, learn how to use Drive to{" "}
              <strong>create</strong>,<strong>update</strong>, and{" "}
              <strong>share</strong> documents.{" "}
            </p>
            <p className="paragraph">
              You can create a new document, spreadsheet, presentation, form, or
              drawing by clicking <strong>New</strong> in Drive and then
              clicking the type of file you wish to create. Give your new file a
              name, and it is automatically saved in Drive.
            </p>
          </div>

          {/* IMAGE =======> */}
          <div>
            <img src="./assets/Drive_img.png" className="w-full" alt="" />
          </div>
        </div>
      </div>

      {/* SEcONd SECTiON */}
      <div className="max-w-[960px] w-[92vw] m-auto mt-[2.3rem] sm:mt-[4rem]">
        <p className="Bold mb-3">Click each button to learn more.</p>

        {/* <div className="bg-[url('./assets/Drive_imgFull.png')] h-full w-[960px]"></div> */}
        <div className="relative">
          <button
            onClick={() => setShow(1)}
            className="bg-[#dadce099] absolute top-[13.6%] left-[30%] w-[50px] overflow-visible cursor-pointer h-[50px] rounded-[50%] grid place-content-center hover:text-[white] duration-700 hover:bg-[#1A73E8] sm:p-8 text-[20px]"
          >
            1
          </button>
          <button
            onClick={() => setShow(2)}
            className="bg-[#dadce099] text-[20px] sm:p-8 duration-700 hover:bg-[#1A73E8] hover:text-[white] absolute top-[54.5%] left-[54%] w-[50px] overflow-visible cursor-pointer h-[50px] rounded-[50%] grid place-content-center"
          >
            2
          </button>
          <img src="./assets/Drive_imgFull.png" alt="" />
        </div>
      </div>
      {/* end OF SECOND Section  */}

      {/* MODEL */}
      {show && (
        <div className="fixed inset-0 z-10 p-5 bg-[#272727B8] flex justify-center items-center">
          <div
            className={`flex flex-col gap-4 max-w-[800px] pt-10 px-8 bg-white ${
              show == 1 ? "block" : "hidden"
            }`}
          >
            <h1 className="text-[25px] text-center">New in Drive</h1>
            <p className="paragraph">
              1. You can create a new document, spreadsheet, presentation, form,
              or drawing by clicking the New button in Drive.
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
            <h1 className="text-[25px] text-center">More</h1>
            <p className="paragraph">
              2. Then, select the type of file you wish to create Doc, Sheet,
              Slide, or more. Give your new file a name, and it will
              automatically be saved in Drive.
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
        </div>
      )}
      {/* END of modeL */}

      {/* ThirD SecTioN ======> */}
      <div
        id="shareFiles"
        className="top-shadow sm:mt-[4rem] mt-[3rem] pt-12 sm:pt-20 sm:pb-16 pb-12 bg-[#F9F9FA]"
      >
        <div className="max-w-[960px] w-[92vw] m-auto ">
          {/* text */}
          <div className="flex flex-col gap-4">
            <h1 className="text1 leading-[2.4rem] mb-2">
              Share files and folders
            </h1>
            <p className="paragraph">
              With Google Drive, sharing files and folders with colleagues and
              students is easy. Maybe you’ve created a new lesson plan you’d
              like to share with another teacher, or a study guide to help your
              students prepare for an exam.
            </p>
            <p className="paragraph">
              You can share any document in Drive with an individual or group of
              people by clicking the Share button in the upper right-hand part
              of the screen. You can also share a document directly from Drive
              by right-clicking on the file, then clicking Share.
            </p>
            <p className="paragraph">
              If you’ve created a folder with multiple lessons you’d like to
              share, right-click on the folder, then click Share to share it
              with an individual or group.{" "}
            </p>
          </div>

          {/* grid div */}
          <div className="grid md:grid-cols-3 gap-[2.5rem] grid-cols-1 mt-[2.7rem]">
            {/* left side ===> */}
            <div className="col-span-2 flex flex-col gap-5">
              <p className="Bold">Click the expand icon to enlarge.</p>
              <img src="./assets/drIve_img2.png" alt="" />
            </div>

            {/* RIgHT side  */}
            <div
              data-aos="fade-up"
              data-aos-delay="60"
              data-aos-duration="1200"
              className="flex flex-col gap-3 px-3 py-4 col-span-1"
            >
              <img src="./assets/student.png" alt="" />
              <p className="paragraph text-center">
                I can create a folder for each of my classes and then share the
                folder with students in those classes. This way, as I put
                content in the folders, they can see and use my assignments and
                other resources easily.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* fouRTh SECTION */}
      {/* cOnVEr Your fIleS  */}
      <div
        id="ConvertFiles"
        className=" bg-[#F9F9FA] pt-12 sm:pt-20 top-shadow sm:pb-16 pb-12"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-5">
          <h1 className="text1 leading-[2.4rem] mb-3">Convert your files</h1>
          <p className="paragraph">
            Many of your existing files, like assessments or worksheets, might
            have been created using the applications on your classroom computer,
            like Microsoft Word or Pages for Mac.
          </p>
          <p className="paragraph">
            In Google Drive, you can upload a variety of file types, including
            Microsoft Word documents, Excel spreadsheets, and PowerPoint
            presentations.
          </p>
          <p className="paragraph">
            After you’ve uploaded a Microsoft Word document to Drive, you may
            want to change it or add to it later. Instead of downloading the
            file to your computer, you can continue working on your document
            from Drive, by converting it into an editable document in Google
            Docs. To convert a file, right-click on the title in your Drive list
            and click Open with, then click Google Docs. Once you’ve converted
            your file, you can start working on it from Drive right away.
          </p>
          <p className="paragraph">
            To streamline this process, change your settings in Drive so that it
            converts files automatically when you upload them. If you don’t find
            this useful, you can always change your settings back to not
            converting the files by unchecking the box.
          </p>
        </div>
      </div>

      {/* IMage SeCtiON */}
      <div className="">
        <div className="bg-[url('/assets/google_drive_items1.png')] bg-center bg-no-repeat bg-cover h-[70px] sm:h-[110px] md:h-[120px]"></div>
      </div>

      {/* fifth section */}
      {/* try it out ====> */}
      <div className="bg-[#F9F9FA] pt-12 sm:pt-20 sm:pb-16 pb-12">
        <div className="max-w-[960px] w-[92vw] m-auto">
          <div className="flex flex-col gap-6">
            <h1 className="text1 leading-[2.4rem]">Try it out</h1>
            <p className="paragraph">
              Change your Google Drive settings to automatically convert your
              files.
            </p>
            {/* ol */}
            <ol className="list-decimal pl-12 paragraph">
              <li>Open Google Drive from the apps menu.</li>
              <li>
                Click the <span className="font-bold">settings icon</span> and
                then click <span className="font-bold">Settings</span>.
              </li>
              <li>
                Check the box to{" "}
                <span className="font-bold">
                  Convert uploads to Google Docs editor format
                </span>
                .
              </li>
            </ol>
          </div>

          <p className="mt-8 paragraph">
            Here is an image of what your settings should look like.
          </p>

          {/* imaGE div */}
          <div className="flex flex-col gap-6 mt-12">
            <p className="Bold">Click the expand icon to enlarge.</p>
            {/* IMg */}
            <img src="./assets/m_1.png" alt="" />
            <p className="text-center paragraph">
              Note: You can only change Google Drive settings from your computer
              and not with a mobile device.
            </p>
          </div>
        </div>
      </div>

      {/* sixtH sECTION  */}
      {/* coLLaBorAtING ON GOogle Drive ====> */}
      <div
        id="Collaboration"
        className="bg-[#F9F9FA] pt-12 sm:pt-20 sm:pb-16 pb-12 top-shadow"
      >
        <div className="max-w-[960px] w-[92vw] m-auto">
          <div className="flex flex-col gap-5">
            <h1 className="text1 leading-[2.4rem]">Collaborating on Drive</h1>
            <p className="mt-2 paragraph">
              There are different levels of access you can assign in Google
              Drive:
            </p>
            {/* ol */}
            <ol className="list-decimal pl-12 paragraph">
              <li>
                <span className="font-bold">Editor:</span> Invites people to
                directly edit your document.
              </li>
              <li>
                <span className="font-bold">Commenter:</span> Invites people to
                make comments or suggest changes to your document, but won’t
                allow them to actually make those changes.
              </li>
              <li>
                <span className="font-bold">Viewer:</span> Invites people to
                view your file, but not to comment or make changes.
              </li>
            </ol>
          </div>

          <p className="mt-10 paragraph">Watch this video to learn more.</p>

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
            <iframe
              //   width="800"
              //   height="600"
              src="https://www.youtube.com/embed/7EHnQ0VM4KY?si=LtrXq2i2uzzHChqw"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              className="max-w-[960px] w-[92vw] mx-auto h-screen"
            ></iframe>
          </div>
        </div>
      </div>

      {/* IMAGE SECTION */}
      <div className="bg-[url('/assets/google_item2.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* lEt's looK AT a scenARIO */}
      {/* sEventh SectIon */}
      <div className="pt-12 sm:pt-20 sm:pb-16 pb-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-10">
          <h1 className="text1 leading-[2.4rem]">Let's look at a scenario</h1>
          {/* useSTATE */}
          {/* second div */}
          <div className="flex flex-col gap-3">
            <p className="Bold">Click each tab to learn more.</p>
            {/* buttons ===> */}
            <div className="grid sm:grid-cols-3 grid-cols-1 gap-3 ">
              <button
                className={`btn ${
                  activeIndex === 0 && "active1"
                } bg-[#dadce0] px-2 py-3 rounded-sm duration-700 hover:bg-[#1A73E8] hover:text-[white]`}
                onClick={() => handleClick(0)}
              >
                Problem
              </button>
              <button
                className={`btn ${
                  activeIndex === 1 && "active1"
                } bg-[#dadce0] px-2 py-3 rounded-sm duration-700 hover:bg-[#1A73E8] hover:text-[white]`}
                onClick={() => handleClick(1)}
              >
                What would you do?
              </button>
              <button
                className={`btn ${
                  activeIndex === 2 && "active1"
                } bg-[#dadce0] px-2 py-3 rounded-sm duration-700 hover:bg-[#1A73E8] hover:text-[white]`}
                onClick={() => handleClick(2)}
              >
                Solution
              </button>
            </div>
            {/* end of buttons */}

            {/* paragraph  */}
            <div className="mt-4">
              <div
                className={`${
                  activeIndex === 0 ? "block" : "hidden"
                }  px-6 grid md:grid-cols-3 grid-cols-1 gap-6`}
              >
                {/* imaGE */}
                <div className="col-span-1">
                  <img src="./assets/g_1.png" alt="" />
                </div>
                <p className="col-span-2 paragraph">
                  A history teacher needs students to have a thorough
                  understanding of the events that led to World War I. Before
                  beginning the lesson, the teacher wants to assess what each
                  student already knows about World War I and have them answer a
                  few open-ended questions about the topic.
                </p>
              </div>

              {/* seConD pArAgrAPh */}
              <div
                className={`${
                  activeIndex === 1 ? "block" : "hidden"
                }  px-6 grid md:grid-cols-3 grid-cols-1 gap-6`}
              >
                {/* imaGE */}
                <div className="col-span-1">
                  <img src="./assets/g_2.png" alt="" />
                </div>
                <div className="col-span-2 flex flex-col gap-4">
                  <p className="paragraph">
                    Take a moment to consider what you would do in this
                    scenario. Note your answer down, then reveal our suggested
                    solution.
                  </p>
                  <p className="paragraph">
                    In a Google Doc, write your response to the following
                    question:
                  </p>
                  <p className="paragraph">
                    How can the teacher use a Google app to begin this lesson?
                  </p>
                </div>
              </div>

              {/* thIRD paRagRApH */}
              <div
                className={`${
                  activeIndex === 2 ? "block" : "hidden"
                }  px-6 grid md:grid-cols-3 grid-cols-1 gap-6`}
              >
                {/* imaGE */}
                <div className="col-span-1">
                  <img src="./assets/g_3.png" alt="" />
                </div>
                <div className="col-span-2 flex flex-col gap-4">
                  <p>
                    The history teacher can use Google Docs to create a
                    worksheet and then share the document with students with
                    Viewer access.
                  </p>
                  <p>
                    With Viewer access, students aren’t able to type answers
                    into the original document, ensuring that students aren’t
                    all working on the same document at once. In order for each
                    student to record their answers in their own document, they
                    first need to make a copy of the document. To make a copy of
                    a document, click File from the toolbar, then select Make a
                    copy.
                  </p>
                  <p>
                    Now with an editable document, students are able to showcase
                    their knowledge of World War I. To evaluate and review
                    student responses, the teacher can instruct students to
                    share their copy.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* EnD oF UsEsTate */}
        </div>
      </div>

      {/* image SEctION */}
      <div className="bg-[url('/assets/img1.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>
    </div>
  );
};

export default UseGoogleDrive;
