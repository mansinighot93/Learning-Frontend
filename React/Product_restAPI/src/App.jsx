import './App.css';
import Products from './Components/Products';
import { Provider } from 'react-redux';
import store from './Redux/Store';
function App() {
  
  return (
    <div>
      <h2>TransFlower Learning Pvt.Ltd</h2>
      <Provider store={store}>
        <Products/>
      </Provider>
    </div>
  )
}

export default App
