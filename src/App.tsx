import { Provider } from 'react-redux'
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import {GlobalStyle} from './GlobalStyles'
import Restaurents from './Pages/Restaurants';
import { store } from './store';
import Cart from './Components/Cart';

const Rotas = () =>(
  <Routes>
    <Route path='/'  element={<Home/>}/>
    <Route path='/restaurant/:id' element={<Restaurents/> }/>
  </Routes>
)


function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <GlobalStyle />
          <Rotas/>
        <Footer/>
      </HashRouter>
      <Cart />
    </Provider>
  );
}

export default App;
