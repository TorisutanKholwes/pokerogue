export enum Type {
  UNKNOWN = -1,
  NORMAL = 0,
  FIGHTING,
  FLYING,
  POISON,
  GROUND,
  ROCK,
  BUG,
  GHOST,
  STEEL,
  FIRE,
  WATER,
  GRASS,
  ELECTRIC,
  PSYCHIC,
  ICE,
  DRAGON,
  DARK,
  FAIRY,
  STELLAR
}

export function getTypeKey(type: Type) {
  return `pokemonInfo:Type.${Type[type]}`;
}
