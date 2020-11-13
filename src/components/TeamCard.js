import React from 'react';

const TeamCard = (props) => {
  return (
    <div className='member-card card mx-2 my-4'>
      <div className='member-img-container'>
        <img src={props.img} alt='' className='member-img' />
      </div>
      <div className='member-content-container'>
        <div className='member-name mb-1'>{props.name}</div>
        <div className='member-post'>{props.post}</div>
      </div>
    </div>
  );
};

export default TeamCard;
