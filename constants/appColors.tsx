// src/theme/appColors.ts
import { PaletteOptions } from '@mui/material/styles';
export const appColors: PaletteOptions = {
    primary: {
      light:       '#c1c1c1',
      main:        '#bc0303',
      dark:        '#040404',
      contrastText:'#ffffff',
    },
    secondary: {
      light:       '#f24d4d',
      main:        '#32323b',
      dark:        '#750000',
      contrastText:'#ffffff',
    },
    background: {
      default: '#32323b', 
      paper:   '#32323b ', 
    },
    divider: '#082c69',
    text: {
      primary:   '#E2DFD2', 
      secondary: '#c1c1c1',
      disabled:  '#7d7d7d',
    },
    error:   { light:'#c1c1c1', main:'#c1c1c1', dark:'#c1c1c1', contrastText:'#ffffff' },
    warning: { light:'#ffb74d', main:'#ff9800', dark:'#e65100', contrastText:'#000000' },
    info:    { light:'#e57373', main:'#bc0303', dark:'#8c0000', contrastText:'#ffffff' },
    success: { light:'#f26868', main:'#f20505', dark:'#a70000', contrastText:'#ffffff' },
    action: {
      active:             '#ffffff',
      hover:              '#bc0303',
      hoverOpacity:       0.08,
      selected:           '#3c3c46',
      selectedOpacity:    0.16,
      disabled:           '#7d7d7d',
      disabledBackground: '#2b2b35',
      disabledOpacity:    0.38,
    },
  };
  