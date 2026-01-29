import { useState } from 'react';
import pokemonService from '../services/pokemonService';
import { Pokemon } from "../types/pokemon";

interface UsePokemonReturn {
  pokemon: Pokemon | null;
  loading: boolean;
  error: string | null;
  getPokemonById: (id: number) => Promise<Pokemon | null>;
}   

export const usePokemon = (): UsePokemonReturn => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getPokemonById = async (id: number): Promise<Pokemon | null> => {
    try {
      setLoading(true);
      setError(null);
      const pokemonDetails = await pokemonService.getPokemonById(id);
      setPokemon(pokemonDetails);
      return pokemonDetails;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch Pokemon';
      setError(errorMessage);
      setPokemon(null);
      return null;
    } finally {
      setLoading(false);
    }
  };


  return { 
    pokemon, 
    loading, 
    error, 
    getPokemonById, 
  };
}
