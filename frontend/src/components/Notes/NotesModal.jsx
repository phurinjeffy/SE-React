import React, { useEffect, useState } from "react";

const NotesModal = ({ active, handleModal, token, id, setErrorMessage }) => {
  const [dueDate, setDueDate] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("");

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
        setTitle(data.title);
        setDescription(data.description);
        setCategory(data.category);
        setColor(data.color);
      }
    };

    if (id) {
      getTodo();
    }
  }, [id, token]);

  const cleanFormData = () => {
    setDueDate("");
    setTitle("");
    setDescription("");
    setCategory("");
    setColor("");
  };

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
        category: category,
        title: title,
        description: description,
        color: color,
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
        title: title,
        description: description,
        category: category,
        color: color,
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
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Category</label>
              <div className="control">
                <input
                  type="text"
                  placeholder="Enter category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="input"
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Color</label>
              <div className="control">
                <input
                  type="color"
                  placeholder="Enter color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="input"
                  required
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

export default NotesModal;
