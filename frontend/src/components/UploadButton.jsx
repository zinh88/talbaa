import React from "react";

function UploadButton() {
    return (
        <div>
            <button
                id="upload_widget"
                class="cloudinary-button"
            >
                Upload files
            </button>

            {/* <ScriptTag */}
            <script
                src="https://widget.cloudinary.com/v2.0/global/all.js"
                type="text/javascript">
            {/* </ScriptTag> */}
            </script>

            <script
                src="upload_widget.js"
                type="text/javascript">
            </script>
        </div>
    )
}

export default UploadButton;