import React from 'react';
import '../../styles/components/_home.sass';
import heroImage from '../../img/petmeets-img.png'

export function About() {
  return (
    <div className="st-container">
      <div className="content-wrapper-hero">
        <div className="image-hero">
          <img src={heroImage}  alt='Hero PetMeets'/>
        </div>
        <div className="title-container margin-left">
          <h2 className="title">O jeito mais prático e rápido de gerir agendamentos de clínicas e hospitais veterinarios</h2>
          <h2 className="subtitle">Otimize o agendamento de consultas veterinárias em sua clínica ou hospital com o PetMeets</h2>
          <h2>testes de mensagem</h2>
          <p></p>
          <button className="button">Saiba Mais</button>
        </div>
      </div>
    </div>
  );
}

export default About;