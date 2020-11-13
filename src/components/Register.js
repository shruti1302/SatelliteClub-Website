import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import Navbar from './Navbar';

const Register = () => {
  useEffect(() => {
    let navbar = document.querySelector('.navbar-fixed-top');
    navbar.classList.remove('bg-transparent');
    navbar.classList.add('bg-opaque');
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    //
    var top =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    let navbar = document.querySelector('.navbar-fixed-top');
    if (top > 2) {
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
          <div className='section-heading text-center mb-3'>
            BECOME A MEMBER
          </div>
          <div className='tagline text-center mt-1 mb-5'>
            Join Anant Drishti to contribute your infinitesimal bit to the
            seamless sky!
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
                  <div className='form-group mb-4'>
                    <label>Mobile No.</label>
                    <input
                      type='text'
                      className='form-control'
                      id='mobileField'
                      placeholder='9567812345'
                    />
                  </div>
                  <div className='row'>
                    <div className='col-5'>
                      <div className='form-group mb-5'>
                        <label>Course</label>
                        <input
                          type='text'
                          className='form-control'
                          id='courseField'
                          placeholder='B.Tech.'
                        />
                      </div>
                    </div>
                    <div className='col-4'>
                      <div className='form-group mb-5'>
                        <label>Branch</label>
                        <input
                          type='text'
                          className='form-control'
                          id='branchField'
                          placeholder='Mechanical'
                        />
                      </div>
                    </div>
                    <div className='col-3'>
                      <div className='form-group mb-5'>
                        <label>Year</label>
                        <input
                          type='text'
                          className='form-control'
                          id='yearField'
                          placeholder='1st'
                        />
                      </div>
                    </div>
                  </div>

                  <button type='submit' className='submit-btn'>
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
