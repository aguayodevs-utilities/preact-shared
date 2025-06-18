import React from 'react';
import { AppBar, Toolbar, Avatar, Box } from '@mui/material';
import { useUserSession } from '../hooks/useUserSession';
import { CustomThemeProvider, useCustomTheme } from '../styles/CustomThemeContext';
import { CustomTypography } from './CustomTypography';
import { NavbarProps } from '../interfaces/interface.navbar';

/**
 * @component CustomNavbar
 * @description A navigation bar component for the application.
 * It displays the application logo, a title (which can change based on user role),
 * and user information (name, role, avatar) if a user is logged in.
 * Provides a logout functionality.
 *
 * @param {NavbarProps} props - Props for the Navbar, currently includes `environment`, `urlUser`, and `urlLogout`.
 * @returns {React.ReactElement} The rendered Navbar component.
 *
 * @example
 * // Navbar with user session fetching from a custom endpoint
 * <CustomNavbar environment="development" urlUser="/auth/session" urlLogout="/auth/logout" />
 *
 * // Navbar without user session fetching (e.g., for public pages)
 * <CustomNavbar environment="development" />
 */
export const CustomNavbar: React.FC<NavbarProps> = ({ environment, urlUser, urlLogout }) => {
  const { user, logout, isLoading } = useUserSession({ sessionEndpointUrl: urlUser, urlLogout });
  const theme = useCustomTheme();

  // Log environment if in development for debugging or specific features
  if (environment === 'development') {
    console.log('Navbar rendering in development mode.');
  }

  return (
    <CustomThemeProvider theme={theme}>
      <AppBar
        position="static"
        sx={{
          bgcolor: theme.palette.background.paper,
          boxShadow: theme.shadows[1],
        }}
      >
        <Toolbar>
          <img
            src="/logo.png"
            alt="Application Logo"
            style={{
              width: '50px',
              height: '50px',
              marginRight: '16px',
              cursor: 'pointer'
            }}
            onClick={() => window.location.href = '/'}
          />
          <CustomTypography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {user ? `${user.role.charAt(0).toUpperCase() + user.role.slice(1)} Portal` : 'Application Portal'}
          </CustomTypography>
          {urlUser && !isLoading && (
            <Box display="flex" gap={2} alignItems="center">
              {user && (
                <>
                  <CustomTypography variant="body1">
                    {`${user.name.charAt(0).toUpperCase() + user.name.slice(1)} / ${user.role.toUpperCase()}`}
                  </CustomTypography>
                </>
              )}
            </Box>
          )}
          </Toolbar>
        </AppBar>
    </CustomThemeProvider>
  );
};
