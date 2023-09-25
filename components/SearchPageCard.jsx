"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import blurImage from '@/public/blurImage2.png';
import { FaCalendar, FaPenNib } from 'react-icons/fa';
import dummyArticle from '@/public/dummyArticle.jpg';

// SearchPageCard component displays a card with news article details.
export default function SearchPageCard({ article }) {
    const { title, publishedAt, author, description, url, urlToImage } = article;
    const [isCardHovered, setIsCardHovered] = useState(false);
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const gradienttest = {
        backgroundImage: `url(${blurImage.src})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    const textGradient = {
        background: 'linear-gradient(180deg,hsla(0, 0%, 0%, 0) 0%,hsla(0, 0%, 0%, 0.3) 10%,hsl(0, 0%, 0%) 100%)'
    };

    const handleCardClick = () => {
        if (window.innerWidth <= 640) {
            setIsCardHovered(!isCardHovered);
        }
    };

    const handleMousehover = () => {
        if (window.innerWidth >= 640) {
            setIsCardHovered(true);
        }
    };

    const handleMouseDown = () => {
        if (window.innerWidth >= 640) {
            setIsCardHovered(false);
        }
    };

    const TransitionStyle = isImageLoaded ? {} : { type: "just", duration: 2, repeat: Infinity };

    return (
        <motion.article className='relative'
            onClick={handleCardClick}
            onHoverStart={handleMousehover}
            onHoverEnd={handleMouseDown}
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
                transition: {
                    type: "just",
                    delay: 0.2,
                    duration: 0.5,
                }
            }}
            viewport={{
                once: true
            }}
        >
            <div className="relative card h-[400px] text-white rounded-md overflow-hidden border-[1px] border-light cursor-pointer" >
                <motion.div className='h-full w-full overflow-hidden bg-transparent m-auto rounded-md'
                    style={gradienttest}
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: isImageLoaded ? 1 : [0.1, 0.3, 0.1],
                        transition: TransitionStyle
                    }}
                    whileHover={{
                        scale: 1.1,
                        opacity: 0.6
                    }}
                    whileTap={{
                        scale: 0.95,
                    }}
                    transition={{
                        type: "just",
                        duration: 0.3,
                    }}
                >
                    <motion.div
                        className='h-full w-full'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <img className="absolute image h-full w-auto object-cover overflow-hidden bg-transparent m-auto rounded-md bg-cover bg-no-repeat bg-center text-transparent"
                            onLoad={() => { setIsImageLoaded(true) }}
                            src={urlToImage ? urlToImage : dummyArticle.src}
                            alt='News Poster'
                        />
                    </motion.div>
                </motion.div>

                <div className="text py-4 px-2 md:px-5 absolute bottom-0 w-full"
                    style={textGradient}
                >
                    <div className='mb-3'>
                        <h2 className='text-sm min-[400px]:text-xl sm:text-lg lg:text-xl font-bold pb-1 '>{title}</h2>
                    </div>

                    {<motion.div
                        animate={{
                            opacity: isCardHovered ? 1 : 0,
                            height: isCardHovered ? "auto" : "0",
                            transition: {
                                type: "just",
                                duration: 0.5
                            }
                        }}
                    >
                        <motion.p className='h-[2px] bg-light w-[50%] rounded-md mb-2'
                            animate={{
                                width: isCardHovered ? "50%" : "0",
                                transition: {
                                    type: "just",
                                    duration: 0.5
                                }
                            }}
                        ></motion.p>

                        <div className='flex flex-col sm:flex-row sm:items-center text-xs md:text-sm lg:text-base'>
                            <p className='font-semibold flex items-center mr-3 uppercase'><FaCalendar className='text-comedy mr-1 ' /> {publishedAt.slice(0, 10)}</p>
                            <p className='font-semibold flex items-center mr-3'><FaPenNib className='text-comedy mr-1' /> {author ? author.split(" ").slice(0, 2).join(" ") : "Unknown"}</p>
                        </div>

                        <p className='py-2 font-semibold text-xs sm:text-sm md:text-xs lg:text-sm flex items-center mr-3'>{description !== null ? description.split(" ").length > 20 ? `${description.split(" ").slice(0, 20).join(" ")}...` : description : ""}</p>

                        <a href={url} target='_black' className='text-xs md:text-sm lg:text-base font-bold p-2 md:px-2 md:py-1 bg-light text-dark rounded-md my-2 inline-flex items-center '>More..</a>

                    </motion.div>}

                </div>
            </div >
        </motion.article>
    );
}
