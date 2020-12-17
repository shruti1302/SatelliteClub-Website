import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import Navbar from './Navbar';
import validate from './validateInfo';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    course: '',
    branch: '',
    year: '',
  });
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const successMsg = `
    <div class="form-msg">
      <div class="row">
      
        <div class="col">

          <div class="msg-heading">Way to Go!</div>
          <div>Our team will contact you soon!</div>
        
        </div>

      
      </div>
    
    </div>`;
  const errorMsg = `<div class="form-msg">
    <div class="msg-heading">Oops!</div>
    <div>Something went wrong. Try contacting us at anantdrishti@muj.manipal.edu </div>
    </div>`;

  const handleChange = (event) => {
    setMessage('');
    const { name, value } = event.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();

    setErrors(validate(formData));
    setIsSubmitting(true);
  };

  const submitData = async () => {
    const { name, email, mobile, course, branch, year } = formData;
    try {
      const response = await fetch(
        'https://v1.nocodeapi.com/agarwalshruti/google_sheets/huSxTzWqpSQwjbhA?tabId=Registration',
        {
          method: 'post',
          body: JSON.stringify([[name, email, mobile, course, branch, year]]),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const json = await response.json();
      console.log('Success:', JSON.stringify(json));
      setMessage(successMsg);
      setFormData({
        name: '',
        email: '',
        mobile: '',
        course: '',
        branch: '',
        year: '',
      });
    } catch (error) {
      console.error('Error:', error);
      setMessage(errorMsg);
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      // callback();
      submitData();
    }
  }, [errors]);

  useEffect(() => {
    window.scrollTo(0, 0);

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

  return (
    <>
      <Navbar />
      <section className='register-section'>
        <div className='container'>
          <div className='section-heading text-center mb-3'>
            BECOME A MEMBER
          </div>
          <div className='register-line text-center mt-1 mb-5'>
            Join Anant Drishti to contribute your infinitesimal bit to the
            seamless sky!
          </div>
          <div className='row'>
            <div className='col-8 mx-auto'>
              <div className='form-container'>
                <form id='register-form'>
                  <div className='form-group mb-4'>
                    <label>Name</label>

                    <input
                      type='text'
                      name='name'
                      className='form-control'
                      id='nameField'
                      placeholder='Chris Boyler'
                      onChange={handleChange}
                      value={formData.name}
                    />
                    {errors.name && <p>{errors.name}</p>}
                  </div>
                  <div className='form-group mb-4'>
                    <label>Mobile No.</label>

                    <input
                      type='text'
                      name='mobile'
                      className='form-control'
                      id='mobileField'
                      placeholder='9567812345'
                      onChange={handleChange}
                      value={formData.mobile}
                    />
                    {errors.mobile && <p>{errors.mobile}</p>}
                  </div>
                  <div className='form-group mb-4'>
                    <label>Email Address</label>

                    <input
                      type='email'
                      name='email'
                      className='form-control'
                      id='emailField'
                      placeholder='name@example.com'
                      onChange={handleChange}
                      value={formData.email}
                    />
                    {errors.email && <p>{errors.email}</p>}
                  </div>
                  {/* <div className='form-group mb-4'>
                    <label>Mobile No.</label>

                    <input
                      type='text'
                      name='mobile'
                      className='form-control'
                      id='mobileField'
                      placeholder='9567812345'
                      onChange={handleChange}
                      value={formData.mobile}
                      required
                    />
                  </div> */}

                  <div className='row'>
                    <div className='col-5'>
                      <div className='form-group mb-5'>
                        <label>Course</label>

                        <input
                          type='text'
                          name='course'
                          className='form-control'
                          id='courseField'
                          placeholder='B.Tech.'
                          onChange={handleChange}
                          value={formData.course}
                        />
                      </div>
                    </div>

                    <div className='col-4'>
                      <div className='form-group mb-5'>
                        <label>Branch</label>

                        <input
                          type='text'
                          name='branch'
                          className='form-control'
                          id='branchField'
                          placeholder='Mechanical'
                          onChange={handleChange}
                          value={formData.branch}
                        />
                      </div>
                    </div>
                    <div className='col-3'>
                      <div className='form-group mb-5'>
                        <label>Year</label>

                        <input
                          type='text'
                          name='year'
                          className='form-control'
                          id='yearField'
                          placeholder='1st'
                          onChange={handleChange}
                          value={formData.year}
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type='submit'
                    onClick={handleClick}
                    className='submit-btn'
                  >
                    Register
                  </button>
                </form>

                <div dangerouslySetInnerHTML={{ __html: message }}>
                  {/* {message} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;

// 109314176935-4b8e3kivp2e9ivvj0jick59ss8q3enm0.apps.googleusercontent.com
// WUgzmfWWgDAdPhlwhRncYHqd
