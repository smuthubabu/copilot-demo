import React from 'react'
import ReactDOM from 'react-dom/client'
import { LoginPage } from '../LoginPage.jsx'
import '../LoginPage.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoginPage onLogin={(creds) => alert(`Logged in as ${creds.email}`)} />
  </React.StrictMode>
)
