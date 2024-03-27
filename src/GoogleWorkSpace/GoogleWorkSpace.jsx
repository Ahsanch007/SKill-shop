import React from "react";
import WorkspaceHeader from "./WorkspaceHeader";
import Sections from "./Sections";
import VideoSection from "./VideoSection";
import StartWithTechnology from "./StartWithTechnology";
import SuccessStories from "./SuccessStories";
import CollaborationTools from "./CollaborationTools";
import Skills from "./Skills";

const GoogleWorkSpace = () => {
  return (
    <div>
      <WorkspaceHeader />
      <Sections />
      <VideoSection />
      <StartWithTechnology />
      <SuccessStories />
      {/* <CollaborationTools /> */}
      <Skills />
    </div>
  );
};

export default GoogleWorkSpace;
