import React, { useEffect } from 'react';
import CommonSection from './commonSection';
import Navbar from './Navbar';
import ContentSection from './contentSection';
import TypeCard from './TypeCard';

import bg1 from '../images/bg1.png';

const Satellite = () => {
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
      navbar.classList.add('bg-opaque');
      navbar.classList.remove('bg-transparent');
    }
  };

  return (
    <>
      <Navbar color='#1d5674' />

      <CommonSection
        title='SATELLITES'
        imgsrc='https://i.pinimg.com/originals/56/d4/a5/56d4a5174adc7d8d30bda7d73b514d56.gif'
      />
      <ContentSection
        title='Lrem Ipsum'
        content='Nulla aliquet porttitor lacus luctus accumsan. Nibh ipsum consequat nisl vel pretium lectus. Nec dui nunc mattis enim ut tellus elementum sagittis vitae. Ullamcorper a lacus vestibulum sed arcu non odio. Eget nunc lobortis mattis aliquam faucibus. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus. Morbi tempus iaculis urna id. Leo a diam sollicitudin tempor id. Aliquam purus sit amet luctus. Auctor augue mauris augue neque gravida in fermentum et sollicitudin. Nulla facilisi morbi tempus iaculis urna id volutpat. Tincidunt eget nullam non nisi est sit amet.

'
      />

      {/* <image src={bg1} /> */}

      <TypeCard
        title='Environmental Satellites'
        content='Nulla aliquet porttitor lacus luctus accumsan. Nibh ipsum
                    consequat nisl vel pretium lectus. Nec dui nunc mattis enim
                    ut tellus elementum sagittis vitae. Ullamcorper a lacus
                    vestibulum sed arcu non odio. Eget nunc lobortis mattis
                    aliquam faucibus. Risus nullam eget felis eget nunc lobortis
                    mattis aliquam faucibus. Morbi tempus iaculis urna id. Leo a
                    diam sollicitudin tempor id. Aliquam purus sit amet luctus.
                    Auctor augue mauris augue neque gravida in fermentum et
                    sollicitudin. Nulla facilisi morbi tempus iaculis urna id
                    volutpat. Tincidunt eget nullam non nisi est sit amet.'
        image="url('https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2015/01/picasso_cubesat2/15211126-1-eng-GB/PICASSO_CubeSat_article.jpg')"
      />
      <TypeCard
        title='Defence Satellites'
        content='Nulla aliquet porttitor lacus luctus accumsan. Nibh ipsum
                    consequat nisl vel pretium lectus. Nec dui nunc mattis enim
                    ut tellus elementum sagittis vitae. Ullamcorper a lacus
                    vestibulum sed arcu non odio. Eget nunc lobortis mattis
                    aliquam faucibus. Risus nullam eget felis eget nunc lobortis
                    mattis aliquam faucibus. Morbi tempus iaculis urna id. Leo a
                    diam sollicitudin tempor id. Aliquam purus sit amet luctus.
                    Auctor augue mauris augue neque gravida in fermentum et
                    sollicitudin. Nulla facilisi morbi tempus iaculis urna id
                    volutpat. Tincidunt eget nullam non nisi est sit amet.'
        image="url('https://mpg.igp.ethz.ch/research/satellite-mission/_jcr_content/par/fullwidthimage/image.imageformat.fullwidth.690196997.jpg')"
      />
      <TypeCard
        title='Earth Observing Satellites'
        content='Nulla aliquet porttitor lacus luctus accumsan. Nibh ipsum
                    consequat nisl vel pretium lectus. Nec dui nunc mattis enim
                    ut tellus elementum sagittis vitae. Ullamcorper a lacus
                    vestibulum sed arcu non odio. Eget nunc lobortis mattis
                    aliquam faucibus. Risus nullam eget felis eget nunc lobortis
                    mattis aliquam faucibus. Morbi tempus iaculis urna id. Leo a
                    diam sollicitudin tempor id. Aliquam purus sit amet luctus.
                    Auctor augue mauris augue neque gravida in fermentum et
                    sollicitudin. Nulla facilisi morbi tempus iaculis urna id
                    volutpat. Tincidunt eget nullam non nisi est sit amet.'
        image="url('https://www.nasa.gov/sites/default/files/iss038e046586_0.jpg')"
      />
      <TypeCard
        title='Environmental Satellites'
        content='Nulla aliquet porttitor lacus luctus accumsan. Nibh ipsum
                    consequat nisl vel pretium lectus. Nec dui nunc mattis enim
                    ut tellus elementum sagittis vitae. Ullamcorper a lacus
                    vestibulum sed arcu non odio. Eget nunc lobortis mattis
                    aliquam faucibus. Risus nullam eget felis eget nunc lobortis
                    mattis aliquam faucibus. Morbi tempus iaculis urna id. Leo a
                    diam sollicitudin tempor id. Aliquam purus sit amet luctus.
                    Auctor augue mauris augue neque gravida in fermentum et
                    sollicitudin. Nulla facilisi morbi tempus iaculis urna id
                    volutpat. Tincidunt eget nullam non nisi est sit amet.'
        image="url('https://www.cgi-group.co.uk/sites/default/files/styles/hero_banner/public/italy_0.jpg?itok=1PYz25_A')"
      />
      {/* <TypeCard
        title='Earth Observing Satellites'
        content='Nulla aliquet porttitor lacus luctus accumsan. Nibh ipsum
                    consequat nisl vel pretium lectus. Nec dui nunc mattis enim
                    ut tellus elementum sagittis vitae. Ullamcorper a lacus
                    vestibulum sed arcu non odio. Eget nunc lobortis mattis
                    aliquam faucibus. Risus nullam eget felis eget nunc lobortis
                    mattis aliquam faucibus. Morbi tempus iaculis urna id. Leo a
                    diam sollicitudin tempor id. Aliquam purus sit amet luctus.
                    Auctor augue mauris augue neque gravida in fermentum et
                    sollicitudin. Nulla facilisi morbi tempus iaculis urna id
                    volutpat. Tincidunt eget nullam non nisi est sit amet.'
      />
      <TypeCard
        title='Weather Satellites'
        content='Nulla aliquet porttitor lacus luctus accumsan. Nibh ipsum
                    consequat nisl vel pretium lectus. Nec dui nunc mattis enim
                    ut tellus elementum sagittis vitae. Ullamcorper a lacus
                    vestibulum sed arcu non odio. Eget nunc lobortis mattis
                    aliquam faucibus. Risus nullam eget felis eget nunc lobortis
                    mattis aliquam faucibus. Morbi tempus iaculis urna id. Leo a
                    diam sollicitudin tempor id. Aliquam purus sit amet luctus.
                    Auctor augue mauris augue neque gravida in fermentum et
                    sollicitudin. Nulla facilisi morbi tempus iaculis urna id
                    volutpat. Tincidunt eget nullam non nisi est sit amet.'
      />
      <TypeCard
        title='Defence Satellites'
        content='Nulla aliquet porttitor lacus luctus accumsan. Nibh ipsum
                    consequat nisl vel pretium lectus. Nec dui nunc mattis enim
                    ut tellus elementum sagittis vitae. Ullamcorper a lacus
                    vestibulum sed arcu non odio. Eget nunc lobortis mattis
                    aliquam faucibus. Risus nullam eget felis eget nunc lobortis
                    mattis aliquam faucibus. Morbi tempus iaculis urna id. Leo a
                    diam sollicitudin tempor id. Aliquam purus sit amet luctus.
                    Auctor augue mauris augue neque gravida in fermentum et
                    sollicitudin. Nulla facilisi morbi tempus iaculis urna id
                    volutpat. Tincidunt eget nullam non nisi est sit amet.'
      /> */}
    </>
  );
};

export default Satellite;
