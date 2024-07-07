import React, { useState } from 'react';
import ClientForm from './ClientForm';
import PetForm from './PetForm';
import '../../../../styles/components/Dashboard/_formDashboard.sass'

const RegisterClient = () => {
  const [step, setStep] = useState(1); // Estado para controlar o passo do formulário
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
  }); // Estado para armazenar dados do cliente
  const [pets, setPets] = useState([]); // Estado para armazenar dados dos pets

  // Função para avançar para o próximo passo
  const nextStep = () => setStep(step + 1);

  // Função para voltar para o passo anterior
  const prevStep = () => setStep(step - 1);

  // Função para atualizar os dados do cliente
  const handleClientChange = (e) => {
    const { name, value } = e.target;
    setClientData({ ...clientData, [name]: value });
  };

  // Função para atualizar o endereço do cliente
  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setClientData({ ...clientData, address: { ...clientData.address, [name]: value } });
  };

  // Função para adicionar um novo pet
  const addPet = (pet) => {
    setPets([...pets, pet]);
  };

  // Função para remover um pet
  const removePet = (index) => {
    setPets(pets.filter((_, i) => i !== index));
  };

  // Função para enviar os dados para o backend
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
