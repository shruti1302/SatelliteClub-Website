import React from 'react';

const cardsSection = (props) => {
  return (
    <div className='card main-card mr-3'>
      <img src={props.cardImage} className='card-img-top card-img' alt='...' />
      <div className='card-body px-3'>
        <h5 className='card-title'>{props.cardTitle}</h5>
        <p className='card-text'>{props.cardContent}</p>
      </div>
    </div>
  );
};

export default cardsSection;
