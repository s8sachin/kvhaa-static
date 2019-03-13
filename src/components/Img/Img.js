import React, { Fragment } from 'react';

const Img = ({ img_url, width, className }) => {
  return <div className='partner-image-div'>
    <img
      width={width ? width : '100px'}
      src={img_url}
      className={className ? className : ''} />
  </div>
}

export default Img;