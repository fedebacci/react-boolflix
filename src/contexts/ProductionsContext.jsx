import { createContext, useContext, useState } from "react";
import axios from "axios";


const  ProductionsContext = createContext();



function  ProductionsProvider ({ children }) {

    const apiUrl = import.meta.env.VITE_API_URL;
    const apiKey = import.meta.env.VITE_API_KEY;
    const language = import.meta.env.VITE_APP_LANGUAGE;

    

    const [movies, setMovies] = useState([]);



    const search = (searchData) => {
        // console.debug(apiKey);
        // console.debug(apiUrl);
        // console.debug(searchData);
        
        const queryData = {
            language,
            api_key: apiKey,
            query: searchData,
        };
        const queryString = new URLSearchParams(queryData).toString();
        // console.debug(queryString);

        axios.
            get(`${apiUrl}/search/movie?${queryString}`)
            .then(response => {
                // console.info(response.data);
                // console.info(response.data.results);
                const movies = response.data.results.map(movie => ({ 
                    id: movie.id, 
                    title: movie.title, 
                    originalTitle: movie.original_title, 
                    voteAverage: movie.vote_average, 
                    originalLanguage: movie.original_language, 
                }))
                console.info(movies);

                setMovies(movies);
            })
            .catch(error => {
                console.error(error);
            });
    };



    const exportObj = {
        movies,
        search,
    };
    // console.debug("exportObj");
    // console.debug(exportObj);

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