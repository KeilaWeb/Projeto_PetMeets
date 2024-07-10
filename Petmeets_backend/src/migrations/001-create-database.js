const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database.js");

async function createDatabase(){
    try{
        const connection = await mysql.createConnection({
            host: databaseConfig.host,
            user: databaseConfig.user,
            password: databaseConfig.password,
        });
        await connection.query(
            `CREATE DATABASE IF NOT EXISTS ${databaseConfig.database}`
        );
        await connection.end();
        console.log("Banco de dados criado!");
    }catch (error){
        console.log(`Erro ao criar banco de dados: ${error}`)
    }
}

createDatabase();
