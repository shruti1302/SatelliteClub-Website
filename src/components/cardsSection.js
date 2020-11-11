import React from 'react';
import Card from './Card';

const cardsSection = () => {
  return (
    <section className='cards-section content-section text-center'>
      <div className='container'>
        <div className='row'>
          <div className='col-11 content-container'>
            <div className='section-heading mb-5'>Activities</div>

            <div className='card-group'>
              <Card
                cardImage='https://www.esa.int/var/esa/storage/images/19716864-11-eng-GB/ESA_root_pillars.jpg'
                cardTitle='We intend to develop a CubeSat satellite'
                cardContent='
A CubeSat (U-class spacecraft) is a type of miniaturized satellite for space research that is made up of
multiples of 10 cm × 10 cm × 10 cm cubic unit.CubeSats have a mass of no more than 1.33 kilograms (2.9
lb) per unit and often use commercial off-the-shelf (COTS) components for their electronics and structure. '
              />
              <Card
                cardImage='https://www.esa.int/var/esa/storage/images/19716864-11-eng-GB/ESA_root_pillars.jpg'
                cardTitle='Training Sessions'
                cardContent='Regular online sessions by university faculties to gain expertise in design and development of the
satellite. Conducting training sessions for designing the 3D models of satellites. Events and Seminar for giving awareness about latest trends in space technology.'
              />

              <Card
                cardImage='https://www.esa.int/var/esa/storage/images/19716864-11-eng-GB/ESA_root_pillars.jpg'
                cardTitle="Student\'s Profile"
                cardContent='Satellite team provides a unique, hands-on opportunity for students from a different semesters in the
college to collaborate in a meaningful way for the purpose of advancing space technology. Most importantly,students will actually be launching technologically advanced satellites into space.
This club will set a new bar for student-built technology by demonstrating an actual satellite built and
launched by students during their college years itself. '
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default cardsSection;
