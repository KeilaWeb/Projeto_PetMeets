import React, { useState } from 'react';
import './StyleForm/_registerForm.sass';
import { registerUser } from '../../services/authService';
import { useNavigate } from 'react-router-dom';

const RegisterForm = ({ toggleView }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [perfil, setPerfil] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  //const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted');
    try {
      const userData = { name, email, telefone, perfil, password };
      console.log('User data:', userData);
      const response = await registerUser(userData);
      console.log('User registered successfully:', response);
      window.location.reload();       
      // navigate('/Dashboard'); 
    } catch (error) {
      console.error('Registration failed:', error);
      setError('Falha ao registrar. Tente novamente.');
    }
  };

  return (
    <div className="register-form">
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="input"
          type="tel"
          placeholder="Telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          required
        />
        <select
          className="input"
          value={perfil}
          onChange={(e) => setPerfil(e.target.value)}
          required
        >
          <option value="">Qual seu perfil *</option>
          <option value="Hospital veterinário">Hospital veterinário</option>
          <option value="Petshop">Petshop</option>
          <option value="Clínica">Clínica</option>
          <option value="Especialista">Especialista</option>
        </select>
        <input
          className="input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="button" type="submit">Cadastrar</button>
      </form>
      {error && <p className="error-message">{error}</p>}
      <button className="button-back" onClick={toggleView}>&laquo; voltar</button>
    </div>
  );
};

export default RegisterForm;
