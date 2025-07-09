import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Assuming shared styling

function ResetPasswordPage() {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword !== confirmNewPassword) {
      alert('Passwords do not match. Please try again.');
      return;
    }

    alert('Password reset submitted!');
    // You can add logic here to send the reset request to your backend
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
            <path d="M3 17.25V21h3.75l11.06-11.06-3.75-3.75L3 17.25zM20.71 7.04a1.003 1.003 0 0 0 0-1.42l-2.34-2.34a1.003 1.003 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.82z" />
          </svg>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              placeholder="EMAIL"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="NEW PASSWORD"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="CONFIRM PASSWORD"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">RESET PASSWORD</button>

          <p className="forgot-password">
            <Link to="/">Back to Login</Link>
          </p>
          <p className="create-account">
            <Link to="/signup">New user? Create an account!</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default ResetPasswordPage;
