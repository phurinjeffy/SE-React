import React, {useState} from 'react'
import "./FileForm.css"

const FileForm = () => {
  const [files, setFile] = useState(null);

  const handleFileInputChange = (event) => {
    setFile(Array.from(event.target.files))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    files.forEach(file => {
      formData.append('file_uploads', file);
    })

    try {
      const endpoint = "http://localhost:8000/upload/";
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        alert("Success");
      } else {
        alert("Fail");
      }
    }
    catch(error) {
      alert("error")
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

        { files && <p>{files.name}</p>}
    </div>
  )
}

export default FileForm