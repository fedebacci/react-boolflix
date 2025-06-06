import { useState } from "react";
import { useProductions } from "../../contexts/ProductionsContext";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


export default function SearchBar () {

    const { search } = useProductions();
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
        <div className="input-group">
            <button 
                onClick={handleFormSubmit}

                className="btn btn-outline-light" 
                type="submit"
            >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
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
    );
};