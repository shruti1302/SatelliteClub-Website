import React, { useEffect } from 'react';
// import CommonSection from './commonSection';
import Navbar from './Navbar';
import ContentSection from './contentSection';
import TypeCard from './TypeCard';
import SatelliteSection from './SatelliteSection';

const Satellite = () => {
  useEffect(() => {
    // window.addEventListener('load', handleLoad);

    window.addEventListener('scroll', handleScroll);

    var viewportHeader = document.querySelector('.viewport-header');
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
    // let satelliteHeading = document.querySelector('.satellite');
    // let whatisHeading = document.querySelector('.get-to-know');

    // if (top > 100) {
    //   whatisHeading.style.fontSize = '2rem';
    //   document.querySelector('.satellite').style.fontSize = '5rem';
    // } else {
    //   whatisHeading.style.fontSize = '3.5rem';

    //   document.querySelector('.satellite').style.fontSize = '7.5rem';
    // }
  };

  return (
    <>
      <Navbar />

      <SatelliteSection />

      <ContentSection
        title='Satellite'
        content="A satellite is an object in space that orbits or circles around a bigger object. There are two kinds of satellites: natural (such as the moon orbiting the Earth) or artificial (such as the International Space Station orbiting the Earth). In the context of spaceflight, a satellite is an object that has been intentionally placed into orbit. These objects are called artificial satellites to distinguish them from natural satellites such as Earth's Moon. On 4 October 1957 the Soviet Union launched the world's first artificial satellite, Sputnik 1
"
      />

      <section className='pb-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-10 mx-auto'>
              <div className='card-group'>
                <TypeCard
                  title='Environmental Satellites'
                  content='Satellites are ideal for observing the global environment as they are capable of revealing and monitoring remote environments, hidden features, and even events that the human eye cannot detect. They provide reliable data 24 hours a day, seven days a week on various types of atmospheric, land and oceanic phenomena.'
                  image="url('https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2015/01/picasso_cubesat2/15211126-1-eng-GB/PICASSO_CubeSat_article.jpg')"
                />
                <TypeCard
                  title='Defence Satellites'
                  content='A military satellite is an artificial satellite used for a military purpose. The most common missions are intelligence gathering, navigation and military communications. The first military satellites were photographic reconnaissance missions. As of 2013, there are 950 satellites of all types in Earth orbit.'
                  image="url('https://mpg.igp.ethz.ch/research/satellite-mission/_jcr_content/par/fullwidthimage/image.imageformat.fullwidth.690196997.jpg')"
                />
                <TypeCard
                  title='Earth Observing Satellites'
                  content='Collecting and interpreting data is essential for the correct management of
natural resources and developing sustainable economies. Analysing human
impact on agriculture, forest, geology and the environment is crucial in order
to improve the population’s living conditions. These satellites can be used for capturing images of the Earth, Earth Mapping and Astronomy.'
                  image="url('https://www.nasa.gov/sites/default/files/iss038e046586_0.jpg')"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Satellite;
