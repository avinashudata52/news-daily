
   
// Import necessary modules and components
"use client" // This appears to be a comment, but it's not a standard JavaScript comment. It's unclear what it's intended for.

import React from 'react'; // Import the React library
import { motion } from 'framer-motion'; // Import the motion component from Framer Motion library

// Define a functional component called AnimateText that accepts some props
export default function AnimateText({ text, colorful = false, className = "", durationtime = "0.7", isWord = false }) {

    // Define animation variants for the entire text block
    const quoteVariant = {
        initial: {
            opacity: 1,
        },
        whileInView: {
            opacity: 1,
            transition: {
                delay: 0.2,
                staggerChildren: 0.1
            }
        }
    }

    // Define animation variants for individual words
    const wordVariant = {
        initial: {
            opacity: 0,
            y: 30
        },
        whileInView: {
            opacity: 1,
            y: 0,
            transition: {
                duration: durationtime,
            }
        }
    }

    // Define an array of color codes for text color animation
    const colorCodes = [
        "#f5f5f5",     // light
        "#1b1b1b",     // dark
        "#B63E96",     // primary
        "#58E6D9",     // primaryDark
        "#a4ffb1",     // green
        "#F87171",     // action
        "#60A5FA",     // adventure
        "#34D399",     // comedy
        "#A78BFA",     // drama
        "#FBBF24",     // fantasy
        "#EC4899",     // magic
        "#6EE7B7",     // mecha
        "#9333EA",     // music
        "#F472B6",     // mystery
        "#10B981",     // psychological
        "#FB923C",     // romance
        "#7C3AED",     // school
        "#8B5CF6",     // future
        "#60A5FA",     // sliceOfLife
        "#14B8A6",     // sports
        "#FBBF24",     // shounen
        "#DC2626",     // thriller
        "#EC4899"      // all
    ];

    // Return the animated text component
    return (
        <motion.div className='inline-block w-full overflow-hidden'
            variants={quoteVariant}
            initial="initial"
            whileInView="whileInView"
            animate={{
                color: colorful ? colorCodes : "#f5f5f5", // Animate text color if colorful is true, otherwise use a default color
                transition: {
                    type: "just",
                    duration: colorful ? 40 : 1, // Animation duration based on colorful prop
                    repeat: colorful ? Infinity : false, // Repeat animation infinitely if colorful is true
                }
            }}
        >
            <h1 className={`capitalize ${className}`}>
                {
                    // Split the input text into words and create animated spans for each word
                    text.split(" ").map((word, index) => {
                        return <motion.span
                            variants={wordVariant}
                            key={index} className='inline-block'>
                            {word}{!isWord ? <span>&nbsp;</span> : ""} {/* Add a non-breaking space if isWord is false */}
                        </motion.span>
                    })
                }
            </h1>
        </motion.div>
    )
}
