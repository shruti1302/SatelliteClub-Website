import React from 'react';

const contentSection = (props) => {
  return (
    <>
      <section
        className={`plan-section content-section text-center ${props.bgColor}`}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-10 content-container'>
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
