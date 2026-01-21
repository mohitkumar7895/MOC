import React from 'react'
import MacWindow from './MacWindow'
import "./portfolio.scss"

const Portfolio = ({ windowName, setWindowsState }) => {
  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
      <div className="portfolio-container">
        <div className="portfolio-content">
          <h1>My Portfolio Website</h1>
          
         
          <div className="iframe-container">
            <iframe
              src="https://mohitkumar-nextjs-portfolio-website-seven.vercel.app/"
              title="Portfolio Website"
              className="portfolio-iframe"
              allow="fullscreen"
            />
          </div>
        </div>
      </div>
    </MacWindow>
  )
}

export default Portfolio
