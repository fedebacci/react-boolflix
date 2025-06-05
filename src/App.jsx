// # IMPORTS COMPONENTI
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";



// # IMPORT CONTEXT
import { MoviesProvider } from "./contexts/MoviesContext";



function App() {
  return (
    <>
      <MoviesProvider>
        <Header />
        <Main />
      </MoviesProvider>
    </>
  );
};



export default App;