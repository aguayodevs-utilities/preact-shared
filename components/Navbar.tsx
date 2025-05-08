// src/components/Navbar.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, Avatar, Box } from '@mui/material';
import { useUserSession } from '../hooks/useUserSession';
import { appColors } from '../constants/appColors';
import { appTheme } from './theme';
import { ThemeProvider, useTheme } from '@mui/material/styles';
  import { CustomTypography } from './CustomTypography';
import { NavbarProps } from '../interfaces/interface.navbar';
export const Navbar = () => {
  const { user, logout } = useUserSession();
  const theme = useTheme();
  return (
    <ThemeProvider theme={appTheme}>
      <AppBar 
        position="static"
        color="secondary"
        sx={{
          bgcolor: "background.default",
        }}
      >
        <Toolbar>
          <img 
            src="/logo.png" 
            alt="Logo" 
            style={{
              width: '60px', 
              height: '60px', 
              marginRight: '10px', 
              cursor: 'pointer'
            }} 
            onClick={() => window.location.href = '/'} 
          />
          <CustomTypography variant="h6" sx={{ flexGrow: 1 }}>
            {user ? `${user.role.charAt(0).toUpperCase() + user.role.slice(1)} Portal` : 'Portal'}
          </CustomTypography>
          <Box display="flex" gap={2} alignItems="center">
            {user && (
              <>
                <CustomTypography>
                  {user.name.charAt(0).toUpperCase() + user.name.slice(1)} / {user.role.toUpperCase()}
                </CustomTypography>
                
                <Avatar
                  src={user.image}
                  alt={user.name+ " " + user.second_name}
                  sx={{ width: 45, height: 45, bgcolor: 'secondary', color: 'text.primary' }}
                />
                <CustomTypography sx={{ cursor: 'pointer' }} onClick={logout}>Salir</CustomTypography>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};
