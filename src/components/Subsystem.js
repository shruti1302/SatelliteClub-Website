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
import nanosatellite from '../images/NanoSatellite.jpg';

const Subsystems = () => {
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.scrollTo(0, 0);
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
        <div className='container-fluid'>
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
                title='Electric Power Subsystem'
                content="The Electric Power Subsystem (EPS) of a satellite is a heavy and 
expensive subsystem. It is often about 25% of the weight and 25% of the cost of
a spacecraft.The electrical power subsystem (EPS) provides, stores, distributes and
control spacecraft's electrical power. In order to size each component of this 
subsystem we must identify the electrical power loads for mission operations at 
the beginning-of-life, BOL, and end-of-life, EOL. For many missions, the end-of-life
power demands must be reduced to compensate for solar array performanc
e degradation. The average electrical power needed at EOL determines the size of 
the power source so a detailed power budget, at different stages of the
mission, must be done. "
                imgsrc={pic1}
              />
              <AlternateBlogCard
                title=' Attitude Determination and Control Subsystem'
                content='The Attitude Determination and Control System (ADCS) is a crucial subsystem of a spacecraft. It provides pointing accuracy and stability of the payloads and antennas.The first step of the attitude system design process is the definition of guiding requirements based on mission goals. Since mission goals often require more than one mode of operating a spacecraft, the guiding requirements generally begin with a description of the control modes the ADCS is expected to execute to meet those goals. The final form of ADCS requirements and control modes will be the result of iteration; control modes are designed to achieve certain sets of requirements, and better understanding of the actual needs of the mission often results from having these modes of controlling the spacecraft well defined. This iteration takes place in a trade space where a single set of ADCS hardware must be used in different ways to meet different sets of requirements. The ADCS will also be dependent on certain other subsystems, such as the power and structural subsystems. '
                imgsrc={ttcm}
              />

              <BlogCard
                title='Communication and Ground Station Subsystem'
                content='The primary goal of the communication subsystem is to provide a link to relay data findings and send commands to and from the satellite.
Communication subsystem will ensure continuous communication between the ground station and the satellite after ejection from the rocket.
The communications subsystem is responsible for ensuring telecommunication between the satellite and another system, which may be either another satellite or a ground station.
The signals used to interchange data are nothing but electromagnetic pulses molded or manipulated by the transmitter in such a way that contains information that the receiver can understand. 
It provides the interface between the spacecraft and ground systems.
Main role of Ground station Subsystem head is to control the satellite payloads and other components. 
The Ground Station is related to communication and tracking of the satellite and main responsibility is to keep a track of all those things that help for communication.
 The ground station has 3 parts that is to be handled:
1. Antenna and its tracking system.
2. Transceivers, LNA and accessories for interfacing antenna with control computer
3. Control computer further connected to the remote server through reliable Intranet connection.
'
                imgsrc={transmissiontower}
              />

              <AlternateBlogCard
                title='Onboard Data Handling Subsystem'
                content='A satellite needs a set of instructions or codes to work in the desired way we want. It needs to communicate with the ground station, take scientific pictures or data & send it back to earth. That’s where onboard data handling subsystems comes in.
Onboard data handling subsystem should implement ADCS algorithm & provide long memory in order to store the scientific data by the payload until the data can be transferred to the ground station. Memory should also be provided to save commands & other information, & flexibility to upload new software even after the launch. It should interpret commands sent from the ground station. Provision should also be made for enough processing capacities in order to make the compression of images captured by the payload, to calculate the attitude control for the altitude determination & control system, and to run the chosen embedded operating system. It should maintain life statuses & give the reference time aboard the satellite.
'
                imgsrc='https://images.techhive.com/images/article/2015/09/satellite_space_communication-100613561-orig.jpg'
              />

              <BlogCard
                title='Imaging Subsystem'
                content='The Imaging Subsystem in a satellite is the part of the satellite that works as its “eyes”. It is what allows the satellite to navigate, it is what allows the satellite to analyze the environment, it is what allows the satellite to detect radiation, objects in its vicinity, etc. 
An Imaging subsystem consists of cameras which are made to be sensitive to various wavelengths of light. The camera captures various images which are processed for various functions like navigation, detection of obstacles or scientific analysis of the environment. If necessary, the on-board computer can also transmit the images to ground station for further analysis.
In this manner, an imaging subsystem is crucial to the functioning of satellite.
'
                imgsrc={nanosatellite}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Subsystems;
