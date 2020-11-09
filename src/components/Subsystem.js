import React, { useEffect } from 'react';
import CommonSection from './commonSection';
import Navbar from './Navbar';
import ContentSection from './contentSection';
import TypeCard from './TypeCard';

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
      navbar.classList.add('bg-opaque');
      navbar.classList.remove('bg-transparent');
    }
  };
  return (
    <>
      <Navbar />
      <CommonSection
        title='Subsystems'
        imgsrc='https://i.pinimg.com/originals/57/36/f4/5736f49872c3f76864a1e4af9109acc9.gif'
      />
      <ContentSection
        title='Lrem Ipsum'
        content='Nulla aliquet porttitor lacus luctus accumsan. Nibh ipsum consequat nisl vel pretium lectus. Nec dui nunc mattis enim ut tellus elementum sagittis vitae. Ullamcorper a lacus vestibulum sed arcu non odio. Eget nunc lobortis mattis aliquam faucibus. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus. Morbi tempus iaculis urna id. Leo a diam sollicitudin tempor id. Aliquam purus sit amet luctus. Auctor augue mauris augue neque gravida in fermentum et sollicitudin. Nulla facilisi morbi tempus iaculis urna id volutpat. Tincidunt eget nullam non nisi est sit amet.'
      />
      <TypeCard
        title='Eget nunc'
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
        image="url('https://datamakespossible.westerndigital.com/wp-content/uploads/2019/08/satellite_data_outer_space_001.jpg')"
      />
      <TypeCard
        title='Imaging'
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
        image="url('https://images.tmcnet.com/tmc/misc/articles/image/2018-apr/1371908675-bigstock--satellite-supersize.jpg')"
      />
      <TypeCard
        title='Morbi tempus '
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
        title='Nulla aliquet'
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
    </>
  );
};

export default Subsystems;
