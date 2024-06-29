import React from 'react';

const RegisterForm = ({ toggleView }) => {
  return (
    <div className="register-form">
      <h2>Register</h2>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Register</button>
      </form>
      <button onClick={() => toggleView('options')}>Back</button>
    </div>
  );
};

export default RegisterForm;
