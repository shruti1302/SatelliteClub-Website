import React from 'react';

const commonSection = (props) => {
  return (
    <>
      <section className='satellite-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-10 mx-auto'>
              <div className='row'>
                <div className='col-6 pl-3'>
                  <div className='satellite-heading'>
                    Know More About
                    <span className='brand-name satellite-heading'>
                      {' '}
                      {props.title}
                    </span>
                  </div>
                  <div className='supporting-line mt-3'>
                    ________MOTTO________
                  </div>
                  <button type='button' className='get-started-btn mt-4'>
                    {' '}
                    Dive Deep In!{' '}
                  </button>
                </div>
                <div className='col-6'>
                  <img src={props.imgsrc} alt='' className='satellite-img' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default commonSection;
