import React from 'react'; // Import React for creating the component.
import AnimateText from './AnimateText'; // Import the AnimateText component.
import CategoryCards from './CategoryCards'; // Import the CategoryCards component.

// This asynchronous function fetches news articles by category.
const newsByCategory = async (category) => {
    const baseUrl = 'https://newsapi.org/v2/top-headlines';

    // Construct the query parameters.
    const params = new URLSearchParams({
        category: category,
        apiKey: process.env.API_KEY, // Use the API key from environment variables.
        pageSize: 4,
        language: "en"
    });

    try {
        const apiUrl = `${baseUrl}?${params.toString()}`;
        const data = await fetch(apiUrl);
        const parsedData = await data.json();
        return parsedData.articles; // Return the parsed articles data.
    } catch (error) {
        console.error("Error occurred: " + error);
        return error; // Handle and return the error if it occurs.
    }
};

// This is our CategoryData component responsible for rendering news articles by category.
export default async function CategoryData({ title, category }) {
    // Fetch news articles by category and store them in the 'data' variable.
    const data = await newsByCategory(category);

    return (
        <div className='text-center px-4 sm:px-8 md:px-10 pb-20 sm:pb-24 md:pb-28 lg:pb-32 pt-10'>
            {/* Render the AnimateText component to display the title with colorful animation. */}
            <AnimateText text={title} colorful={true} className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-4 sm:py-8 md:py-12 lg:py-16 font-bold w-[80%] m-auto' />
            
            {/* Render the CategoryCards component to display the news articles. */}
            <CategoryCards data={data} />
        </div>
    )
}
