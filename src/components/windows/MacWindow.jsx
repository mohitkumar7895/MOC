import React, { useEffect, useState } from 'react'
import { Rnd } from 'react-rnd'
import "./window.scss"

const MacWindow = ({ children, width = "40vw", height = "40vh", windowName, setWindowsState }) => {
    const [windowSize, setWindowSize] = useState({ width, height, x: 300, y: 200 })
    const [isMobile, setIsMobile] = useState(false)
    const [isTablet, setIsTablet] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth
            const isMobileDevice = screenWidth < 768
            const isTabletDevice = screenWidth >= 768 && screenWidth < 1024
            
            setIsMobile(isMobileDevice)
            setIsTablet(isTabletDevice)

            if (isMobileDevice) {
                // Mobile: Full width, smaller height, centered
                setWindowSize({
                    width: "92vw",
                    height: "50vh",
                    x: (screenWidth * 0.04),
                    y: 40
                })
            } else if (isTabletDevice) {
                // Tablet: 85% width, 70% height, centered
                setWindowSize({
                    width: "85vw",
                    height: "70vh",
                    x: (screenWidth * 0.075),
                    y: 100
                })
            } else {
                // Desktop: Use provided defaults
                setWindowSize({
                    width: width,
                    height: height,
                    x: 300,
                    y: 200
                })
            }
        }

        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [width, height])

    return (
        <Rnd
            size={{ width: windowSize.width, height: windowSize.height }}
            position={{ x: windowSize.x, y: windowSize.y }}
            disableResizing={isMobile || isTablet}
            bounds="window"
        >
            <div className="window">
                <div className="nav">
                    <div className="dots">
                        <div onClick={() => setWindowsState(state => ({ ...state, [windowName]: false }))} className="dot red"></div>
                        <div className="dot yellow"></div>
                        <div className="dot green"></div>
                    </div>

                    <div className="title"><p>mohit kumar</p></div>

                </div>
                <div className="main-content">
                    {children}
                </div>
            </div>
        </Rnd>
    )
}

export default MacWindow