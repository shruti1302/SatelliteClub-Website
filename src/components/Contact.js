import { set } from 'mongoose';
import React, { useState, useEffect } from 'react';
import contact from '../images/contact.jpg';
// import validate from './validateInfo';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const successMsg = `
    <div class="form-msg">
      <div class="row">
      
        <div class="col">

          <div class="msg-heading">We have received your query.</div>
          <div>Our team will contact you soon!</div>
        
        </div>

      
      </div>
    
    </div>`;
  const errorMsg = `<div class="form-msg">
    <div class="msg-heading">Oops!</div>
    <div>Something went wrong. Contact us at <br> Email: anantdrishti@muj.manipal.edu <br> Call/Whatsapp: 9315785908 </div>
    </div>`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(formData);
    setErrors(validate(formData));
    setIsSubmitting(true);
  };

  const validate = (data) => {
    let err = {};
    if (!data.name) {
      err.name = 'Please provide your name';
    }
    if (!data.email) {
      err.email = 'Please provide your email address.';
    } else if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        data.email
      )
    ) {
      err.email = 'Please provide a valid email address.';
    }
    return err;
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      // callback();
      submitData();
    }
  }, [errors]);

  const submitData = async () => {
    const { name, email, mobile, message } = formData;
    try {
      const response = await fetch(
        'https://v1.nocodeapi.com/agarwalshruti/google_sheets/fNFXlVXWZsDjmOyf?tabId=Contact',
        {
          method: 'post',
          body: JSON.stringify([[name, email, mobile, message]]),
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
        message: '',
      });
    } catch (error) {
      console.error('Error:', error);
      setMessage(errorMsg);
    }
  };

  return (
    <section className='contact-section'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <div className='section-heading mb-5 text-center'>CONTACT US</div>
            <div className='row'>
              <div className='col-lg-6 col-md-12 col-xs-12 col-sm-12 order-sm-1'>
                <img src={contact} alt='' className='contact-img animated' />
              </div>
              <div className='col-lg-6 col-md-12 col-xs-12 col-sm-12 order-sm-2'>
                <div className='contact-form-container'>
                  <div className='content mb-3 text-center'>Reach us out!</div>
                  <form>
                    <div class='mb-3'>
                      <input
                        type='text'
                        class='form-control'
                        id='inputName'
                        aria-describedby='name'
                        placeholder='Name'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                      />
                      {errors.name && <p>{errors.name}</p>}
                    </div>
                    <div class='mb-3'>
                      <input
                        type='email'
                        class='form-control'
                        id='inputEmail'
                        aria-describedby='name'
                        placeholder='Email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && <p>{errors.email}</p>}
                    </div>
                    <div class='mb-3'>
                      <input
                        type='text'
                        class='form-control'
                        id='inputMob'
                        aria-describedby='name'
                        placeholder='Contact number'
                        name='mobile'
                        value={formData.mobile}
                        onChange={handleChange}
                      />
                    </div>
                    <div class='mb-3'>
                      <textarea
                        class='form-control'
                        id='inputMsg'
                        aria-describedby='name'
                        placeholder='Your Message'
                        style={{ height: 100 + 'px' }}
                        name='message'
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>

                    <button
                      type='submit'
                      class='submit-btn'
                      style={{ padding: 6 + 'px' }}
                      onClick={handleClick}
                    >
                      Submit
                    </button>
                  </form>
                  <div dangerouslySetInnerHTML={{ __html: message }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
