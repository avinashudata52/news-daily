"use client"
import React, { useContext } from 'react'; // Import React and useContext for context management.
import { FaPowerOff } from "react-icons/fa"; // Import the power-off icon.
import { Contexts } from '@/context/Store'; // Import context from Store.

// This is the Filter component responsible for user interactions with filters.
export default function Filter({ setIsFilterOpened, ApiKey }) {
    // Destructure values from the context.
    const { search, searchQuery, selectedCategory, setSelectedCategory, selectedLanguage, setSelectedLanguage } = useContext(Contexts);

    // Options for selecting the language.
    const languageOptions = [
        { value: 'en', label: 'English' },
        { value: 'fr', label: 'French' },
        { value: 'de', label: 'German' },
        { value: 'it', label: 'Italian' },
        { value: 'nl', label: 'Dutch' },
        { value: 'pt', label: 'Portuguese' },
        { value: 'ru', label: 'Russian' },
        { value: 'ja', label: 'Japanese' },
        { value: 'zh', label: 'Chinese' },
        { value: 'ar', label: 'Arabic' },
        { value: 'ko', label: 'Korean' },
        { value: 'tr', label: 'Turkish' },
        { value: 'sv', label: 'Swedish' },
    ];

    // Categories available for filtering news.
    const categories = [
        'business',
        'entertainment',
        'general',
        'health',
        'science',
        'sports',
        'technology',
    ];

    // Handle the change in selected language.
    const handleSortTypeChange = (event) => {
        setSelectedLanguage(event.target.value);
    };

    // Handle the change in selected category.
    const handleCategoryChange = (category) => {
        setSelectedCategory(category === "All" ? "" : category);
    };

    return (
        <div className='Filter'>
            {/* Power-off button to close the filter. */}
            <button className='ml-auto text-sm sm:text-xl text-light bg-dark p-1 rounded-full border-2 border-light'
                onClick={() => {
                    setIsFilterOpened(false);
                }}
            >
                <FaPowerOff />
            </button>

            <h1 className='text-base sm:text-xl py-1 sm:py-3 text-light'>Filters :</h1>

            <div className='grid md:grid-cols-2 xl:grid-cols-3 text-light gap-[2px] sm:gap-1 text-xs md:text-sm'>
                <div className='bg-dark/50 flex items-center px-5 py-1 md:py-2 border-action rounded-md'>
                    <span >select Language : </span>
                    <select
                        value={selectedLanguage}
                        onChange={handleSortTypeChange}
                        name="sortType"
                        className="bg-black rounded-lg p-1 md:p-2 ml-2 max-h-10 overflow-y-auto text-romance cursor-pointer"
                    >
                        {/* Render language options based on the languageOptions array. */}
                        {languageOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className='my-2 sm:my-5'>
                <div className='flex flex-col py-1 sm:py-3 '>
                    <h1 className='text-base sm:text-xl text-light mr-2'>categories : </h1>
                    {/* Show a message if there's an active search query. */}
                    {searchQuery !== "" && <h1 className='text-base sm:text-sm text-action'>**While searching with a query, the categories do not get applied.</h1>}
                </div>
                {/* Render category options based on the categories array. */}
                <div className='grid grid-cols-2 min-[400px]:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-[2px] sm:gap-1 md:gap-2 text-center'>
                    {categories.map((category, index) => {
                        return <span className={`${selectedCategory === category ? " !bg-comedy text-light border-dark" : ""} cursor-pointer capitalize p-1 rounded-2xl bg-comedy/20 border-[1px] border-transparent text-xs sm:text-sm`} key={index} onClick={handleCategoryChange.bind(null, category)}>
                            {category}
                        </span>
                    })}
                </div>
            </div>

            {/* Filter buttons to apply or clear filters. */}
            <div className="FilterButtons">
                <button className='p-2 sm:p-3 bg-psychological my-1 sm:my-3 rounded-md' onClick={() => {
                    setIsFilterOpened(false);
                    search(ApiKey);
                }}>Apply Changes</button>

                <button className='p-2 sm:p-3 bg-black text-light my-1 sm:my-3   rounded-md' onClick={async () => {
                    await setSelectedLanguage("en");
                    await setSelectedCategory("business");
                }}>Clear Filters</button>
            </div>
        </div>
    )
}
