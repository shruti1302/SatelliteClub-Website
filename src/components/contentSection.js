import React from 'react';

const contentSection = (props) => {
  return (
    <>
      <section className='plan-section content-section text-center'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-10 mx-auto content-container'>
              <div className='section-heading mb-5'>{props.title}</div>
              <div className='content'>{props.content}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default contentSection;
