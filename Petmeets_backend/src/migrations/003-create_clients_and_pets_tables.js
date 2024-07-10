const pool = require('../config/database.js');

const createTables = async () => {
  try {
    const clientTableQuery = `
      CREATE TABLE IF NOT EXISTS clients (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        cpf VARCHAR(11) NOT NULL,
        telefone VARCHAR(20) NOT NULL,
        email VARCHAR(255) NOT NULL,
        cidade VARCHAR(255) NOT NULL,
        cep VARCHAR(10) NOT NULL,
        endereco VARCHAR(255) NOT NULL,
        numero VARCHAR(10) NOT NULL
      );
    `;

    const petTableQuery = `
      CREATE TABLE IF NOT EXISTS pets (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nomePet VARCHAR(255) NOT NULL,
        tipo VARCHAR(255) NOT NULL,
        raca VARCHAR(255),
        aniversario DATE,
        idade VARCHAR(50),
        cor VARCHAR(50),
        porte VARCHAR(50),
        observacoes TEXT,
        client_id INT,
        FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE CASCADE
      );
    `;

    await pool.query(clientTableQuery);
    await pool.query(petTableQuery);

    console.log('Tables created successfully');
  } catch (error) {
    console.error('Error creating tables:', error);
  }
};

createTables();
