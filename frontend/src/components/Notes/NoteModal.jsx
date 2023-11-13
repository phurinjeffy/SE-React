// Import necessary libraries and styles
import React, { useEffect, useState } from "react";
import "./Notes.css";

const NoteModal = ({ active, handleModal, token, id, setErrorMessage }) => {
  // State variables for form fields
  const [dueDate, setDueDate] = useState("");
  const [course, setCourse] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [urgency, setUrgency] = useState("");

  // Fetch note data if in update mode
  useEffect(() => {
    const getTodo = async () => {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      };
      const response = await fetch(`/api/notes/${id}`, requestOptions);

      if (!response.ok) {
        setErrorMessage("Could not get the to-do item");
      } else {
        const data = await response.json();
        setDueDate(data.dueDate);
        setCourse(data.course);
        setTitle(data.title);
        setDescription(data.description);
        setUrgency(data.urgency);
      }
    };

    if (id) {
      getTodo();
    }
  }, [id, token]);

  // Function to clear form data
  const cleanFormData = () => {
    setDueDate("");
    setCourse("");
    setTitle("");
    setDescription("");
    setUrgency("");
  };

  // Function to handle creation of a to-do item
  const handleCreateTodo = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        dueDate: dueDate,
        course: course,
        title: title,
        description: description,
        urgency: urgency,
      }),
    };
    const response = await fetch("/api/notes", requestOptions);

    if (!response.ok) {
      setErrorMessage("Something went wrong when creating the to-do item");
    } else {
      cleanFormData();
      handleModal();
    }
  };

  // Function to handle updating a to-do item
  const handleUpdateTodo = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        dueDate: dueDate,
        course: course,
        title: title,
        description: description,
        urgency: urgency,
      }),
    };
    const response = await fetch(`/api/notes/${id}`, requestOptions);

    if (!response.ok) {
      setErrorMessage("Something went wrong when updating the to-do item");
    } else {
      cleanFormData();
      handleModal();
    }
  };

  // Return the JSX for the to-do list entry form
  return (
    <div className={`modal ${active && "is-active"}`}>
      <div className="modal-background" onClick={handleModal}></div>
      <div className="modal-card">
        <header className="modal-card-head has-background-primary-light">
          <h1 className="modal-card-title">{id ? "Update To-Do" : "Create To-Do"}</h1>
        </header>
        <section className="modal-card-body">
          <form>
            <div className="field">
              <label className="label">Due Date</label>
              <div className="control">
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="input"
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Course</label>
              <div className="control">
                <input
                  type="text"
                  placeholder="Enter course"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  className="input"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Title</label>
              <div className="control">
                <input
                  type="text"
                  placeholder="Enter title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="input"
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Description</label>
              <div className="control">
                <input
                  type="text"
                  placeholder="Enter description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="input"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Urgency</label>
              <div className="control">
                <input
                  type="text"
                  placeholder="Enter urgency"
                  value={urgency}
                  onChange={(e) => setUrgency(e.target.value)}
                  className="input"
                />
              </div>
            </div>
          </form>
        </section>
        <footer className="modal-card-foot has-background-primary-light">
          {id ? (
            <button className="button is-info" onClick={handleUpdateTodo}>
              Update
            </button>
          ) : (
            <button className="button is-primary" onClick={handleCreateTodo}>
              Create
            </button>
          )}
          <button className="button" onClick={handleModal}>
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
};

export default NoteModal;
