import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';



export default function ProductionCard ({ production }) {
    const [isShowDetails, setIsShowDetails] = useState(false);
    
    const handleMouseEnter = () => {
        setIsShowDetails(true);
    };
    const handleMouseLeave = () => {
        setIsShowDetails(false);
    };

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