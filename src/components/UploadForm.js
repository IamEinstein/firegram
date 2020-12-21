import React, { useState } from "react";
const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const types = ["image/png", "image/jpeg"];
  const fileChanged = (e) => {
    // Getting the file (from the 'event' object)
    let selectedImage = e.target.files[0];
    if (selectedImage && types.includes(selectedImage.type)) {
      setFile(selectedImage);
      setError("");
    } else {
      setFile(null);
      setError("Please select and image file only (png/jpeg only)");
    }
  };
  return (
    <form>
      <input type="file" onChange={fileChanged} />
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
      </div>
    </form>
  );
};
export default UploadForm;
