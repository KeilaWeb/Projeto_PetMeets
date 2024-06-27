import React, { useState } from 'react';
import '../../styles/components/_form.sass';

const RegisterForm = ({ toggleView }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de cadastro
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cadastre-se</h2>
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
      <label>Confirm Password</label>
      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
      <button type="submit">Cadastre-se</button>
      <p>Já tem uma conta? <span onClick={() => toggleView('login')}>Login</span></p>
    </form>
  );
};

export default RegisterForm;
