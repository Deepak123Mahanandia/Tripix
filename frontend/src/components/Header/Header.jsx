import React, { useEffect, useState, useContext } from 'react';
import { Container, Row, Button } from 'reactstrap';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import "./Header.css";
import { AuthContext } from '../../context/AuthContext';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext)

  const logout = () => {
    dispatch({ type: 'LOGOUT' })
    navigate('/')
  }


  const nav_links = [
    { path: '/home', display: 'Home' },
    { path: '/about', display: 'About' },
    { path: '/tour', display: 'Tours' },
    { path: '/trip-planner', display: 'Search and Compare' }, // <-- LINK ADDED HERE
    { path: '/information', display: 'Information' },
    { path: '/support', display: 'Support' },
    // Itinerary planner shown only if logged in (below)
  ];

  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav_wrapper d-flex align-items-center justify-content-between">

            {/* --------- Logo --------- */}
            <div className="logo">
              <img src={logo} alt="Tripix Logo" />
            </div>

            {/* --------- Navigation Menu --------- */}
            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5">
                {nav_links.map((item, index) => (
                  <li className="nav_item" key={index}>
                    <NavLink
                      to={item.path}
                      className={navClass => navClass.isActive ? 'active__link' : ''}
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}

                {/* Itinerary Planner (Only if logged in) */}
                {isLoggedIn && (
                  <li className="nav_item">
                    <NavLink
                      to="/planner"
                      className={navClass => navClass.isActive ? 'active__link' : ''}
                    >
                      Itinerary Planner
                    </NavLink>
                  </li>
                )}
              </ul>
            </div>

            {/* --------- Right Side Buttons --------- */}
            <div className="nav_right d-flex align-items-center gap-4">
              <div className="nav_btns d-flex align-items-center gap-4">

                {
                  user ? (<>
                    <h5 className="mb-0">{user.username}</h5>
                    <Button className="btn btn-dark" onClick={logout}>Logout</Button>
                  </> 
                  ):( <>
                    <Button className="btn secondary_btn">
                      <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>Login</Link>
                    </Button>
                    <Button className="btn primary_btn">
                      <Link to="/register" style={{ textDecoration: 'none', color: 'inherit' }}>Register</Link>
                    </Button>
                  </>
                  )
                }



              </div>

              <span className="mobile_menu">
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;