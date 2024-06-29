import React, { useState } from 'react';
import '../../styles/components/_formPage.sass';
import LoginForm from '../../components/Form/LoginForm';
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
        <LoginForm />
      </div>
    </div>
  );
};

export default FormPage;
