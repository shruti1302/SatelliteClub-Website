import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import Navbar from './Navbar';

const Register = () => {
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    var top =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    let navbar = document.querySelector('.navbar-fixed-top');
    if (top > 200) {
      navbar.classList.add('bg-opaque');
      navbar.classList.remove('bg-transparent');
    } else {
      navbar.classList.add('bg-opaque');
      navbar.classList.remove('bg-transparent');
    }
  };
  // console.log('Register');
  return (
    <>
      <Navbar />
      <section className='register-section'>
        <div className='container'>
          <div className='section-heading text-center mb-5'>
            BECOME A MEMBER
          </div>
          <div className='row'>
            <div className='col-8 mx-auto'>
              <div className='form-container'>
                <form>
                  <div className='form-group mb-4'>
                    <label>Name</label>
                    <input
                      type='text'
                      className='form-control'
                      id='nameField'
                      placeholder='Chris Boyler'
                    />
                  </div>
                  <div className='form-group mb-4'>
                    <label>Email address</label>
                    <input
                      type='email'
                      className='form-control'
                      id='emailField'
                      placeholder='name@example.com'
                    />
                  </div>
                  <div className='form-group mb-5'>
                    <label>Phone No.</label>
                    <input
                      type='text'
                      className='form-control'
                      id='phoneField'
                      placeholder='9567812345'
                    />
                  </div>
                  <button type='submit' className='btn btn-primary'>
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default withRouter(Register);
