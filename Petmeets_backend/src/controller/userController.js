const userService = require('../service/user.js');

async function getAllUser(req, res){
    try{
        const rows = await userService.getAllUser();
        res.status(200).json(rows);
    }catch(error){
        console.error("Error getting users:", error);
        res.status(500).send({
            message: "Erro ao obter usuário",
            body: error.message,
        })
    }
}

async function createUser(req, res){
        try{
            const {name, email, telefone, password, perfil} = req.body;

            await userService.createUser(name, email, telefone, password, perfil);
            res.status(200).json({ message: "Successo na criação do usuário"})
        }catch(error){
            console.error("Error creating user:", error);
            res.status(500).send
        ({
            message: "Erro ao adicionar usuario!",
            error:error.message,
        })
    }
}

async function updateUser(req, res) {
    try {
        const { id } = req.params;
        const { name, email, telefone, password, perfil } = req.body;
        await userService.updateUser(id, name, email, telefone, password, perfil);
        res.status(200).json("Successo ao atualizar usuário");
    } catch(error) {
        console.error("Error updating user:", error);
        res.status(500).send({
            message: 'Erro ao atualizar usuario',
            body: error.message,
        })
    }
}

async function deleteUser(req, res){
    try {
        const {id } = req.params;
        await userService.deleteUser(id);
        res.status(200).send({message: "Usuario deletado!"});
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).send({
            message: "Erro ao deletar usuario!",
            error: error.message,
        })
    }
}

async function getUserById(req, res){
    try {
        const { id } = req.params;
        const user = await userService.getUserById(id);
        res.status(200).json(user);
    } catch (error) {
        console.error("Error getting user by ID:", error);
        res.status(500).send({
            message: "Erro ao obter o ID do usuário!",
            error: error.message,
        })
    }
}

module.exports = {
    getUserById,
    getAllUser,
    createUser,
    updateUser,
    deleteUser,
}