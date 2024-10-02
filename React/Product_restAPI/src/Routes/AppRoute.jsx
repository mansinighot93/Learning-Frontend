// src/routes/AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Products from '../Components/Products';
//import Navbar from '../Navbar';



const AppRoutes = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Products />} />
      
      
    </Routes>
  </>
);

export default AppRoutes;
