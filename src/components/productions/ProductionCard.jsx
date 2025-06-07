import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


// # MILESTONE 5    
import axios from 'axios';
const apiKey = import.meta.env.VITE_THEMOVIEDB_API_KEY;
const language = import.meta.env.VITE_APP_LANGUAGE;




export default function ProductionCard ({ production }) {
    const [isShowDetails, setIsShowDetails] = useState(false);
    
    const handleMouseEnter = () => {
        setIsShowDetails(true);
    };
    const handleMouseLeave = () => {
        setIsShowDetails(false);
    };


    if (!production.cast) {
        const queryData = {
            language,
            api_key: apiKey,
        };
        const queryString = new URLSearchParams(queryData).toString();
        const castUrl = `https://api.themoviedb.org/3/movie/${production.id}/credits?${queryString}`;
        // const castUrl = `https://api.themoviedb.org/3/tv/${production.id}/credits?${queryString}`;



        axios
            .get(castUrl)
            .then(response => {
                console.info("response.data", response.data);
                // console.info("response.data.cast", response.data.cast);
                production.cast = response.data.cast
                    .filter((person, index) => {
                        return response.data.cast.indexOf(person) < 5;
                    })
                    .map(person => {
                        return {
                            id: person.id,
                            name: person.name,
                            character: person.character,
                        };
                    });

            })
            .catch(error => {
                // console.error(error);
                if (error.status === 404) console.error(`Cast non trovato per la produzione: ${production.title} (${production.id})`);
                return production. cast = [];
            });
    }

    return (
        <div className="col-3">
            <a 
                onMouseEnter={() => handleMouseEnter()}
                onMouseLeave={() => handleMouseLeave()}
                className="production-card d-block h-100"
                href="#"
            >
                <img
                    src={production.image}
                    alt={production.title}
                    className="poster h-100"
                />

                {
                    isShowDetails &&
                    <div className="movie-details h-100 p-3">
                        <div className="h-100">
                            <p className="mb-0">
                                <strong>
                                    {
                                        production.originalTitle === production.title ?
                                        <>
                                            <img
                                                src={production.countryFlag}
                                                alt={production.originalLanguage}
                                                className="country-flag"
                                            />
                                            {" "}
                                        </>
                                        :
                                        ""
                                    }
                                    Titolo:
                                </strong>
                                {" "}
                                {production.title}
                            </p>
                            {
                                production.originalTitle !== production.title ?
                                <p className="mb-0">
                                    <strong>
                                        <img
                                            src={production.countryFlag}
                                            alt={production.originalLanguage}
                                            className="country-flag"
                                        />
                                        {" "}
                                        Titolo originale:
                                    </strong>
                                    {" "}
                                    {production.originalTitle}
                                </p>
                                :
                                ""
                            }



                            <p className="mb-0">
                                <strong>
                                    Voto:
                                </strong>
                                {" "}
                                {
                                    production.voteFullStars?.map(element => {
                                        return (
                                            <FontAwesomeIcon icon={faStar} key={element} />
                                        )
                                    })
                                }
                                {
                                    production.voteEmptyStars?.map(element => {
                                        return (
                                            <FontAwesomeIcon icon={faStar} className='fa-regular' key={element} />
                                        )
                                    })
                                }
                            </p>



                            <p className="mb-0">
                                <strong>
                                    Cast:
                                </strong>
                                {" "}
                                {
                                    production.cast?.length > 0 ?
                                    production.cast.map(person => {
                                        return (
                                            production.cast.indexOf(person) + 1 < production.cast.length ?
                                            `${person.name}, `
                                            :
                                            person.name
                                        )
                                    })
                                    :
                                    "Sconosciuto"
                                }


                                {/* {production.cast ?? "AAA"}
                                {production.cast?.length} */}
                            </p>



                            {
                                production.overview !== "" ?
                                <p className="mb-0">
                                    <strong>
                                        Overview:
                                    </strong>
                                    {" "}
                                    {production.overview}
                                </p>
                                :
                                ""
                            }
                        </div>
                    </div>
                }
            </a>
        </div>
    );
};