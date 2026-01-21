import React from 'react'
import MacWindow from './MacWindow'
import "./resume.scss"

const Resume = ({ windowName, setWindowsState }) => {
    return (
        <MacWindow windowName={windowName} setWindowsState={setWindowsState} width="60vw" height="80vh">
            <div className="resume-window">
                <embed src="/Resume.pdf" type="application/pdf" />
            </div>
        </MacWindow>
    )
}

export default Resume