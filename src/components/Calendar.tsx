import React, { useState, MouseEvent } from "react";
import { Date, Weekday } from "../types";
import { monthDates } from "../configs/MonthDays";
import { Weekdays } from "../configs/Weekdays";

const Calendar: React.FC<{}> = ({}) => {
  const [selectedDate, setSelectedDate] = useState<string | null>();

  const handleChange = (e: MouseEvent<HTMLButtonElement>) => {
    console.log("first");
    setSelectedDate(e.currentTarget.getAttribute("value"));
  };

  const generateDates = (date: number) => {
    let selectedDateNumber: number = selectedDate ? parseInt(selectedDate) : 0;
    for (let i = 0; i < 7; i++) {
      return (
        <button
          key={Math.random()}
          className={` ${date === 23 ? "today" : ""}
          ${date === selectedDateNumber ? "selected" : ""}`}
          value={date}
          onClick={handleChange}
        >
          <p>{date}</p>
        </button>
      );
    }
  };

  const generateWeeks = (dates: Date[]) => {
    let daysInWeek = 7;
    let tempArray = [];

    for (let i = 0; i < dates.length; i += daysInWeek) {
      tempArray.push(dates.slice(i, i + daysInWeek));
    }
    return tempArray;
  };

  return (
    <div className="calendar-container">
      <div className="datepicker-container">
        <h1>*</h1>
        <span>February 2022</span>
        <h1>*</h1>
      </div>
      <div className="weekdays-container">
        {Weekdays.map((day, index) => (
          <div key={index} className="week-day">
            {day}
          </div>
        ))}
      </div>
      <div className="calendar">
        {generateWeeks(monthDates).map((week, index) => (
          <div key={index} className="week">
            {week.map((date) => generateDates(date.day))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
