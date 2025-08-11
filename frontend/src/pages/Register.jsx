// Register.jsx (updated)
import React, { useState, useContext } from 'react';
import '../styles/login.css';
import { Container, Form, FormGroup, Button } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import userIcon from '../assets/images/user.png';
import { AuthContext } from './../context/AuthContext';
import { BASE_URL } from './../utils/config';

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    email: '',
    password: '',
  });

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });

      const result = await res.json();
      if (!res.ok) return alert(result.message || 'Failed to register user');

      dispatch({ type: 'REGISTER_SUCCESS' });
      navigate('/login');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <section className="login__page">
      <Container>
        <div className="login__card">
          <div className="login__avatar">
            <img src={userIcon} alt="User Icon" />
          </div>

          <h2>Create Account</h2>
          <p className="login__subtitle">Sign up to start your adventure</p>

          <Form onSubmit={handleClick}>
            <FormGroup>
              <input
                type="text"
                name="username"
                placeholder="Username"
                required
                value={credentials.username}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={credentials.email}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                value={credentials.password}
                onChange={handleChange}
              />
            </FormGroup>
            <Button className="auth__btn" type="submit">
              Create Account
            </Button>
          </Form>

          <p className="login__register-link">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Register;
