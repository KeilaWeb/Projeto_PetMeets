import React, { useState } from 'react';
import '../../styles/components/_formPage.sass';
import LoginForm from '../../components/Form/LoginForm';
import RegisterForm from '../../components/Form/RegisterForm';
import AuthOptions from '../../components/Form/AuthOptions';
import logo from '../../img/logo_petmeets.png';

const FormPage = () => {
  const [view, setView] = useState('options');

  const toggleView = (view) => {
    setView(view);
  };

  return (
    <div className="form-page">
      <div className="form-page__image"></div>
      <div className="form-page__content">
        <img src={logo} alt="Logo PetMeets" className="form-page__logo" />
        {view === 'options' && <AuthOptions toggleView={toggleView} />}
        {view === 'login' && <LoginForm toggleView={toggleView} />}
        {view === 'register' && <RegisterForm toggleView={toggleView} />}
      </div>
    </div>
  );
};

export default FormPage;
