import React, { useState, useEffect } from "react";
import "./Calendar.css";
import { format } from "date-fns";
import Modal from "react-modal";

const Calendar = ({ notes }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [clickedCellPosition, setClickedCellPosition] = useState({
    top: 0,
    left: 0,
  });

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    return new Date(year, month, 0).getDate();
  };

  const generateCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );
    const startingDayOfWeek = firstDayOfMonth.getDay();

    const calendar = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      calendar.push(
        <div key={`empty-${i}`} className="calendar-cell empty-cell"></div>
      );
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const currentDateOfMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        day
      );
      const formattedDate = format(currentDateOfMonth, "yyyy-MM-dd");

      const hasNote =
        notes &&
        notes.some((note) => note.dueDate === formattedDate);

      calendar.push(
        <div
          key={day}
          className={`calendar-cell ${hasNote ? "has-schedule" : ""}`}
          onClick={
            hasNote ? (e) => handleCellClick(formattedDate, e) : undefined
          }
        >
          {day}
        </div>
      );
    }

    // Check if the month ends on Saturday
    const lastDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    );
    const endsOnSaturday = lastDayOfMonth.getDay() === 6;

    // Add empty cells after the days of the month only if needed
    if (!endsOnSaturday) {
      const remainingEmptyCells = 7 - ((startingDayOfWeek + daysInMonth) % 7);
      for (let i = 0; i < remainingEmptyCells; i++) {
        calendar.push(
          <div
            key={`empty-after-${i}`}
            className="calendar-cell empty-cell"
          ></div>
        );
      }
    }

    return calendar;
  };

  const handleCellClick = (date, event) => {
    setSelectedDate(date);
    setClickedCellPosition({
      top: event.clientY,
      left: event.clientX,
    });
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const selectedNote = notes?.find(
    (note) => note.dueDate === selectedDate
  );

  const handlePrevMonth = () => {
    const prevMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1,
      currentDate.getDate()
    );
    setCurrentDate(prevMonth);
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      currentDate.getDate()
    );
    setCurrentDate(nextMonth);
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={handlePrevMonth}>&lt;</button>
        <div className="current-month">
          {currentDate.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </div>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
      <div className="calendar-days">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="calendar-cell day-of-week">
            {day}
          </div>
        ))}
      </div>
      <div className="calendar-grid">{generateCalendar()}</div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="clickedModal"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            top: clickedCellPosition.top,
            left: clickedCellPosition.left,
          },
        }}
      >
        {selectedNote && (
          <div>
            <p>Deadline: {selectedNote.dueDate}</p>
            <p>Course: {selectedNote.course}</p>
            <p>Title: {selectedNote.title}</p>
            <p>Description: {selectedNote.description}</p>
            <p>Urgency: {selectedNote.urgency}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Calendar;
