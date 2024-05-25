/* eslint-disable prefer-const */
import React, { useState } from "react";
import "./calendar.css";
import { link_icon } from "../../../app/icons";

interface CalendarProps {
  onSelectDate: (date: string) => void;
}

const Calendar: React.FC<CalendarProps> = ({ onSelectDate }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const monthNames = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  const monthNamesSelected = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];

  const renderCalendar = () => {
    const daysOfWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

    const firstDayOfMonth = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      1
    );
    const startingDay =
      firstDayOfMonth.getDay() === 0 ? 6 : firstDayOfMonth.getDay() - 1;

    const daysInMonth = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + 1,
      0
    ).getDate();
    const daysInPrevMonth = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      0
    ).getDate();

    const monthName = monthNames[selectedDate.getMonth()];
    const year = selectedDate.getFullYear();

    let calendar = [];
    let day = 1;
    let nextMonthDay = 1;

    for (let i = 0; i < 6; i++) {
      let week = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < startingDay) {
          week.push(
            <div className="stock__calendar-day other-month" key={j}>
              <div className="stock__calendar-day_inner">
                {daysInPrevMonth - startingDay + j + 1}
              </div>
            </div>
          );
        } else if (day <= daysInMonth) {
          const date = new Date(
            selectedDate.getFullYear(),
            selectedDate.getMonth(),
            day
          );
          week.push(
            <div className="stock__calendar-day" key={j}>
              <div
                onClick={() => handleDateClick(date)}
                className={
                  isSameDay(date, new Date())
                    ? "stock__calendar-today stock__calendar-day_inner"
                    : "stock__calendar-day_inner"
                }
              >
                {day}
              </div>
            </div>
          );
          day++;
        } else {
          week.push(
            <div className="stock__calendar-day other-month" key={j}>
              <div className="stock__calendar-day_inner">{nextMonthDay}</div>
            </div>
          );
          nextMonthDay++;
        }
      }
      calendar.push(
        <div className="stock__calendar-days_block" key={i}>
          {week}
        </div>
      );
    }

    return (
      <div className="stock__calendar">
        <div className="stock__calendar-header">
          <button className="stock__calendar-button" onClick={prevMonth}>
            <img src={link_icon.leftArrow} alt="left" />
          </button>
          <div className="stock__calendar-month">{`${monthName} ${year}`}</div>
          <button className="stock__calendar-button" onClick={nextMonth}>
            <img src={link_icon.rightArrow} alt="right" />
          </button>
        </div>
        <div className="stock__calendar-content">
          <div className="stock__calendar-week">
            {daysOfWeek.map((day) => (
              <div className="stock__calendar-week_item" key={day}>
                {day}
              </div>
            ))}
          </div>
          <div className="stock__calendar-days">{calendar}</div>
        </div>
      </div>
    );
  };

  const nextMonth = () => {
    setSelectedDate(
      new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1)
    );
  };

  const prevMonth = () => {
    setSelectedDate(
      new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1)
    );
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    onSelectDate(formatDate(date));
  };

  const isSameDay = (date1: Date, date2: Date) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

  const formatDate = (date: Date) => {
    const day = date.getDate();
    const month = monthNamesSelected[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  return renderCalendar();
};

export default Calendar;
