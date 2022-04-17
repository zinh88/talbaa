import React from "react";
import { WidgetLoader, Widget } from "react-cloudinary-upload-widget";
import {} from "./../EditLecture.css"


const cloudName = "dv5ig0sry"; // replace with your own cloud name
const uploadPreset = "lf1ouek0"; // replace with your own upload preset

function UploadButton() {

  const style = {
    "background-color": "transparent",
    "border":"1px solid transparent",
    "cursor": "pointer",
  }

  return (
    <div class = "style">
      <WidgetLoader />
      <Widget
        sources={["local"]} 
        cloudName={cloudName}  
        uploadPreset={uploadPreset} 
        buttonText={"Upload File"} 
        style = {style}
        cropping={false} 
        autoClose={false} 
        destroy={false} 
      />
<<<<<<< HEAD
    </div>
  )
=======
    </>
  );
>>>>>>> 55f370a31f23f7acf138186be4677e65e8062d4c
}

export default UploadButton;
