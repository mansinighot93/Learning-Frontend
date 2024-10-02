// src/routes/AppRoutes.jsx
import React from 'react';
import { Routes,Route } from 'react-router-dom';

import Products from '../Components/Products';
import ProductInsert from '../Components/ProductInsert';
import ProductDelete from '../Components/ProductDelete';
import ProductUpdate from '../Components/ProductUpdate';
import ProductDetails from '../Components/ProductDetails';
import Navbar from '../Components/Navbar';

const AppRoutes = () => (
  <>
  <Navbar />
    <Routes>
      <Route path="/" element={<Products/>} />
      <Route path="/insert" element={<ProductInsert/>} />
      <Route path="delete/:id" element={<ProductDelete/>} />
      <Route path="update/:id" element={<ProductUpdate/>} />
      <Route path="details/:id" element={<ProductDetails/>}/>
      
    </Routes>
  </>
);

export default AppRoutes;
