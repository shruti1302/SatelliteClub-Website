import React, { useState } from 'react';

const Card = (props) => {
  const [img, setImg] = useState(`url(${props.bgImage})`);
  return (
    // <div className='card main-card mr-3'>
    //   <img src={props.cardImage} className='card-img-top card-img' alt='...' />
    //   <div className='card-body px-3'>
    //     <h5 className='card-title'>{props.cardTitle}</h5>
    //     <p className='card-text'>{props.cardContent}</p>
    //   </div>
    // </div>
    <div
      className='activity-card'
      style={{
        backgroundImage: img,
      }}
    >
      <div className='card-layer'>
        <div className='activity-card-title'>{props.cardTitle}</div>
        <div className='activity-card-text'>{props.cardContent}</div>
      </div>
    </div>
  );
};

export default Card;
