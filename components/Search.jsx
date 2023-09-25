"use client"
import { Contexts } from '@/context/Store';
import React, { useContext } from 'react';
import SearchPageCard from './SearchPageCard';
import SmartLoader from './SmartLoader';
import InternetError from './InternetError';
import NoResultFound from './NoResultFound';
import { FaArrowUp } from 'react-icons/fa';
import AnimateText from './AnimateText';
import { motion } from 'framer-motion';

// The Search component displays search results and various messages based on search status.
export default function Search() {
    const { searchedNewsData, loading, internetError, noResult } = useContext(Contexts);

    return (
        <>
            {/* Scroll to top button */}
            <div className='fixed cursor-pointer right-4 bottom-6 text-lg sm:text-xl md:text-2xl bg-light text-dark p-2 rounded-full z-20'
                onClick={() => {
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    })
                }}
            >
                <FaArrowUp className='text-dark' />
            </div>
            
            {/* Page heading */}
            <div className="heading m-auto w-[90%] sm:w-2/3 text-center mb-4 sm:mb-12 md:mb-16">
                <div className='text-center'>
                    {/* Animated text */}
                    <AnimateText className='text-3xl min-[450px]:text-4xl md:text-5xl xl:text-6xl font-bold pb-3 pt-6 sm:pt-8 md:mt-10' text={"News Collection."} />
                    <motion.p className='hidden sm:block text-xs sm:text-sm md:text-base lg:text-lg font-medium'
                        initial={{
                            opacity: 0
                        }}
                        whileInView={{
                            opacity: [0, 1],
                            transition: {
                                type: "just",
                                duration: 2
                            }
                        }}>Read latest as well as old news by using filters and query.</motion.p>
                </div>
            </div>
            
            {/* Display search results */}
            {(!noResult && !internetError && !loading) && (
                <div className="grid md:grid-cols-2 xl:grid-cols-3 w-[90%] mx-auto gap-1 mb-16">
                    {searchedNewsData.map((article, index) => (
                        <SearchPageCard article={article} key={index} />
                    ))}
                </div>
            )}

            {/* Display loading indicator */}
            {(loading) && <SmartLoader height='[70vh]' />}

            {/* Display InternetError or NoResultFound components based on conditions */}
            {((internetError && noResult) || (internetError)) && <InternetError isTryAgainRequired={false} />}
            {((!internetError && noResult)) && <NoResultFound errorMessage="Result Not Found." />}
        </>
    );
}
