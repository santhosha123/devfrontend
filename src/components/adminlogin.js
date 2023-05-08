import React, { useState } from 'react';
import '../css/Login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminLoginPage = () => {
  const [email, setEmail] = useState('santhosha.20cse@kongu.edu');
  const [password, setPassword] = useState('12345678');
 const navigate=useNavigate('')
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
   axios.post("https://devrev12121.onrender.com/admin/adminlogin",{"email":email,"password":password})
   .then(resp=>
    {
      navigate('/admin')
    })
    .catch(error=>
      {
        alert("Invalid Credentials")
      })
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
              type="text"
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
