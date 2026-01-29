import { useBattery } from "@/api/hooks/useBattery";
import { usePokemon } from "@/api/hooks/usePokemon";
import { useEffect } from "react";
import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";

const Pokemon= () => {
  const { pokemon, loading, error, getPokemonById } = usePokemon();
  const { batteryLevel, getBatteryLevelAsync } = useBattery();

  useEffect(() => {
    const init = async () => {
      await getBatteryLevelAsync();
    };
    init();
  }, []);

  useEffect(() => {
    const fetchPokemon = async () => {
      const pokemonId = batteryLevel > 0 && batteryLevel <= 100 ? batteryLevel : 1;
      await getPokemonById(pokemonId);
    };
    fetchPokemon();
  }, [batteryLevel]);

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.loadingText}>Loading Pokemon...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  if (!pokemon) {
    return (
      <View style={styles.centerContainer}>
        <Text>No Pokemon data available</Text>
      </View>
    );
  }

  const pokemonId = batteryLevel && batteryLevel > 0 && batteryLevel <= 100 ? batteryLevel : 1;

  return (
    <ScrollView style={styles.container}>
    <View style={styles.container}>
      <Text style={styles.title}>Pokemon Details</Text>
      
      <View style={styles.batteryInfoBanner}>
        <Text style={styles.batteryInfoText}>
          🔋 Battery: {batteryLevel}% → Pokemon #{pokemonId}
        </Text>
      </View>

      {pokemon.sprites.front_default && (
        <Image
          source={{ uri: pokemon.sprites.front_default }}
          style={styles.image}
        />
      )}
      
      <Text style={styles.name}>{pokemon.name.toUpperCase()}</Text>
      <Text style={styles.info}>ID: #{pokemon.id}</Text>
      <Text style={styles.info}>Height: {pokemon.height}</Text>
      <Text style={styles.info}>Weight: {pokemon.weight}</Text>
      
      <Text style={styles.subtitle}>Types:</Text>
      <View style={styles.typesContainer}>
        {pokemon.types.map((type) => (
          <Text key={type.slot} style={styles.type}>
            {type.type.name}
          </Text>
        ))}
      </View>
      
      <Text style={styles.subtitle}>Abilities:</Text>
      <View style={styles.abilitiesContainer}>
        {pokemon.abilities.map((ability) => (
          <Text key={ability.slot} style={styles.ability}>
            {ability.ability.name} {ability.is_hidden ? "(Hidden)" : ""}
          </Text>
        ))}
      </View>
      
      <Text style={styles.subtitle}>Stats:</Text>
      <View style={styles.statsContainer}>
        {pokemon.stats.map((stat) => (
          <Text key={stat.stat.name} style={styles.stat}>
            {stat.stat.name}: {stat.base_stat}
          </Text>
        ))}
      </View>
    </View>
    </ScrollView>
  );
};



export default Pokemon;