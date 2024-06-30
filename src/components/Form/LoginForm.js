import React from 'react';
import './StyleForm/_loginForm.sass';

const LoginForm = ({ toggleView }) => {
  return (
    <div className="login-form">
      <form className="form">
        <input className="input" type="text" placeholder="Email" />
        <input className="input" type="password" placeholder="Password" />
        <button className="button" type="submit">Login</button>
        <div className="auth-options">
          <p className='color-white'>Esqueceu a senha?</p>
          <p className="color-white">
            Não tem uma conta? <a className="color-pink link" href="#" onClick={toggleView}>Cadastre-se</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
