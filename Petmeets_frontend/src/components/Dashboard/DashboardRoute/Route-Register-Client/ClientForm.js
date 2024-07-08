import React from 'react';

const ClientForm = ({ clientData, handleClientChange, handleAddressChange, nextStep }) => {
  return (
    <div>
      <h5 className='padding-bottom-20 color-dark-blue'>Informações do Cliente</h5>
      <div className='client-register-container'>
        <form className="form-client">
          <div className="form-group">
            <label>Nome:</label>
            <input className="input-register" type="text" name="name" value={clientData.name} onChange={handleClientChange} />
          </div>
          <div className="form-group">
            <label>CPF:</label>
            <input className="input-register" type="text" name="cpf"  value={clientData.cpf} onChange={handleClientChange} />
          </div>
          <div className="form-group">
            <label>Telefone:</label>
            <input className="input-register" type="text" name="phone" value={clientData.phone}  onChange={handleClientChange} />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input className="input-register" type="email" name="email"  value={clientData.email} onChange={handleClientChange} />
          </div>
          <div className="form-group">
            <label>Cidade:</label>
            <input className="input-register" type="text"  name="city" value={clientData.address.city} onChange={handleAddressChange} />
          </div>
          <div className="form-group">
            <label>CEP:</label>
            <input className="input-register" type="text"  name="zip" value={clientData.address.zip} onChange={handleAddressChange} />
          </div>
          <div className="form-group">
            <label>Rua:</label>
            <input className="input-register" type="text" name="street" value={clientData.address.street}  onChange={handleAddressChange} />
          </div>
          <div className="form-group padding-bottom-40">
            <label>Número:</label>
            <input className="input-register" type="text" name="number" value={clientData.address.number} onChange={handleAddressChange} />
          </div>
          <button className="button" type="button" onClick={nextStep}>Próximo &raquo;</button>
        </form>
      </div>
    </div>
  );
};

export default ClientForm;
