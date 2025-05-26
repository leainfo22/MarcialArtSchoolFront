import React, { useState } from 'react';
import './app.css'; // Or './index.css'
import './index.css'; // Or './App.css', depending on where you put the @tailwind directives
import 'tailwindcss'; // Import Tailwind CSS styles

// Main App component for the login page
const App = () => {
  // State variables for username, password, and error messages
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  /**
   * Handles the login form submission.
   * In a real application, this would involve sending credentials to a backend for authentication.
   * @param {Event} e - The form submission event.
   */
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Basic client-side validation (replace with actual authentication logic)
    if (username.trim() === '' || password.trim() === '') {
      setError('Please enter both username and password.');
      return;
    }

    if (username === 'testuser' && password === 'password') {
      console.log('Login successful!');
      setError(''); // Clear any previous errors
      // In a real application, you would typically redirect the user
      // or update the application state to reflect a logged-in user.
      // Example: window.location.href = '/dashboard';
    } else {
      setError('Invalid username or password. Please try again.');
    }
  };

  return (
    // Main container for the login page, ensuring full viewport height and centering content
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 p-4 font-inter">
      {/* Login form container */}
      <div className="bg-white p-8 md:p-10 rounded-xl shadow-2xl w-full max-w-md transform transition-all duration-300 hover:scale-[1.01]">
        {/* Login title */}
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
          Welcome Back!
        </h2>

        {/* Login form */}
        <form onSubmit={handleLogin} className="space-y-6">
          {/* Username input group */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 text-gray-900 placeholder-gray-400"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              aria-label="Username"
            />
          </div>

          {/* Password input group */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 text-gray-900 placeholder-gray-400"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              aria-label="Password"
            />
          </div>

          {/* Error message display */}
          {error && (
            <p className="text-red-600 text-sm text-center bg-red-50 p-3 rounded-md border border-red-200">
              {error}
            </p>
          )}

          {/* Login button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 ease-in-out transform hover:-translate-y-0.5"
          >
            Log In
          </button>
        </form>

        {/* Sign up link */}
        <p className="text-center text-gray-600 text-sm mt-8">
          Don't have an account?{' '}
          <a href="#" className="text-blue-600 hover:text-blue-800 font-medium transition duration-200" onClick={(e) => e.preventDefault()}>
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default App;
