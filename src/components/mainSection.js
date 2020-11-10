import React from 'react';

const mainSection = () => {
  return (
    <>
      <section className='main-section text-center'>
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
        <div id='title'>
          <div className='layer'>
            <div className='container'>
              <div className='hindi-heading'>अनंत दृष्टि</div>
              <div className='main-heading'>Anant Drishti</div>
              <div className='title-college mt-4'>
                The Satellite Club of <br />
                Manipal University Jaipur
                {/* <span className='muj'>Manipal University Jaipur</span> */}
              </div>
              <div className='tagline'>
                ________MOTTO________
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default mainSection;
