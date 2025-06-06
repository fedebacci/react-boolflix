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
                                <strong>
                                    {production.title}
                                </strong>
                            </p>
                            <img 
                                src={production.countryFlag} 
                                alt={production.originalLanguage} 

                                className="country-flag"
                            />
                            {/* <a href={production.countryFlag} target="_blank">
                                {production.countryFlag}
                            </a> */}
                            <ul className="mb-0">
                                <li>
                                    {production.originalLanguage}
                                </li>
                                <li>
                                    {production.originalTitle}
                                </li>
                                <li>
                                    {production.voteAverage}
                                </li>
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