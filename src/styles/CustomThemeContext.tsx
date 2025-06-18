import React, { createContext, useContext } from 'react';
import { ThemeProvider as MUIThemeProvider, Theme } from '@mui/material/styles';
import { appDeliveryTheme } from './CustomTheme';

export const CustomThemeContext = createContext<Theme>(appDeliveryTheme);

export const useCustomTheme = (): Theme => {
  return useContext(CustomThemeContext) || appDeliveryTheme;
};

interface CustomThemeProviderProps {
  theme?: Theme;
  children: React.ReactNode;
}

export const CustomThemeProvider: React.FC<CustomThemeProviderProps> = ({ theme, children }) => {
  const inheritedTheme = useCustomTheme();
  const activeTheme = theme || inheritedTheme || appDeliveryTheme;

  return (
    <CustomThemeContext.Provider value={activeTheme}>
      <MUIThemeProvider theme={activeTheme}>{children}</MUIThemeProvider>
    </CustomThemeContext.Provider>
  );
};
