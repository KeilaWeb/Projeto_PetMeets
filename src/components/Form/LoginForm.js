import React, { useState } from 'react';
import '../../styles/components/_form.sass';

const LoginForm = ({ toggleView }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de autenticação
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label>Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
      <p>Não tem uma conta? <span onClick={() => toggleView('register')}>Cadastre-se</span></p>
    </form>
  );
};

export default LoginForm;
