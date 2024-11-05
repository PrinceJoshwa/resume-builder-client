// src/components/Login.jsx
import React from 'react';

function Login() {
const handleLogin = () => {
  const baseURL = import.meta.env.VITE_API_BASE_URL || 'https://resume-builder-client-jade.vercel.app';
  window.location.href = `${baseURL}/auth/google`;
};

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Login to Resume Builder</h1>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
}

export default Login;
