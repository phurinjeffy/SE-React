import React, { useState } from "react";
import GenericContainer from "../GenericContainer/GenericContainer";
import "./FileForm.css";

const FileForm = () => {
  const [files, setFiles] = useState(null);

  const handleFileInputChange = (event) => {
    setFiles(event.target.files);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    Array.from(files).forEach((file) => {
      formData.append("file_uploads", file);
    });

    try {
      const endpoint = "http://localhost:8000/upload/";
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Success", result);
      } else {
        console.error("Fail");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <GenericContainer title="Create New Repository">
      <div className="FileForm">
        <div className="RepositInput">
          <div className="RepositInputField">
            <label>Name</label>
            <input type="text" />
          </div>
          <div className="RepositInputField">
            <label>Description</label>
            <input type="text" />
          </div>

          <div className="SaveButton">
            <button>Create</button>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="UploadInput">
            <input type="file" onChange={handleFileInputChange} multiple />
          </div>

          <button type="submit">Upload</button>

          {files && <p>{files.length} files selected</p>}
        </form>
      </div>
    </GenericContainer>
  );
};

export default FileForm;
