import React, { useEffect } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Navbar = () => {
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    var top =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    if (top > 200)
      document.querySelector('.navbar-fixed-top').classList.add('scroll');
    else document.querySelector('.navbar-fixed-top').classList.remove('scroll');
  };

  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark fixed-top navbar-fixed-top'>
        <Router>
          <Link className='navbar-brand' to='/'>
            Navbar
          </Link>
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
                <Link
                  to='/'
                  className='nav-link'
                  aria-current='page'
                  activeClassName='menu_active'
                >
                  Home
                </Link>
              </li>

              <li className='nav-item'>
                <Link
                  to='/register'
                  className='nav-link'
                  activeClassName='menu_active'
                >
                  Register
                </Link>
              </li>

              <li className='nav-item'>
                <Link to='/' className='nav-link' activeClassName='menu_active'>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </Router>
      </nav>
    </>
  );
};

export default Navbar;
