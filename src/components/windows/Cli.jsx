import React from 'react'
import MacWindow from './MacWindow'
import Terminal from 'react-console-emulator'
import "./cli.scss"

const Cli = ({ windowName, setWindowsState }) => {
    const commands = {
        about: {
            description: 'About me',
            usage: 'about',
            fn: () => "I am a passionate Frontend Developer with strong full-stack exposure, specializing in building modern, responsive, and high-performance web applications. I have hands-on experience in frontend UI development, API integration, and backend services, with a clear focus on clean code, scalability, and user experience."
        },
        skills: {
            description: 'List technical skills',
            usage: 'skills',
            fn: () => `Frontend: HTML, CSS, JavaScript, React.js, Redux, Redux Toolkit, Tailwind CSS, Styled-components, React Router, Axios
Backend: Node.js, Express.js, GraphQL
Database: MySQL, MongoDB
Tools: Git, GitHub, VS Code, Postman, Nodemon, npm, MongoDB Compass, Mongo Shell
Areas of Interest: Frontend Design, API Development, Responsive Web Design`
        },
        projects: {
            description: 'View my projects',
            usage: 'projects',
            fn: () => `1. Portfolio Website - React + Vite
                        2. E-commerce Platform - MERN Stack
                         3. Hotel Management - React.js
                         4. Jan Seva Kendra  - Next.js
                          5. Data Dashboard - React + Chart.js`
        },
        experience: {
            description: 'seclance',
            usage: 'experience',
            fn: () => `Web Developer (2026 - Present)
  
  - Mernstack junior developers

Web Developer @ Web Solutions (2025 - 2026)
  - Built scalable APIs with Node.js
  - Designed responsive UIs with React`
        },
        contact: {
            description: 'Get contact information',
            usage: 'contact',
            fn: () => `Email: mohitporwal596@gmail.com
Phone: 7895094129
Location: Agra`
        },
        github: {
            description: 'Open GitHub profile',
            usage: 'github',
            fn: () => {
                window.open('https://github.com/mohitkumar7895', '_blank')
                return 'Opening GitHub...'
            }
        },
        resume: {
            description: 'Download resume',
            usage: 'resume',
            fn: () => 'Resume download started...'
        },
        social: {
            description: 'View social media links',
            usage: 'social',
            fn: () => `
LinkedIn: /in/https://www.linkedin.com/in/mohit-kumar7895/
Portfolio: https://mohitkumar-nextjs-portfolio-website-seven.vercel.app/`
        },
        echo: {
            description: 'Echo a passed string',
            usage: 'echo <string>',
            fn: (...args) => args.join(' ')
        }
    }

    const welcomeMessage = `
╔════════════════════════════════════════╗
║     Welcome to My Portfolio CLI!       ║
╚════════════════════════════════════════╝

Hello! 👋 Welcome to my interactive portfolio. You can navigate through my work experience, skills, and projects using terminal commands.

Type 'help' to see all available commands, or try:
  • about     - Learn about me
  • skills    - View my technical skills
  • projects  - Check out my work
  • experience - See my career history
  • contact   - Get in touch

Happy exploring! 🚀
`

    return (
        <MacWindow windowName={windowName} setWindowsState={setWindowsState} >
            <div className="cli-window">
                <Terminal
                    commands={commands}
                    welcomeMessage={welcomeMessage}
                    promptLabel={'mohitkumar:~$'}
                    promptLabelStyle={{ color: '#00ff00' }}
                />
            </div>
        </MacWindow>
    )
}

export default Cli