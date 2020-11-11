import React from 'react';
import SatelliteVideo from '../images/Satellite Orbitting the Earth.mp4';

const SatelliteSection = () => {
  return (
    <>
      <section className='satellite-section'>
        <div className='overlay'></div>
        <div className='video-container'>
          <video
            loop='true'
            autoplay='autoplay'
            id='vid'
            className='satellite-video'
            muted
          >
            <source type='video/mp4' src={SatelliteVideo}></source>
          </video>
        </div>
        <div className='container'>
          <div className='satellite-heading'>
            <span className='get-to-know'> GET TO KNOW</span> <br />
            <span className='satellite'>Satellites</span>
          </div>
        </div>
        {/* <div className='satellite-heading'>Hello</div> */}
      </section>
    </>
  );
};

export default SatelliteSection;
