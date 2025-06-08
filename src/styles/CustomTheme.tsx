import { createTheme, ThemeOptions } from '@mui/material/styles';
// Adjusted import path assuming appColors is now at src/constants/appColors.tsx
import { appColors } from '../constants/appColors';

/**
 * @constant appTheme
 * @description The custom Material-UI theme for the application.
 * It is created using `createTheme` from MUI and uses `appColors`
 * for the palette configuration. This theme can be extended with other
 * MUI theme options like typography, spacing, breakpoints, components overrides, etc.
 *
 * @type {Theme}
 *
 * @example
 * // To use this theme, wrap your application or component tree with MUI's ThemeProvider:
 * // import { ThemeProvider } from '@mui/material/styles';
 * // import { appTheme } from './path/to/CustomTheme';
 * //
 * // ReactDOM.render(
 * //   <ThemeProvider theme={appTheme}>
 * //     <App />
 * //   </ThemeProvider>,
 * //   document.getElementById('root')
 * // );
 *
 * // Accessing theme values in a component:
 * // import { useTheme } from '@mui/material/styles';
 * //
 * // const MyComponent = () => {
 * //   const theme = useTheme();
 * //   return <div style={{ color: theme.palette.primary.main }}>Hello</div>;
 * // };
 */
export const appTheme = createTheme({
  palette: appColors,
  // Future enhancements:
  // typography: {
  //   fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  //   // Define other typography variants if needed
  // },
  // spacing: 8, // Default spacing factor
  // components: {
  //   // Example: Default props for MuiButton
  //   MuiButton: {
  //     defaultProps: {
  //       disableElevation: true,
  //     },
  //     styleOverrides: {
  //       root: {
  //         textTransform: 'none', // Buttons will not be uppercase by default
  //       }
  //     }
  //   },
  //   // Add other component overrides or default props
  // }
} as ThemeOptions); // Added ThemeOptions for better type checking during creation