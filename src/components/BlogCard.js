import React from 'react';

const BlogCard = (props) => {
  return (
    <>
      <div className='blog-card mx-auto mb-5 container'>
        <div className='row'>
          <div className='col-lg-8 col-xs-12 col-sm-12 col-md-12 blog-content-container '>
            <div className='blog-title'>{props.title}</div>

            <div className='blog-content'>{props.content}</div>
          </div>
          <div className='col-lg-4 col-xs-12 col-sm-12 col-md-12 blog-img-container order-sm-first order-xs-first'>
            <img src={props.imgsrc} alt='' />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
