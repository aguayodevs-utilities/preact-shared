import React from 'react';
  import { FunctionComponent } from 'preact';
  import { AppBar, Toolbar, Avatar, Box } from '@mui/material';
  import { appDeliveryTheme } from '../styles/CustomTheme';
  import { ThemeProvider } from '@mui/material/styles';
  import { CustomTypography } from './CustomTypography';
  import { NavbarProps } from '../interfaces/interface.navbar';
  import { CustomSidebar } from './CustomSidebar';
  
  /**
   * CustomNavbar ahora recibe user, logout e isLoading como props,
   * en lugar de ejecutar useUserSession internamente.
   */
  export const CustomNavbar: FunctionComponent<NavbarProps> = ({
    environment,
    user,
    logout,
    isLoading,
    urlMenu
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
              style={{ width: 50, height: 50, cursor: 'pointer' }}
              onClick={() => (window.location.href = '/')}
            />
            {urlMenu && <CustomSidebar urlMenu={urlMenu} />}
  
            {/* Si no estamos en carga y tenemos user o queremos botón de login */}
            {!isLoading && (
              <Box display="flex" gap={2} alignItems="center" sx={{ml: 'auto'}}>
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
