import React, { useEffect } from 'react';

const SatelliteTypeSection = (props) => {
  //   useEffect(() => {
  //     var card = document.querySelector('.box');
  //     card.addEventListener('click', function () {});
  //   }, []);

  //   useEffect(() => {
  //     document.querySelector('.box').addEventListener('click', handleClick);
  //   }, []);

  //   const handleClick = () => {
  //     document.querySelector('.box').classList.toggle('is-flipped');
  //   };

  return (
    <>
      {' '}
      <section className='type-section pb-5 mt-3'>
        <div className='container'>
          <div className='row'>
            <div className='col-10 mx-auto'>
              <div className='row'>
                <div className='col-8'>
                  <div className='sub-heading mb-3'>{props.title}</div>
                  <div className='content'> {props.content}</div>
                </div>
                <div className='col-4'>
                  <img
                    src='https://images.by.prom.st/145643328_w640_h640_krossovyj-mototsikl-koshine.jpg'
                    alt=''
                    className='satellite-img'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SatelliteTypeSection;
