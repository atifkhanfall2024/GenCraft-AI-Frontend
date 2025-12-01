
import { createRoot } from 'react-dom/client'
import AppStore from './Redux/store.js';
import { Provider } from 'react-redux';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
 
      <Provider store={AppStore}>
    <App />
    </Provider>
  
)
