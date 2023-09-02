import {ColorGuidePokedex }from "../../colorsToken/ColorGuidePokedex";
import { IPokedexColors } from "../../interfaces/PokedexColor";


const PokedexListToken: IPokedexColors = ColorGuidePokedex;

enum PokedexColorTokens {
  COLOR_IDENTITY = "COLOR_IDENTITY",
  COLOR_GRAYSCALE_DARK = "COLOR_GRAYSCALE_DARK",
  COLOR_GRAYSCALE_MEDIUM = "COLOR_GRAYSCALE_MEDIUM",
  COLOR_GRAYSCALE_LIGHT = "COLOR_GRAYSCALE_LIGHT",
  COLOR_GRAYSCALE_BACKGROUND = "COLOR_GRAYSCALE_BACKGROUND",
  COLOR_GRAYSCALE_WHITE = "COLOR_GRAYSCALE_WHITE",
}

interface IPokedexColorValues {
  color: string;
  opacity: number;
}

type IPokedexTokensValuesList = {
  [key in PokedexColorTokens]: IPokedexColorValues;
};

const ColorPokedexTokenList: IPokedexTokensValuesList = {
  [PokedexColorTokens.COLOR_IDENTITY]: {
    color: PokedexListToken.Identity.Primary.color,
    opacity: PokedexListToken.Identity.Primary.opacity,
  },
  [PokedexColorTokens.COLOR_GRAYSCALE_DARK]: {
    color: PokedexListToken.GreyScale.Dark.color,
    opacity: PokedexListToken.GreyScale.Dark.opacity,
  },
  [PokedexColorTokens.COLOR_GRAYSCALE_MEDIUM]: {
    color: PokedexListToken.GreyScale.Medium.color,
    opacity: PokedexListToken.GreyScale.Medium.opacity,
  },
  [PokedexColorTokens.COLOR_GRAYSCALE_LIGHT]: {
    color: PokedexListToken.GreyScale.Light.color,
    opacity: PokedexListToken.GreyScale.Light.opacity,
  },
  [PokedexColorTokens.COLOR_GRAYSCALE_BACKGROUND]: {
    color: PokedexListToken.GreyScale.Background.color,
    opacity: PokedexListToken.GreyScale.Background.opacity,
  },
  [PokedexColorTokens.COLOR_GRAYSCALE_WHITE]: {
    color: PokedexListToken.GreyScale.White.color,
    opacity: PokedexListToken.GreyScale.White.opacity,
  },
};

export default { ...ColorPokedexTokenList };
