import React from "react";
import moment from "moment";

const NotesTable = ({ notes, handleUpdate, handleDelete, showEdit }) => (
  <table className="table is-fullwidth">
    <thead>
      <tr>
        <th>Due Date</th>
        <th>Title</th>
        <th>Description</th>
        <th>Category</th>
        <th>Color</th>
        {showEdit && 
        <>
        <th>Last Updated</th>
        <th>Actions</th>
        </>
        }
      </tr>
    </thead>
    <tbody>
      {notes && notes.length > 0 ? (
        notes.map((note) => (
          <tr key={note.id}>
            <td>{note.dueDate}</td>
            <td>{note.title}</td>
            <td>{note.description}</td>
            <td>{note.category}</td>
            <td>{note.color}</td>
            {showEdit && 
            <>
            <td>{moment(note.date_last_updated).format("YYYY-MM-D")}</td>
            <td>
              <button className="button mr-2 is-info is-light" onClick={() => handleUpdate(note.id)}>
                Update
              </button>
              <button className="button mr-2 is-danger is-light" onClick={() => handleDelete(note.id)}>
                Delete
              </button>
            </td>
            </>
            }
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="7">No notes available</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default NotesTable;
