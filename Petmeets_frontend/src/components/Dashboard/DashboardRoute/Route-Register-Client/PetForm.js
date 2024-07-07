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
      <h2>Informações do Pet</h2>
      {pets.map((pet, index) => (
        <div key={index}>
          <p>{pet.name} ({pet.type})</p>
          <button type="button" onClick={() => removePet(index)}>Remover</button>
        </div>
      ))}
      <form>
        <div>
          <label>Nome do Pet:</label>
          <input  type="text" name="name" value={petData.name} onChange={handlePetChange} />
        </div>
        <div>
          <label>Tipo de Pet:</label>
          <input type="text"  name="type" value={petData.type}  onChange={handlePetChange} />
        </div>
        <div>
          <label>Raça:</label>
          <input type="text" name="breed" value={petData.breed} onChange={handlePetChange}
          />
        </div>
        <div>
          <label>Data de Nascimento:</label>
          <input type="date" name="birthdate" value={petData.birthdate} onChange={handlePetChange} />
        </div>
        <div>
          <label>Idade:</label>
          <input type="text" name="age" value={petData.age} onChange={handlePetChange} />
        </div>
        <div>
          <label>Cor:</label>
          <input type="text" name="color" value={petData.color} onChange={handlePetChange} />
        </div>
        <div>
          <label>Porte:</label>
          <input type="text" name="size" value={petData.size} onChange={handlePetChange} />
        </div>
        <div>
          <label>Adotado ou Comprado:</label>
          <input type="radio"  name="adopted" value="Adotado" checked={petData.adopted === 'Adotado'} 
            onChange={handlePetChange} /> Adotado
          <input type="radio" name="adopted" value="Comprado" checked={petData.adopted === 'Comprado'}
            onChange={handlePetChange} /> Comprado
        </div>
        <div>
          <label>Possui alguma doença ou deficiÊncia:</label>
          <input type="radio"  name="adopted" value="Adotado" checked={petData.adopted === 'Adotado'} 
            onChange={handlePetChange} /> Sim
          <input type="radio" name="adopted" value="Comprado" checked={petData.adopted === 'Comprado'}
            onChange={handlePetChange} /> Não
        </div>
        <div>
          <label>Deficiência:</label>
          <input type="text" name="disability"  value={petData.disability} onChange={handlePetChange}
          />
        </div>
        <button type="button" onClick={handleAddPet}>Adicionar Pet</button>
      </form>
      <button type="button" onClick={prevStep}>Voltar</button>
      <button type="button" onClick={handleSubmit}>Enviar</button>
    </div>
  );
};

export default PetForm;
