import axios from 'axios';

const API_BASE_URL = 'http://YOUR_COMPUTER_IP:5000/api'; // use computer IP if testing on phone

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common.Authorization;
  }
};

export default api;