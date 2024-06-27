import React from 'react';
import '../../styles/components/_form.sass';

const AuthOptions = ({ toggleView }) => {
  return (
    <div>
      <h2>Bem-vindo ao PetMeets</h2>
      <button onClick={() => toggleView('login')}>Login</button>
      <button onClick={() => toggleView('register')}>Cadastre-se</button>
    </div>
  );
};

export default AuthOptions;
