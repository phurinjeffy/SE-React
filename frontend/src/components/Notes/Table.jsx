import React, { useContext, useEffect, useState } from "react";
import moment from "moment";

import "./Table.css"
import NoteModal from "./NoteModal";
import { UserContext } from "../../context/UserContext";
import GenericContainer from "../GenericContainer/GenericContainer";

const Table = () => {
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
      <NoteModal active={activeModal} handleModal={handleModal} token={token} id={id} setErrorMessage={setErrorMessage} />
      <button className="button is-fullwidth mb-5 is-primary" onClick={() => setActiveModal(true)} >
        Create Note
      </button>
      <div className="ErrorMessage">{errorMessage}</div>
      {loaded && notes ? (
        <table className="table is-fullwidth">
          <thead>
            <tr>
              <th>Due Date</th>
              <th>Course</th>
              <th>Title</th>
              <th>Description</th>
              <th>Urgency</th>
              <th>Last Updated</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {notes.map((note) => (
              <tr key={note.id}>
                <td>{note.dueDate}</td>
                <td>{note.course}</td>
                <td>{note.title}</td>
                <td>{note.description}</td>
                <td>{note.urgency}</td>
                <td>{moment(note.date_last_updated).format("MMM Do YY")}</td>
                <td>
                  <button className="button mr-2 is-info is-light" onClick={() => handleUpdate(note.id)}>
                    Update
                  </button>
                  <button className="button mr-2 is-danger is-light" onClick={() => handleDelete(note.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading</p>
      )}
    </GenericContainer>
  );
};

export default Table;
