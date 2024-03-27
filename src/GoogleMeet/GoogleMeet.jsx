import React from "react";
import GoogleMeetHero from "./GoogleMeetHero";
import GoogleMeetSection from "./GoogleMeetSection";
import GoogleMeetFooter from "./GoogleMeetFooter";
import WorkSpaceFooter from "../Components/WorkSpaceFooter";

const GoogleMeet = () => {
  return (
    <div>
      <GoogleMeetHero />
      <GoogleMeetSection />
      <GoogleMeetFooter />
      <WorkSpaceFooter />
    </div>
  );
};

export default GoogleMeet;
