"use client"
import React from 'react'; // Import React for creating the component.
import { motion } from 'framer-motion'; // Import Framer Motion for animations.

// This is the InternetError component for displaying an error message related to internet connectivity.
export default function InternetError({ isTryAgainRequired = false, tryAgainMethod }) {
    return (
        <>
            {/* Container for the error message. */}
            <div className="container m-auto text-center border-b-2 border-white border-spacing-2 py-3 scale-[0.8] md:scale-100 mb-40">
                {/* Styled content container with a background. */}
                <div className="px-[7.5%] py-20 overflow-hidden bg-black rounded-lg">
                    <h2 className='text-4xl font-bold text-center pb-3 '>Internet Connection lost.</h2>
                    <p className='text-lg text-center pb-3'>A disruption in the network connection preventing access to the internet.</p>

                    {/* Render a "Try Again" button if required. */}
                    {isTryAgainRequired && <motion.button className='border-white border-2 px-8 py-2 rounded-[30px] font-semibold mt-5'
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
                        onClick={tryAgainMethod} // Execute the "tryAgainMethod" function on button click.
                    >Try Again.</motion.button>}
                </div>
            </div>
        </>
    )
}
