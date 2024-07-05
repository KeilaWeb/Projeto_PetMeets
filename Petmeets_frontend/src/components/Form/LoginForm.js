import React, { useState } from 'react';
import './StyleForm/_loginForm.sass';
import { loginUser } from '../../services/authService';

const LoginForm = ({ toggleView }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const loginData = { email, password };
      const response = await loginUser(loginData);
      console.log('Login successful:', response);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="login-form">
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="button" type="submit">Login</button>
        <div className="auth-options">
          <p className='color-white'>Esqueceu a senha?</p>
          <p className="color-white"> Não tem uma conta? <a className="color-pink link" href="#" onClick={toggleView}>Cadastre-se</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
