"use client"
import React from 'react';
import { motion } from 'framer-motion';

// NoResultFound component displays a message when no search results are found.
// It can also provide an option to try the search again if required.
export default function NoResultFound({ errorMessage, tryAgain, isTryAgainRequired = false }) {
    return (
        <>
            <div className="m-auto text-center border-b-2 border-white border-spacing-2 md:scale-100">
                <div className="image px-[7.5%] overflow-hidden py-20 bg-black rounded-lg">
                    <h2 className='sm:text-xl md:text-3xl lg:text-4xl font-bold text-center pb-3 m-auto'>
                        {errorMessage}
                    </h2>
                    <p className='text-sm md:text-lg text-center pb-3'>
                        A message indicating that the requested result or information could not be located.
                    </p>

                    {isTryAgainRequired && (
                        <motion.button className='border-white border-2 px-8 py-2 rounded-[30px] font-semibold mt-5'
                            initial={{
                                scale: 3,
                                opacity: 0,
                                y: "10vh"
                            }}
                            animate={{
                                opacity: 1,
                                transition: { type: 'spring', stiffness: 50 },
                                scale: 1.2,
                                y: 0
                            }}
                            whileHover={{
                                scale: 1.4,
                                transition: { type: 'tween', duration: 1 },
                            }}
                            whileTap={{
                                scale: 1,
                                transition: { type: 'tween', duration: 1 },
                            }}
                            onClick={tryAgain}
                        >
                            Try Again.
                        </motion.button>
                    )}
                </div>
            </div>
        </>
    );
}
