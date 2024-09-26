// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { CustomerProvider } from './Component/Context/CustomerContext';
import AppRoutes from './Component/Routes/AppRoutes';
import CartContainer from './Component/CartContainer';


const App = () => {
  return (
    <CustomerProvider>
      <Router>
        <AppRoutes />
      
      </Router>
      <CartContainer></CartContainer>
        
    </CustomerProvider>
    
  );
};

export default App;
