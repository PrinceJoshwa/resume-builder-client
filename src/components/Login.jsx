// // src/components/Login.jsx
// import React from 'react';

// function Login() {
// const handleLogin = () => {
//   const baseURL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
//   window.location.href = `${baseURL}/auth/google`;
// };

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px', }}>
//       <h1>Login to Resume Builder</h1>
//       <button onClick={handleLogin}>Login with Google</button>
//     </div>
//   );
// }

// export default Login;


import React from 'react';
import { Link } from 'react-router-dom';


function Login() {
  const handleGoogleLogin = () => {
    const baseURL = import.meta.env.VITE_API_BASE_URL || 'https://vercel.com/prince-joshwa-ss-projects/resume-builder-server';
    window.location.href = `${baseURL}/auth/google`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="m@example.com"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <a href="#" className="text-sm text-blue-600 hover:text-blue-500">
                Forgot your password?
              </a>
            </div>
            <input
              id="password"
              type="password"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          >
            Login
          </button>
        </form>
        <button
          onClick={handleGoogleLogin}
          className="mt-4 w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Login with Google
        </button>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="font-medium text-blue-600 hover:text-blue-500">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;