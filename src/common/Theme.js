/** @format */

import { createTheming } from '@callstack/react-theme-provider';

export const themes = {
  default: {
    colors: {
      primary: '#e1a02c',
      lineColor: '#f9f9f9',
      background: '#ffffff',
      accent: 'yellow',
    },
    dark: false,
  },
  dark: {
    colors: {
      text: 'rgba(255, 255, 255, 0.9)',
      primary: '#e1a02c',
      accent: 'yellow',
      lineColor: '#383A46',
      background: '#222229', // '#242424' // '#232D4C'
    },
    dark: true,
  },
};

const { ThemeProvider, withTheme } = createTheming(themes.default);

export { ThemeProvider, withTheme };
