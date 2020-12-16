import React, { useEffect } from 'react';
import MainSection from './mainSection';
import AboutSection from './aboutSection';
import CardsSection from './CardsSection';
import Navbar from './Navbar';
import ObjectiveSection from './ObjectiveSection';
import ContactSection from './Contact';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

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
      navbar.classList.add('bg-transparent');
      navbar.classList.remove('bg-opaque');
    }
  };

  return (
    <>
      <Navbar />
      <MainSection />
      <AboutSection />
      <ObjectiveSection
        objective1=' Development of payloads that may comprise of detectors,
              electronics, and associated algorithms, which can be an
              experimental piggyback payload on the on-going (Small or
              operational) satellite projects of ISRO.'
        objective2='Empowering the Satellite Team with the skills to develop the
              Satellite.'
        objective3=' Design, fabricate, test the satellite Bus & Payload, and deliver
              the integrated spacecraft for launch.'
        objective4=' Learn to use skills like project management, event planning and
              managing funds.'
        objective5='Encourage research and development in miniaturized satellites,
              establishing a communication link between the satellite and ground
              station'
      />

      <CardsSection />
      <ContactSection />
    </>
  );
};

export default Home;

// TO BE DONE:
// 1. Responsive
// 2. Loading Page
// 3. Link forms to database
// 4. Add a section to satellite page
// 5. Change main background
// 6. Navbar issues
