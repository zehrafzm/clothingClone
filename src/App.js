import './App.css';
import menuBar from './components/menuBarPag';
import {useState} from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Layout from './components/Layout';
import Women from './components/Women';
import Men from './components/Men';
import Main from './components/Main';
import ShopBag from './components/ShopBag';
import ProductPage from './components/ProductPage';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  
   
  return (
    <div>
    
      <BrowserRouter>
          <Routes >
            <Route path="/" element={<Layout />}>
                <Route path='Main' element={<Main />} />
                <Route path='Women' element={<Women />} />
                <Route path="Men" element={<Men />} />
                <Route path="ShopBag" element={<ShopBag />} />
                <Route path="ProductPage" element={<ProductPage />} />
            </Route>
          </Routes> 
           
        </BrowserRouter>
        
    </div>
    
  )
    
    
 
  
}

export default App;

