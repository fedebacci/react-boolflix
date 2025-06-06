import { useProductions } from "../../contexts/ProductionsContext";



export default function Main () {

    const { movies } = useProductions();
    // console.debug(movies);

    return (
        <section className="py-5">
            <div className="container">
                {
                    movies.length > 0 ?
                    movies.map(movie => {
                        return (
                            <ul key={movie.id}>
                                <li>
                                    {movie.title} ({movie.originalLanguage})
                                </li>
                                <li>
                                    {movie.originalTitle}
                                </li>
                                <li>
                                    {movie.voteAverage}
                                </li>
                            </ul>
                        )
                    })
                    :
                    ""
                }
            </div>
        </section>
    );
};