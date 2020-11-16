import React from 'react';
import contact from '../images/contact.jpg';

const Contact = () => {
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
                      />
                    </div>
                    <div class='mb-3'>
                      <input
                        type='email'
                        class='form-control'
                        id='inputEmail'
                        aria-describedby='name'
                        placeholder='Email'
                      />
                    </div>
                    <div class='mb-3'>
                      <input
                        type='text'
                        class='form-control'
                        id='inputMob'
                        aria-describedby='name'
                        placeholder='Contact number'
                      />
                    </div>
                    <div class='mb-3'>
                      <textarea
                        class='form-control'
                        id='inputMob'
                        aria-describedby='name'
                        placeholder='Your Message'
                        style={{ height: 100 + 'px' }}
                      />
                    </div>

                    <button
                      type='submit'
                      class='submit-btn'
                      style={{ padding: 6 + 'px' }}
                    >
                      Submit
                    </button>
                  </form>
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
