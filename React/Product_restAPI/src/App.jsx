import './App.css';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Routes/AppRoute';
function App() {
  
  return (
    <div>
      <h2>TransFlower Learning Pvt.Ltd</h2>
      
        <Provider store={store}>
          <Router>
            <AppRoutes/>
          </Router>
        </Provider>
    </div>
  )
}

export default App;
