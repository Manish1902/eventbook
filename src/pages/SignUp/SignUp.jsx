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

    if (!fullName) {
      setError('Full Name is required');
      return;
    }

    if (!dob) {
      setError('Date of Birth is required');
      return;
    }

    if (!email || !email.includes('@')) {
      setError('Invalid email address');
      return;
    }

    if (!password || password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setError('');
    //sign-up logic
  };

  return (
    <div>
      <div className='block'>
            <div className='flex-container'>
                <div className="flex-item1">
                    {/* <div >1 of 1</div> */}
                </div>
                <div className="flex-item2">
                    <div className='datafields'>
                    <div className='container'>
      <h2><strong>Hello</strong>, Grab seats for your upcoming fav event!</h2>
        <div>
          <Link to='/' className='link-style'>SignIn</Link>
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
                </div>
            </div>
        </div>
      
    </div>
  );
}

export default SignUp;
