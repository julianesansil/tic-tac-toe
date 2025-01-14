const defaultTheme = {
  colors: {
    blue: '#37A8EE',
    green: '#00DCA4',
    red: '#FF6961',
    yellow: '#F1C40F',
    white: '#FFFFFF',

    grey: '#D8D8D8',
    lighGrey: '#F6F8F9',
    darkGrey: '#2C2E30',
    newGrey: '#808080',

    greyAlpha60: '#D8D8D899', // RRGGBBAA
  },
  fonts: 'GlacialIndifference, sans-serif',
  lineHeight: {
    body: 1,
    spaced: 1.5,
  },
};

export type ThemeType = typeof defaultTheme;
export type ThemeColors = keyof typeof defaultTheme.colors;
export type ThemeLineHeight = keyof typeof defaultTheme.lineHeight;

export default defaultTheme;
