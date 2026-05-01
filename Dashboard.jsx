import React from 'react';
import './Dashboard.css';

export const Dashboard = ({ user, onLogout }) => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <div className="user-info">
          <span data-testid="user-email">{user.email}</span>
          <button onClick={onLogout} data-testid="logout-button">Logout</button>
        </div>
      </header>
      <main className="dashboard-main">
        <div className="welcome-card">
          <h2>Welcome back!</h2>
          <p>You are logged in as <strong>{user.email}</strong></p>
        </div>
        <div className="stats-grid">
          <div className="stat-card" data-testid="stat-card">
            <h3>Projects</h3>
            <span className="stat-value">12</span>
          </div>
          <div className="stat-card" data-testid="stat-card">
            <h3>Tasks</h3>
            <span className="stat-value">48</span>
          </div>
          <div className="stat-card" data-testid="stat-card">
            <h3>Completed</h3>
            <span className="stat-value">36</span>
          </div>
        </div>
      </main>
    </div>
  );
};
