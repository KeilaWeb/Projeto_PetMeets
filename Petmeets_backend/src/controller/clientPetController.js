const clientService = require('../service/clientPetService');

const registerClientAndPet = async (req, res) => {
  try {
    console.log('Request body:', req.body);
    const { clientData, petData } = req.body;

    const clientDataResult = await clientService.createClient(clientData);

    const petPromises = (petData || []).map(pet => clientService.createPet({ ...pet, clientId: clientDataResult.insertId }));
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
