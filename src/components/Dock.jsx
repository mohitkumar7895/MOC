import React from 'react'
import "./dock.scss"
const Dock = () => {
  return (
        <footer className='dock'>
            <div className="icon github"><img src="/docicon/github.jpeg" alt=""  /></div>
            <div className="icon note"><img src="/docicon/note.jpeg" alt=""  /></div>
            <div className="icon pdf"><img src="/docicon/pdf.jpeg" alt=""  /></div>
            <div className="icon calender"><img src="/docicon/calender.jpeg" alt=""  /></div>
            <div className="icon mail"><img src="/docicon/mail.jpeg" alt=""  /></div>
            <div className="icon spotify"><img src="/docicon/spotify.jpeg" alt=""  /></div>
            <div className="icon link"><img src="/docicon/link.jpeg" alt=""  /></div>
        </footer>
  )
}

export default Dock
