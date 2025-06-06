import ProductionCard from './ProductionCard';

export default function ProductionsList ({ productions, title, children }) {                                        

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
                <div className="row gx-1 mb-5 flex-nowrap overflow-x-scroll">
                    {
                        productions.map(production => {
                            return (
                                <ProductionCard 
                                    key={production.id}
                                    production={production}
                                />
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