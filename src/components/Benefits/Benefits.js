import React from 'react';
import '../../styles/components/_home.sass';

export function Benefits({title, content}) {
  return (
    <div className= "home-card">
        <h3 className='color-blue paddin-bottom-10'>{ title }</h3>
        <p className='color-dark-blue '>{ content }</p>
    </div>
  );
}

export default Benefits;