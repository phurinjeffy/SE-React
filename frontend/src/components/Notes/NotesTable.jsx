import React from "react";
import moment from "moment";

const NotesTable = ({ notes, handleUpdate, handleDelete }) => (
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
);

export default NotesTable;
