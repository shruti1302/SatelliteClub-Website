import React from 'react';
import MainSection from './mainSection';
import AboutSection from './aboutSection';
import PlanSection from './planSection';
import CardsSection from './cardsSection';

const Home = () => {
  return (
    <>
      <MainSection />
      <AboutSection />
      <PlanSection
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
