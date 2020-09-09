export interface Theme {
   colors: ThemeColors;
   shadows: ThemeShadows;
   fonts: ThemeFonts;
   borders: ThemeBorders;
}

interface ThemeColors {
   background1: string;
   text1: string;
   scrollbar: string;
   scrollbarThumb: string;
}

interface ThemeShadows {
   elevation1: string;
}

interface ThemeFonts {
   font1: string;
   size1: string;
   weight1: string;
   letterSpacing1: string;
   lineHeight1: string;
}

interface ThemeBorders {
   borderRadius1: string;
}
