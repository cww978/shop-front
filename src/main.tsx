import React from 'react'
// import VConsole from 'vconsole'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import './index.css'

// eslint-disable-next-line no-unused-vars
// const vconsole = new VConsole()

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  // </React.StrictMode>
)
