import React from 'react';
import Logo from '../images/transparentdefault.png';

const Footer = () => {
  return (
    <>
      {/* <div className='footer mt-5 py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-10 mx-auto'>
              <div>
                <img
                  src={Logo}
                  alt='Club Logo'
                  class='footer-logo mx-auto mb-5'
                />
              </div>

              <div className='row'>
                <div className='col col-sm-4'>
                  <div className='footer-heading'>Contact Us </div>
                  <div className='info'>
                    +91 9876543210 <br /> +91 7654321809 <br /> abc@gmail.com
                  </div>
                </div>

                <div className='col col-sm-4'>
                  <div className='footer-heading'> Address </div>
                  <div className='info'>
                    Manipal University, Jaipur <br />
                    Jaipur-Ajmer Express Highway, <br />
                    Dehmi Kalan, Near GVK Toll Plaza, <br />
                    Jaipur, Rajasthan 303007
                  </div>
                </div>
                <div className='col col-sm-4 pl-3'>
                  <div className='footer-heading'> Social Media</div>
                  <div className='info social-icons pl-3'>
                    <span>
                      <img
                        src='https://img.icons8.com/material-outlined/40/ffffff/instagram-new.png'
                        alt=''
                      />
                    </span>
                    <span>
                      <img
                        src='https://img.icons8.com/material-outlined/40/ffffff/instagram-new.png'
                        alt=''
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <section id='footer' className='footer shadow-top pt-5 pb-4'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 col-sm-12 col-xs-12'>
              <div className='info'>
                <a href='#main-section'>
                  <img src={Logo} alt='' className='logo-footer' />
                </a>
              </div>
            </div>
            <div className='col-lg-2 col-sm-12 col-xs-12'>
              <div className='info'>
                <div className='info-label mb-2'>Email us at</div>
                <div className='info-content'>
                  <a href='#'>abc@gmail.com</a>
                </div>
              </div>
            </div>

            <div className='col-lg-2 col-sm-12 col-xs-12'>
              <div className='info ml-3'>
                <div className='info-label mb-2'>Call us at</div>
                <div className='info-content'>+91 9876154320</div>
                <div className='info-content'>+91 9876543215</div>
              </div>
            </div>

            <div className='col-lg-3 col-sm-12 col-xs-12 '>
              <div className='info'>
                <div className='info-label mb-2'>Address</div>
                <div className='info-content'>
                  <a
                    href='https://goo.gl/maps/GopwtMj21wFJoy6B8'
                    target='_blank'
                  >
                    Manipal University, Jaipur <br />
                    Jaipur-Ajmer Express Highway, <br />
                    Dehmi Kalan, Near GVK Toll Plaza, <br />
                    Jaipur, Rajasthan 303007
                  </a>
                </div>
              </div>
            </div>

            <div className='col-lg-2 col-sm-12 col-xs-12 '>
              <div className='info'>
                <div className='info-label mb-2'>Follow us on</div>
                <div className='info-content'>
                  <span>
                    <a href='#'>
                      <img
                        src='https://img.icons8.com/ios-glyphs/40/ffffff/facebook.png'
                        alt=''
                      />
                    </a>
                  </span>
                  <span>
                    <a href='#'>
                      <img
                        src='https://img.icons8.com/material-outlined/40/ffffff/instagram-new.png'
                        alt=''
                      />
                    </a>
                  </span>
                  <span>
                    <a href='#'>
                      <img
                        src='https://img.icons8.com/ios-filled/40/ffffff/linkedin.png'
                        alt=''
                      />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
