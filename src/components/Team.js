import React, { useEffect } from 'react';
import Navbar from './Navbar';
import TeamCard from './TeamCard';

import Shruti from '../images/team/IMG_9181.JPG';
import ManojSir from '../images/team/Manoj R Sir.jpg';
import NamitV from '../images/team/Namit Varshney_President.jpg';
import Asad from '../images/team/Asad_VicePresident.jpeg';
import RajatB from '../images/team/Rajat Baxi.jpg';
import ShreyaA from '../images/team/Shreya_Arora.jpg';
import Pranay from '../images/team/Pranay_Project Manager.jpg';
import Niharika from '../images/team/Niharika Marwah_Subsytem Manager.jpg';
import AmanB from '../images/team/Aman Bhardwaj_Subsystem Head.jpeg';
import KritiV from '../images/team/KritiVaid_SubsystemHead.jpg';
import DebanilC from '../images/team/Debanil Chowdhury - Subsystem Head 4.jpg';
import DhaneshM from '../images/team/DhaneshManiShukla_SubsystemsHead5.jpg';
import RipanjotS from '../images/team/Ripanjot Singh_Design Engineer.jpg';
import AmanG from '../images/team/Aman Gupta (Logistics Head 1) .jpg';
import AdhineshR from '../images/team/Sai Adhinesh Reddy T_ContentWriter.jpg';
import HarshS from '../images/team/Harsh Sharma_Media Head.jpg';

const Team = () => {
  useEffect(() => {
    let navbar = document.querySelector('.navbar-fixed-top');
    navbar.classList.remove('bg-transparent');
    navbar.classList.add('bg-opaque');
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    //
    var top =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    let navbar = document.querySelector('.navbar-fixed-top');
    if (top > 2) {
      navbar.classList.add('bg-opaque');
      navbar.classList.remove('bg-transparent');
    } else {
      navbar.classList.add('bg-opaque');
      navbar.classList.remove('bg-transparent');
    }
  };
  return (
    <>
      <Navbar />

      <section className='team-section content-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-10 mx-auto'>
              <div className='section-heading mb-5 text-center'>OUR TEAM</div>

              <div className='team-cards-container'>
                <div className='row mb-5'>
                  <div className='member-heading text-center mb-4'>Faculty</div>

                  <div className='col-xs-12 col-sm-12 col-lg-4 mx-auto'>
                    <TeamCard
                      name='Mr Manoj R'
                      post='Faculty Co-ordinator'
                      img={ManojSir}
                    />
                  </div>
                </div>
                {/* <div className='row mt-5'> */}
                <div className='member-heading text-center my-4'>
                  Core Committee
                </div>
                <div className='card-group'>
                  {/* <div className='col-3 mb-4'> */}
                  <TeamCard
                    name='Namit Varshney'
                    post='President'
                    img={NamitV}
                  />
                  {/* </div> */}
                  {/* <div className='col-3 mb-4'> */}
                  <TeamCard
                    name='Asad Shaikh'
                    post='Vice President'
                    img={Asad}
                  />
                  {/* </div> */}
                  {/* <div className='col-3 mb-4'> */}
                  <TeamCard
                    name='Rajat Baxi'
                    post='General Secretary'
                    img={RajatB}
                  />
                  {/* </div> */}
                  {/* <div className='col-3 mb-4'> */}
                  <TeamCard
                    name='Shreya Arora'
                    post='Joint Secretary'
                    img={ShreyaA}
                  />
                </div>
                <div className='card-group'>
                  {/* <div className='col-3 mb-4'> */}
                  <TeamCard name='Mayank Jhanwar' post='Sponsorship Head' />
                  {/* </div> */}
                  {/* <div className='col-3 mb-4'> */}
                  <TeamCard
                    name='Pranay Vithlani'
                    post='Project Manager'
                    img={Pranay}
                  />
                  <TeamCard
                    name='Niharika Marwah'
                    post='Subsystems Manager'
                    img={Niharika}
                  />
                  <TeamCard
                    name='Aman Bhardwaj'
                    post='Subsystems Head 1'
                    img={AmanB}
                  />
                  {/* </div> */}
                </div>
                <div className='card-group'>
                  {/* <div className='col-3 mb-4'> */}
                  <TeamCard
                    name='Kriti Vaid'
                    post='Subsystems Head 2'
                    img={KritiV}
                  />

                  <TeamCard name='Animesh Dhar' post='Subsystems Head 3' />
                  <TeamCard
                    name='Debanil Chowdhury'
                    post='Subsystems Head 4'
                    img={DebanilC}
                  />
                  <TeamCard
                    name='Dhanesh Mani Shukla'
                    post='Subsystems Head 5'
                    img={DhaneshM}
                  />
                  {/* </div> */}
                </div>
                <div className='card-group'>
                  <TeamCard
                    name='Design Engineer'
                    post='Ripanjot Singh'
                    img={RipanjotS}
                  />

                  <TeamCard
                    name='Nitya Jagadam'
                    post='Public Relations Head 1'
                  />

                  <TeamCard name='Saurabh Kumar' post='Treasurer' />

                  <TeamCard name='Mansi Wadhwa' post='Events Head' />
                </div>
                <div className='card-group'>
                  <TeamCard
                    name='Aman Kumar Gupta'
                    post='Logistics Head 1'
                    img={AmanG}
                  />

                  <TeamCard name='Sourav Nayak' post='Logistic Head 2' />

                  <TeamCard
                    name='Sai Adhinesh Reddy'
                    post='Content Writer'
                    img={AdhineshR}
                  />

                  <TeamCard
                    name='Harsh Sharma'
                    post='Media Head'
                    img={HarshS}
                  />
                </div>
                <div className='row'>
                  <div className='col-4 mx-auto'>
                    <TeamCard
                      name='Shruti Agarwal'
                      post='Web Master'
                      img={Shruti}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>
    </>
  );
};

export default Team;
