import { PaletteOptions } from '@mui/material/styles';

/**
 * @constant appColors
 * @description Defines the color palette for the application's theme.
 * This object is structured according to MUI's `PaletteOptions` type.
 * It includes definitions for primary, secondary, background, text,
 * and action colors, as well as specific states like error, warning, info, and success.
 *
 * Note: Some color choices, like `error.main` being '#c1c1c1' (a grey),
 * might need review to ensure they convey the intended semantic meaning effectively.
 * Similarly, `info.main` and `success.main` being shades of red might be unconventional.
 *
 * @type {PaletteOptions}
 */
export const appColors: PaletteOptions = {
  primary: {
    light:       '#c1c1c1', // A light grey
    main:        '#bc0303', // A dark red
    dark:        '#040404', // Almost black
    contrastText:'#ffffff', // White
  },
  secondary: {
    light:       '#f24d4d', // A lighter red
    main:        '#32323b', // A dark grey/blue
    dark:        '#750000', // A very dark red
    contrastText:'#ffffff', // White
  },
  background: {
    default: '#32323b', // Dark grey/blue, same as secondary.main
    paper:   '#32323b', // Dark grey/blue, (has a trailing space in original, removed)
  },
  divider: '#082c69', // A dark blue
  text: {
    primary:   '#E2DFD2', // An off-white/beige
    secondary: '#c1c1c1', // Light grey, same as primary.light
    disabled:  '#7d7d7d', // A medium grey
  },
  // Semantic colors - review these for conventional color meanings
  error:   { light: '#ffcdd2', main: '#ef5350', dark: '#c62828', contrastText: '#ffffff' }, // Example: More conventional red for error
  warning: { light: '#ffb74d', main: '#ff9800', dark: '#e65100', contrastText: '#000000' }, // Orange, looks conventional
  info:    { light: '#64b5f6', main: '#2196f3', dark: '#1565c0', contrastText: '#ffffff' }, // Example: More conventional blue for info
  success: { light: '#81c784', main: '#4caf50', dark: '#388e3c', contrastText: '#ffffff' }, // Example: More conventional green for success
  action: {
    active:             '#ffffff', // White
    hover:              '#bc0303', // Dark red, same as primary.main
    hoverOpacity:       0.08,
    selected:           '#3c3c46', // A darker grey
    selectedOpacity:    0.16,
    disabled:           '#7d7d7d', // Medium grey, same as text.disabled
    disabledBackground: '#2b2b35', // A very dark grey/blue
    disabledOpacity:    0.38,
    // focus?: string; // Optional: color for focus state
    // focusOpacity?: number; // Optional: opacity for focus state
  },
  // mode: 'dark', // If this is intended to be a dark theme by default
};
export const appDeliveryColors: PaletteOptions = {
  primary: {
    light:       '#fbb89f',     // Naranja claro
    main:        '#fa7147',     // Naranja principal del logo
    dark:        '#b94725',     // Naranja oscuro
    contrastText:'#ffffff',     // Texto blanco sobre botones naranjas
  },
  secondary: {
    light:       '#eeeeee',     // Gris claro
    main:        '#d1d1d1',     // Gris medio para backgrounds
    dark:        '#a0a0a0',     // Gris oscuro para botones secundarios
    contrastText:'#000000',     // Texto oscuro sobre fondos claros
  },
  background: {
    default: '#f8f8f8',         // Fondo principal casi blanco
    paper:   '#ffffff',         // Tarjetas y paneles
  },
  divider: '#e0e0e0',           // Línea sutil entre componentes

  text: {
    primary:   '#fa7147',       // Texto principal en gris muy oscuro
    secondary: '#79ab53',       // Texto secundario gris medio
    disabled:  '#9e9e9e',       // Texto deshabilitado
  },

  error: {
    light: '#ffcdd2',
    main:  '#ef5350',
    dark:  '#c62828',
    contrastText: '#ffffff',
  },
  warning: {
    light: '#ffe082',
    main:  '#ff9800',
    dark:  '#ef6c00',
    contrastText: '#000000',
  },
  info: {
    light: '#64b5f6',
    main:  '#2196f3',
    dark:  '#1565c0',
    contrastText: '#ffffff',
  },
  success: {
    light: '#cce5ba',
    main:  '#79ab53',           // Verde del logo para estados exitosos
    dark:  '#4c7e2f',
    contrastText: '#ffffff',
  },

  action: {
    active:             '#212121',
    hover:              '#fa7147',
    hoverOpacity:       0.08,
    selected:           '#ffe1d5',
    selectedOpacity:    0.16,
    disabled:           '#bdbdbd',
    disabledBackground: '#f0f0f0',
    disabledOpacity:    0.38,
  },
};

  
