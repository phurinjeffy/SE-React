import React, { useEffect, useState } from "react";

const TimetablesModal = ({ active, handleModal, token, id, setErrorMessage }) => {
  const [course, setCourse] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    const getTimetable = async () => {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      };
      const response = await fetch(`/api/timetables/${id}`, requestOptions);

      if (!response.ok) {
        setErrorMessage("Could not get the to-do item");
      } else {
        const data = await response.json();
        setCourse(data.course);
        setDate(data.date);
        setTime(data.time);
        setLocation(data.location);
      }
    };

    if (id) {
      getTimetable();
    }
  }, [id, token]);

  const cleanFormData = () => {
    setDueDate("");
    setCourse("");
    setDate("");
    setTime("");
    setLocation("");
  };

  const handleCreateTimetable = async (e) => {
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
    const response = await fetch("/api/timetables", requestOptions);

    if (!response.ok) {
      setErrorMessage("Something went wrong when creating the to-do item");
    } else {
      cleanFormData();
      handleModal();
    }
  };

  const handleUpdateTimetable = async (e) => {
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
    const response = await fetch(`/api/timetables/${id}`, requestOptions);

    if (!response.ok) {
      setErrorMessage("Something went wrong when updating the to-do item");
    } else {
      cleanFormData();
      handleModal();
    }
  };

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
                  onChange={(e) => setDate(e.target.value)}
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
                  onChange={(e) => setTime(e.target.value)}
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
                  onChange={(e) => setLocation(e.target.value)}
                  className="input"
                />
              </div>
            </div>
          </form>
        </section>
        <footer className="modal-card-foot has-background-primary-light">
          {id ? (
            <button className="button is-info" onClick={handleUpdateTimetable}>
              Update
            </button>
          ) : (
            <button className="button is-primary" onClick={handleCreateTimetable}>
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

export default TimetablesModal;
