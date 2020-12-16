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
import TarunR from '../images/team/7F061EF6-6DBB-4CD5-AAEA-D41D52A12671 - tarun rathod.jpeg';
import SouravN from '../images/team/20201107_202530 - Sourav Nayak.jpg';
import AkashK from '../images/team/AakashKarhale_Member - Aakash Karhale.jpg';
import AnimeshD from '../images/team/Animesh_SubsystemsHead - Animesh Dhar.jpeg';
import ShubhamJ from '../images/team/IMG_20200224_182525 - Shubham Jha.jpg';
import AbhinavC from '../images/team/IMG_20201116_073926 - Abhinav Chauhan.jpg';
import MansiW from '../images/team/MansiWadhwa_EventsHead - Mansi Wadhwa.jpg';
import MayankJ from '../images/team/MayankJhanwar_SponsorshipHead - Mayank Maheshwari.jpg';
import Nitya from '../images/team/photo - Nitya.jpeg';
import SairajK from '../images/team/Sairaj_member - Sairaj Kulkarni.jpg';
import SaurabhK from '../images/team/Saurabh Kumar -Treasurer - Saurabh Kumar.jpg';
import AkashSP from '../images/team/SP AKASH_MEMBER - Akash SP.jpg';
import mujlogo from '../images/Manipal-Logo.png';
import Anand from '../images/team/Anand.jpeg';
import Samarth from '../images/team/Samarth.jpeg';
import JeetD from '../images/team/JeetDhokiya.jpeg';

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

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
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-10 mx-auto'>
              <div className='section-heading mb-5 text-center'>OUR TEAM</div>

              <div className='team-cards-container'>
                <div className='row mb-5'>
                  <div className='member-heading text-center mb-4'>Faculty</div>

                  <div className='col-xs-4 col-sm-4 col-lg-3 mx-auto'>
                    <TeamCard
                      name='Mr Manoj R'
                      post='Faculty Co-ordinator'
                      img={ManojSir}
                      linkedin={[
                        <a
                          href='https://www.linkedin.com/in/manoj-r-690b1811/'
                          target='_blank'
                        >
                          <img src='https://img.icons8.com/color/36/000000/linkedin-circled.png' />
                        </a>,
                      ]}
                      muj={[
                        <a
                          href='https://jaipur.manipal.edu/muj/academics/institution-list/foe/schools-faculty/faculty-list/manoj-r-cse.html'
                          target='_blank'
                        >
                          <img src={mujlogo} className='mujlogo ml-1' />
                        </a>,
                      ]}
                    />
                  </div>
                </div>

                <div className='member-heading text-center my-4'>
                  Core Committee
                </div>

                <div className='row'>
                  <div className='col-lg-3 col-sm-4 col-xs-6'>
                    <TeamCard
                      name='Namit Varshney'
                      post='President'
                      img={NamitV}
                      linkedin={[
                        <a
                          href='https://www.linkedin.com/in/namit-varshney'
                          target='_blank'
                        >
                          <img src='https://img.icons8.com/color/36/000000/linkedin-circled.png' />
                        </a>,
                      ]}
                    />
                  </div>
                  <div className='col-lg-3 col-sm-4 col-xs-6'>
                    <TeamCard
                      name='Asad Shaikh'
                      post='Vice President'
                      img={Asad}
                      linkedin={[
                        <a
                          href='https://www.linkedin.com/in/asad-shaikh-7ab9941a3'
                          target='_blank'
                        >
                          <img src='https://img.icons8.com/color/36/000000/linkedin-circled.png' />
                        </a>,
                      ]}
                    />
                  </div>
                  <div className='col-lg-3 col-sm-4 col-xs-6'>
                    <TeamCard
                      name='Rajat Baxi'
                      post='General Secretary'
                      img={RajatB}
                      linkedin={[
                        <a
                          href='https://www.linkedin.com/in/rajat-baxi-68041716a/'
                          target='_blank'
                        >
                          <img src='https://img.icons8.com/color/36/000000/linkedin-circled.png' />
                        </a>,
                      ]}
                    />
                  </div>
                  <div className='col-lg-3 col-sm-4 col-xs-6'>
                    <TeamCard
                      name='Shreya Arora'
                      post='Joint Secretary'
                      img={ShreyaA}
                      linkedin={[
                        <a href='#'>
                          <img src='https://img.icons8.com/color/36/000000/linkedin-circled.png' />
                        </a>,
                      ]}
                    />
                  </div>
                  <div className='col-lg-3 col-sm-4 col-xs-6'>
                    <TeamCard
                      name='Mayank Jhanwar'
                      post='Sponsorship Head'
                      img={MayankJ}
                      linkedin={[
                        <a
                          href='https://www.linkedin.com/in/mayank-jhanwar/'
                          target='_blank'
                        >
                          <img src='https://img.icons8.com/color/36/000000/linkedin-circled.png' />
                        </a>,
                      ]}
                    />
                  </div>
                  <div className='col-lg-3 col-sm-4 col-xs-6'>
                    <TeamCard
                      name='Pranay Vithlani'
                      post='Project Manager'
                      img={Pranay}
                      linkedin={[
                        <a
                          href='https://www.linkedin.com/in/pranay-vithlani-481425190'
                          target='_blank'
                        >
                          <img src='https://img.icons8.com/color/36/000000/linkedin-circled.png' />
                        </a>,
                      ]}
                    />
                  </div>
                  <div className='col-lg-3 col-sm-4 col-xs-6'>
                    <TeamCard
                      name='Niharika Marwah'
                      post='Subsystems Manager'
                      img={Niharika}
                      linkedin={[
                        <a
                          href='https://www.linkedin.com/in/niharika-marwah-363b92197'
                          target='_blank'
                        >
                          <img src='https://img.icons8.com/color/36/000000/linkedin-circled.png' />
                        </a>,
                      ]}
                    />
                  </div>
                  <div className='col-lg-3 col-sm-4 col-xs-6'>
                    <TeamCard
                      name='Aman Bhardwaj'
                      post='Subsystems Head 1'
                      img={AmanB}
                      linkedin={[
                        <a href='#'>
                          <img src='https://img.icons8.com/color/36/000000/linkedin-circled.png' />
                        </a>,
                      ]}
                    />
                  </div>
                  <div className='col-lg-3 col-sm-4 col-xs-6'>
                    <TeamCard
                      name='Kriti Vaid'
                      post='Subsystems Head 2'
                      img={KritiV}
                      linkedin={[
                        <a
                          href='https://www.linkedin.com/in/kriti-vaid-0bb8071b2'
                          target='_blank'
                        >
                          <img src='https://img.icons8.com/color/36/000000/linkedin-circled.png' />
                        </a>,
                      ]}
                    />
                  </div>
                  <div className='col-lg-3 col-sm-4 col-xs-6'>
                    <TeamCard
                      name='Animesh Dhar'
                      post='Subsystems Head 3'
                      img={AnimeshD}
                      linkedin={[
                        <a href='#'>
                          <img src='https://img.icons8.com/color/36/000000/linkedin-circled.png' />
                        </a>,
                      ]}
                    />
                  </div>
                  <div className='col-lg-3 col-sm-4 col-xs-6'>
                    <TeamCard
                      name='Debanil Chowdhury'
                      post='Subsystems Head 4'
                      img={DebanilC}
                      linkedin={[
                        <a
                          href='https://www.linkedin.com/in/cdebanil/'
                          target='_blank'
                        >
                          <img src='https://img.icons8.com/color/36/000000/linkedin-circled.png' />
                        </a>,
                      ]}
                    />
                  </div>
                  <div className='col-lg-3 col-sm-4 col-xs-6'>
                    <TeamCard
                      name='Dhanesh Mani Shukla'
                      post='Subsystems Head 5'
                      img={DhaneshM}
                      linkedin={[
                        <a
                          href='https://www.linkedin.com/in/dhanesh-shukla-6b7186190'
                          target='_blank'
                        >
                          <img src='https://img.icons8.com/color/36/000000/linkedin-circled.png' />
                        </a>,
                      ]}
                    />
                  </div>
                  <div className='col-lg-3 col-sm-4 col-xs-6'>
                    <TeamCard
                      name='Design Engineer'
                      post='Ripanjot Singh'
                      img={RipanjotS}
                      linkedin={[
                        <a
                          href='https://www.linkedin.com/in/ripanjot-singh-5531171a1'
                          target='_blank'
                        >
                          <img src='https://img.icons8.com/color/36/000000/linkedin-circled.png' />
                        </a>,
                      ]}
                    />
                  </div>
                  <div className='col-lg-3 col-sm-4 col-xs-6'>
                    <TeamCard
                      name='Nitya Jagadam'
                      post='Public Relations Head 1'
                      img={Nitya}
                      linkedin={[
                        <a
                          href='https://www.linkedin.com/in/nitya-jagadam-64163416b/'
                          target='_blank'
                        >
                          <img src='https://img.icons8.com/color/36/000000/linkedin-circled.png' />
                        </a>,
                      ]}
                    />
                  </div>
                  <div className='col-lg-3 col-sm-4 col-xs-6'>
                    <TeamCard
                      name='Shubham Jha'
                      post='Public Relations Head 2'
                      img={ShubhamJ}
                      linkedin={[
                        <a
                          href='https://www.linkedin.com/in/shubham-jha-9246b2111'
                          target='_blank'
                        >
                          <img src='https://img.icons8.com/color/36/000000/linkedin-circled.png' />
                        </a>,
                      ]}
                    />
                  </div>
                  <div className='col-lg-3 col-sm-4 col-xs-6'>
                    <TeamCard
                      name='Saurabh Kumar'
                      post='Treasurer'
                      img={SaurabhK}
                      linkedin={[
                        <a
                          href='https://www.linkedin.com/in/saurabh-kumar-5501351a1'
                          target='_blank'
                        >
                          <img src='https://img.icons8.com/color/36/000000/linkedin-circled.png' />
                        </a>,
                      ]}
                    />
                  </div>
                  <div className='col-lg-3 col-sm-4 col-xs-6'>
                    <TeamCard
                      name='Mansi Wadhwa'
                      post='Events Head'
                      img={MansiW}
                      linkedin={[
                        <a
                          href='https://www.linkedin.com/in/mansi-wadhwa-6ab6191a0'
                          target='_blank'
                        >
                          <img src='https://img.icons8.com/color/36/000000/linkedin-circled.png' />
                        </a>,
                      ]}
                    />
                  </div>
                  <div className='col-lg-3 col-sm-4 col-xs-6'>
                    <TeamCard
                      name='Aman Kumar Gupta'
                      post='Logistics Head 1'
                      img={AmanG}
                      linkedin={[
                        <a
                          href='https://www.linkedin.com/in/aman-gupta-515b931bb'
                          target='_blank'
                        >
                          <img src='https://img.icons8.com/color/36/000000/linkedin-circled.png' />
                        </a>,
                      ]}
                    />
                  </div>
                  <div className='col-lg-3 col-sm-4 col-xs-6'>
                    <TeamCard
                      name='Sourav Nayak'
                      post='Logistic Head 2'
                      img={SouravN}
                      linkedin={[
                        <a href='#'>
                          <img src='https://img.icons8.com/color/36/000000/linkedin-circled.png' />
                        </a>,
                      ]}
                    />
                  </div>
                  <div className='col-lg-3 col-sm-4 col-xs-6'>
                    <TeamCard
                      name='Sai Adhinesh Reddy'
                      post='Content Writer'
                      img={AdhineshR}
                      linkedin={[
                        <a href='#'>
                          <img src='https://img.icons8.com/color/36/000000/linkedin-circled.png' />
                        </a>,
                      ]}
                    />
                  </div>
                  <div className='col-lg-3 col-sm-4 col-xs-6'>
                    <TeamCard
                      name='Harsh Sharma'
                      post='Media Head'
                      img={HarshS}
                      linkedin={[
                        <a
                          href='http://www.linkedin.com/in/harsh-sharma-210b481a7'
                          target='_blank'
                        >
                          <img src='https://img.icons8.com/color/36/000000/linkedin-circled.png' />
                        </a>,
                      ]}
                    />
                  </div>
                  <div className='col-lg-3 col-sm-4 col-xs-6'>
                    <TeamCard
                      name='Shruti Agarwal'
                      post='Web Master'
                      img={Shruti}
                      linkedin={[
                        <a
                          href='http://www.linkedin.com/in/shrutiagarwal13'
                          target='_blank'
                        >
                          <img src='https://img.icons8.com/color/36/000000/linkedin-circled.png' />
                        </a>,
                      ]}
                    />
                  </div>
                </div>
              </div>

              <div className='member-heading text-center my-4'>Members</div>

              <div className='row'>
                <div className='col-lg-3 col-sm-4 col-xs-6'>
                  <TeamCard name='Tarun Rathod' post='Member' img={TarunR} />
                </div>
                <div className='col-lg-3 col-sm-4 col-xs-6'>
                  <TeamCard name='Aakash Karhale' post='Member' img={AkashK} />
                </div>
                <div className='col-lg-3 col-sm-4 col-xs-6'>
                  <TeamCard
                    name='Abhinav Chauhan'
                    post='Member'
                    img={AbhinavC}
                  />
                </div>
                <div className='col-lg-3 col-sm-4 col-xs-6'>
                  <TeamCard
                    name='Sairaj Kulkarni'
                    post='Member'
                    img={SairajK}
                  />
                </div>
                <div className='col-lg-3 col-sm-4 col-xs-6'>
                  <TeamCard name='Akash SP' post='Member' img={AkashSP} />
                </div>
                <div className='col-lg-3 col-sm-4 col-xs-6'>
                  <TeamCard name='Anand Panwal' post='Member' img={Anand} />
                </div>
                <div className='col-lg-3 col-sm-4 col-xs-6'>
                  <TeamCard name='Samarth Salim' post='Member' img={Samarth} />
                </div>
                <div className='col-lg-3 col-sm-4 col-xs-6'>
                  <TeamCard name='Jeet Dhokiya' post='Member' img={JeetD} />
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
        {/* </div> */}
        {/* </div> */}
      </section>
    </>
  );
};

export default Team;
