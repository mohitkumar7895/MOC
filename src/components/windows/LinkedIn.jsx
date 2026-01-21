import React, { useEffect } from 'react'
import MacWindow from './MacWindow'
import "./linkedin.scss"

const LinkedIn = ({ windowName, setWindowsState }) => {
  useEffect(() => {
    // Load LinkedIn embed script
    const script = document.createElement('script')
    script.src = 'https://platform.linkedin.com/badges/js/profile.js'
    script.async = true
    script.defer = true
    document.body.appendChild(script)

    return () => {
      // Cleanup
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState} width="60vw" height="75vh">
      <div className="linkedin-container">
        <div className="linkedin-content">
          <h1>LinkedIn Profile</h1>
          <p className="info-text">View-only mode </p>
          
          <div className="linkedin-profile-card">
            <div className="profile-header">
              <div className="profile-icon">💼</div>
              <h2>Mohit Kumar</h2>
              <p className="profile-title">LinkedIn Profile</p>
            </div>
            
            <div className="profile-info">
              <div className="info-item">
                <span className="label">Profile URL:</span>
                <span className="value">linkedin.com/in/mohit-kumar7895</span>
              </div>
            </div>

            <div className="linkedin-badge-container">
              <div 
                className="LI-profile-badge" 
                data-version="v1" 
                data-size="large" 
                data-locale="en_US" 
                data-type="horizontal" 
                data-theme="dark" 
                data-vanity="mohit-kumar7895"
              >
                <a 
                  className="LI-simple-link" 
                  href="https://www.linkedin.com/in/mohit-kumar7895?trk=profile-badge"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mohit Kumar
                </a>
              </div>
            </div>

            <div className="profile-actions">
              <a 
                href="https://www.linkedin.com/in/mohit-kumar7895/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="linkedin-link"
              >
                <span>🔗</span>
                <span>LinkedIn Profile Kholen</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </MacWindow>
  )
}

export default LinkedIn

