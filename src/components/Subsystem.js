import React, { useEffect } from 'react';
// import CommonSection from './commonSection';
import Navbar from './Navbar';
import ContentSection from './contentSection';
import TypeCard from './TypeCard';
import BlogCard from './BlogCard';
import AlternateBlogCard from './AlternateBlogCard';

import pic1 from '../images/Satellite 3.jpg';
import transmissiontower from '../images/Transmission Tower.jpg';
import ttcm from '../images/satellite-3128159.jpg';

const Subsystems = () => {
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    var top =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    let navbar = document.querySelector('.navbar-fixed-top');
    if (top > 200) {
      navbar.classList.add('bg-opaque');
      navbar.classList.remove('bg-transparent');
    } else {
      navbar.classList.remove('bg-opaque');
      navbar.classList.add('bg-transparent');
    }

    // let subsystemHeading = document.querySelector('.subsystems');
    // let whatisHeading = document.querySelector('.get-to-know');

    // if (top > 100) {
    //   document.getElementsByClassName('get-to-know').style.fontSize = '3rem';
    //   document.getElementsByClassName('subsystems').style.fontSize = '5rem';
    // } else {
    //   document.getElementsByClassName('get-to-know').style.fontSize = '3.5rem';
    //   document.getElementsByClassName('subsystems').style.fontSize = '7rem';
    // }
  };
  return (
    <>
      <Navbar />

      <section className='subsystem-section'>
        <div className='container'>
          <div className=' subsystems-heading'>
            <span className='get-to-know'> Know Our</span> <br />
            <span className='subsystems'>SUBSYSTEMS</span>
          </div>
        </div>{' '}
        {/* <div className='overlay'></div> */}
      </section>

      <ContentSection
        title='Subsystems'
        content='In satellite communication system, various operations take place. Among which, the main operations are orbit controlling, altitude of satellite, monitoring and controlling of other subsystems.
        A satellite communication consists of mainly two segments. Those are space segment and earth segment. So, accordingly there will be two types of subsystems namely, space segment subsystems and earth segment subsystems. The subsystems present in space segment are called as space segment subsystems. Following are the space segment subsystems: AOC Subsystem, TTCM Subsystem, Power and Antenna Subsystems, Transponders.
        The subsystems present in the ground segment have the ability to access the satellite repeater in order to provide the communication between the users. Earth segment is also called as ground segment. Earth segment performs mainly two functions. Those are transmission of a signal to the satellite and reception of signal from the satellite. Earth stations are the major subsystems that are present in earth segment.
        '
      />

      <section className='subsystems-card-section'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-10 mx-auto'>
              <BlogCard
                title='AOC Subsystem'
                content='Altitude and Orbit Control (AOC) subsystem consists of rocket motors, which are capable of placing the satellite into the right orbit, whenever it is deviated from the respective orbit. AOC subsystem is helpful in order to make the antennas, which are of narrow beam type points towards earth.
We can make this AOC subsystem into the following two parts: Altitude Control Subsystem, Orbit Control Subsystem'
                imgsrc={pic1}
              />
              <AlternateBlogCard
                title='TTCM Subsystem'
                content='Telemetry, Tracking, Commanding and Monitoring (TTCM) subsystem is present in both satellite and earth station. In general, satellite gets data through sensors. So, Telemetry subsystem present in the satellite sends this data to earth station(s). Therefore, TTCM subsystem is very much necessary for any communication satellite in order to operate it successfully.
It is the responsibility of satellite operator in order to control the satellite in its life time, after placing it in the proper orbit. This can be done with the help of TTCM subsystem.'
                imgsrc={ttcm}
              />

              <BlogCard
                title='Power and Antenna Subsystems'
                content='We know that the satellite present in an orbit should be operated continuously during its life span. So, the satellite requires internal power in order to operate various electronic systems and communications payload that are present in it.
Power system is a vital subsystem, which provides the power required for working of a satellite. Mainly, the solar cells (or panels) and rechargeable batteries are used in these systems.
    Antennas are present in both satellite and earth station. 
Satellite antennas perform two types of functions. Those are receiving of signals, which are coming from earth station and transmitting signals to one or more earth stations based on the requirement. In other words, the satellite antennas receive uplink signals and transmit downlink signals.'
                imgsrc={transmissiontower}
              />

              <AlternateBlogCard
                title='Transponders'
                content='The subsystem, which provides the connecting link between transmitting and receiving antennas of a satellite is known as Transponder. It is one of the most important subsystem of space segment subsystems.
Transponder performs the functions of both transmitter and receiver (Responder) in a satellite. Hence, the word ‘Transponder’ is obtained by the combining few letters of two words, Transmitter (Trans) and Responder (ponder).'
                imgsrc='https://images.techhive.com/images/article/2015/09/satellite_space_communication-100613561-orig.jpg'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Subsystems;
