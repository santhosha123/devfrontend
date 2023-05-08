import React, { useState } from 'react';
import '../css/Login.css';

const AdminLoginPage = () => {
  const [email, setEmail] = useState('Batman');
  const [password, setPassword] = useState('12345678');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login as <a href='/'>USER</a></h2>
        <h2 className="login-header">Admin Login</h2>
        <form className="login-form">
          <label>
            Email:
            <input
              type="email"
              className="login-input"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              className="login-input"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </label>
          <button onClick={handleSubmit} className="login-button">Sign In</button>

        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage;
