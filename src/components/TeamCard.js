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
        <div className='profile-link mt-2 text-right'>
          <span>
            {props.linkedin}
            {props.muj}
            {/* <a href={props.linkedin} target='_blank'>
              <img src='https://img.icons8.com/color/36/000000/linkedin-circled.png' />
            </a> */}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
