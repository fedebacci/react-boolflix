import { createContext, useContext, useState } from "react";
import axios from "axios";


const  ProductionsContext = createContext();



function  ProductionsProvider ({ children }) {

    const apiUrl = import.meta.env.VITE_API_URL;
    const apiKey = import.meta.env.VITE_API_KEY;
    const language = import.meta.env.VITE_APP_LANGUAGE;

    

    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);



    const fetchMovies = (queryString) => {
        axios.
            get(`${apiUrl}/search/movie?${queryString}`)
            .then(response => {
                const movies = response.data.results.map(movie => ({ 
                    id: movie.id, 
                    title: movie.title, 
                    originalTitle: movie.original_title, 
                    voteAverage: movie.vote_average, 
                    originalLanguage: movie.original_language, 
                }))

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
                const series = response.data.results.map(serie => ({ 
                    id: serie.id, 
                    title: serie.name, 
                    originalTitle: serie.original_name, 
                    voteAverage: serie.vote_average, 
                    originalLanguage: serie.original_language, 
                }))

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