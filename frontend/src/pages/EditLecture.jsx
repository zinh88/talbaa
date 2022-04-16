import React from "react";
import UploadButton from "../components/UploadButton";
import Navbar from "./../components/Navbar";
import { Image, Video, Transformation } from "cloudinary-react";

// const cld = new Cloudinary({
//   cloud: {
//     cloudName: "d5ig0sry",
//   },
// });
function EditLecture() {
  const id1 = "udzo4o03kwgwjl3d7zkj";
  const id2 = "k17pkba5cddfcpcth1dj";
  const id3 = "uxhqhj80uihwzkwm944t";
  const id4 = "i5kmeg72wcsdyjq9fysl";

  const cloudName = "dv5ig0sry";

  return (
    <div>
      <Navbar />
      Edit Lecture
      <UploadButton />
      {/* <Image cloudName={cloudName} publicId={id1} width="370" /> */}
      {/* <a
        href={`http://res.cloudinary.com/${cloudName}/image/upload/${id1}`}
        target="_blank"
      >
        pdf link
      </a> */}
      <Video cloudName="demo" publicId="dog" controls="true">
        <Transformation width="0.4" angle="20" />
        <Transformation
          overlay="cloudinary_icon_white"
          width="60"
          opacity="50"
          gravity="south_east"
          y="15"
          x="60"
        />
      </Video>
    </div>
  );
}
export default EditLecture;
