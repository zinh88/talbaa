import React from "react";

function uploadButton() {
    return (
        <div>
            <button
                id="upload_widget"
                class="cloudinary-button">
                Upload files
            </button>

            {/* <!-- cloudinary upload widget --> */}
            <script
                src="https://widget.cloudinary.com/v2.0/global/all.js"
                type="text/javascript">
            </script>

            {/* <!-- local upload instantiation --> */}
            <script
                src="upload_widget.js"
                type="text/javascript">
            </script>
        </div>
    )
}

export default uploadButton;