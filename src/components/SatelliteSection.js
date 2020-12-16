import React, { useEffect } from 'react';
import SatelliteVideo from '../images/SatelliteOrbiting.mp4';

const SatelliteSection = () => {
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    // var top =
    //   (document.documentElement && document.documentElement.scrollTop) ||
    //   document.body.scrollTop;
    // if (top > 100) {
    //   document.getElementsByClassName('get-to-know').style.fontSize = '2rem';
    //   document.getElementsByClassName('satellite').style.fontSize = '5rem';
    // } else {
    //   document.getElementsByClassName('get-to-know').style.fontSize = '3.5rem';
    //   document.getElementsByClassName('satellite').style.fontSize = '7.5rem';
    // }
  };
  return (
    <>
      <section className='satellite-section'>
        <div className='overlay'></div>
        <div className='video-container'>
          <video
            loop={true}
            autoPlay='autoplay'
            id='vid'
            className='satellite-video'
            // controls='true'
            playsinline='true'
            disablePictureInPicture='true'
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
