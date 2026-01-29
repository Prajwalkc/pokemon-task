import { Pokemon } from "../types/pokemon";

const BASE_URL = "https://pokeapi.co/api/v2";

const pokemonService = {
  getPokemonById: async (id: number): Promise<Pokemon> => {
    try {
      const response = await fetch(`${BASE_URL}/pokemon/${id}`);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch Pokemon with id ${id}: ${response.statusText}`);
      }
      
      const data: Pokemon = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching Pokemon:', error);
      throw error;
    }
  },
};

export default pokemonService;