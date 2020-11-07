import React from 'react';

const planSection = (props) => {
  return (
    <>
      <section className='plan-section content-section text-center'>
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

export default planSection;
