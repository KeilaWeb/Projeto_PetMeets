import React, { useState } from 'react';

const PetForm = ({ pets, addPet, removePet, prevStep, handleSubmit }) => {
  const [petData, setPetData] = useState({
    name: '',
    type: '',
    breed: '',
    birthdate: '',
    age: '',
    color: '',
    size: '',
    adopted: '',
    disability: ''
  });

  // Função para atualizar os dados do pet
  const handlePetChange = (e) => {
    const { name, value } = e.target;
    setPetData({ ...petData, [name]: value });
  };

  // Função para adicionar o pet atual à lista de pets
  const handleAddPet = () => {
    addPet(petData);
    setPetData({
      name: '',
      type: '',
      breed: '',
      birthdate: '',
      age: '',
      color: '',
      size: '',
      adopted: '',
      disability: ''
    });
  };

  return (
    <div>
      <h5 className='padding-bottom-20 color-dark-blue'>Informações do Pet</h5>
      {pets.map((pet, index) => (
        <div key={index}>
          <p>{pet.name} ({pet.type})</p>
          <button type="button" onClick={() => removePet(index)}>Remover</button>
        </div>
      ))}
      <div className='client-register-container'>
        <form className="form-client">
          <div className="form-group">
            <label>Nome do Pet:</label>
            <input className="input-register" type="text" name="name" value={petData.name} onChange={handlePetChange} />
          </div>
          <div className="form-group">
            <label>Tipo de Pet:</label>
            <input className="input-register" type="text"  name="type" value={petData.type}  onChange={handlePetChange} />
          </div>
          <div className="form-group">
            <label>Raça:</label>
            <input className="input-register" type="text" name="breed" value={petData.breed} onChange={handlePetChange}
            />
          </div>
          <div className="form-group">
            <label>Data de Nascimento:</label>
            <input className="input-register" type="date" name="birthdate" value={petData.birthdate} onChange={handlePetChange} />
          </div>
          <div className="form-group">
            <label>Idade:</label>
            <input className="input-register" type="text" name="age" value={petData.age} onChange={handlePetChange} />
          </div>
          <div className="form-group">
            <label>Cor:</label>
            <input className="input-register" type="text" name="color" value={petData.color} onChange={handlePetChange} />
          </div>
          <div className="form-group">
            <label>Porte:</label>
            <input className="input-register" type="text" name="size" value={petData.size} onChange={handlePetChange} />
          </div>
          <div className="form-group padding-bottom-40">
            <label>Observações:</label>
            <input className="input-register" type="text" name="disability"  value={petData.disability} onChange={handlePetChange}
            />
          </div>
          <button className='button' type="button" onClick={handleAddPet}>+ Adicionar Pet</button>
        </form>
      </div>
      <div className='padding-bottom-20'>
        <button className="button" type="button" onClick={handleSubmit}>Concluir Cadastro</button>
      </div>
      <div>
        <button className="button-back" type="button" onClick={prevStep}>&laquo; Voltar</button>
      </div>
    </div>
  );
};

export default PetForm;
