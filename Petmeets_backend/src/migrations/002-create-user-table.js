const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database");

async function createUserTable(){
    try{
        const connection = await mysql.createConnection(databaseConfig);
        await connection.query(`USE ${databaseConfig.database}`)
        await connection.query(
            `CREATE TABLE IF NOT EXISTS user (
                id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                telefone VARCHAR(255) NOT NULL,
                perfil VARCHAR(255) NOT NULL,
                password VARCHAR(255) NOT NULL
            )`
        );

        await connection.end();
        console.log("TABELA DE USUÁRIO CRIADA!")
    }catch(error){
        console.log(`Erro ao criar tabela do usuário: ${error}`);
    }
}

createUserTable()