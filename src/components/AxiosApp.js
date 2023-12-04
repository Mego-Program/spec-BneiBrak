import axios from 'axios';

const BASE_URL = 'http://localhost:3000';


//creating spec
async function createSpec(data) {
  try {
    const response = await axios.post(`${BASE_URL}/specs`, data);
    return response.data;
  } catch (error) {
    console.error('Error creating spec:', error);
    throw error;
  }
}

//Get all Specs
async function getAllSpecs() {
  try {
    const response = await axios.get(`${BASE_URL}/specs`);
    console.log('Specifications:', response.data);
    return response.data; 
  } catch (error) {
    console.error('Error getting specs:', error);
    throw error; 
};

}
// Get a Spec by ID
async function getSpecById(id) {
  try {
    const response = await axios.get(`${BASE_URL}/specs/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error getting spec:', error);
    throw error;
  }
}

// Update a Spec by ID
async function updateSpec(id, data) {
  try {
    const response = await axios.patch(`${BASE_URL}/specs/${id}`, data);
    return response.data;
  } catch (error) {
    console.error('Error updating spec:', error);
    throw error;
  }
}

// Delete a Spec by ID
async function deleteSpec(id) {
  try {
    const response = await axios.delete(`${BASE_URL}/specs/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting spec:', error);
    throw error;
  }
}

//creating kpi
async function createKpi(data) {
  try {
    const response = await axios.post(`${BASE_URL}/kpi`, data);
    return response.data;
  } catch (error) {
    console.error('Error creating kpi:', error);
    throw error;
  }
}

//Get all Kpi
async function getAllKpi() {
  try {
    const response = await axios.get(`${BASE_URL}/kpi`);
    console.log('Specifications:', response.data);
    return response.data; 
  } catch (error) {
    console.error('Error getting kpi:', error);
    throw error; 
};
}
// Get a Kpi by ID
async function getKpiById(id) {
  try {
    const response = await axios.get(`${BASE_URL}/kpi/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error getting kpi:', error);
    throw error;
  }
}

// Update a Kpi by ID
async function updateKpi(id, data) {
  try {
    const response = await axios.patch(`${BASE_URL}/kpi/${id}`, data);
    return response.data;
  } catch (error) {
    console.error('Error updating kpi:', error);
    throw error;
  }
}

// Delete a Kpi by ID
async function deleteKpi(id) {
  try {
    const response = await axios.delete(`${BASE_URL}/kpi/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting kpi:', error);
    throw error;
  }
}

export {createSpec, getAllSpecs, getSpecById, updateSpec, deleteSpec, createKpi, getAllKpi, getKpiById, updateKpi, deleteKpi }