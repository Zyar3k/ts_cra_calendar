import React from "react";
import { Date, Weekday } from "../types";
import { monthDates } from "../configs/MonthDays";
import { Weekdays } from "../configs/Weekdays";

const Calendar: React.FC<{}> = ({}) => {


    
  return (
    <div className="calendar-container">
      <div className="datepicker-container"></div>
      <div className="weekdays-container">
        {Weekdays.map((day) => (
          <div className="week-day">{day}</div>
        ))}
      </div>
      <div className="calendar"></div>
    </div>
  );
};

export default Calendar;
