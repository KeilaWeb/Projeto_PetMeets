import React from 'react';

const ClientForm = ({ clientData, handleClientChange, handleAddressChange, nextStep }) => {
  return (
    <div>
      <h2>Informações do Cliente</h2>
      <form>
        <div>
          <label>Nome:</label>
          <input type="text" name="name" value={clientData.name} onChange={handleClientChange} />
        </div>
        <div>
          <label>CPF:</label>
          <input  type="text" name="cpf"  value={clientData.cpf} onChange={handleClientChange} />
        </div>
        <div>
          <label>Telefone:</label>
          <input  type="text" name="phone" value={clientData.phone}  onChange={handleClientChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email"  value={clientData.email} onChange={handleClientChange} />
        </div>
        <h3>Endereço</h3>
        <div>
          <label>Cidade:</label>
          <input type="text"  name="city" value={clientData.address.city} onChange={handleAddressChange} />
        </div>
        <div>
          <label>CEP:</label>
          <input  type="text"  name="zip" value={clientData.address.zip} onChange={handleAddressChange} />
        </div>
        <div>
          <label>Rua:</label>
          <input  type="text" name="street" value={clientData.address.street}  onChange={handleAddressChange}
          />
        </div>
        <div>
          <label>Número:</label>
          <input  type="text" name="number" value={clientData.address.number} onChange={handleAddressChange}
          />
        </div>
        <button type="button" onClick={nextStep}>Próximo</button>
      </form>
    </div>
  );
};

export default ClientForm;
