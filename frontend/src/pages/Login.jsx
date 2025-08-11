import React, { useState, useContext } from 'react';
import '../styles/login.css'; // We will update this file next
import { Container, Form, FormGroup, Button } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';

// Use the user icon you uploaded
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
        credentials: 'include', // important for cookie auth
        body: JSON.stringify(credentials),
      });

      const result = await res.json();
      if (!res.ok) {
        alert(result.message);
        dispatch({ type: 'LOGIN_FAILURE', payload: result.message });
        return;
      }

      console.log(result.data);

      // No localStorage.setItem here because token is in cookie

      dispatch({ type: 'LOGIN_SUCCESS', payload: result.data });
      navigate('/');
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE', payload: err.message });
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
