import React from "react";
import CollaborationHero from "./CollaborationHero";
import CollaborationSection from "./CollaborationSection";
import ShareDocuments from "./ShareDocuments";
import CollaborationFooter from "./CollaborationFooter";

const Collaboration = () => {
  return (
    <div>
      <CollaborationHero />
      <CollaborationSection />
      <ShareDocuments />
      {/* <CollaborationFooter /> */}
    </div>
  );
};

export default Collaboration;
