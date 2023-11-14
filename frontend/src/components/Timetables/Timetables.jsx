import React, { useContext, useEffect, useState } from "react";

import "./Timetables.css";
import { UserContext } from "../../context/UserContext";
import GenericContainer from "../GenericContainer/GenericContainer";
import TimetablesModal from "./TimetablesModal";
import TimetablesTable from "./TimetablesTable";

const Timetables = () => {
  const [token] = useContext(UserContext);
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
    const response = await fetch(`/api/timetables/${id}`, requestOptions);
    if (!response.ok) {
      setErrorMessage("Failed to delete timetable");
    }

    getTimetables();
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
      setLoaded(true);
    }
  };

  useEffect(() => {
    getTimetables();
  }, []);

  const handleModal = () => {
    setActiveModal(!activeModal);
    getTimetables();
    setId(null);
  };

  return (
    <GenericContainer title="Timetables">
      <TimetablesModal active={activeModal} handleModal={handleModal} token={token} id={id} setErrorMessage={setErrorMessage} />
      <div className="Content">
        <button className="button is-fullwidth mb-5 is-primary" onClick={() => setActiveModal(true)}>
          Create Timetable
        </button>
        <div className="ErrorMessage">{errorMessage}</div>
        {loaded && timetables ? (
          <TimetablesTable timetables={timetables} handleUpdate={handleUpdate} handleDelete={handleDelete} showEdit={true}/>
        ) : (
          <p>Loading</p>
        )}
      </div>
    </GenericContainer>
  );
};

export default Timetables;
