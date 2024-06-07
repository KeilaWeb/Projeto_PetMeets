import React from 'react';
import '../../styles/components/_home.sass';

export function Hero() {
  return (
    <div className="hero-container">
      <div className="content-wrapper">
        <div className="title-container">
          <h1 className="title">A Solução da sua Clínica Veterinária</h1>
          <h2 className="subtitle-ligth text-container">Otimize o agendamento de consultas veterinárias em sua clínica ou hospital com o PetMeets</h2>
          <p></p>
          <button className="button">Saiba Mais</button>
        </div>
      </div>
    </div>
  );
}

export * from "./Hero.js";
