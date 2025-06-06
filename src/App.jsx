// # IMPORTS COMPONENTI
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";



// # IMPORT CONTEXT
import { ProductionsProvider } from "./contexts/ProductionsContext";



function App() {
  return (
    <>
      <ProductionsProvider>
        <Header />
        <Main />
      </ProductionsProvider>
    </>
  );
};



export default App;