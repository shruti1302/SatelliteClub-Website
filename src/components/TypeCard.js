import React, { useEffect } from 'react';

const TypeCard = (props) => {
  return (
    <>
      <div className='card type-card flip-card mx-auto mr-3'>
        <div className='flip-card-inner'>
          <div
            className='flip-card-front'
            style={{
              backgroundImage: `${props.image}`,
              // backgroundImage: `url(${require(`${props.image}`)})`,
            }}
          >
            <div className='layer-card'>
              <div className='type-card-title'>{props.title}</div>
            </div>
          </div>
          <div class='flip-card-back'>
            <div className='type-card-content'> {props.content}</div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default TypeCard;
