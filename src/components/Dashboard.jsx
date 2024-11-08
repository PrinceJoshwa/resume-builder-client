// // src/components/Dashboard.jsx
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function Dashboard() {
//   const [user, setUser] = useState(null);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     // Fetch user data from the backend
//     axios.get(`${import.meta.env.VITE_API_BASE_URL}/dashboard`, { withCredentials: true })
//       .then(response => {
//         setUser(response.data);
//       })
//       .catch(err => {
//         setError("You are not logged in.");
//       });
//   }, []);

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       {error ? (
//         <h2>{error}</h2>
//       ) : (
//         <>
//           <h1>Welcome to the Dashboard</h1>
//           {user && (
//             <div>
//               <p><strong>Name:</strong> {user.name}</p>
//               <p><strong>Email:</strong> {user.email}</p>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// }

// export default Dashboard;





import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL || 'https://resume-builder-server-roan.vercel.app'}/auth/status`, {
      credentials: 'include'
    })
      .then(response => {
        if (response.status === 401) {
          navigate('/');
        } else {
          return response.json();
        }
      })
      .then(data => {
        if (data) setUser(data);
      })
      .catch(error => console.error('Error:', error));
  }, [navigate]);

  return user ? (
    <div>
      <h1>Welcome, {user.name}</h1>
    </div>
  ) : (
    <p>Loading...</p>
  );
}

export default Dashboard;
