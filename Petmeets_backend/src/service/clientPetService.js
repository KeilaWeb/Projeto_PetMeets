const pool = require('../config/database');

const createClient = async (client) => {
  const { nome, cpf, telefone, email, cidade, cep, endereco, numero } = client;
  const query = `INSERT INTO clients (nome, cpf, telefone, email, cidade, cep, endereco, numero) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
  const [result] = await pool.query(query, [nome, cpf, telefone, email, cidade, cep, endereco, numero]);
  return result;
};

const createPet = async (pet) => {
  const { nomePet, tipo, raca, aniversario, idade, cor, porte, observacoes, clientId } = pet;
  const query = `INSERT INTO pets (nomePet, tipo, raca, aniversario, idade, cor, porte, observacoes, client_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  const [result] = await pool.query(query, [nomePet, tipo, raca, aniversario, idade, cor, porte, observacoes, clientId]);
  return result;
};

module.exports = {
  createClient,
  createPet
};
