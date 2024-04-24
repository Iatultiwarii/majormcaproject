import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = ({ setLoggedIn }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Reset error messages
    setNameError('');
    setEmailError('');
    setPasswordError('');

    // Validate name
    if (!name) {
      setNameError('Please enter your name');
      return;
    }

    // Validate email
    if (!email) {
      setEmailError('Please enter your email');
      return;
    }

    // Validate password
    if (!password) {
      setPasswordError('Please enter your password');
      return;
    }

    // Assuming your signup API endpoint is at /api/auth/register
    fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === 'User registered successfully') {
          // Signup successful
          setLoggedIn(true);
          navigate('/');
        } else {
          // Signup failed
          setEmailError(data.message);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setEmailError('Something went wrong. Please try again later.');
      });
  };

  return (
    <div className="mainContainer">
      <div className={'titleContainer'}>
        <div>Signup</div>
      </div>
      <div className={'inputContainer'}>
        <input
          value={name}
          placeholder="Enter your name"
          onChange={(ev) => setName(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{nameError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={email}
          placeholder="Enter your email"
          onChange={(ev) => setEmail(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{emailError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={password}
          placeholder="Enter your password"
          onChange={(ev) => setPassword(ev.target.value)}
          className={'inputBox'}
          type="password"
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input className={'inputButton'} type="button" onClick={handleSubmit} value={'Sign up'} />
      </div>
      <div>
        Already registered? <span onClick={() => navigate('/login')} style={{ cursor: 'pointer', color: 'blue' }}>Login</span>
      </div>
    </div>
  );
};

export default Signup;
