import React, { useState } from 'react';
import ClientForm from './ClientForm';
import PetForm from './PetForm';
import { registerClientAndPet } from '../../../../services/authService';
import { useNavigate } from 'react-router-dom';
import '../../../../styles/components/Dashboard/_formDashboard.sass';

const RegisterClient = () => {
  const [step, setStep] = useState(1);
  const [clientData, setClientData] = useState({
    nome: '',
    cpf: '',
    telefone: '',
    email: '',
    endereco: {
      cidade: '',
      cep: '',
      rua: '',
      numero: ''
    }
  });
  const [pets, setPets] = useState([]);
  const navigate = useNavigate();

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleClientChange = (e) => {
    const { name, value } = e.target;
    setClientData({ ...clientData, [name]: value });
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setClientData({ ...clientData, endereco: { ...clientData.endereco, [name]: value } });
  };

  const addPet = (petData) => {
    setPets([...pets, petData]);
  };

  const removePet = (index) => {
    setPets(pets.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    try {
      const response = await registerClientAndPet(clientData, pets);
      console.log('Client and pets registered successfully:', response);
      navigate('/dashboard');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  switch (step) {
    case 1:
      return (
        <div className="register-client-container">
          <div className="white-box">
            <ClientForm clientData={clientData} handleClientChange={handleClientChange} handleAddressChange={handleAddressChange} nextStep={nextStep} />
          </div>
        </div>
      );
    case 2:
      return (
        <div className="register-client-container">
          <div className="white-box">
            <PetForm pets={pets} addPet={addPet} removePet={removePet} prevStep={prevStep} handleSubmit={handleSubmit} />
          </div>
        </div>
      );
    default:
      return <div>Erro: Passo desconhecido.</div>;
  }
};

export default RegisterClient;
