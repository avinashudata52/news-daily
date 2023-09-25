// We're importing the necessary modules and components for our CategoryCards component.
"use client" // This line seems unusual and may not be needed in most cases.
import React, { useState } from 'react'; // We're using React and its useState hook.
import Card from './Card'; // We're importing the Card component.

// This is our CategoryCards component responsible for rendering a list of articles.
export default function CategoryCards({ data }) {
    // We're using the useState hook to manage the state of the hovered card index.
    const [hoverCardIndex, setHoverCardIndex] = useState(Math.floor(Math.random() * 3));

    return (
        <div className='CategoryData h-[160vh] sm:h-[200vh] md:h-[70vh] flex flex-col md:flex-row items-center justify-center rounded-3xl overflow-hidden border-2 light'>
            {/* We're mapping through the 'data' array to render individual Card components for each article. */}
            {data.map((article, index) => {
                return (
                    <Card article={article} key={index} index={index} setHoverCardIndex={setHoverCardIndex} hoverCardIndex={hoverCardIndex} />
                )
            })}
        </div>
    )
}
