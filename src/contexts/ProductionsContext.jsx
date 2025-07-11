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



    const getPosterPath = (posterPath) => {
        return posterPath === null ? 'images/placeholder.jpg' : apiBaseImageUrl + posterPath;
    };


    const getVoteFullStars = (voteAverage) => {
        const voteFullStars = [];
        let i = 1;
        while (i <= Math.ceil(voteAverage / 2)) {
            voteFullStars.push(i);
            i++;
        }
        return voteFullStars;
    };
    const getVoteEmptyStars = (voteAverage) => {
        const voteEmptyStars = [];
        let i = 1;
        while (i <= 5 - Math.ceil(voteAverage / 2)) {
            voteEmptyStars.push(i);
            i++;
        }
        return voteEmptyStars;
    };



    // const fetchCast = (id, type) => {

    //         const queryData = {
    //             language,
    //             api_key: apiKey,
    //         };
    //         const queryString = new URLSearchParams(queryData).toString();
    //         const castUrl = `https://api.themoviedb.org/3/${type}/${id}/credits?${queryString}`;


    //         let cast = [];
    //         axios
    //             .get(castUrl)
    //             .then(response => {
    //                 console.info("response.data", response.data);
    //                 // console.info("response.data.cast", response.data.cast);
    //                 cast = response.data.cast
    //                     .filter((person, index) => {
    //                         return response.data.cast.indexOf(person) < 5;
    //                     })
    //                     .map(person => {
    //                         return {
    //                             id: person.id,
    //                             name: person.name,
    //                             character: person.character,
    //                         };
    //                     });
    //                 console.info("cast TROVATO E RIDOTTO", cast);

    //                 // ! NON RITORNA VALORE
    //                 return cast;
    //             })
    //             .catch(error => {
    //                 console.error(error);
    //                 if (error.status === 404) console.error(`Cast non trovato per la produzione: ${id}`);
    //                 return [];
    //             });

    //         // ! DA ARRAY VUOTO
    //         return cast;
    //     };



    const fetchMovies = (queryString) => {
        axios.
            get(`${apiUrl}/search/movie?${queryString}`)
            .then(response => {
                // console.info("MOVIES: ", response.data.results);
                // console.info("MOVIES[0]: ", response.data.results[0]);
                console.info("MOVIES[0].genre_ids: ", response.data.results[0].genre_ids);
                const movies = response.data.results.map(movie => {
                    return { 
                        id: movie.id, 
                        title: movie.title, 
                        originalTitle: movie.original_title, 
                        // voteAverage: movie.vote_average, 
                        originalLanguage: movie.original_language,
                        overview: movie.overview,
                        
                        countryFlag: getFlagByCountryLangCode(movie.original_language),
                        image: getPosterPath(movie.poster_path),
                        voteFullStars: getVoteFullStars(movie.vote_average),
                        voteEmptyStars: getVoteEmptyStars(movie.vote_average),
                        // cast: fetchCast(movie.id, 'movie'),
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
                // console.info("SERIES: ", response.data.results);
                // console.info("SERIES[0]: ", response.data.results[0]);
                console.info("SERIES[0].genre_ids: ", response.data.results[0].genre_ids);
                const series = response.data.results.map(serie => {                    
                    return { 
                        id: serie.id, 
                        title: serie.name, 
                        originalTitle: serie.original_name, 
                        // voteAverage: serie.vote_average, 
                        originalLanguage: serie.original_language, 
                        overview: serie.overview, 

                        countryFlag: getFlagByCountryLangCode(serie.original_language),
                        image: getPosterPath(serie.poster_path),
                        voteFullStars: getVoteFullStars(serie.vote_average),
                        voteEmptyStars: getVoteEmptyStars(serie.vote_average),
                        // cast: fetchCast(serie.id, 'tv'),
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