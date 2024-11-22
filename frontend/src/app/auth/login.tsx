// import { useState } from 'react';

// export default function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     try {
//       // Call backend API for authentication
//       console.log('Logging in:', { email, password });
//     } catch (error) {
//       console.error('Login failed:', error);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="w-full max-w-md bg-white p-6 rounded shadow">
//         <h1 className="text-2xl font-bold mb-4">Login</h1>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full border px-3 py-2 mb-4"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full border px-3 py-2 mb-4"
//         />
//         <button
//           onClick={handleLogin}
//           className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//         >
//           Login
//         </button>
//       </div>
//     </div>
//   );
// }


export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold">Login Page</h1>
    </div>
  );
}
