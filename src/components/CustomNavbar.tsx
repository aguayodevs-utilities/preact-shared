import React from 'react';
import { AppBar, Toolbar, Avatar, Box } from '@mui/material';
import { appDeliveryTheme } from '../styles/CustomTheme';
import { ThemeProvider } from '@mui/material/styles';
import { CustomTypography } from './CustomTypography';
import { NavbarProps } from '../interfaces/interface.navbar';

/**
 * CustomNavbar ahora recibe user, logout e isLoading como props,
 * en lugar de ejecutar useUserSession internamente.
 */
export const CustomNavbar: React.FC<NavbarProps> = ({
  environment,
  user,
  logout,
  isLoading,
}) => {
  // Solo logueamos en desarrollo
  if (environment === 'development') {
    console.log('Navbar rendering in development mode.');
  }

  return (
    <ThemeProvider theme={appDeliveryTheme}>
      <AppBar
        position="static"
        sx={{
          bgcolor: appDeliveryTheme.palette.background.paper,
          boxShadow: appDeliveryTheme.shadows[1],
        }}
      >
        <Toolbar>
          <img
            src="/logo.png"
            alt="Application Logo"
            style={{ width: 50, height: 50, marginRight: 16, cursor: 'pointer' }}
            onClick={() => (window.location.href = '/')}
          />

          <CustomTypography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {user
              ? `${user.role.charAt(0).toUpperCase() + user.role.slice(1)} Portal`
              : 'Application Portal'}
          </CustomTypography>

          {/* Si no estamos en carga y tenemos user o queremos botón de login */}
          {!isLoading && (
            <Box display="flex" gap={2} alignItems="center">
              {user ? (
                <>
                  <CustomTypography variant="body1">
                    {`${user.name.charAt(0).toUpperCase() +
                      user.name.slice(1)} / ${user.role.toUpperCase()}`}
                  </CustomTypography>
                  <Avatar
                    src={user.image}
                    alt={`${user.name} ${user.sname || ''}`}
                    sx={{
                      width: 40,
                      height: 40,
                      bgcolor: appDeliveryTheme.palette.secondary.main,
                      color: appDeliveryTheme.palette.secondary.contrastText,
                    }}
                  />
                  <CustomTypography
                    variant="button"
                    sx={{ cursor: 'pointer', textTransform: 'none' }}
                    onClick={logout}
                    data-testid="logout-button"
                  >
                    Salir
                  </CustomTypography>
                </>
              ) : (
                <CustomTypography
                  variant="button"
                  sx={{ cursor: 'pointer', textTransform: 'none' }}
                  onClick={() => (window.location.href = '/auth/login')}
                  data-testid="login-button"
                >
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
