import { useState } from "react";
import { useMovies } from "../../contexts/MoviesContext";



export default function Header () {

    const { search } = useMovies();
    // console.debug(search);
    

    // todo: Trasformare in oggetto per ricerca testo E genere
    const [searchData, setSearchData] = useState("");
    // todo: Modificare per riconoscere quale prop è stata cambiata tramite attributo "name" (text o genre) per ricerca testo E genere
    const handleInputChange = (e) => {
        setSearchData(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // console.info(searchData);

        search(searchData);
    };





 



    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        Boolflix
                    </a>

                    <form className="d-flex" role="search">
                        <div className="input-group">
                            <button 
                                onClick={handleFormSubmit}

                                className="btn btn-outline-success" 
                                type="submit"
                            >
                                Cerca
                            </button>
                            <input 
                                value={searchData}
                                onChange={handleInputChange}

                                className="form-control me-2" 
                                type="search" 
                                placeholder="Cerca" 
                                aria-label="Cerca"
                            />
                        </div>
                    </form>
                </div>
            </nav>
        </header>
    );
};