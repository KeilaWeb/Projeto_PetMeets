import React from 'react';
import '../../styles/components/_home.sass';
import heroImage from '../../img/petmeets-img.png'

export function Hero() {
  return (
    <div className="st-container">
      <div className="content-wrapper-hero">
        <div className="title-container">
          <h1 className="h1 paddin-botton">A Solução da sua Clínica Veterinária</h1>
          <h2 className="h3 text-container paddin-botton">Otimize o agendamento de consultas veterinárias em sua clínica ou hospital com o PetMeets</h2>
          <p></p>
          <button className="button">Saiba Mais</button>
        </div>
        <div className="image-hero">
          <img src={heroImage}  alt='Hero PetMeets'/>
        </div>
      </div>
    </div>
  );
}

export default Hero;
