import React, { useEffect, useState } from "react";

const ProfileModal = ({ active, handleModal, token, id, setErrorMessage }) => {
  const [firstname, setFirstname] = useState("");
  const [surname, setSurname] = useState("");
  const [github, setGithub] = useState("");
  const [discord, setDiscord] = useState("");

  useEffect(() => {
    const getDetail = async () => {
      try {
        if (id) {
          const requestOptions = {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
          };
          const response = await fetch(`/api/profile/${id}`, requestOptions);

          if (!response.ok) {
            throw new Error("Could not get the Profile(Detail) item");
          }

          const data = await response.json();
          setFirstname(data.firstname);
          setSurname(data.surname);
          setGithub(data.github);
          setDiscord(data.discord);
        }
      } catch (error) {
        setErrorMessage(error.message);
      }
    };

    getDetail();
  }, [id, token]);

  const cleanFormData = () => {
    setFirstname("");
    setSurname("");
    setGithub("");
    setDiscord("");
  };

  const handleCreateDetail = async (e) => {
    e.preventDefault();
    try {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({
          firstname: firstname,
          surname: surname,
          github: github,
          discord: discord,
        }),
      };
      const response = await fetch("/api/profile", requestOptions);

      if (!response.ok) {
        throw new Error("Something went wrong when creating the Profile(Detail) item");
      }

      cleanFormData();
      handleModal();
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleUpdateDetail = async (e) => {
    e.preventDefault();
    try {
      const requestOptions = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({
          firstname: firstname,
          surname: surname,
          github: github,
          discord: discord,
        }),
      };
      const response = await fetch(`/api/profile/${id}`, requestOptions);

      if (!response.ok) {
        throw new Error("Something went wrong when updating the Profile(Detail) item");
      }

      cleanFormData();
      handleModal();
    } catch (error) {
      setErrorMessage(error.message);
    }
  };
  
  return (
    <div className={`modal ${active && "is-active"}`}>
      <div className="modal-background" onClick={handleModal}></div>
      <div className="modal-card">
        <header className="modal-card-head has-background-primary-light">
          <h1 className="modal-card-title">{id ? "Update Profile" : "Create Profile"}</h1>
        </header>
        <section className="modal-card-body">
          <form>
            <div className="field">
              <label className="label">First name</label>
              <div className="control">
                <input
                  type="text"
                  placeholder="Enter First name"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  className="input"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Surname</label>
              <div className="control">
                <input
                  type="text"
                  value={surname}
                  placeholder="Enter surname"
                  onChange={(e) => setSurname(e.target.value)}
                  className="input"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Github</label>
              <div className="control">
                <input
                  type="text"
                  placeholder="Enter Github Link"
                  value={github}
                  onChange={(e) => setGithub(e.target.value)}
                  className="input"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Discord</label>
              <div className="control">
                <input
                  type="text"
                  placeholder="Enter Discord Link"
                  value={discord}
                  onChange={(e) => setDiscord(e.target.value)}
                  className="input"
                />
              </div>
            </div>
          </form>
        </section>
        <footer className="modal-card-foot has-background-primary-light">
          {id ? (
            <button className="button is-info" onClick={handleUpdateDetail}>
              Update
            </button>
          ) : (
            <button className="button is-primary" onClick={handleCreateDetail}>
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

export default ProfileModal;
