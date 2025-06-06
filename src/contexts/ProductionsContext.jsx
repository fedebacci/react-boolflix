import { createContext, useContext, useState } from "react";
import axios from "axios";


const  ProductionsContext = createContext();



function  ProductionsProvider ({ children }) {

    const apiUrl = import.meta.env.VITE_THEMOVIEDB_API_URL;
    const apiBaseImageUrl = import.meta.env.VITE_THEMOVIEDB_API_BASEIMAGE_URL;
    const apiKey = import.meta.env.VITE_THEMOVIEDB_API_KEY;
    const language = import.meta.env.VITE_APP_LANGUAGE;

    const flagsApiBaseUrl = import.meta.env.VITE_FLAGSAPI_API_URL;

    

    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);




    const getFlagByCountryLangCode = (countryLangCode) => {
        // console.log(`${flagsApiBaseUrl}/${countryLangCode.toUpperCase()}/flat/64.png`);

        // # NB: xx sta per ignota --> METTERE PLACEHOLDER
        // # VEDI QUI: https://github.com/lipis/flag-icons/issues/510

        // * en --> gb (gran bretagna) - us (stati uniti)
        if (countryLangCode === 'en') countryLangCode = 'gb';
        if (countryLangCode === 'ja') countryLangCode = 'jp';
        if (countryLangCode === 'te') countryLangCode = 'in';
        // * ta --> in (india) - sg (singapore) - lk (sri-lanka)
        if (countryLangCode === 'ta') countryLangCode = 'in';
        if (countryLangCode === 'hi') countryLangCode = 'in';
        if (countryLangCode === 'ko') countryLangCode = 'kp';
        if (countryLangCode === 'da') countryLangCode = 'dk';
        // * cn / zh --> cn (cina)
        if (countryLangCode === 'zh') countryLangCode = 'cn';
        if (countryLangCode === 'el') countryLangCode = 'gr';



        return `${flagsApiBaseUrl}/${countryLangCode.toUpperCase()}/flat/64.png`;
    };



    const fetchMovies = (queryString) => {
        axios.
            get(`${apiUrl}/search/movie?${queryString}`)
            .then(response => {
                // console.info("response.data.results", response.data.results);
                // console.info("response.data.results[0]", response.data.results[0]);
                const movies = response.data.results.map(movie => {

                    let imageUrl = apiBaseImageUrl;
                    if (movie.poster_path === null) {
                        imageUrl = 'images/placeholder.jpg';
                    } else {
                        imageUrl += movie.poster_path
                    }
                    
                    return { 
                        id: movie.id, 
                        title: movie.title, 
                        originalTitle: movie.original_title, 
                        voteAverage: movie.vote_average, 
                        originalLanguage: movie.original_language,
                        
                        countryFlag: getFlagByCountryLangCode(movie.original_language),
                        image: imageUrl,
                    }
            });

                setMovies(movies);
            })
            .catch(error => {
                console.error(error);
            });
    };

    const fetchSeries = (queryString) => {
        axios.
            get(`${apiUrl}/search/tv?${queryString}`)
            .then(response => {
                // console.info("response.data.results", response.data.results);
                // console.info("response.data.results[0]", response.data.results[0]);
                const series = response.data.results.map(serie => {

                    let imageUrl = apiBaseImageUrl + '/';
                    if (serie.poster_path === null) {
                        imageUrl = 'images/placeholder.jpg';
                    } else {
                        imageUrl += serie.poster_path
                    }
                    
                    return { 
                        id: serie.id, 
                        title: serie.name, 
                        originalTitle: serie.original_name, 
                        voteAverage: serie.vote_average, 
                        originalLanguage: serie.original_language, 

                        countryFlag: getFlagByCountryLangCode(serie.original_language),
                        image: imageUrl,
                    }
                });

                setSeries(series);
            })
            .catch(error => {
                console.error(error);
            });
    };

    const search = (searchData) => {
        
        const queryData = {
            language,
            api_key: apiKey,
            query: searchData,
        };
        const queryString = new URLSearchParams(queryData).toString();

        fetchMovies(queryString);
        fetchSeries(queryString);
    };



    const exportObj = {
        movies,
        series,
        search,
    };



    return (
        <ProductionsContext.Provider value={exportObj} >
            {children}
        </ProductionsContext.Provider>
    );
};



function useProductions () {
    return useContext(ProductionsContext);
}



export { ProductionsProvider, useProductions };