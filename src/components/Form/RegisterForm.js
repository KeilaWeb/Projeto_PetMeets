import React from 'react';
import './StyleForm/_registerForm.sass';

const RegisterForm = ({ toggleView }) => {
  return (
    <div className="register-form">
      <h3 className="color-white">Registre-se</h3>
      <form className="form">
        <input className="input " type="text" placeholder="Name" />
        <input className="input" type="email" placeholder="Email" />
        <input className="input" type="tel" placeholder="Telefone" />
        <select className="input" placeholder="Perfil">
          <option>Hospital veterinario</option>
          <option>Petshop</option>
          <option>Clinica</option>
          <option>Especialista</option>
        </select>
        <input className="input" type="password" placeholder="Password" />
        <button className="button" type="submit">Register</button>
      </form>
      <button className="button-back" onClick={toggleView}>&laquo; Back</button>
    </div>
  );
};

export default RegisterForm;
