import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const TryItOutChat = () => {
  const [activeModel, setActiveModel] = useState(null);

  const toggleModel = (model) => {
    setActiveModel(model === activeModel ? null : model);
  };
  return (
    <div>
      {/* TRY IT ouT */}
      {/* FiRSt SECTiON */}
      <div className="sm:pb-16 pb-12 shadow-inner-large bg-[#F9F9FA] sm:pt-20 pt-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col sm:gap-5 gap-2">
          <h1 className="text">Try it out</h1>
          <p className="paragraph">Customize your Chat notifications. </p>

          <div className="mt-6 flex flex-col gap-3">
            <p className="Bold mb-3">Click each button to learn more.</p>

            <div className="relative flex justify-center">
              <button
                onClick={() => toggleModel("model1")}
                className="bg-[#dadce099] absolute top-[10.6%] left-[41%] w-[50px] overflow-visible cursor-pointer h-[50px] rounded-[50%] grid place-content-center hover:text-[white] duration-700 hover:bg-[#1A73E8] sm:p-8 text-[20px]"
              >
                1
              </button>
              <button
                onClick={() => toggleModel("model2")}
                className="bg-[#dadce099] text-[20px] sm:p-8 duration-700 hover:bg-[#1A73E8] hover:text-[white] absolute top-[40.5%] left-[68%] w-[50px] overflow-visible cursor-pointer h-[50px] rounded-[50%] grid place-content-center"
              >
                2
              </button>
              <img src="./assets/chat10.png" alt="" />
              {/* mOdelS */}
              {/* FIrSt MOdeL */}
              <div
                className={` ${
                  activeModel === "model1" ? "block" : "hidden"
                } fixed inset-0 z-10 p-5 bg-[#272727B8] flex justify-center items-center`}
              >
                <div
                  className={`flex flex-col gap-4 max-w-[800px] pt-10 px-8 bg-white`}
                >
                  <h1 className="text-[25px] text-center">
                    Customize notifications
                  </h1>
                  <p className="text-left paragraph">
                    1. Click the three dots in the top right of your chat.
                  </p>
                  <div className="py-5 border-t text-center border-gray-400">
                    <button
                      onClick={() => setActiveModel(null)}
                      className="bg-[#1A73E8] px-3 py-2 text-white"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
              {/* End Of fiRST mODEl */}
              {/* SecoND MOdeL */}
              <div
                className={` ${
                  activeModel === "model2" ? "block" : "hidden"
                } fixed inset-0 z-10 p-5 bg-[#272727B8] flex justify-center items-center`}
              >
                <div
                  className={`flex flex-col gap-4 max-w-[800px] pt-10 px-8 bg-white`}
                >
                  <h1 className="text-[25px] text-center">
                    Mute conversations
                  </h1>
                  <p className="text-left paragraph">
                    2. To turn notifications off, click the muted bell.
                  </p>
                  <div className="py-5 border-t text-center border-gray-400">
                    <button
                      onClick={() => setActiveModel(null)}
                      className="bg-[#1A73E8] px-3 py-2 text-white"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
              {/* End Of SECOND mODEl */}
              {/*eND OF mOdelS */}
            </div>
          </div>
        </div>
      </div>
      {/* end OF FIRsT Section  */}

      {/* SEcoNd sectIoN */}
      {/* Manage/delete your chat history */}
      <div
        id="ChatHistory"
        className="sm:pt-20 pt-12 sm:pb-16 pb-12 bg-[#FFFFFF] top-shadow"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-5">
          <h1 className="text1 leading-[2.4rem]">
            Manage/delete your chat history
          </h1>
          <p className="paragraph">
            You can save all of your conversations in Google Chat as long as
            the&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://support.google.com/chat/answer/7664687?hl=en"
              className="text-[blue] underline"
            >
              history feature is enabled
            </a>
            . When this feature is enabled, it allows you to scroll up to see
            all messages exchanged in your chat. If you disable the history
            feature, messages will stay in the chat window for 24 hours, but
            then will disappear. The chat history feature is typically turned on
            by default, but you can switch it on or off.&nbsp;
          </p>
          <p className="paragraph">
            When you message a person or group in Google Chat, you can choose to
            save your conversation or have it automatically deleted after 24
            hours.
          </p>
          <div>
            <p className="paragraph">
              When anyone in the chat turns history on or off:
            </p>
            <ul className="list-disc pl-12 paragraph">
              <li>
                A note appears in the message stream that says history was
                turned on or off.
              </li>
              <li>
                A prompt appears in the compose box that says “History is on” or
                “History is off.”
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* ENd Of SecOn sEction */}

      {/* ImagE SEcTIOn */}
      <div className="bg-[url('/assets/chat11.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* try It out */}
      {/* tHIRd SEction */}
      <div className="sm:pt-20 pt-12 sm:pb-16 pb-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-5">
          <h1 className="text">Try it out</h1>
          <p className="paragraph">Manage or delete your chat history.</p>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-[3rem]">
            {/* texT */}
            <article className="col-span-1">
              <ol className="list-decimal pl-12 paragraph">
                <li>Select a conversation from Chat.</li>
                <li>
                  At the top, next to the contact or conversation name, click
                  the drop down arrow to show more options.
                </li>
                <li>
                  Select <strong>Turn on history</strong> or{" "}
                  <strong>Turn off history</strong>.
                </li>
              </ol>
            </article>
            <article className="col-span-2 justify-self-end">
              <img src="./assets/chat12.png" className="" alt="" />
            </article>
          </div>
        </div>
      </div>
      {/*eNd Of  tHIRd SEction */}

      {/* IMaGE SECTION */}
      <div className="bg-[url('/assets/chat13.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* foUrth seCTioN */}
      {/* Success stories */}
      <div className="sm:pt-20 pt-12 sm:pb-16 pb-12 bg-[#F9F9FA]">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col sm:gap-8 gap-6">
          <h1 className="text">Success stories</h1>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
            <article
              data-aos="fade-up"
              data-aos-delay="60"
              data-aos-duration="1200"
              className="bg-white flex flex-col items-center gap-8 sm:px-5 px-4 sm:py-5 py-4 rounded-md"
            >
              <img src="./assets/chat15.png" alt="" />
              <p className="paragraph">
                I hold a Google Chat opportunity once a week at the same
                designated time with any of my colleagues to check in on
                priorities and stay up to date on progress. They know I am
                available during that time, and they can join the group chat on
                their mobile device from wherever they are to type questions to
                me. It’s like flexible office hours and I am able to stay
                connected to my team more this way.
              </p>
            </article>
            <article
              data-aos="fade-up"
              data-aos-delay="80"
              data-aos-duration="1500"
              className="bg-white flex flex-col items-center gap-8 sm:px-5 px-4 sm:py-5 py-4 rounded-md"
            >
              <img src="./assets/chat16.png" alt="" />
              <p className="paragraph">
                In virtual training sessions, I create discussion questions,
                break colleagues up into chat groups, and assign each group a
                different discussion question. Then, I can comment and observe
                the dialogues being had by my colleagues all at once rather than
                only being able to hear what one group is doing at a time.
              </p>
            </article>
          </div>
        </div>
      </div>
      {/*end of foUrth seCTioN */}

      {/* IMaGE SECTION */}
      <div className="bg-[url('/assets/chat17.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* fifTh seCTiOn */}
      <div className="sm:pt-20 pt-12 sm:pb-16 pb-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-6">
          <h1 className="text1 leading-[2.4rem]">
            Reflect on what you have learned
          </h1>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
            {/* TEXt */}
            <article className="flex flex-col gap-4 md:col-span-2">
              <p className="paragraph">
                In this lesson, you learned about some ways to use Google Chat
                to reinvent communication at your school. Now it’s your turn to
                reflect on what you have learned.
              </p>
              <div className="flex flex-col gap-4">
                <p className="font-bold">
                  Consider the following and make a note of your answers.
                </p>
                <ol className="list-decimal pl-12 paragraph">
                  <li>
                    What are some situations where you could use Google Chat as
                    a valuable tool to communicate with your colleagues?
                  </li>
                  <li>How might you use Chat during school?</li>
                  <li>
                    How might you use Chat for after school communication, like
                    reaching guardians?
                  </li>
                </ol>
              </div>
            </article>
            <article className="md:mt-0 sm:mt-3 mt-1 md:col-span-1">
              <img src="./assets/chat18.png" alt="" />
            </article>
          </div>
        </div>
      </div>
      {/*eNd Of fifTh seCTiOn */}
    </div>
  );
};

export default TryItOutChat;
