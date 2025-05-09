import React from 'react';
import { AppBar, Toolbar, Avatar, Box } from '@mui/material'; // Removed Typography
import { useUserSession } from '../hooks/useUserSession';
// import { appColors } from '../constants/appColors'; // Removed appColors as it's not directly used
import { appTheme } from '../styles/CustomTheme'; // Updated path
import { ThemeProvider } from '@mui/material/styles'; // useTheme removed as it's not used directly here now
import { CustomTypography } from './CustomTypography';
import { NavbarProps } from '../interfaces/interface.navbar'; // Uncommented and will be used

/**
 * @component CustomNavbar
 * @description A navigation bar component for the application.
 * It displays the application logo, a title (which can change based on user role),
 * and user information (name, role, avatar) if a user is logged in.
 * Provides a logout functionality.
 *
 * @param {NavbarProps} props - Props for the Navbar, currently includes `environment`.
 * @returns {React.ReactElement} The rendered Navbar component.
 *
 * @example
 * <CustomNavbar environment="development" />
 */
export const CustomNavbar: React.FC<NavbarProps> = ({ environment }) => {
  const { user, logout } = useUserSession();
  // const theme = useTheme(); // Not directly used, appTheme is provided by ThemeProvider

  // Log environment if in development for debugging or specific features
  if (environment === 'development') {
    console.log('Navbar rendering in development mode.');
  }

  return (
    <ThemeProvider theme={appTheme}>
      <AppBar
        position="static"
        // color="secondary" // color prop on AppBar can be 'default', 'inherit', 'primary', 'secondary', 'transparent'
        sx={{
          bgcolor: appTheme.palette.background.paper, // Use theme variable
          boxShadow: appTheme.shadows[1], // Add a subtle shadow
        }}
      >
        <Toolbar>
          <img
            src="/logo.png" // Consider making this configurable or importing the image
            alt="Application Logo"
            style={{
              width: '50px', // Slightly adjusted size
              height: '50px',
              marginRight: '16px', // Use theme spacing if possible theme.spacing(2)
              cursor: 'pointer'
            }}
            onClick={() => window.location.href = '/'} // Consider using react-router Link if applicable
          />
          <CustomTypography variant="h6" component="div" sx={{ flexGrow: 1 }}> {/* Added component="div" */}
            {user ? `${user.role.charAt(0).toUpperCase() + user.role.slice(1)} Portal` : 'Application Portal'}
          </CustomTypography>
          <Box display="flex" gap={2} alignItems="center">
            {user && (
              <>
                <CustomTypography variant="body1"> {/* Adjusted variant */}
                  {`${user.name.charAt(0).toUpperCase() + user.name.slice(1)} / ${user.role.toUpperCase()}`}
                </CustomTypography>
                <Avatar
                  src={user.image}
                  alt={`${user.name} ${user.second_name || ''}`} // Handle missing second_name
                  sx={{ width: 40, height: 40, bgcolor: appTheme.palette.secondary.main, color: appTheme.palette.secondary.contrastText }} // Use theme variables
                />
                <CustomTypography variant="button" sx={{ cursor: 'pointer', textTransform: 'none' }} onClick={logout} data-testid="logout-button"> {/* Use button variant */}
                  Salir
                </CustomTypography>
              </>
            )}
            {!user && ( /* Optional: Show login/register if no user */
              <CustomTypography variant="button" sx={{ cursor: 'pointer', textTransform: 'none' }} onClick={() => { /* Navigate to login */ }} data-testid="login-button">
                Iniciar Sesión
              </CustomTypography>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};
