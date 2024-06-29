import React from 'react';
import '../../styles/components/_home.sass';

export function Benefits({title, content}) {
  return (
    <div className= "home-card">
        <h1 className="h2">{ title }</h1>
        <p className="content">{ content }</p>
    </div>
  );
}

export default Benefits;