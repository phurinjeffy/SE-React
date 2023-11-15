import React, { useEffect, useState } from "react";

const TimetablesModal = ({ active, handleModal, token, id, setErrorMessage }) => {
  const [course, setCourse] = useState("");
  const [day, setDay] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    const getSchedule = async () => {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      };
      const response = await fetch(`/api/timetables/${id}`, requestOptions);

      if (!response.ok) {
        setErrorMessage("Could not get the schedule item");
      } else {
        const data = await response.json();
        setCourse(data.course);
        setDay(data.day);
        setStartTime(data.startTime);
        setEndTime(data.endTime);
        setLocation(data.location);
      }
    };

    if (id) {
      getSchedule();
    }
  }, [id, token]);

  const cleanFormData = () => {
    setCourse("");
    setDay("");
    setStartTime("");
    setEndTime("");
    setLocation("");
  };

  const handleCreateSchedule = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        course: course,
        day: day,
        startTime: startTime,
        endTime: endTime,
        location: location,
      }),
    };
    const response = await fetch("/api/timetables", requestOptions);

    if (!response.ok) {
      setErrorMessage("Something went wrong when creating the schedule item");
    } else {
      cleanFormData();
      handleModal();
    }
  };

  const handleUpdateSchedule = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        course: course,
        day: day,
        startTime: startTime,
        endTime: endTime,
        location: location,
      }),
    };
    const response = await fetch(`/api/timetables/${id}`, requestOptions);

    if (!response.ok) {
      setErrorMessage("Something went wrong when updating the schedule item");
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
          <h1 className="modal-card-title">{id ? "Update Schedule" : "Create Schedule"}</h1>
        </header>
        <section className="modal-card-body">
          <form>
            <div className="field">
              <label className="label">Course</label>
              <div className="control">
                <input
                  type="text"
                  placeholder="Enter course"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  className="input"
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Day</label>
              <div className="control">
                <input
                  type="text"
                  placeholder="Enter day of the week"
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                  className="input"
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Start Time</label>
              <div className="control">
                <input
                  type="time"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  className="input"
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">End Time</label>
              <div className="control">
                <input
                  type="time"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  className="input"
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Location</label>
              <div className="control">
                <input
                  type="text"
                  placeholder="Enter location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="input"
                  required
                />
              </div>
            </div>
          </form>
        </section>
        <footer className="modal-card-foot has-background-primary-light">
          {id ? (
            <button className="button is-info" onClick={handleUpdateSchedule}>
              Update
            </button>
          ) : (
            <button className="button is-primary" onClick={handleCreateSchedule}>
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
