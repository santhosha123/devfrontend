import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/SignUp.css';

const SignupForm = () => {
    const navigate=useNavigate();
  const [formData, setFormData] = useState({
    user_name: '',
    password: '',
    confirm_password: '',
    email: '',
    phone_number: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.password===formData.confirm_password)
    {
    // Perform validation or API call here
    axios.post("http://localhost:3002/user/signup",{"user_name":formData.user_name,"password":formData.password,"email":formData.email,"phone_number":formData.phone_number})
    .then(resp=>
        {
           navigate("/");
        })
    .catch(err=>
        {
            console.log(err)
        })
    }
  };

  return (
    <div className="signup-form-container">
      <h2 className="signup-form-header">Signup Form</h2>
      <form className="signup-form">
        <label className="label1">
          User Name:
          <input
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label className="label1">
          Password:
          <input
            type="text"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label className="label1">
          Confirm Password:
          <input
            type="text"
            name="confirm_password"
            value={formData.confirm_password}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label  className="label1">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label  className="label1">
          Phone Number:
          <input
            type="tel"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button onClick={handleSubmit}  className="signupbutton" type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupForm;
