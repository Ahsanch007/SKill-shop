import React from "react";
import { GiBookmarklet } from "react-icons/gi";

const Model = ({ setShowModel, showModel, closeModel }) => {
  const handleClose = (e) => {
    if (e.target.id === "close") closeModel();
  };
  return (
    <div
      className="fixed inset-0 z-10 p-5 bg-[#272727B8] flex justify-center items-center"
      id="close"
      onClick={handleClose}
    >
      {/* first model */}
      <div
        className={`flex flex-col gap-5 items-center bg-[white] w-[850px] p-10 rounded-sm ${
          showModel == 1 ? "block" : "hidden"
        }`}
      >
        <GiBookmarklet className="text-[4rem] text-blue-500" />
        <p className="paragraph">
          “I’ve been looking at your digital footprint, and it looks like you
          stepped in something.” It’s something I heard that at a conference and
          it’s really stuck with me. My kids get a laugh out of it too, but you
          know it’s true! It’s a serious topic and it’s amazing how early they
          start to leave their mark in the digital world. But, most of my middle
          schoolers don’t realize that they may already be out there on the
          Internet. So, I like to have them search for their names and they are
          shocked by the results. But, once we flip over to image search they’re
          blown away that they usually find a photo of themselves that’s been
          posted online. That makes it real. Close
        </p>
        <button
          onClick={() => setShowModel(false)}
          className="bg-blue-500 hover:bg-blue-600 uppercase text-white px-6 py-2.5 rounded-sm"
        >
          close
        </button>
      </div>

      {/* second model */}
      <div
        className={`flex flex-col gap-5 items-center bg-[white] w-[850px] p-10 rounded-sm ${
          showModel == 2 ? "block" : "hidden"
        }`}
      >
        <GiBookmarklet className="text-[4rem] text-blue-500" />
        <p className="paragraph">
          Teaching my students about copyright and fair use is a challenge.
          Everything is so easily accessible on the Internet nowadays. I think
          sometimes the new process for doing a research project is
          copy/paste/print. In my class we do a lot with copyright-free images.
          Google Image Search allows students to limit their search results to
          different types of licenses, such as free to use, modify or share. The
          Explore Tool in Google Docs has also become a very important part of
          my class. Students can search for scholarly articles and even insert
          citations and footnotes very easily and quickly.
        </p>
        <button
          onClick={() => setShowModel(false)}
          className="bg-blue-500 hover:bg-blue-600 uppercase text-white px-6 py-2.5 rounded-sm"
        >
          close
        </button>
      </div>

      {/* third model  */}
      <div
        className={`flex flex-col gap-5 items-center bg-[white] w-[850px] p-10 rounded-sm ${
          showModel == 3 ? "block" : "hidden"
        }`}
      >
        <GiBookmarklet className="text-[4rem] text-blue-500" />
        <p className="paragraph ">
          We spend a lot of time training our students on how to be safe online,
          and having strong passwords is a great place to start. But it’s also
          important to make sure you don’t leave any information behind,
          especially when using a shared computer. We all seem to know someone
          who’s been hacked. We teach our kids to use incognito windows in
          Chrome when they’re working on shared computers and how to clear their
          browser history. This helps keep their private information private.
        </p>
        <button
          onClick={() => setShowModel(false)}
          className="bg-blue-500 hover:bg-blue-600 uppercase text-white px-6 py-2.5 rounded-sm"
        >
          close
        </button>
      </div>
    </div>
  );
};

export default Model;
