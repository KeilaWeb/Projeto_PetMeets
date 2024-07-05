import api from '../api';
import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const registerUser = async (userData) => {
  try {
    const response = await api.post(`${API_URL}/user`, userData);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

export const loginUser = async (loginData) => {
  try {
    const response = await api.post('/login', loginData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
