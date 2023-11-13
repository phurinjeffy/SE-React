import React, { useState, useEffect, useContext } from "react";
import { Profile, Calendar, NotesTable } from "../../components";
import { UserContext } from "../../context/UserContext";
import "./ProfilePage.css";

const ProfilePage = () => {
  const [token] = useContext(UserContext);
  const [notes, setNotes] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [activeModal, setActiveModal] = useState(false);
  const [id, setId] = useState(null);

  const handleUpdate = async (id) => {
    setId(id);
    setActiveModal(true);
  };

  const handleDelete = async (id) => {
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    const response = await fetch(`/api/notes/${id}`, requestOptions);
    if (!response.ok) {
      setErrorMessage("Failed to delete note");
    }

    getNotes();
  };

  const getNotes = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    const response = await fetch("/api/notes", requestOptions);
    if (!response.ok) {
      setErrorMessage("Something went wrong. Couldn't load the notes");
    } else {
      const data = await response.json();
      setNotes(data);
      setLoaded(true);
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div className="profilePage">
      <Profile />
      <div>
        <Calendar />
        { loaded && notes && (
          <NotesTable notes={notes} handleUpdate={handleUpdate} handleDelete={handleDelete} showEdit={false} />
        ) }
      </div>
    </div>
  );
};

export default ProfilePage;
