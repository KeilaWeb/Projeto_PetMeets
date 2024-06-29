import React from 'react';

const LoginForm = ({ toggleView }) => {
  return (
    <div className="login-form">
      <h2>Login</h2>
      <form>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      <button onClick={() => toggleView('options')}>Back</button>
    </div>
  );
};

export default LoginForm;
