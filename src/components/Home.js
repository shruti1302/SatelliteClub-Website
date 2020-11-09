import React, { useEffect } from 'react';
import MainSection from './mainSection';
import AboutSection from './aboutSection';
import ContentSection from './contentSection';
import CardsSection from './cardsSection';
import Navbar from './Navbar';

const Home = () => {
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
      navbar.classList.add('bg-transparent');
      navbar.classList.remove('bg-opaque');
    }
  };
  return (
    <>
      <Navbar color='rbga(0,0,0,0.01)' />
      <MainSection />
      <AboutSection />
      <ContentSection
        title='Lorem Ipsum'
        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Eu lobortis elementum nibh tellus molestie nunc non blandit
                massa. Nullam non nisi est sit. 
                Fames ac turpis egestas maecenas pharetra convallis posuere
                morbi leo. Aenean euismod elementum nisi quis eleifend quam
                adipiscing vitae proin. Velit euismod in pellentesque massa
                placerat duis ultricies lacus sed. Excepteur sint occaecat
                cupidatat non proident.'
      />

      <CardsSection />
    </>
  );
};

export default Home;
