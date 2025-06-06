import { useProductions } from "../../contexts/ProductionsContext";
import ProductionsList from "../productions/ProductionsList"



export default function Main () {

    const { movies, series } = useProductions();

    return (
        <section className="py-5">
            <div className="container">

                {/* # TEST NO TITLE E NO CHILDREN */}
                {/* <ProductionsList
                    productions={movies} 
                />
                <hr />
                <ProductionsList
                    productions={series} 
                /> */}


                {/* # TEST SOLO TITLE */}
                {/* <ProductionsList
                    title="Movies (title)"
                    productions={movies} 
                />
                <ProductionsList
                    title="TV Series (title)"
                    productions={series} 
                /> */}



                
                
                {/* # TEST SOLO CHILDREN */}
                {/* <ProductionsList
                    productions={movies} 
                    >
                    <h2>
                        Movies (children)
                    </h2>
                </ProductionsList>
                <ProductionsList
                    productions={series} 
                    >
                    <h2>
                        TV Series (children)
                    </h2>
                </ProductionsList> */}





                {/* # TEST TITLE E CHILDREN */}
                <ProductionsList
                    title="Movies (title)"
                    productions={movies} 
                >
                    <h2>
                        Movies (children)
                    </h2>
                </ProductionsList>
                <ProductionsList
                    title="TV Series (title)"
                    productions={series} 
                >
                    <h2>
                        TV Series (children)
                    </h2>
                </ProductionsList>



            </div>
        </section>
    );
};