interface Colors {
  color1: string; // used for header
  color2: string; // used for shadow
  color3: string; // used for background
  color4: string; // light card background
  color5: string; // dark color bold text
  color6: string; // color for medium and normal text
  primary: string;
  primary1: string;
  primary2: string;
  primary3: string;
  primary4: string;
  primary5: string;
  primary6: string;
}

const darkMode: Colors = {
  color1: 'rgb(37, 38, 41)',
  primary: '#222831',
  primary1: '#ffffff',
  primary2: '#37414f',
  primary3: '#0d0f13',
  primary4: '#ебебе6',
  primary5: '#4c596d',
  color2: '#000000',
  color4: '#ffffff',
};

const lightMode: Colors = {
  color1: 'rgb(37, 38, 41)',
  color2: '#000000',
  color3: '#F5F5F5',
  color4: '#ffffff',
  color5: '#1A1A1A',
  color6: '#797979',
  primary: '#222831',
  primary1: '#ffffff',
  primary2: '#37414f',
  primary3: '#0d0f13',
  primary4: '#ебебе6',
  primary5: '#4c596d',
};

const themeColors: Colors = lightMode;

export const colors = {
  app: {
    background: themeColors.color3,
    textFieldBackground: themeColors.color3,
    cardBackground: themeColors.color4,
    header: themeColors.color1,
    conentBackground: themeColors.color4,
    fabBackground: themeColors.color1,
  },
  border: {
    light: themeColors.primary3 + '20',
  },
  shadow: {
    dark: themeColors.color2,
  },
  text: {
    light: themeColors.color4,
    bold: themeColors.color5,
    medium: themeColors.color6,
  },
};
