import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    id: 1,
    img: "./assets/tool1.png",
    text: `<a target="_blank" rel="noopener noreferrer" href="https://classroom.google.com/" class="ev-inline-link">Google Classroom</a> is a collaboration tool that helps organize and streamline the classroom experience. With this tool, you can create a class, add your students, create assignments, check who's completed their work, and assign grades. Students can turn in their work digitally and you can view their questions or comments on their assignments.`,
  },
  {
    id: 2,
    img: "./assets/tool2.png",
    text: `<a
    target="_blank"
    rel="noopener noreferrer"
    href="https://docs.google.com/document/?usp=docs_ald&amp;authuser=0"
    class="ev-inline-link"
  >
    Google Docs
  </a>{" "}
  is a tool you and your students can use to create digital documents, like book
  reports, creative stories, or essays.&nbsp; 
  <br>
  One useful feature of Docs is real-time, digital collaboration. Multiple students can edit the same document at the same time on any electronic device connected to the internet. For a group project, students can collaborate while writing the document, then provide feedback to classmates directly in the project document by making comments and suggestions. As the group members review their feedback, they can decide to reply, resolve, accept, or reject what their classmates suggested.
  <br>
  Students can also include images, tables, and diagrams in a document in Google Docs, which makes it a tool you can use for a variety of assignments in any subject.
  `,
  },
  {
    id: 3,
    img: "./assets/tool3.png",
    text: `<a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/drawings" class="ev-inline-link">Google Drawings</a> is a virtual sketch/drawing board where students can draw; insert images or graphics; add text, shapes, and tables; and include hyperlinks to videos and websites. You can also use Google Drawings to create flow charts, diagrams, concept maps, visual storyboards, and art.`,
  },

  {
    id: 4,
    img: "./assets/tool4.png",
    text: `<a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/?authuser=0&amp;usp=forms_ald" class="ev-inline-link">Google Forms</a> is a useful education tool for creating guardian surveys, student quizzes, or for collecting staff feedback. Students can also use Google Forms to gather the data they need for their research projects.`,
  },
  {
    id: 5,
    img: "./assets/tool5.png",
    text: `<a target="_blank" rel="noopener noreferrer" href="https://groups.google.com/d/homeredir?hl=en&amp;tab=og" class="ev-inline-link">Google Groups</a> is a tool where you can send an email to everyone in a group using one email address, invite a group to an event, or share materials with a group. You can create online forums for students to discuss topics you’re covering in your class or as a space for students to ask questions.`,
  },
  {
    id: 6,
    img: "./assets/tool6.png",
    text: `<a target="_blank" rel="noopener noreferrer" href="https://jamboard.google.com/?authuser=0&amp;usp=jam_ald" class="ev-inline-link">Google Jamboard</a> is an interactive, digital whiteboard that’s great for brainstorming, sorting, and organizing ideas. Students can collaborate in Jamboard to color code their ideas, organize them on different frames, and draw lines to connect similar or important ideas. Each member of the group can add their own ideas and make comments on their classmates’ notes to encourage group cooperation.`,
  },
  {
    id: 7,
    img: "./assets/tool7.png",
    text: `<a target="_blank" rel="noopener noreferrer" href="https://keep.google.com/" class="ev-inline-link">Google Keep</a> helps teachers create, edit, and share notes, reports, and checklists with colleagues and students. Save a drawing as a note, label, color, or pin notes, archive notes and lists, and even set up reminders for your notes. The possibilities are endless.`,
  },
  {
    id: 8,
    img: "./assets/tool8.png",
    text: `<a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/spreadsheets/?usp=sheets_ald&amp;authuser=0" class="ev-inline-link">Google Sheets</a> is an online spreadsheet application where you can keep track of grades and attendance, organize resource links for lesson plans, and assess individual contributions to large group projects. Students can use Sheets to create research reports with graphs and charts, analyze data, keep research projects organized, and collaborate with others.`,
  },
  {
    id: 9,
    img: "./assets/tool9.png",
    text: `<a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/presentation/?usp=slides_ald&amp;authuser=0" class="ev-inline-link">Google Slides</a> is a digital presentation tool that helps you create engaging, creative presentations to deliver in-person or online. You can include text, images, videos, and hyperlinks to external sites and resources.&nbsp;
    <br>
    You can embed relevant YouTube videos to break up the text and presentation and customize fonts and color combinations intentionally to attract attention to key elements of the lesson.
    <br>
    Your students can collaborate on the same slide deck to create a group presentation. And they can use any computer or mobile device with internet access to work in Google Slides or to view the presentations you share with them. `,
  },
  {
    id: 10,
    img: "./assets/tool10.png",
    text: `<a target="_blank" rel="noopener noreferrer" href="https://sites.google.com/?tab=o3" class="ev-inline-link">Google Sites</a> is an accessible, easy-to-use website creation tool that features templates and themes to help you design a site for a classroom, project, or portfolio. You can integrate other Google Workspace for Education applications into your site, too, like Docs, Sheets, Forms, Maps, and Calendar.
    <br>
    You might create a class site for your students’ guardians where you post your course materials, homework assignments, and reminders about upcoming class events. You can also include YouTube videos, images, slides, and audio recordings to provide your students with more resources on the topics you’re covering in class. Teachers can also share work completed by students the previous year that is shared on a Google Site. And your students can create a site to present their findings on a particular research subject.`,
  },
];

const CollaborationTools = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className="max-w-[960px] w-[92vw] m-auto py-16 flex flex-col gap-4">
        {/*  */}
        <div className="flex flex-col gap-4">
          <h1 className="text-[30px]">Google tools for collaboration</h1>
          <p className="text-[16px]">
            Explore the tools that are great for collaboration within your
            institution:
          </p>
        </div>
        <div className="">
          <p className="text-[16px] font-bold">
            Click the arrow to learn more.
          </p>
          {/* slider */}
          <Slider {...settings}>
            {data.map((d) => {
              const { id, img, text } = d;
              return (
                <article key={id} className="flex justify-between">
                  <p>{text}</p>
                  <img src={img} alt="" />
                </article>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default CollaborationTools;
