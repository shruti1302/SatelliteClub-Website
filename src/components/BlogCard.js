import React from 'react';

const BlogCard = (props) => {
  return (
    <>
      <div class='blog-card mx-auto mb-5'>
        <div class='row'>
          <div class='col-lg-8 col-xs-12 col-sm-12 col-md-12 order-2 blog-content-container'>
            <div class='blog-content'>{props.content}</div>
          </div>
          <div class='col-lg-4 col-xs-12 col-sm-12 col-md-12 order-1'>
            <img src={props.imgsrc} alt='' />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
