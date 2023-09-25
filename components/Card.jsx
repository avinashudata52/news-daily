// Let's import the necessary modules and components for this card component.
"use client"
import { motion } from 'framer-motion'; // Framer Motion for animations
import React from 'react'; // React for building our component
import dummyArticle from '@/public/dummyArticle.jpg'; // A placeholder image for articles

// This is the main card component used for displaying articles.
export default function Card({ article, index, setHoverCardIndex, hoverCardIndex }) {
    // We define a gradient style for the card. The gradient overlay effect.
    const gradientStyle = {
        backgroundImage: `linear-gradient(270deg, rgba(0, 0, 0, 0.891) ${hoverCardIndex === index ? "30%" : "20%"}, rgba(78, 78, 91, 0) 100%, rgba(28, 23, 23, 1) 100%), url(${article.urlToImage === null ? dummyArticle.src : article.urlToImage})`,
        backgroundPosition: 'center top',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <motion.article
            style={gradientStyle}
            target='_blank'
            className='bg-dark h-[70vh] overflow-hidden relative cursor-pointer'
            onHoverStart={() => {
                if (window.innerWidth >= 768) {
                    setHoverCardIndex(index); // When hovering, set the index to highlight the card.
                }
            }}
            onClick={() => {
                if (window.innerWidth < 768) {
                    setHoverCardIndex(index); // On click, set the index to highlight the card (on smaller screens).
                }
            }}
            initial={{
                opacity: 0,
            }}
            animate={{
                width: (window.innerWidth > 768) ? (hoverCardIndex === index) ? "40%" : "20%" : "100%",
                opacity: 1,
                transition: {
                    duration: 0.8,
                    type: "just"
                }
            }}
        >
            <section className={`heading flex items-center justify-center flex-col h-full  border-light  ${index !== 3 ? "border-b md:border-r" : ""}`} >
                <motion.h3
                    className={`w-72 font-bold text-lg`}
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        rotateX: hoverCardIndex === index ? "0deg" : "180deg", // Rotate the text when hovered.
                        rotate: (window.innerWidth > 768) ? (hoverCardIndex === index) ? "0deg" : "90deg" : "0deg", // Rotate the text on larger screens.
                        opacity: 0.8,
                    }}
                    transition={{
                        duration: 0.5
                    }}
                >
                    {article.title}
                    <br />
                    <a href={article.url} target='_blank' className='text-base bg-light rounded-md font-bold text-dark mx-2 my-3 py-1 px-2'>Read more</a>
                </motion.h3>

                <motion.div className='absolute bottom-2 right-2'>
                    <h3 className='font-semibold text-[12px] text-mecha'>-by {article.author ? article.author.split(" ").length > 2 ? article.author.split(" ").slice(0, 2).join(" ") : article.author : "Unknown"}</h3>
                </motion.div>

                <motion.div className='absolute top-2 right-2'>
                    <h3 className='font-semibold text-[12px] text-light'>On {article.publishedAt ? article.publishedAt.slice(0, 10) : "Unknown"}</h3>
                </motion.div>
            </section>
        </motion.article>
    )
}
