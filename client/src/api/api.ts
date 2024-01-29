import axios from 'axios';

export const downloadVideo = async (url: string) => {
  const endpoint = 'http://localhost:5000/download'; // Replace with your actual backend endpoint
  const response = await axios.post(endpoint, { url });
  return response;
};
