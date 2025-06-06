export default function ProductionsList ({ productions, title, children }) {

    

    return (
        <>
            {
                children || 
                (
                    title &&
                    <h2>
                        {title}
                    </h2>
                )
            }


            {
                productions.length > 0 ?
                productions.map(production => {
                    return (
                        <div key={production.id} className="card shadow my-3 p-3">
                            <p className="mb-0">
                                <strong className="me-3">
                                    {production.title}
                                </strong>
                                <img 
                                    src={production.countryFlag} 
                                    alt={production.originalLanguage} 

                                    className="country-flag"
                                />
                            </p>
                            <img className="poster" src={production.image} alt={production.title} />
                            {/* <a href={production.countryFlag} target="_blank">
                                {production.countryFlag}
                            </a> */}
                            <ul className="mb-0">
                                {/* <li>
                                    Original language: {production.originalLanguage}
                                </li> */}
                                <li>
                                    Original title: {production.originalTitle}
                                </li>
                                <li>
                                    Vote average: {production.voteAverage}
                                    {" "}
                                    ({Math.ceil(production.voteAverage / 2)} stars)
                                </li>
                                {/* <li>
                                    {

                                    }
                                </li> */}
                            </ul>
                        </div>
                    )
                })
                :
                <p>
                    Nessuna produzione ({title}) trovata
                </p>
            }
        </>
    );
};