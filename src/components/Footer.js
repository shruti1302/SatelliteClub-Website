import React from 'react';
import Logo from '../images/transparentdefault.png';

const Footer = () => {
  return (
    <>
      <section id='footer' className='footer shadow-top pt-5 pb-4 px-5'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-3 col-sm-12 col-xs-12'>
              <div className='info'>
                <a href='#main-section'>
                  <img src={Logo} alt='' className='logo-footer' />
                </a>
              </div>
            </div>
            <div className='col-lg-3 col-sm-12 col-xs-12'>
              <div className='info'>
                <div className='info-label mb-2'>Email us at</div>
                <div className='info-content'>
                  <a href='mailto:anantdrishti.muj@gmail.com'>
                    anantdrishti.muj@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className='col-lg-2 col-sm-12 col-xs-12'>
              <div className='info'>
                <div className='info-label mb-2'>Call us at</div>
                <div className='info-content'>
                  <strong>Naman Varshney</strong>
                </div>
                <div className='info-content'>+91 8218140586</div>
                <div className='info-content'>
                  <strong>Asad Shaikh</strong>
                </div>

                <div className='info-content'>+91 9653700852</div>
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

            <div className='col-lg-1 col-sm-12 col-xs-12 '>
              <div className='info'>
                <div className='info-label mb-2'>Follow us</div>
                <div className='info-content'>
                  {/* <span>
                    <a href='#'>
                      <img
                        src='https://img.icons8.com/ios-glyphs/40/ffffff/facebook.png'
                        alt=''
                      />
                    </a>
                  </span> */}
                  <span>
                    <a href='https://www.instagram.com/anantdrishti.muj/'>
                      <img
                        src='https://img.icons8.com/material-outlined/40/ffffff/instagram-new.png'
                        alt=''
                      />
                    </a>
                  </span>
                  {/* <span>
                    <a href='#'>
                      <img
                        src='https://img.icons8.com/ios-filled/40/ffffff/linkedin.png'
                        alt=''
                      />
                    </a>
                  </span> */}
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
