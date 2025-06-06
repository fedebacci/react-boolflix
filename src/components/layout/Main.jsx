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
                        <h3 className='mb-1'>
                            MOVIES
                        </h3>
                    </ProductionsList>
                    <ProductionsList
                        // title="TV Series (title)"
                        productions={series}
                    >
                        <h3 className='mb-1'>
                            TV SERIES
                        </h3>
                    </ProductionsList>
                </div>
            </section>
        </main>
    );
};