import React, { useState } from 'react';
import '../styles/login.css'; // We will update this file next
import { Container, Form, FormGroup, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

// Use the user icon you uploaded
import userIcon from '../assets/images/user.png';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  const handleChange = e => {
    setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = e => {
    e.preventDefault();
    // Your login logic will go here
    console.log(credentials);
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