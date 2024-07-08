import React, { useState } from 'react';
import ClientForm from './ClientForm';
import PetForm from './PetForm';
import '../../../../styles/components/Dashboard/_formDashboard.sass';

const RegisterClient = () => {
  const [step, setStep] = useState(1);
  const [clientData, setClientData] = useState({
    name: '',
    cpf: '',
    phone: '',
    email: '',
    address: {
      city: '',
      zip: '',
      street: '',
      number: '',
    }
  });
  const [pets, setPets] = useState([]);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleClientChange = (e) => {
    const { name, value } = e.target;
    setClientData({ ...clientData, [name]: value });
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setClientData({ ...clientData, address: { ...clientData.address, [name]: value } });
  };

  const addPet = (pet) => {
    setPets([...pets, pet]);
  };

  const removePet = (index) => {
    setPets(pets.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    const payload = {
      client: clientData,
      pets: pets
    };

    try {
      const response = await fetch('/api/register-client', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        console.log('Cliente registrado com sucesso!');
        // Redirecionar para a página de dashboard após o registro
        // Exemplo de redirecionamento usando react-router-dom:
        // history.push('/dashboard');
      } else {
        console.error('Erro ao registrar cliente.');
      }
    } catch (error) {
      console.error('Erro ao se comunicar com o servidor:', error);
    }
  };

  switch (step) {
    case 1:
      return (
        <div className="register-client-container">
          <div className="white-box">
            <ClientForm clientData={clientData} handleClientChange={handleClientChange}
              handleAddressChange={handleAddressChange} nextStep={nextStep} />
          </div>
        </div>
      );
    case 2:
      return (
        <div className="register-client-container">
          <div className="white-box">
            <PetForm pets={pets} addPet={addPet} removePet={removePet}
              prevStep={prevStep} handleSubmit={handleSubmit} />
          </div>
        </div>
      );
    default:
      return <div>Erro: Passo desconhecido.</div>;
  }
};

export default RegisterClient;
