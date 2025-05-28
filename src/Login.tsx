import React, { useState } from 'react';
import './Login.css';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      setError('Please enter both username and password.');
      return;
    }
    if (username === 'testuser' && password === 'password') {
      setError('');
      // Success logic here
    } else {
      setError('Invalid username or password. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Martial Art School</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <div>
            <label className="login-label" htmlFor="username">Username </label>
            <input
              className="login-input"
              id="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              autoComplete="username"
              required
            />
          </div>
          <div>
            <label className="login-label" htmlFor="password">Password </label>
            <input
              className="login-input"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
          </div>
          {error && <p className="login-error">{error}</p>}
          <button className="login-button" type="submit">Log In</button>
        </form>
        <p className="login-signup">
          Don't have an account?{' '}
          <a href="#" onClick={e => e.preventDefault()}>Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
