import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Footer from "./Components/Footer";
import GoogleWorkSpace from "./GoogleWorkSpace/GoogleWorkSpace";
import ConsolidateFiles from "./ConsolidateFiles/ConsolidateFiles";
import ManageFile from "./ManageFile/ManageFile";
import Collaboration from "./CollaborationWithDocs/Collaboration";
import OrganizeSearchGmail from "./OrganizeSearchGmail/OrganizeSearchGmail";
import GoogleChat from "./GoogleChat/GoogleChat";
import ShareStudentWork from "./ShareStudentWork/ShareStudentWork";
import GoogleMeet from "./GoogleMeet/GoogleMeet";
import GoogleCalender from "./GoogleCalender/GoogleCalender";
import GoogleTasks from "./GoogleTasks/GoogleTasks";
import GoogleClassRoom from "./GoogleClassroom/GoogleClassRoom";
import GoogleClassroom2 from "./GoogleClassroom2/GoogleClassroom2";
import DigitalFeedback from "./DigitalFeedback/DigitalFeedback";
import GoogleForms from "./GoogleForms/GoogleForms";
import StudentProgress from "./StudentProgress/StudentProgress";
import StudentGrowth from "./StudentGrowth/StudentGrowth";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/GoogleWorkspace" element={<GoogleWorkSpace />}></Route>
          <Route
            path="/ConsolidateFiles"
            element={<ConsolidateFiles />}
          ></Route>
          <Route path="/ManageFile" element={<ManageFile />} />
          <Route path="/Collaboration" element={<Collaboration />} />
          <Route
            path="/OrganizeSearchGmail"
            element={<OrganizeSearchGmail />}
          />
          <Route path="/GoogleChat" element={<GoogleChat />} />
          <Route path="/ShareStudentWork" element={<ShareStudentWork />} />
          <Route path="/GoogleMeet" element={<GoogleMeet />} />
          <Route path="/GoogleCalender" element={<GoogleCalender />} />
          <Route path="/GoogleTasks" element={<GoogleTasks />} />
          <Route path="/GoogleClassRoom" element={<GoogleClassRoom />} />
          <Route path="/GoogleClassroom2" element={<GoogleClassroom2 />} />
          <Route path="/DigitalFeedback" element={<DigitalFeedback />} />
          <Route path="/GoogleForms" element={<GoogleForms />} />
          <Route path="/StudentProgress" element={<StudentProgress />} />
          <Route path="/StudentGrowth" element={<StudentGrowth />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
