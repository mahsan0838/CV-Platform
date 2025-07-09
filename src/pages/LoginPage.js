import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // if you want separate styles


function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      alert('Please fill in both fields.');
      return;
    }

    alert('Login submitted!');
    // Optional: reset fields
    // setUsername('');
    // setPassword('');
  };

  return (
    <div className="background">
      <div className="login-card">
        <div className="icon">
          <svg
            height="60"
            width="60"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#a28be7e7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            <line x1="12" y1="9" x2="12" y2="1" />
            <polyline points="9 4 12 1 15 4" />
          </svg>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              placeholder="USERNAME"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="PASSWORD"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">LOGIN</button>
          <p className="forgot-password">
            <Link to="/pass">Forgot password</Link>
            </p>
             
          <p className="create-account">
            <Link to="/signup">Create a new account</Link>
          </p>
        </form>
      </div> 
    </div>
  );
}

export default LoginPage;
