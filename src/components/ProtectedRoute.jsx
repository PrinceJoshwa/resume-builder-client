import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL || 'https://resume-builder-server-roan.vercel.app'}/auth/status`, {
      credentials: 'include'
    })
      .then(response => {
        if (response.status === 401) {
          navigate('/');
        } else {
          setIsAuthenticated(true);
        }
      })
      .catch(() => navigate('/'));
  }, [navigate]);

  return isAuthenticated ? children : null;
}

export default ProtectedRoute;
