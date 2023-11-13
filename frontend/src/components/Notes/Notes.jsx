import React, { useContext, useEffect, useState } from "react";

import "./Notes.css";
import { UserContext } from "../../context/UserContext";
import GenericContainer from "../GenericContainer/GenericContainer";
import NotesModal from "./NotesModal";
import NotesTable from "./NotesTable";

const Notes = () => {
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

  const handleModal = () => {
    setActiveModal(!activeModal);
    getNotes();
    setId(null);
  };

  return (
    <GenericContainer title="Notes">
      <NotesModal active={activeModal} handleModal={handleModal} token={token} id={id} setErrorMessage={setErrorMessage} />
      <div className="Content">
        <button className="button is-fullwidth mb-5 is-primary" onClick={() => setActiveModal(true)}>
          Create Note
        </button>
        <div className="ErrorMessage">{errorMessage}</div>
        {loaded && notes ? (
          <NotesTable notes={notes} handleUpdate={handleUpdate} handleDelete={handleDelete} />
        ) : (
          <p>Loading</p>
        )}
      </div>
    </GenericContainer>
  );
};

export default Notes;
