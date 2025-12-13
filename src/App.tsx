import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import {GlobalStyle} from './GlobalStyles'
import Restaurents from './Pages/Restaurants';

const Rotas = () =>(
  <Routes>
    <Route path='/'  element={<Home/>}/>
    <Route path='/restaurent/:linkRestaurents' element={<Restaurents/> }/>
  </Routes>
)


function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
        <Rotas/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
