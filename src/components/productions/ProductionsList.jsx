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
                        <ul key={production.id}>
                            <li>
                                {production.title} ({production.originalLanguage})
                            </li>
                            <li>
                                {production.originalTitle}
                            </li>
                            <li>
                                {production.voteAverage}
                            </li>
                        </ul>
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