import React, { useState } from 'react';

const PetForm = ({ pets, addPet, removePet, prevStep, handleSubmit }) => {
  const [petData, setPetData] = useState({
    nome: '',
    tipo: '',
    raca: '',
    aniversario: '',
    idade: '',
    cor: '',
    porte: '',
    observacoes: ''
  });

  const handlePetChange = (e) => {
    const { name, value } = e.target;
    setPetData({ ...petData, [name]: value });
  };

  const handleAddPet = () => {
    addPet(petData);
    setPetData({
      nome: '',
      tipo: '',
      raca: '',
      aniversario: '',
      idade: '',
      cor: '',
      porte: '',
      observacoes: ''
    });
  };

  return (
    <div>
      <h5 className='padding-bottom-20 color-dark-blue'>Informações do Pet</h5>
      {pets.map((pet, index) => (
        <div key={index}>
          <p>{pet.nome} ({pet.tipo})</p>
          <button type="button-back" onClick={() => removePet(index)}>Remover</button>
        </div>
      ))}
      <div className='client-register-container'>
        <form className="form-client">
          <div className="form-group">
            <label>Nome do Pet:</label>
            <input className="input-register" type="text" name="nome" value={petData.nome} onChange={handlePetChange} />
          </div>
          <div className="form-group">
            <label>Tipo de Pet:</label>
            <input className="input-register" type="text" name="tipo" value={petData.tipo} onChange={handlePetChange} />
          </div>
          <div className="form-group">
            <label>Raça:</label>
            <input className="input-register" type="text" name="raca" value={petData.raca} onChange={handlePetChange} />
          </div>
          <div className="form-group">
            <label>Data de Nascimento:</label>
            <input className="input-register" type="date" name="aniversario" value={petData.aniversario} onChange={handlePetChange} />
          </div>
          <div className="form-group">
            <label>Idade:</label>
            <input className="input-register" type="text" name="idade" value={petData.idade} onChange={handlePetChange} />
          </div>
          <div className="form-group">
            <label>Cor:</label>
            <input className="input-register" type="text" name="cor" value={petData.cor} onChange={handlePetChange} />
          </div>
          <div className="form-group">
            <label>Porte:</label>
            <input className="input-register" type="text" name="porte" value={petData.porte} onChange={handlePetChange} />
          </div>
          <div className="form-group padding-bottom-40">
            <label>Observações:</label>
            <input className="input-register" type="text" name="observacoes" value={petData.observacoes} onChange={handlePetChange} />
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
