import React, { useState } from 'react';
import { LoginPage } from '../LoginPage.jsx';
import { Dashboard } from '../Dashboard.jsx';
import '../LoginPage.css';

export const App = () => {
  const [user, setUser] = useState(null);

  if (user) {
    return <Dashboard user={user} onLogout={() => setUser(null)} />;
  }

  return <LoginPage onLogin={setUser} />;
};
