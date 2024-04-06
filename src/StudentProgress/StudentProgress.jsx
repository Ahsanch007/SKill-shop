import React from "react";
import StudentProgressHero from "./StudentProgressHero";
import StudentProgressSection from "./StudentProgressSection";
import StudentProgressFooter from "./StudentProgressFooter";

const StudentProgress = () => {
  return (
    <div>
      <StudentProgressHero />
      <StudentProgressSection />
      {/* <StudentProgressFooter /> */}
    </div>
  );
};

export default StudentProgress;
