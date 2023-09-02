 import { ITokenTypographyValue,ITypographyValues } from "../interfaces";
import { TypographyToken } from "../typographyToken";
 
 enum TypographyTokensNameList {
   TYPOGRAPHY_HEADLINE='TYPOGRAPHY_HEADLINE',
   TYPOGRAPHY_SUBTITLE_1='TYPOGRAPHY_SUBTITLE_1',
   TYPOGRAPHY_SUBTITLE_2='TYPOGRAPHY_SUBTITLE_2',
   TYPOGRAPHY_SUBTITLE_3='TYPOGRAPHY_SUBTITLE_3',
   TYPOGRAPHY_BODY_1='TYPOGRAPHY_BODY_1',
   TYPOGRAPHY_BODY_2='TYPOGRAPHY_BODY_2',
   TYPOGRAPHY_BODY_3='TYPOGRAPHY_BODY_3',
   TYPOGRAPHY_CAPTION='TYPOGRAPHY_CAPTION',
  }
  type ITokensValuesList = {
    [key in TypographyTokensNameList ]: ITokenTypographyValue;
  };

  const styleGuide:ITypographyValues  = TypographyToken ;

 const TypographyGuide: ITokensValuesList = {
     [TypographyTokensNameList.TYPOGRAPHY_HEADLINE]: {
        weight:styleGuide.Header.HeadLine.weight,
        fontSize:styleGuide.Header.HeadLine.fontSize,
        lineHeight:styleGuide.Header.HeadLine.lineHeight
    },
     [TypographyTokensNameList.TYPOGRAPHY_SUBTITLE_1]: {
        weight:styleGuide.Header.Subtitle_1.weight,
        fontSize:styleGuide.Header.Subtitle_1.fontSize,
        lineHeight:styleGuide.Header.Subtitle_1.lineHeight
    },
     [TypographyTokensNameList.TYPOGRAPHY_SUBTITLE_2]: {
        weight:styleGuide.Header.Subtitle_2.weight,
        fontSize:styleGuide.Header.Subtitle_2.fontSize,
        lineHeight:styleGuide.Header.Subtitle_2.lineHeight
    },
     [TypographyTokensNameList.TYPOGRAPHY_SUBTITLE_3]: {
        weight:styleGuide.Header.Subtitle_3.weight,
        fontSize:styleGuide.Header.Subtitle_3.fontSize,
        lineHeight:styleGuide.Header.Subtitle_3.lineHeight
    },
     [TypographyTokensNameList.TYPOGRAPHY_BODY_1]: {
        weight:styleGuide.Body.Body_1.weight,
        fontSize:styleGuide.Body.Body_1.fontSize,
        lineHeight:styleGuide.Body.Body_1.lineHeight
    },
     [TypographyTokensNameList.TYPOGRAPHY_BODY_2]: {
        weight:styleGuide.Body.Body_2.weight,
        fontSize:styleGuide.Body.Body_2.fontSize,
        lineHeight:styleGuide.Body.Body_2.lineHeight
    },
     [TypographyTokensNameList.TYPOGRAPHY_BODY_3]: {
        weight:styleGuide.Body.Body_3.weight,
        fontSize:styleGuide.Body.Body_3.fontSize,
        lineHeight:styleGuide.Body.Body_3.lineHeight
    },
     [TypographyTokensNameList.TYPOGRAPHY_CAPTION]: {
        weight:styleGuide.Body.Caption.weight,
        fontSize:styleGuide.Body.Caption.fontSize,
        lineHeight:styleGuide.Body.Caption.lineHeight
    },
 };

 export default { ...TypographyGuide };