import axios from 'axios';

const BASE_URL = 'http://localhost:3000';


const fetchSpecs = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/specs`);
      console.log('Specifications:', response.data);
      return response.data; 
    } catch (error) {
      console.error('Error fetching specifications:', error);
      throw error; 
  };
}
 
  const fetchKPIs = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/kpis`);
      console.log('Key Performance Indicators:', response.data);
      return response.data; 
    } catch (error) {
      console.error('Error fetching KPIs:', error);
      throw error; 
    }
}
  fetchSpecs();
  fetchKPIs(); 