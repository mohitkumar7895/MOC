import React from 'react'
import "./dock.scss"
const Dock = ({ windowsState, setWindowsState }) => {
  return (
        <footer className='dock'>
            <div className="icon github" onClick={() => setWindowsState(state => ({ ...state, github: !state.github }))}>
              <img src="/docicon/github.jpeg" alt=""  />
            </div>
            <div className="icon note" onClick={() => setWindowsState(state => ({ ...state, note: !state.note }))}>
              <img src="/docicon/note.jpeg" alt=""  />
            </div>
            <div className="icon pdf" onClick={() => setWindowsState(state => ({ ...state, resume: !state.resume }))}>
              <img src="/docicon/pdf.jpeg" alt=""  />
            </div>
            <div className="icon calender" onClick={() => setWindowsState(state => ({ ...state, calendar: !state.calendar }))}>
              <img src="/docicon/calender.jpeg" alt=""  />
            </div>
            <div className="icon mail" onClick={() => setWindowsState(state => ({ ...state, mail: !state.mail }))}>
              <img src="/docicon/mail.jpeg" alt=""  />
            </div>
            <div className="icon spotify" onClick={() => setWindowsState(state => ({ ...state, spotify: !state.spotify }))}>
              <img src="/docicon/spotify.jpeg" alt=""  />
            </div>
            <div className="icon portfolio" onClick={() => setWindowsState(state => ({ ...state, portfolio: !state.portfolio }))}>
              <img src="/docicon/portfolio.jpeg" alt=""  />
            </div>
            <div className="icon cli" onClick={() => setWindowsState(state => ({ ...state, cli: !state.cli }))}>
              <img src="/docicon/cli.jpeg" alt=""  />
            </div>
            <div className="icon link" onClick={() => setWindowsState(state => ({ ...state, linkedin: !state.linkedin }))}>
              <img src="/docicon/link.jpeg" alt=""  />
            </div>
        </footer>
  )
}

export default Dock
