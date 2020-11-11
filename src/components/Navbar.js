import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../images/logo1.png';

const Navbar = (props) => {
  return (
    <>
      <header>
        <nav className='navbar navbar-expand-lg navbar-dark fixed-top navbar-fixed-top'>
          <NavLink className='navbar-brand' to='/'>
            {/* Navbar */}
            <img src={Logo} alt='Club Logo' className='navbar-logo' />
          </NavLink>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item active'>
                <NavLink
                  to='/'
                  className='nav-link mr-4'
                  aria-current='page'
                  activeClassName='menu_active'
                >
                  Home
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  to='/satellite'
                  className='nav-link mr-4'
                  activeClassName='menu_active'
                >
                  Satellite
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  to='/subsystems'
                  className='nav-link mr-4'
                  activeClassName='menu_active'
                >
                  Subsystems
                </NavLink>
              </li>

              <li className='nav-item'>
                <NavLink
                  to='/register'
                  className='nav-link'
                  activeClassName='menu_active'
                >
                  Register
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
