import React from 'react';
import '../../styles/components/_hero.sass';

export function Hero() {
  return (
    <div className="hero-container">
      <div className="content-wrapper">
        <div className="text-container">
          <h1 className="title">A Solução da sua Clínica Veterinária</h1>
          <h2 className="subtitle">Otimize o agendamento de consultas veterinárias em sua clínica ou hospital com o PetMeets</h2>
          <p></p>
          <button className="button">Saiba Mais</button>
        </div>
      </div>
    </div>
  );
}

export * from "./Hero.js";
