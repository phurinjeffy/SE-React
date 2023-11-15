import React, { useState, useEffect, useContext } from "react";
import { Profile, Calendar, TimetablesTable } from "../../components";
import { UserContext } from "../../context/UserContext";
import "./ProfilePage.css";

const ProfilePage = () => {
  const [token] = useContext(UserContext);
  const [notes, setNotes] = useState(null);
  const [timetables, setTimetables] = useState(null);
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

  const getTimetables = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    const response = await fetch("/api/timetables", requestOptions);
    if (!response.ok) {
      setErrorMessage("Something went wrong. Couldn't load the timetables");
    } else {
      const data = await response.json();
      setTimetables(data);
    }
  };

  useEffect(() => {
    getNotes();
    getTimetables();
  }, []);

  return (
    <div className="profilePage">
      <Profile />
      <div className="profileContent">
        <div className="profileCalendar">
          <Calendar notes={notes} />
        </div>
        <div className="profileNote">
          { loaded && notes && (
            <TimetablesTable timetables={timetables} handleUpdate={handleUpdate} handleDelete={handleDelete} showEdit={false} />
          ) }
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
