import React, { useState, useEffect } from 'react'
import '../index.css'
import { IconButton } from '@mui/material'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false)

    // Function to handle scrolling and show/hide the button
    const handleScroll = () => {
        const scrollY = window.scrollY
        setIsVisible(scrollY > 100)
    }

    // Function to scroll to the top when the button is clicked
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    // Add a scroll event listener when the component mounts
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div
            className={`scroll-to-top-button ${isVisible ? 'visible' : 'hidden'}`}
            onClick={scrollToTop}
        >
            <IconButton color="secondary" sx={{bgcolor: 'white', ":hover": {bgcolor: 'primary.main', color: 'white'}}} aria-label="scroll up">
                <ArrowUpwardIcon />
            </IconButton>
        </div>
    )
}

export default ScrollToTopButton