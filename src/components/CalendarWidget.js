import React, { useState } from 'react';

const CalendarWidget = () => {
    // State variable to store the current date
    const [currentDate, setCurrentDate] = useState(new Date());

    // Function to render the calendar grid
    const renderCalendarGrid = () => {
        const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
        const daysInMonth = lastDayOfMonth.getDate();
        const startingDayOfWeek = firstDayOfMonth.getDay();

        // Creating calendar grid
        const calendarGrid = [];
        let currentDay = 1;

        // Loop through each week (maximum of 6 weeks)
        for (let i = 0; i < 6; i++) {
            const week = [];

            // Loop through each day in the week (7 days in a week)
            for (let j = 0; j < 7; j++) {
                if (i === 0 && j < startingDayOfWeek) {
                week.push(<div key={`empty-${j}`} className="empty-cell"></div>);
                } else if (currentDay <= daysInMonth) {
                week.push(<div key={currentDay} className="calendar-cell">{currentDay}</div>);
                currentDay++;
                } else {
                week.push(<div key={`empty-${j}`} className="empty-cell"></div>);
                }
            }

            // Add the week to the calendar grid
            calendarGrid.push(<div key={`week-${i}`} className="calendar-week">{week}</div>);
        }

        return calendarGrid;
    };

    // Function to handle previous month button click
    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
    };

    // Function to handle next month button click
    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
    };

    return (
        <div className="calendar-widget">
        <div className="header">
            <button className="button-text" onClick={handlePrevMonth}>Previous</button>
            <h3>
                {currentDate.toLocaleString(
                    'default', 
                    { month: 'long', year: 'numeric' }
                )}
            </h3>
            <button className="button-text" onClick={handleNextMonth}>Next</button>
        </div>
        <div className="calendar">
            {renderCalendarGrid()}
        </div>
        </div>
    );
};

export default CalendarWidget;