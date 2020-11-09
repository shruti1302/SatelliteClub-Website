import React, { useEffect } from 'react';

const TypeCard = (props) => {
  return (
    <>
      <div className='type-card flip-card mx-auto'>
        <div className='flip-card-inner'>
          <div
            className='flip-card-front'
            style={{
              backgroundImage: `${props.image}`,
              // backgroundImage: `url(${require(`${props.image}`)})`,
            }}
          >
            <div className='layer-card'>
              <div className='type-card-title'>
                <h1>{props.title}</h1>
              </div>
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
