import React, { useState } from 'react';
import logo from '../../img/logo-petmeets-vertical.png';
import '../../styles/components/_formPage.sass';
import LoginForm from '../../components/Form/LoginForm';
import RegisterForm from '../../components/Form/RegisterForm';

const FormPage = () => {
  const [view, setView] = useState('login');

  const toggleView = (view) => {
    setView(view);
  };

  return (
    <div className="form-page">
      <div className="form-page__image"></div>
      <div className="form-page__content">
        <img src={logo} alt="Logo PetMeets" className="form-page__logo" />
        {view === 'login' && <LoginForm toggleView={() => toggleView('register')} />}
        {view === 'register' && <RegisterForm toggleView={() => toggleView('login')} />}
      </div>
    </div>
  );
};

export default FormPage;
