import React, { useState, useContext } from 'react';
import '../styles/login.css';
import { Container, Form, FormGroup, Button } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import userIcon from '../assets/images/user.png';
import { AuthContext } from './../context/AuthContext';
import { BASE_URL } from './../utils/config';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = e => {
    setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async e => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });

      const result = await res.json();

      if (!res.ok) {
        dispatch({ type: 'LOGIN_FAILURE', payload: result.message });
        return alert(result.message);
      }

      // --- THIS IS THE FINAL FIX ---
      // Combine the token and user data from the response into one object
      const userPayload = {
        ...result.data, // User data like _id, username, email
        token: result.token // Add the token property to the user object
      };
      
      // Dispatch the complete payload to the context
      dispatch({ type: 'LOGIN_SUCCESS', payload: userPayload });
      
      navigate('/');

    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE', payload: err.message });
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

          <h2>Welcome Back</h2>
          <p className="login__subtitle">Sign in to continue your journey</p>

          <Form onSubmit={handleClick}>
            <FormGroup>
              <input
                type="email"
                placeholder="Email Address"
                required
                id="email"
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <input
                type="password"
                placeholder="Password"
                required
                id="password"
                onChange={handleChange}
              />
            </FormGroup>
            <Button className="auth__btn" type="submit">
              Login
            </Button>
          </Form>

          <p className="login__register-link">
            Don't have an account? <Link to="/register">Create one</Link>
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Login;