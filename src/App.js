import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import Navbar from "./components/navbar/Navbar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
   
    <BrowserRouter>
    
      <Navbar />

      <Routes>

        <Route path="/" element={<ItemListContainer />} />
        
        <Route path="/category/:categoryName" element={<ItemListContainer />} />

        <Route path="/category" element={<ItemListContainer />}/>

        <Route path="/itemDetail/:id" element={ <ItemDetailContainer /> } />

        <Route path="/cart" element={ <h3>Total de compra</h3> } />

        <Route path="*" element={ <h1>404 Página no existe</h1> } />

      </Routes>

    
    </BrowserRouter>

  );
  
}

export default App;
