import React from 'react'
import ReactDOM from 'react-dom/client'
import { Homevel } from './home'
import { Headervel } from './nav'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Headervel></Headervel>
    <Homevel></Homevel>    
  </React.StrictMode>,
);
