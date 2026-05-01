import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { LoginPage } from '../LoginPage.jsx'
import { Dashboard } from '../Dashboard.jsx'
import '../LoginPage.css'

const App = () => {
  const [user, setUser] = useState(null);

  if (user) {
    return <Dashboard user={user} onLogout={() => setUser(null)} />;
  }

  return <LoginPage onLogin={setUser} />;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
