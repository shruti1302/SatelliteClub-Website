import React from 'react';

const Footer = () => {
  return (
    <>
      <div className='footer mt-5 py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-10 mx-auto'>
              <div className='club-name text-center mb-5'>ANANT DHRISHTI</div>
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
                      <img src='https://img.icons8.com/material-outlined/40/ffffff/instagram-new.png' />
                    </span>
                    <span>
                      <img src='https://img.icons8.com/material-outlined/40/ffffff/instagram-new.png' />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
