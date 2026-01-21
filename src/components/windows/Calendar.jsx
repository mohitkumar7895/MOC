import React from 'react'
import MacWindow from './MacWindow'
import "./calendar.scss"

const Calendar = ({ windowName, setWindowsState }) => {
  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState} width="50vw" height="60vh">
      <div className="calendar-container">
        <div className="calendar-content">
          <h1>Calendar</h1>
          <div className="calendar-view">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=en.indian%23holiday%40group.v.calendar.google.com&ctz=Asia%2FKolkata"
              style={{ border: 0 }}
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              title="Calendar"
            />
          </div>
        </div>
      </div>
    </MacWindow>
  )
}

export default Calendar

