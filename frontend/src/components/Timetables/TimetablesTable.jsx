import React from "react";
import moment from "moment";

const TimetablesTable = ({ timetables, handleUpdate, handleDelete, showEdit }) => (
  <table className="table is-fullwidth">
    <thead>
      <tr>
        <th>Course</th>
        <th>Date</th>
        <th>Time</th>
        <th>Location</th>
        {showEdit && 
        <th>Actions</th>
        }
      </tr>
    </thead>
    <tbody>
      {timetables.map((timetable) => (
        <tr key={timetable.id}>
          <td>{timetable.course}</td>
          <td>{timetable.date}</td>
          <td>{timetable.time}</td>
          <td>{timetable.location}</td>
          {showEdit && 
          <td>
            <button className="button mr-2 is-info is-light" onClick={() => handleUpdate(timetable.id)}>
              Update
            </button>
            <button className="button mr-2 is-danger is-light" onClick={() => handleDelete(timetable.id)}>
              Delete
            </button>
          </td>
          }
        </tr>
      ))}
    </tbody>
  </table>
);

export default TimetablesTable;
