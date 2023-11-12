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
        <form>
          <div className="RepositInput">
            <label for="name">Name</label>
            <input type="text" id="name"/>
          </div>
        
          <div className="RepositInput">
            <label for="description">Description</label>
            <input type="text" id="description"/>
          </div>

          <div className="RepositRadio">
            <div>
              <label for="public">Public</label>
              <input type="radio" id="public" name="status" value="Public" />
            </div>
            <div>
              <label for="private">Private</label>
              <input type="radio" id="private" name="status" value="Private" />
            </div>
          </div>

          <div className="SaveButton">
            <button>Create</button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="UploadInput">
              <input type="file" onChange={handleFileInputChange} multiple />
              <button type="submit">Upload</button>
            </div>
            {files && <p>{files.length} files selected</p>}
          </form>
        </form>
      </div>
    </GenericContainer>
  );
};

export default FileForm;
