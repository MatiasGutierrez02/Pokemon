import axios from 'axios';

const API_URL = 'https://pokeapi.co/api/v2';

export async function getPokemons() {
  try {
    const response = await axios.get(`${API_URL}/pokemon`);
    return response.data.results;
  } catch (error) {
    console.error('Error!', error);
    throw error;
  }
}

export async function getPokemonInfo(pokeName) {
  try {
    const response = await axios.get(`${API_URL}/pokemon/${pokeName}`);
    return response.data;
  } catch (error) {
    console.error('Error!', error);
    throw error;
  }
}
