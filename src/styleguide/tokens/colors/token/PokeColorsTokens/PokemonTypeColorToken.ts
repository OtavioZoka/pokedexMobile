import { IPokemonTypeColors } from "../../interfaces/PokemonTypeColor";
import { ColorGuidePokemonType } from "../../colorsToken/ColorGuidePokemonType";

 enum PokemonTypeNameTokenList {
  COLOR_POKEMON_TYPE_BUG="COLOR_POKEMON_TYPE_BUG",
  COLOR_POKEMON_TYPE_DARK="COLOR_POKEMON_TYPE_DARK",
  COLOR_POKEMON_TYPE_DRAGON="COLOR_POKEMON_TYPE_DRAGON",
  COLOR_POKEMON_TYPE_ELETRICK="COLOR_POKEMON_TYPE_ELETRICK",
  COLOR_POKEMON_TYPE_FAIRY="COLOR_POKEMON_TYPE_FAIRY",
  COLOR_POKEMON_TYPE_FIGHTING="COLOR_POKEMON_TYPE_FIGHTING",
  COLOR_POKEMON_TYPE_FIRE="COLOR_POKEMON_TYPE_FIRE",
  COLOR_POKEMON_TYPE_FLYING="COLOR_POKEMON_TYPE_FLYING",
  COLOR_POKEMON_TYPE_GHOST="COLOR_POKEMON_TYPE_GHOST",
  COLOR_POKEMON_TYPE_NORMAL="COLOR_POKEMON_TYPE_NORMAL",
  COLOR_POKEMON_TYPE_GRASS="COLOR_POKEMON_TYPE_GRASS",
  COLOR_POKEMON_TYPE_GROUND="COLOR_POKEMON_TYPE_GROUND",
  COLOR_POKEMON_TYPE_ICE="COLOR_POKEMON_TYPE_ICE",
  COLOR_POKEMON_TYPE_POISON="COLOR_POKEMON_TYPE_POISON",
  COLOR_POKEMON_TYPE_PSYCHIC="COLOR_POKEMON_TYPE_PSYCHIC",
  COLOR_POKEMON_TYPE_ROCK="COLOR_POKEMON_TYPE_ROCK",
  COLOR_POKEMON_TYPE_STEAL="COLOR_POKEMON_TYPE_STEAL",
  COLOR_POKEMON_TYPE_WATER="COLOR_POKEMON_TYPE_WATER",
}

 interface IPokeTypeValues {
  color: string;
  opacity: number;
}

 type IPokeValuesList = {
  [key in PokemonTypeNameTokenList]: IPokeTypeValues;
};

const styleGuide: IPokemonTypeColors = ColorGuidePokemonType;

 const PokeTypeColorGuide: IPokeValuesList = {
  [PokemonTypeNameTokenList.COLOR_POKEMON_TYPE_BUG]: {
    color: styleGuide.PokemonType.Bug.color,
    opacity: styleGuide.PokemonType.Bug.opacity,
  },
  [PokemonTypeNameTokenList.COLOR_POKEMON_TYPE_DARK]: {
    color: styleGuide.PokemonType.Dark.color,
    opacity: styleGuide.PokemonType.Dark.opacity,
  },
  [PokemonTypeNameTokenList.COLOR_POKEMON_TYPE_DRAGON]: {
    color: styleGuide.PokemonType.Dragon.color,
    opacity: styleGuide.PokemonType.Dragon.opacity,
  },
  [PokemonTypeNameTokenList.COLOR_POKEMON_TYPE_ELETRICK]: {
    color: styleGuide.PokemonType.Eletrick.color,
    opacity: styleGuide.PokemonType.Eletrick.opacity,
  },
  [PokemonTypeNameTokenList.COLOR_POKEMON_TYPE_FAIRY]: {
    color: styleGuide.PokemonType.Fairy.color,
    opacity: styleGuide.PokemonType.Fairy.opacity,
  },
  [PokemonTypeNameTokenList.COLOR_POKEMON_TYPE_FIGHTING]: {
    color: styleGuide.PokemonType.Fighting.color,
    opacity: styleGuide.PokemonType.Fighting.opacity,
  },
  [PokemonTypeNameTokenList.COLOR_POKEMON_TYPE_FIRE]: {
    color: styleGuide.PokemonType.Fire.color,
    opacity: styleGuide.PokemonType.Fire.opacity,
  },
  [PokemonTypeNameTokenList.COLOR_POKEMON_TYPE_FLYING]: {
    color: styleGuide.PokemonType.Flying.color,
    opacity: styleGuide.PokemonType.Flying.opacity,
  },
  [PokemonTypeNameTokenList.COLOR_POKEMON_TYPE_GHOST]: {
    color: styleGuide.PokemonType.Ghost.color,
    opacity: styleGuide.PokemonType.Ghost.opacity,
  },
  [PokemonTypeNameTokenList.COLOR_POKEMON_TYPE_NORMAL]: {
    color: styleGuide.PokemonType.Normal.color,
    opacity: styleGuide.PokemonType.Normal.opacity,
  },
  [PokemonTypeNameTokenList.COLOR_POKEMON_TYPE_GRASS]: {
    color: styleGuide.PokemonType.Grass.color,
    opacity: styleGuide.PokemonType.Grass.opacity,
  },
  [PokemonTypeNameTokenList.COLOR_POKEMON_TYPE_GROUND]: {
    color: styleGuide.PokemonType.Ground.color,
    opacity: styleGuide.PokemonType.Ground.opacity,
  },
  [PokemonTypeNameTokenList.COLOR_POKEMON_TYPE_ICE]: {
    color: styleGuide.PokemonType.Ice.color,
    opacity: styleGuide.PokemonType.Ice.opacity,
  },
  [PokemonTypeNameTokenList.COLOR_POKEMON_TYPE_POISON]: {
    color: styleGuide.PokemonType.Poison.color,
    opacity: styleGuide.PokemonType.Poison.opacity,
  },
  [PokemonTypeNameTokenList.COLOR_POKEMON_TYPE_PSYCHIC]: {
    color: styleGuide.PokemonType.Psychic.color,
    opacity: styleGuide.PokemonType.Psychic.opacity,
  },
  [PokemonTypeNameTokenList.COLOR_POKEMON_TYPE_ROCK]: {
    color: styleGuide.PokemonType.Rock.color,
    opacity: styleGuide.PokemonType.Rock.opacity,
  },
  [PokemonTypeNameTokenList.COLOR_POKEMON_TYPE_STEAL]: {
    color: styleGuide.PokemonType.Steal.color,
    opacity: styleGuide.PokemonType.Steal.opacity,
  },
  [PokemonTypeNameTokenList.COLOR_POKEMON_TYPE_WATER]: {
    color: styleGuide.PokemonType.Water.color,
    opacity: styleGuide.PokemonType.Water.opacity,
  },
};
export default { ...PokeTypeColorGuide };