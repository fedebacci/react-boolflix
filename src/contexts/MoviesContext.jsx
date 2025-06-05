import { createContext, useContext } from "react";



const MoviesContext = createContext();



function MoviesProvider ({ children }) {
    const exportObj = {
        prop: "to export",
    };

    return (
        <MoviesContext.Provider value={exportObj} >
            {children}
        </MoviesContext.Provider>
    );
};



function useMovies () {
    return useContext(MoviesContext);
}



export { MoviesProvider, useMovies };