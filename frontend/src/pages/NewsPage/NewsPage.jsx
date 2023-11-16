import React, { useState, useEffect } from "react";
import "./NewsPage.css";

import GenericContainer from "../../components/GenericContainer/GenericContainer";

const NewsPage = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [allPhotos, setAllPhotos] = useState([]);
  const [uploadSuccessful, setUploadSuccessful] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/photos")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAllPhotos(data);
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
    fetch("http://127.0.0.1:8000/photos", {
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
    <div className="newsPage">
      <GenericContainer title="News Feed">
        <div className="uploadSection">
          <input type="file" accept="image/*" onChange={onInputChange} onClick={onButtonClick} className="photoInput"/>
          <button onClick={onFileUpload} disabled={!isSelected} className="uploadButton" style={{ backgroundColor: isSelected ? "#e44d26" : "grey", cursor: isSelected ? "pointer" : "not-allowed"}}>
            {showSpinner ? "Uploading..." : "Upload Photo"}
          </button>
        </div>
      
        <div className="photoSection">
          <div className="photoGrid">
            {Array.isArray(allPhotos) &&
              allPhotos.length !== 0 &&
              allPhotos.map((photo) => (
                <div key={photo.id} className="photoContainer">
                  <img src={photo["photo_url"]} alt={photo["photo_title"]} className="photoBlock" />
                  <div className="photoName">
                    {photo["photo_title"]}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </GenericContainer>
    </div>
  );
  
};

export default NewsPage;
