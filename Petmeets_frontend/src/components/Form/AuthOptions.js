import React from 'react';

const AuthOptions = ({ toggleView }) => {
  return (
    <div className="auth-options">
      <button onClick={() => toggleView('login')}>Login</button>
      <button onClick={() => toggleView('register')}>Register</button>
    </div>
  );
};

export default AuthOptions;
