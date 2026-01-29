
export interface NamedAPIResource {
  name: string;
  url: string;
}

export interface PokemonAbility {
  ability: NamedAPIResource;
  is_hidden: boolean;
  slot: number;
}       


export interface PokemonCries {
  latest: string;
  legacy: string;
}
                

export interface PokemonGameIndex {
  game_index: number;
  version: NamedAPIResource;
}

export interface PokemonHeldItemVersion {
  version: NamedAPIResource;
  rarity: number;
}

export interface PokemonHeldItem {
  item: NamedAPIResource;
  version_details: PokemonHeldItemVersion[];
}


export interface PokemonMoveVersion {
  level_learned_at: number;
  move_learn_method: NamedAPIResource;
  order: number | null;
  version_group: NamedAPIResource;
}

export interface PokemonMove {
  move: NamedAPIResource;
  version_group_details: PokemonMoveVersion[];
}


export interface PokemonAbilityPast {
  ability: NamedAPIResource | null;
  is_hidden: boolean;
  slot: number;
}

export interface PokemonPastAbility {
  abilities: PokemonAbilityPast[];
  generation: NamedAPIResource;
}


export interface PokemonSprites {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
  other: {
    dream_world: {
      front_default: string | null;
      front_female: string | null;
    };
    home: {
      front_default: string | null;
      front_female: string | null;
      front_shiny: string | null;
      front_shiny_female: string | null;
    };
    'official-artwork': {
      front_default: string | null;
      front_shiny: string | null;
    };
    showdown: {
      back_default: string | null;
      back_female: string | null;
      back_shiny: string | null;
      back_shiny_female: string | null;
      front_default: string | null;
      front_female: string | null;
      front_shiny: string | null;
      front_shiny_female: string | null;
    };
  };
  versions: {
    'generation-i': {
      'red-blue': GenerationISprites;
      yellow: GenerationISprites;
    };
    'generation-ii': {
      crystal: GenerationIISprites;
      gold: GenerationIIGoldSilverSprites;
      silver: GenerationIIGoldSilverSprites;
    };
    'generation-iii': {
      emerald: GenerationIIIEmeraldSprites;
      'firered-leafgreen': GenerationIIIFireRedLeafGreenSprites;
      'ruby-sapphire': GenerationIIIRubySapphireSprites;
    };
    'generation-iv': {
      'diamond-pearl': GenerationIVSprites;
      'heartgold-soulsilver': GenerationIVSprites;
      platinum: GenerationIVSprites;
    };
    'generation-v': {
      'black-white': GenerationVSprites;
    };
    'generation-vi': {
      'omegaruby-alphasapphire': GenerationVISprites;
      'x-y': GenerationVISprites;
    };
    'generation-vii': {
      icons: GenerationVIIIconSprites;
      'ultra-sun-ultra-moon': GenerationVIISprites;
    };
    'generation-viii': {
      'brilliant-diamond-shining-pearl': GenerationVIIISprites;
      icons: GenerationVIIIIconSprites;
    };
    'generation-ix': {
      'scarlet-violet': GenerationIXSprites;
    };
  };
}

export interface GenerationISprites {
  back_default: string | null;
  back_gray: string | null;
  back_transparent: string | null;
  front_default: string | null;
  front_gray: string | null;
  front_transparent: string | null;
}

export interface GenerationIISprites {
  back_default: string | null;
  back_shiny: string | null;
  back_shiny_transparent: string | null;
  back_transparent: string | null;
  front_default: string | null;
  front_shiny: string | null;
  front_shiny_transparent: string | null;
  front_transparent: string | null;
}

export interface GenerationIIGoldSilverSprites {
  back_default: string | null;
  back_shiny: string | null;
  front_default: string | null;
  front_shiny: string | null;
  front_transparent: string | null;
}

export interface GenerationIIIEmeraldSprites {
  front_default: string | null;
  front_shiny: string | null;
}

export interface GenerationIIIFireRedLeafGreenSprites {
  back_default: string | null;
  back_shiny: string | null;
  front_default: string | null;
  front_shiny: string | null;
}

export interface GenerationIIIRubySapphireSprites {
  back_default: string | null;
  back_shiny: string | null;
  front_default: string | null;
  front_shiny: string | null;
}

export interface GenerationIVSprites {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

export interface GenerationVSprites {
  animated: {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
  };
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

export interface GenerationVISprites {
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

export interface GenerationVIIIconSprites {
  front_default: string | null;
  front_female: string | null;
}

export interface GenerationVIISprites {
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

export interface GenerationVIIISprites {
  front_default: string | null;
  front_female: string | null;
}

export interface GenerationVIIIIconSprites {
  front_default: string | null;
  front_female: string | null;
}

export interface GenerationIXSprites {
  front_default: string | null;
  front_female: string | null;
}

export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: NamedAPIResource;
}

export interface PokemonType {
  slot: number;
  type: NamedAPIResource;
}

export interface Pokemon {
  abilities: PokemonAbility[];
  base_experience: number;
  cries: PokemonCries;
  forms: NamedAPIResource[];
  game_indices: PokemonGameIndex[];
  height: number;
  held_items: PokemonHeldItem[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: PokemonMove[];
  name: string;
  order: number;
  past_abilities: PokemonPastAbility[];
  past_types: any[];
  species: NamedAPIResource;
  sprites: PokemonSprites;
  stats: PokemonStat[];
  types: PokemonType[];
  weight: number;
}

export interface PokemonListItem {
  id: number;
  name: string;
  sprites: {
    front_default: string | null;
    other: {
      'official-artwork': {
        front_default: string | null;
      };
    };
  };
  types: PokemonType[];
}
