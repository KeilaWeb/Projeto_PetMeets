import React from 'react';
import '../../styles/components/_home.sass';

export function Benefits({title, content}) {
  return (
    <div className= "home-card">
        <h5 className="color-dark-blue padding-bottom-10">{ title }</h5>
        <p className="color-medium-blue">{ content }</p>
    </div>
  );
}

export default Benefits;