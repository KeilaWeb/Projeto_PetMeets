const clientService = require('../service/clientPetService');

const registerClientAndPet = async (req, res) => {
  try {
    const { client, pets } = req.body;
    const clientData = await clientService.createClient(client);

    const petPromises = pets.map(pet => clientService.createPet({ ...pet, clientId: clientData.insertId }));
    await Promise.all(petPromises);

    res.status(201).json({ message: 'Client and pets registered successfully' });
  } catch (error) {
    console.error('Error registering client and pets:', error);
    res.status(500).json({ error: 'Error registering client and pets' });
  }
};

module.exports = {
  registerClientAndPet,
};
