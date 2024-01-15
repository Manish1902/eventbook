import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

function SignUp() {
  const [fullName, setFullName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleDobChange = (e) => {
    setDob(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic full name validation
    if (!fullName) {
      setError('Full Name is required');
      return;
    }

    // Basic date of birth validation
    if (!dob) {
      setError('Date of Birth is required');
      return;
    }

    // Basic email validation
    if (!email || !email.includes('@')) {
      setError('Invalid email address');
      return;
    }

    // Basic password validation
    if (!password || password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    // If all validations pass, you can proceed with the sign-up logic
    // For now, just clear the error message
    setError('');

    // Your sign-up logic goes here
  };

  return (
    <div>
      <div className='inputfields'>
        <div>
          <Link to='/' className='link-style'>Login</Link>
          <Link to='/SignUp' className='link-style'>SignUp</Link>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-floating mt-3">
            <input
              type="text"
              className="form-control"
              id="input"
              placeholder="name"
              value={fullName}
              onChange={handleFullNameChange}
            />
            <label htmlFor="input">Full Name</label>
          </div>
          <div className="form-floating mt-3">
            <input
              type="date"
              className="form-control dob"
              id="date"
              placeholder="DOB"
              value={dob}
              onChange={handleDobChange}
            />
            <label htmlFor="date">Date of Birth</label>
          </div>
          <div className="form-floating mt-3">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
              value={email}
              onChange={handleEmailChange}
            />
            <label htmlFor="email">Email address</label>
          </div>
          <div className="form-floating mt-3 mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <label htmlFor="password">Password</label>
          </div>
          {error && <div className="text-danger">{error}</div>}
          <button type="submit" className="btn btn-primary">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
