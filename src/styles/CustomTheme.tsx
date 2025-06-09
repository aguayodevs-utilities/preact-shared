import { createTheme, ThemeOptions } from '@mui/material/styles';
// Adjusted import path assuming appColors is now at src/constants/appColors.tsx
import { appColors, appDeliveryColors } from '../constants/appColors';

/**
 * @constant appDeliveryTheme
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
 * // import { appDeliveryTheme } from './path/to/CustomTheme';
 * //
 * // ReactDOM.render(
 * //   <ThemeProvider theme={appDeliveryTheme}>
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
  palette: appColors
} as ThemeOptions); 
export const appDeliveryTheme = createTheme({
  palette: appDeliveryColors
} as ThemeOptions);