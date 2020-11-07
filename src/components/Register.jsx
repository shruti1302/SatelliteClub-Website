import React from 'react';
import { withRouter } from 'react-router';

const Register = () => {
  console.log('Register');
  return (
    <>
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
