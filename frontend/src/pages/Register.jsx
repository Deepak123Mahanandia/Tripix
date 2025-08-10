import React, { useState } from 'react';
import '../styles/login.css'; // Reusing the same styles for consistency
import { Container, Form, FormGroup, Button } from 'reactstrap';
import { Link } from 'react-router-dom';


// Assuming you want a user icon here as well, or replace with registerimg if available
import userIcon from '../assets/images/user.png';


const Register = () => {
  const [credentials, setCredentials] = useState({
    userName: undefined,
    email: undefined,
    password: undefined,
  });


  const handleChange = e => {
    setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };


  const handleClick = e => {
    e.preventDefault();
    // Your registration logic will go here
    console.log(credentials);
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
                placeholder="Username"
                required
                id="userName"
                onChange={handleChange}
              />
            </FormGroup>
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