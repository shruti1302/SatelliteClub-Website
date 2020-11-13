import React from 'react';

const contentSection = (props) => {
  return (
    <>
      <section
        className={`plan-section content-section text-center alternate-section`}
      >
        <div className='container'>
          <div className='section-heading mb-5'>OBJECTIVES</div>
          <div className='row'>
            <div className='col-10 mx-auto'>
              <div class='list'>
                <div class='num'>
                  <h3>{props.objective1}</h3>
                </div>
                <div class='num'>
                  <h3>{props.objective2}</h3>
                </div>
                <div class='num'>
                  <h3>{props.objective3}</h3>
                </div>
                <div class='num'>
                  <h3>{props.objective4}</h3>
                </div>
                <div class='num'>
                  <h3>{props.objective5}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default contentSection;
