const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database.js");

async function getAllUser(){
    const connection = await mysql.createConnection(databaseConfig);
    const [rows] = await connection.query("SELECT * FROM user");
    await connection.end();
    return rows;
}

async function createUser(name, email, telefone, password, perfil){
    const connection = await mysql.createConnection(databaseConfig);  //cria conexão
    const insertUser = 'INSERT INTO user(name, email, telefone, password, perfil) VALUES(?, ?, ?)';
    await connection.query(insertUser, [name, email, telefone, password, perfil]) //chama conexão
    await connection.end(); //usa conexao
}

async function updateUser(id, name, email, telefone, password, perfil){
    const connection = await mysql.createConnection(databaseConfig);
    const updateUser = 'UPDATE user SET name = ?, email = ?, telefone = ?, password = ?, perfil = ? WHERE id = ?';;
    await connection.query(updateUser, [name, email, telefone, password, perfil, id]);
    await connection.end();
}

async function deleteUser(id){
    const connection = await mysql.createConnection(databaseConfig);
    await connection.query('DELETE FROM user WHERE id = ?', [id]);
    await connection.end();
}

async function getUserById(id){
    const connection = await mysql.createConnection(databaseConfig);
    const[user] = await connection.query("SELECT * FROM user WHERE id = ?",[id]);
    await connection.end();
    return user
}

module.exports = {
    getUserById,
    getAllUser,
    createUser,
    updateUser,
    deleteUser,
};