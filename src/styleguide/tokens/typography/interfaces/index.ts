export interface ITypographyValues {
  Header: {
    HeadLine: ITokenTypographyValue;
    Subtitle_3: ITokenTypographyValue;
    Subtitle_2: ITokenTypographyValue;
    Subtitle_1: ITokenTypographyValue;
  };
  Body: {
    Body_3: ITokenTypographyValue;
    Body_2: ITokenTypographyValue;
    Body_1: ITokenTypographyValue;
    Caption: ITokenTypographyValue;
  };
}

export interface ITokenTypographyValue {
    weight: number;
    fontSize: number;
    lineHeight: number;
  }