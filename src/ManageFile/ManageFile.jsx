import React from "react";
import ManageFileHeader from "./ManageFileHeader";
import ManageSections from "./ManageSections";
import UseGoogleDrive from "./UseGoogleDrive";
import ManageVideoSectIon from "./ManageVideoSectIon";
import ManageFooter from "./ManageFooter";

const ManageFile = () => {
  return (
    <div>
      <ManageFileHeader />
      <ManageSections />
      <UseGoogleDrive />
      <ManageVideoSectIon />
      {/* <ManageFooter /> */}
    </div>
  );
};

export default ManageFile;
