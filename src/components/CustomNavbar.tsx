import React from 'react';
import { AppBar, Toolbar, Avatar, Box } from '@mui/material';
import { useUserSession } from '../hooks/useUserSession';
import { appTheme } from '../styles/CustomTheme';
import { ThemeProvider } from '@mui/material/styles';
import { CustomTypography } from './CustomTypography';
import { NavbarProps } from '../interfaces/interface.navbar';

/**
 * @component CustomNavbar
 * @description A navigation bar component for the application.
 * It displays the application logo, a title (which can change based on user role),
 * and user information (name, role, avatar) if a user is logged in.
 * Provides a logout functionality.
 *
 * @param {NavbarProps} props - Props for the Navbar, currently includes `environment`, `urlUser`, and `logoutEndpointUrl`.
 * @returns {React.ReactElement} The rendered Navbar component.
 *
 * @example
 * // Navbar with user session fetching from a custom endpoint
 * <CustomNavbar environment="development" urlUser="/auth/session" logoutEndpointUrl="/auth/logout" />
 *
 * // Navbar without user session fetching (e.g., for public pages)
 * <CustomNavbar environment="development" />
 */
export const CustomNavbar: React.FC<NavbarProps> = ({ environment, urlUser, urlLogout }) => {
  const { user, logout, isLoading } = useUserSession({ sessionEndpointUrl: urlUser, urlLogout });

  // Log environment if in development for debugging or specific features
  if (environment === 'development') {
    console.log('Navbar rendering in development mode.');
  }

  return (
    <ThemeProvider theme={appTheme}>
      <AppBar
        position="static"
        sx={{
          bgcolor: appTheme.palette.background.paper,
          boxShadow: appTheme.shadows[1],
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
                  <Avatar
                    src={user.image}
                    alt={`${user.name} ${user.second_name || ''}`}
                    sx={{ width: 40, height: 40, bgcolor: appTheme.palette.secondary.main, color: appTheme.palette.secondary.contrastText }}
                  />
                  <CustomTypography variant="button" sx={{ cursor: 'pointer', textTransform: 'none' }} onClick={logout} data-testid="logout-button">
                    Salir
                  </CustomTypography>
                </>
              )}
              {!user && (
                <CustomTypography variant="button" sx={{ cursor: 'pointer', textTransform: 'none' }} onClick={() => { /* Navigate to login */ }} data-testid="login-button">
                  Iniciar Sesión
                </CustomTypography>
              )}
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};
