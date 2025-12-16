import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import {GlobalStyle} from './GlobalStyles'
import Restaurents from './Pages/Restaurants';

const Rotas = () =>(
  <Routes>
    <Route path='/'  element={<Home/>}/>
    <Route path='/restaurant/:id' element={<Restaurents/> }/>
  </Routes>
)


function App() {
  return (
    <HashRouter>
      <GlobalStyle />
        <Rotas/>
      <Footer/>
    </HashRouter>
  );
}

export default App;
