import React from 'react';
import '../../styles/components/_home.sass';
import heroImage from '../../img/agendamento-petmeets.png'

export function About() {
  return (
    <div className="st-container">
      <div className="content-wrapper-hero">
        <div className="image-hero">
          <img src={heroImage}  alt='Hero PetMeets' className='image-about'/>
        </div>
        <div className="title-container margin-left">
          <h2 className="color-dark-blue padding-bottom-10">O jeito mais prático e rápido de gerir agendamentos de clínicas e hospitais veterinarios</h2>
          <h3 className="color-blue padding-bottom-20">Otimize o agendamento de consultas veterinárias em sua clínica ou hospital com o PetMeets</h3>
          <p className="color-dark-blue padding-bottom-40">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur</p>
          <button className="button">Saiba Mais</button>
        </div>
      </div>
    </div>
  );
}

export default About;