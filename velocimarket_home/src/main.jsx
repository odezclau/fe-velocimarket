import React from 'react'
import ReactDOM from 'react-dom/client'
import { Homevel } from './home'
import { Headervel } from './header'
import { Footervel } from './footer'
import './home.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Headervel></Headervel>
    <Homevel></Homevel>
    <Footervel></Footervel>     
  </React.StrictMode>,
);
