import React from 'react';

const Register = () => {
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
                  <div class='form-group mb-4'>
                    <label for='nameField'>Name</label>
                    <input
                      type='text'
                      class='form-control'
                      id='nameField'
                      placeholder='Chris Boyler'
                    />
                  </div>
                  <div class='form-group mb-4'>
                    <label for='emailField'>Email address</label>
                    <input
                      type='email'
                      class='form-control'
                      id='emailField'
                      placeholder='name@example.com'
                    />
                  </div>
                  <div class='form-group mb-5'>
                    <label for='phoneField'>Phone No.</label>
                    <input
                      type='text'
                      class='form-control'
                      id='phoneField'
                      placeholder='9567812345'
                    />
                  </div>
                  <button type='submit' class='btn btn-primary'>
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

export default Register;
