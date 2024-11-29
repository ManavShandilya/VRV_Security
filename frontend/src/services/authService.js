import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

export const registerUser = async (name, email, password) => {
  const response = await axios.post(`${API_URL}/register`, {
    name,
    email,
    password,
  });
  return response.data;
};

export const loginUser = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  return response.data.token;
};

export const getUserRole = async () => {
  const token = localStorage.getItem('token');
  const response = await axios.get('http://localhost:5000/api/user/role', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data.role;
};
