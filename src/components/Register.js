import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import Navbar from './Navbar';
import validate from './validateInfo';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    regno: '',
    email: '',
    officialEmail: '',
    mobile: '',
    course: '',
    branch: '',
    year: '',
    paymentRef: '',
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
    <div>Something went wrong. Contact us at <br> Email: anantdrishti@muj.manipal.edu <br> Call/Whatsapp: 9315785908 </div>
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
    console.log(formData);

    setErrors(validate(formData));
    setIsSubmitting(true);
  };

  const submitData = async () => {
    const {
      name,
      regno,
      email,
      officialEmail,
      mobile,
      course,
      branch,
      year,
      paymentRef,
    } = formData;
    try {
      const response = await fetch(
        'https://v1.nocodeapi.com/agarwalshruti/google_sheets/huSxTzWqpSQwjbhA?tabId=Registration',
        {
          method: 'post',
          body: JSON.stringify([
            [
              name,
              regno,
              email,
              officialEmail,
              mobile,
              course,
              branch,
              year,
              paymentRef,
            ],
          ]),
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
        regno: '',
        email: '',
        officialEmail: '',
        mobile: '',
        course: '',
        branch: '',
        year: '',
        paymentRef: '',
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
                    <label>Registration no.</label>

                    <input
                      type='text'
                      name='regno'
                      className='form-control'
                      id='regField'
                      placeholder='189302022'
                      onChange={handleChange}
                      value={formData.regno}
                    />
                    {errors.regno && <p>{errors.regno}</p>}
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
                  <div className='form-group mb-4'>
                    <label>MUJ Email Address</label>

                    <input
                      type='email'
                      name='officialEmail'
                      className='form-control'
                      id='officialEmailField'
                      placeholder='firstname.registration@muj.manipal.edu'
                      onChange={handleChange}
                      value={formData.officialEmail}
                    />
                    {errors.officialEmail && <p>{errors.officialEmail}</p>}
                  </div>

                  <div className='row'>
                    <div className='col-5'>
                      <div className='form-group mb-4'>
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
                        {errors.course && <p>{errors.course}</p>}
                      </div>
                    </div>
                    <div className='col-4'>
                      <div className='form-group mb-4'>
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
                      <div className='form-group mb-4'>
                        <label>Year</label>

                        <input
                          type='text'
                          name='year'
                          className='form-control'
                          id='yearField'
                          placeholder='1'
                          onChange={handleChange}
                          value={formData.year}
                        />
                        {errors.year && <p>{errors.year}</p>}
                      </div>
                    </div>
                  </div>

                  <div className='form-group mb-5'>
                    <label>Paytm/UPI Transaction ID</label>

                    <input
                      type='text'
                      name='paymentRef'
                      className='form-control'
                      id='paymentField'
                      placeholder=''
                      onChange={handleChange}
                      value={formData.paymentRef}
                    />
                    {errors.paymentRef && <p>{errors.paymentRef}</p>}
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
