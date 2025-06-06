import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faStar } from '@fortawesome/free-solid-svg-icons';
// import { faStar } from '@fortawesome/free-regular-svg-icons';

// import { faFullStar } from '@fortawesome/free-solid-svg-icons';
// import { faEmptyStar } from '@fortawesome/free-regular-svg-icons';

// import { faFullStar: faStar } from '@fortawesome/free-solid-svg-icons';
// import { faEmptyStar: faStar } from '@fortawesome/free-regular-svg-icons';


// import faTest from '@fortawesome/free-solid-svg-icons';
// // import faTest from '@fortawesome/free-regular-svg-icons';
// console.info("faTest", faTest);


export default function ProductionsList ({ productions, title, children }) {

    const getRating = () => {
        // [1,2,3,4,5].map((number, index) => {
        //     if (number <= Math.ceil(production.voteAverage / 2)) return <FontAwesomeIcon icon={faStar} key={index} />
        //     return <FontAwesomeIcon icon={faStar} className='fa-regular' key={index} />
        // })
    }                                              

    return (
        <>
            {
                children || 
                (
                    title &&
                    <h2 className='mb-3'>
                        {title}
                    </h2>
                )
            }


            {
                productions.length > 0 ?
                <div className="row g-3 mb-5">
                    {
                        productions.map(production => {
                            return (
                                <div key={production.id} className="col-4">
                                    <div className="card h-100 shadow p-3">
                                        <img
                                            src={production.image}
                                            alt={production.title}
                                            className="poster"
                                        />
                                        <p className="mb-0">
                                            <strong>
                                                Titolo:
                                            </strong>
                                            {" "}
                                            {production.title}
                                            {/* {" "}
                                            <img
                                                src={production.countryFlag}
                                                alt={production.originalLanguage}
                                                className="country-flag"
                                            /> */}
                                        </p>
                                        <p className="mb-0">
                                            <strong>
                                                Titolo originale:
                                            </strong>
                                            {" "}
                                            {production.originalTitle}
                                        </p>
                                        <p className="mb-0">
                                            <strong>
                                                Voto:
                                            </strong>
                                            {" "}
                                            {/* { 
                                                getRating()
                                            } */}

                                            {/* todo: ASSOLUTAMENTE TROVARE MODO MIGLIORE */}
                                            {
                                                [1,2,3,4,5].map((number, index) => {
                                                    if (number <= Math.ceil(production.voteAverage / 2)) return <FontAwesomeIcon icon={faStar} key={index} />
                                                    return <FontAwesomeIcon icon={faStar} className='fa-regular' key={index} />
                                                })
                                            }

                                        </p>
                                        <p className="mb-0">
                                            <strong>
                                                Overview:
                                            </strong>
                                            {" "}
                                            {production.overview}
                                        </p>



                                        {/* <hr /> */}
                                        {/* <ul className="mb-0">
                                            <li>
                                                Original title: {production.originalTitle}
                                            </li>
                                            <li>
                                                Vote average: {production.voteAverage} */}
                                                {" "}
                                                {/* /* ({Math.ceil(production.voteAverage / 2)} stars) */ }
                                                {/* ({Math.ceil(production.voteAverage / 2)} <FontAwesomeIcon icon={faStar} />)
                                            </li>
                                            <li> */}
                                                {/* /* <FontAwesomeIcon icon="fa-solid fa-star" />
                                                <FontAwesomeIcon icon="fa-regular fa-star" /> */}
                                                {/* /* <hr /> */}
                                                {/* <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} className='fa-regular' /> */}
                                                {/* /* <hr /> */}
                                                {/* /* <FontAwesomeIcon icon={faFullStar} /> */}
                                                {/* /* <FontAwesomeIcon icon={faEmptyStar} /> */}
                                                {/* {
                                                }
                                            </li>
                                        </ul> */}



                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                :
                <p>
                    Nessuna produzione ({title}) trovata
                </p>
            }
        </>
    );
};