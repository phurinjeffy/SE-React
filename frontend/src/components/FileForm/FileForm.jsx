import React, {useState} from 'react'
import "./FileForm.css"

const FileForm = () => {
  const [files, setFiles] = useState(null);

  const handleFileInputChange = (event) => {
    setFiles(event.target.files);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    Array.from(files).forEach(file => {
      formData.append('file_uploads', file);
    });

    try {
      const endpoint = "http://localhost:8000/upload/";
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData
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
  }

  return (
    <div>
      <h1>Upload file</h1>

      <form onSubmit={handleSubmit}>
        <div className='UploadInput'>
          <input type="file" onChange={handleFileInputChange} multiple />
        </div>

        <button type="submit">Upload</button>
      </form>

      {files && <p>{files.length} files selected</p>}
    </div>
  )
}

export default FileForm