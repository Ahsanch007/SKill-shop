import React from "react";
import ConsolidateHero from "./ConsolidateHero";
import ConsolidateSections from "./ConsolidateSections";
import StartGoogleDrive from "./StartGoogleDrive";
import UploadMaterial from "./UploadMaterial";
import TryItOut from "./TryItOut";
import ConsolidateFooter from "./ConsolidateFooter";

const ConsolidateFiles = () => {
  return (
    <div>
      <ConsolidateHero />
      <ConsolidateSections />
      <StartGoogleDrive />
      <UploadMaterial />
      <TryItOut />
      <ConsolidateFooter />
    </div>
  );
};

export default ConsolidateFiles;
