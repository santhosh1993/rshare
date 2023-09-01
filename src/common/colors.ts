interface Colors {
  color1: string; // used for header
  color2: string; // used for shadow
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
};

const lightMode: Colors = {
  color1: 'rgb(255, 255, 255)',
  primary: '#222831',
  primary1: '#ffffff',
  primary2: '#37414f',
  primary3: '#0d0f13',
  primary4: '#ебебе6',
  primary5: '#4c596d',
  color2: '#000000',
};

const themeColors: Colors = darkMode;

export const colors = {
  app: {
    background: themeColors.color1,
    textFieldBackground: themeColors.primary1,
  },
  border: {
    light: themeColors.primary3 + '20',
  },
  shadow: {
    dark: themeColors.color2,
  },
};
