import React, { useState } from 'react'
import MacWindow from './MacWindow'
import "./mail.scss"

const Mail = ({ windowName, setWindowsState }) => {
  const [to, setTo] = useState('mohitporwal596@gmail.com')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleSend = (e) => {
    e.preventDefault()
    const mailtoLink = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`
    window.location.href = mailtoLink
  }

  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
      <div className="mail-container">
        <div className="mail-content">
          <div className="mail-header">
            <h1>Compose Email</h1>
            <a 
              href="https://mail.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mail-link gmail"
            >
              <span>📬</span>
              <span>Open Gmail</span>
            </a>
          </div>
          
          <form className="compose-form" onSubmit={handleSend}>
            <div className="form-group">
              <label htmlFor="to">To:</label>
              <input
                type="email"
                id="to"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                placeholder="Recipient email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Email subject"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here..."
                rows="10"
                required
              />
            </div>

            <div className="form-actions">
              <button type="submit" className="send-button">
                <span>📧</span>
                <span>Send Email</span>
              </button>
              <button 
                type="button" 
                className="clear-button"
                onClick={() => {
                  setSubject('')
                  setMessage('')
                }}
              >
                Clear
              </button>
            </div>
          </form>
        </div>
      </div>
    </MacWindow>
  )
}

export default Mail

