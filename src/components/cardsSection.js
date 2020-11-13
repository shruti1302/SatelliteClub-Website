import React from 'react';
import Card from './Card';
import pic1 from '../images/SatelliteOne.jpg';

const CardsSection = () => {
  return (
    <section className='activity-section content-section text-center'>
      <div className='container'>
        <div className='row'>
          <div className='col-11 content-container'>
            <div className='section-heading mb-5'>Activities</div>

            <div className='row'>
              <div className='col-4'>
                <Card
                  bgImage={pic1}
                  cardTitle='CubeSat'
                  cardContent='
A CubeSat (U-class spacecraft) is a type of miniaturized satellite for space research that is made up of
multiples of 10 cm × 10 cm × 10 cm cubic unit.CubeSats have a mass of no more than 1.33 kilograms (2.9
lb) per unit and often use commercial off-the-shelf (COTS) components for their electronics and structure. '
                />
              </div>
              <div className='col-4'>
                <Card
                  bgImage='https://images.unsplash.com/photo-1473643068424-cd2485e1ae3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
                  cardTitle='Training Sessions'
                  cardContent='Regular online sessions by university faculties to gain expertise in design and development of the
satellite. Conducting training sessions for designing the 3D models of satellites. Events and Seminar for giving awareness about latest trends in space technology.'
                />
              </div>
              <div className='col-4'>
                <Card
                  bgImage='https://images.unsplash.com/photo-1602407294553-6ac9170b3ed0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80'
                  cardTitle={["Student's Profile"]}
                  cardContent='Satellite team provides a unique, hands-on opportunity for students from a different semesters in the
college to collaborate in a meaningful way for the purpose of advancing space technology. Most importantly,students will actually be launching technologically advanced satellites into space.
This club will set a new bar for student-built technology by demonstrating an actual satellite built and
launched by students during their college years itself. '
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className='row'>
              <div className='card-group'>
                <Card
                  cardImage='https://www.esa.int/var/esa/storage/images/19716864-11-eng-GB/ESA_root_pillars.jpg'
                  cardTitle='CubeSat'
                  cardContent='
A CubeSat (U-class spacecraft) is a type of miniaturized satellite for space research that is made up of
multiples of 10 cm × 10 cm × 10 cm cubic unit.CubeSats have a mass of no more than 1.33 kilograms (2.9
lb) per unit and often use commercial off-the-shelf (COTS) components for their electronics and structure. '
                  a='fadeInLeft'
                />

                <Card
                  cardImage='https://www.esa.int/var/esa/storage/images/19716864-11-eng-GB/ESA_root_pillars.jpg'
                  cardTitle='Training Sessions'
                  cardContent='Regular online sessions by university faculties to gain expertise in design and development of the
satellite. Conducting training sessions for designing the 3D models of satellites. Events and Seminar for giving awareness about latest trends in space technology.'
                  a='fadeInUp'
                />
                {/* </div> */}
      {/* <div className='col-4'> */}
      {/* <Card
                  cardImage='https://www.esa.int/var/esa/storage/images/19716864-11-eng-GB/ESA_root_pillars.jpg'
                  cardTitle={["Student's Profile"]}
                  cardContent='Satellite team provides a unique, hands-on opportunity for students from a different semesters in the
college to collaborate in a meaningful way for the purpose of advancing space technology. Most importantly,students will actually be launching technologically advanced satellites into space.
This club will set a new bar for student-built technology by demonstrating an actual satellite built and
launched by students during their college years itself. '
                  a='fadeInRight'
                /> */}
      {/* </div>
              </div>
            </div>
          </div>
          </ */}
      {/* </div>
      </div> */}
    </section>
  );
};

export default CardsSection;
