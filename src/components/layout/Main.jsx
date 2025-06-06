import { useProductions } from "../../contexts/ProductionsContext";
import ProductionsList from "../productions/ProductionsList"



export default function Main () {

    const { movies, series } = useProductions();

    return (
        <main>
            <section className="py-5">
                <div className="container">
                    <ProductionsList
                        // title="Movies (title)"
                        productions={movies}
                    >
                        {/* <h2 className='mb-3'>
                            Movies (children)
                        </h2> */}
                        <h2 className='mb-3'>
                            MOVIES
                        </h2>
                    </ProductionsList>
                    <ProductionsList
                        // title="TV Series (title)"
                        productions={series}
                    >
                        {/* <h2 className='mb-3'>
                            TV Series (children)
                        </h2> */}
                        <h2 className='mb-3'>
                            TV SERIES
                        </h2>
                    </ProductionsList>
                </div>
            </section>
        </main>
    );
};