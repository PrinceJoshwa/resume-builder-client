// src/components/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch user data from the backend
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/dashboard`, { withCredentials: true })
      .then(response => {
        setUser(response.data);
      })
      .catch(err => {
        setError("You are not logged in.");
      });
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <h1>Welcome to the Dashboard</h1>
          {user && (
            <div>
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Dashboard;
