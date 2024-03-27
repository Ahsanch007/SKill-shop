import React from "react";

const VideoSection = () => {
  return (
    <div className="sm:pt-20 pt-12 sm:pb-16 pb-12 shadow-xl">
      <div className="max-w-[960px] w-[92vw] m-auto">
        {/* text =====> */}
        <div className="flex flex-col gap-5 text-[16px] paragraph">
          <p className="paragraph">
            As an educator, you are extremely skilled at balancing your teaching
            and learning workload.
          </p>
          <p>
            But sometimes new priorities are added and things can get pretty
            hectic. It’s important that the educational tools you use every day
            can support you.
          </p>
          <p>
            Google Workspace for Education Fundamentals helps simplify tasks,
            save time, and keep you in balance.
          </p>
          <p>
            With a single sign-on, educators, students, guardians, and
            administrators can access an entire suite of easy-to-use tools that
            provide a flexible and secure foundation for learning,
            collaboration, and communication.
          </p>
          <p>
            Throughout this course, you’ll learn how to make the most of these
            tools.
          </p>
          <ol className="pl-10">
            <li>1. Reducing the time you spend on administrative tasks.</li>
            <li>2. Streamlining instruction.</li>
            <li>3. Fostering collaboration.</li>
            <li>4. And enabling richer feedback for students along the way.</li>
          </ol>
          <p>
            Google Workspace for Education gives you the tools you need to stay
            balanced so you can focus on the things that matter.
          </p>
        </div>

        {/* video ==========> */}
        <div className="mt-6 flex flex-col gap-7">
          <p>Click play to watch the video below.</p>
          {/* video    ===========> */}
          <div class="ev-video-stream-player-iframe-container"><iframe class="ev-video-stream-player-iframe" id="video-stream-player-id-6492ae5c722f4807118d1355" frameborder="0" allowfullscreen="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="Learning Path Intro LP1" width="640" height="360" src="https://www.youtube.com/embed/S8fPR_l2SD0?autoplay=0&amp;cc_lang_pref&amp;cc_load_policy=0&amp;color=red&amp;disablekb=0&amp;enablejsapi=1&amp;fs=1&amp;hl&amp;loop=0&amp;modestbranding=0&amp;origin=https%3A%2F%2Fskillshop.exceedlms.com&amp;playsinline=1&amp;rel=0&amp;start=0&amp;widgetid=1" data-gtm-yt-inspected-10="true"></iframe></div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
