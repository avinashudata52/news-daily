"use client"
import React, { useContext, useRef, useEffect, useState } from 'react'; // Import React and necessary hooks.
import { motion } from 'framer-motion'; // Import Framer Motion for animations.
import { FaFilter, FaSearch } from 'react-icons/fa'; // Import icons.
import { usePathname } from 'next/navigation'; // Import usePathname from Next.js.
import Link from 'next/link'; // Import Link from Next.js.
import logo from '@/public/logo.jpeg'; // Import the logo image.
import Filter from './Filter'; // Import the Filter component.
import { Contexts } from '@/context/Store'; // Import context from Store.

// This is the NavBar component for the website's navigation.
export default function NavBar({ ApiKey }) {


    const { searchQuery, setSearchQuery, search } = useContext(Contexts); // Destructure values from context.

    const MotionLink = motion(Link); // Create a motion-enhanced Link component.

    const pathname = usePathname(); // Get the current pathname using Next.js hook.

    const [InputBarWidth, setInputBarWidth] = useState(240); // State for input bar width.
    const inputRef = useRef(null); // Reference for the input element.
    const [isFilterOpened, setIsFilterOpened] = useState(false); // State to track if the filter is opened.

    const colorCodes = [
        "#1b1b1b",     // dark
        "#EC4899",    // all
        "#1b1b1b",     // dark
    ];

    // Handle input change in the search bar.
    const handleInputChange = (event) => {
        if (event.target.value.trim() !== "") {
            setSearchQuery(event.target.value);
        }
        else {
            setSearchQuery("");
        }
    }

    useEffect(() => {
        // Perform actions when the component mounts or the pathname changes.
        if (pathname === '/search' && inputRef.current) {
            search(ApiKey);
            inputRef.current.focus();
        }
        if (window.innerWidth <= 400) {
            setInputBarWidth(80);
        }
        else if (window.innerWidth <= 500) {
            setInputBarWidth(100);
        }
        else if (window.innerWidth <= 775) {
            setInputBarWidth(160);
        }
        else if (window.innerWidth <= 1100) {
            setInputBarWidth(190);
        }
        else {
            setInputBarWidth(240);
        }

        const handleResize = () => {
            // Update InputBarWidth based on window width.
            if (window.innerWidth <= 400) {
                setInputBarWidth(80);
            }
            else if (window.innerWidth <= 500) {
                setInputBarWidth(100);
            }
            else if (window.innerWidth <= 775) {
                setInputBarWidth(160);
            }
            else if (window.innerWidth <= 1100) {
                setInputBarWidth(190);
            }
            else {
                setInputBarWidth(240);
            }
        }

        window.addEventListener("resize", handleResize); // Add an event listener for window resize.

        return () => {
            window.removeEventListener("resize", handleResize); // Remove the event listener when the component unmounts.
        }
    }, [pathname]);

    // Handle Enter key press in the search bar.
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            search(ApiKey);
        }
    };

    return (
        <div className='w-full bg-dark'>

            <motion.div className="h-[70px] sm:h-[84px] p-3 w-full border-b-[1px] border-[white] flex justify-between"
                transition={{
                    type: 'tween', duration: 1
                }}
                initial={{
                    y: -150
                }}
                animate={{
                    y: 0
                }}
            >
                <Link href={"/"} className="logo flex text-white font-bold border-r-2 border-[white] align-middle sm:w-28 md:w-32 lg:w-[134px] items-center">
                    <motion.img className='w-8 sm:w-10 md:w-12 lg:w-14 cursor-pointer border-2 border-light rounded-full h-8 sm:h-10 md:h-12 lg:h-14 mr-3 md:mr-0' src={logo.src} alt=""
                        initial={{ opacity: 0.6 }}
                        whileInView={{ opacity: [0, 1] }}
                        whileHover={{
                            scale: 1.2,
                            transition: {
                                duration: 2
                            }
                        }}
                        whileTap={{
                            scale: 0.8,
                        }}
                        drag
                        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                    />
                    <motion.div className='m-auto overflow-hidden cursor-pointer'
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{
                            opacity: [0, 1],
                            width: "50%",
                            transition: { duration: 2 },
                        }}
                        whileHover={{
                            scale: 1.1
                        }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <h3 className='hidden sm:block text-center text-xs sm:text-sm md:text-md lg:text-lg'>Daily</h3>
                    </motion.div>
                </Link>

                <div className="serachLink flex align-middle font-bold justify-between p-0">
                    {
                        pathname === "/search" && <div className='flex items-center'>
                            <div className='h-full flex items-center py-3 sm:py-2'>
                                <motion.button className='h-full flex items-center text-xs sm:text-sm md:text-md lg:text-lg px-2 py-1 border-2 border-light mx-3 rounded-md  bg-pinkBlue text-dark'
                                    onClick={() => {
                                        setIsFilterOpened(!isFilterOpened);
                                    }}
                                    whileHover={{
                                        color: colorCodes,
                                        transition: {
                                            type: "just",
                                            duration: 2,
                                            repeat: Infinity
                                        }
                                    }}
                                >
                                    <FaFilter className='mx-1' /> <span className='hidden md:block'>Filter</span>
                                </motion.button>
                            </div>
                            <motion.input
                                value={searchQuery}
                                onChange={handleInputChange}
                                initial={{
                                    width: 0
                                }}
                                whileInView={{
                                    width: InputBarWidth,
                                    transition: {
                                        duration: 1,
                                        type: "just"
                                    }
                                }}
                                onKeyDown={handleKeyDown}
                                ref={inputRef}
                                placeholder='Search news...'
                                type="text"
                                className="bg-black my-auto h-[2rem] sm:h-[2.5rem] rounded-s-sm rounded-e-sm text-xs sm:text-base md:text-lg lg:text-xl py-3 px-2 sm:px-3 appearance-none"
                            />
                        </div>
                    }
                    <MotionLink
                        href={"/search"}
                        className="mx-4 sm:mx-6 md:mx-8 lg:mx-10 text-[2rem] sm:text-[2.5rem] cursor-pointer m-auto"
                        animate={pathname === "/search" ? {} : {
                            scale: [1, 0.9, 1],
                            transition: {
                                duration: 2, // Adjust the duration as needed
                                type: "just",
                                repeat: Infinity
                            },
                        }}
                        whileTap={{
                            scale: 0.7,
                        }}
                        drag
                        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                    >
                        <FaSearch />
                    </MotionLink>
                </div>
            </motion.div>

            {(pathname === "/search" && isFilterOpened) && <Filter ApiKey={ApiKey} setIsFilterOpened={setIsFilterOpened} />} {/* Render the Filter component when search page and filter is opened */}
        </div>
    )
}