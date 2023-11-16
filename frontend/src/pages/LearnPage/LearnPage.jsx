import React, { useState, useEffect } from "react";
import "./LearnPage.css";

import GenericContainer from "../../components/GenericContainer/GenericContainer";

const LearnPage = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [allVideos, setAllVideos] = useState([]);
  const [uploadSuccessful, setUploadSuccessful] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/videos")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAllVideos(data);
      });
  }, [uploadSuccessful]);

  const onInputChange = (e) => {
    console.log(e.target.files[0]);
    setIsSelected(true);
    setSelectedFile(e.target.files[0]);
  };

  const onButtonClick = (e) => {
    console.log("Button clicked..");
    e.target.value = "";
  };

  const onFileUpload = (e) => {
    setShowSpinner(true);
    const formData = new FormData();
    formData.append("file", selectedFile, selectedFile.name);
    fetch("http://127.0.0.1:8000/videos", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success posting!!");
        setUploadSuccessful(!uploadSuccessful);
        setShowSpinner(false);
      });
  };

  return (
    <div className="learnPage">
      <GenericContainer title="Learning Resources">
        <div className="uploadSection">
          <input type="file" accept="video/*" onChange={onInputChange} onClick={onButtonClick} className="videoInput"/>
          <button onClick={onFileUpload} disabled={!isSelected} className="uploadButton" style={{ backgroundColor: isSelected ? "#e44d26" : "grey", cursor: isSelected ? "pointer" : "not-allowed"}}>
            {showSpinner ? "Uploading..." : "Upload Video"}
          </button>
        </div>
      
        <div className="videoSection">
          <div className="videoGrid">
            {Array.isArray(allVideos) &&
              allVideos.length !== 0 &&
              allVideos.map((video) => (
                <div key={video.id} >
                  <video src={video["video_url"]} controls className="videoBlock"></video>
                  <div className="videoName">
                    {video["video_title"]}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </GenericContainer>
    </div>
  );
  
};

export default LearnPage;
