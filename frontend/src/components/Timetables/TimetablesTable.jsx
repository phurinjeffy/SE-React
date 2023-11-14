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
        <th>Lecturer</th>
        {showEdit && 
        <th>Last Updated</th> && 
        <th>Actions</th>
        }
      </tr>
    </thead>
    <tbody>
    {timetables && timetables.length > 0 ? (
        timetables.map((timetable) => (
          <tr key={timetable.id}>
            <td>{timetable.course}</td>
            <td>{timetable.date}</td>
            <td>{timetable.time}</td>
            <td>{timetable.location}</td>
            <td>{timetable.lecturer}</td>
            {showEdit && 
            <td>{moment(timetable.date_last_updated).format("MMM Do YY")}</td> &&
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
        ))
      ) : (
        <tr>
          <td colSpan="7">No timetable available</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default TimetablesTable;
