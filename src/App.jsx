import React from 'react';
import "./App.css";
import Header from './components/Header/Header';
import { ContadorProvider } from './components/ContadorContext/ContadorContext';
import NavBar from "./components/NavBar/NavBar";
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartView from './components/CartView/CartView';
import Checkout from './components/Checkout/Checkout';

function App() {
  React.useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <ContadorProvider>
        <NavBar />
        <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/category/:id" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<CartView />} /> 
              <Route path="/checkout" element={<Checkout />} />
              <Route path="*" element={<h1>404 Not found</h1>} />
         </Routes>
      </ContadorProvider>
      <Footer />
    </BrowserRouter>
  )
}

export default App;

