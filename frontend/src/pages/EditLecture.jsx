import React from "react";
import UploadButton from "../components/UploadButton";
import Navbar from "./../components/Navbar";
import { Image, Video, Transformation } from "cloudinary-react";

function EditLecture() {

  return (
    <div>
      <Navbar />
      Edit Lecture
      <UploadButton />

      <div class='videoplayer'>
        <Video cloudName="demo" publicId="dog" controls="true">
          <Transformation width="10" angle="0" />
          <Transformation
            overlay="cloudinary_icon_white"
            width="600"
            opacity="50"
            gravity="south_east"
            y="15"
            x="60"
          />
        </Video>
      </div>
    </div>

  );
}

export default EditLecture;