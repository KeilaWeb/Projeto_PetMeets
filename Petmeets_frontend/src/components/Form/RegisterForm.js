import React from 'react';
import './StyleForm/_registerForm.sass';

const RegisterForm = ({ toggleView }) => {
  return (
    <div className="register-form">
      <form className="form">
        <input className="input " type="text" placeholder="Name" required />
        <input className="input" type="email" placeholder="Email" required />
        <input className="input" type="tel" placeholder="Telefone" required />
        <select className="input" placeholder="Perfil" required>
          <option>Qual seu perfil *</option>
          <option>Hospital veterinario</option>
          <option>Petshop</option>
          <option>Clinica</option>
          <option>Especialista</option>
        </select>
        <input className="input" type="password" placeholder="Password" />
        <button className="button" type="submit">Cadastrar</button>
      </form>
      <button className="button-back" onClick={toggleView}>&laquo; voltar</button>
    </div>
  );
};

export default RegisterForm;
