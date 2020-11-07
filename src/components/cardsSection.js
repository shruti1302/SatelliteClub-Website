import React from 'react';
import Card from './Card';

const cardsSection = () => {
  return (
    <section className='cards-section content-section text-center'>
      <div className='container'>
        <div className='row'>
          <div className='col-10 content-container'>
            <div className='section-heading mb-5'>Section Title</div>

            <div className='row'>
              <div className='col-4'>
                <Card
                  cardImage='https://www.esa.int/var/esa/storage/images/19716864-11-eng-GB/ESA_root_pillars.jpg'
                  cardTitle='Card Title1'
                  cardContent='This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.'
                />
              </div>
              <div className='col-4'>
                <Card
                  cardImage='https://www.esa.int/var/esa/storage/images/19716864-11-eng-GB/ESA_root_pillars.jpg'
                  cardTitle='Card Title1'
                  cardContent='This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.'
                />
              </div>
              <div className='col-4'>
                <Card
                  cardImage='https://www.esa.int/var/esa/storage/images/19716864-11-eng-GB/ESA_root_pillars.jpg'
                  cardTitle='Card Title1'
                  cardContent='This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default cardsSection;
