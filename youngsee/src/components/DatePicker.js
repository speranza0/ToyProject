import React, { useState, useRef } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment/moment";
import "moment/locale/ko";

function DatePicker() {
  const [value, setDate] = useState(new Date());
  const selectDate = moment(value).format("YYYY-MM-DD");

  const [showCalendar, setShowCalendar] = useState(false);
  const handleChange = (selectDate) => {
    setDate(selectDate);
    setShowCalendar(false);
  };

  return (
    <div>
      <input
        type="text"
        id="datepicker"
        name="date"
        className="date-input"
        autoComplete="off"
        placeholder="날짜 선택"
        value={selectDate}
        onFocus={() => setShowCalendar(true)}
        readOnly
      />
      <Calendar
        className={showCalendar ? "" : "hide"}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default DatePicker;
