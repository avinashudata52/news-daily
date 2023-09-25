"use client"
import React, { createContext, useState } from 'react'

// Create a context for sharing state among components
export const Contexts = createContext();

// StoreProvider component provides shared state to its children
export const StoreProvider = ({ children }) => {

    // State variables for managing loading, no result, and internet error states
    const [loading, setLoading] = useState(false);
    const [noResult, setNoResult] = useState(false);
    const [internetError, setInternetError] = useState(false);

    // State variables for search query, selected category, selected language, and search results
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("business");
    const [selectedLanguage, setSelectedLanguage] = useState('en');
    const [searchedNewsData, setSearchedNewsData] = useState([]);

    // Function to perform news search
    const search = async (ApiKey) => {

        console.log(ApiKey);
        
        setNoResult(false);
        setInternetError(false);
        setLoading(true);
        const baseUrl = 'https://newsapi.org/v2/top-headlines';

        const params = new URLSearchParams({
            apiKey: ApiKey,
        });

        if (selectedLanguage !== "") {
            params.append('language', selectedLanguage);
        }
        
        if (selectedCategory !== "" && searchQuery === "") {
            params.append('category', selectedCategory);
        }
        
        if (searchQuery !== "") {
            params.append('q', searchQuery);
        }

        try {
            const apiUrl = `${baseUrl}?${params.toString()}`;
            const data = await fetch(apiUrl);
            const parsedData = await data.json();
            setSearchedNewsData(parsedData.articles)
            if (parsedData.articles.length === 0) {
                setNoResult(true);
            }
            setLoading(false);
        }
        catch (error) {
            setInternetError(true);
            console.error("Error occurred: " + error);
            setLoading(false);
            return error;
        }
    };

    return (
        <Contexts.Provider value={{ loading, setLoading, noResult, setNoResult, internetError, setInternetError, searchQuery, setSearchQuery, selectedCategory, setSelectedCategory, selectedLanguage, setSelectedLanguage, search, searchedNewsData, setSearchedNewsData }}>

            <div>{children}</div>

        </Contexts.Provider >
    )
}
