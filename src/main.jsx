import React from 'react'  //se puede considerar obsoleto
import ReactDOM from 'react-dom/client' //tiene todos los eventos y elementos del dom
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
