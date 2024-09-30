import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { CustomerProvider } from './Component/Context/CustomerContext';
import AppRoutes from './Component/Routes/AppRoutes';


const App = () => {
  return (
    <CustomerProvider>
      <Router>
        <AppRoutes />
      </Router>
    </CustomerProvider>
  );
};

export default App;
