import React, { useState } from 'react';
import LoginForm from '../../components/Form/LoginForm';
import RegisterForm from '../../components/Form/RegisterForm';
import AuthOptions from '../../components/Form/AuthOptions';
import '../../styles/components/_form.sass';

const FormPage = () => {
  const [view, setView] = useState('options');

  const toggleView = (view) => {
    setView(view);
  };

  return (
    <div className="auth-page">
      {view === 'options' && <AuthOptions toggleView={toggleView} />}
      {view === 'login' && <LoginForm toggleView={toggleView} />}
      {view === 'register' && <RegisterForm toggleView={toggleView} />}
    </div>
  );
};

export default FormPage;