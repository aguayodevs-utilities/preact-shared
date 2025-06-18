import React, { FunctionComponent } from 'preact';
import { useContext } from 'preact/hooks';
import type { ReactNode } from 'preact/compat';
import { CssBaseline, Box, Container, Typography, Button, CircularProgress } from '@mui/material';
import { CustomNavbar } from './CustomNavbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CustomBreadcrumb } from './CustomBreadcrumb';
import { NODE_ENV_TYPE } from '../interfaces/interface.navbar';
import { CustomUserProvider, SessionContext } from '../hooks/useUserSession';

export interface CustomLayoutProps {
  children: ReactNode;
  environment: NODE_ENV_TYPE;
  urlUser?: string;
  urlLogout?: string;
  showBreadcrumb?: boolean;
  showNavbar?: boolean;
  urlMenu?: string;
  urlLabels?: string;
}

export const CustomLayout: FunctionComponent<CustomLayoutProps> = ({
  children,
  environment,
  urlUser,
  urlLogout,
  showBreadcrumb = true,
  showNavbar = true,
  urlMenu = undefined,
  urlLabels
}) => {
  // Rutas protegidas: envolver en proveedor de sesión
  if (urlUser) {
    return (
      <CustomUserProvider sessionEndpointUrl={urlUser} urlLogout={urlLogout}>
        <ProtectedLayoutContent
          environment={environment}
          showNavbar={showNavbar}
          showBreadcrumb={showBreadcrumb}
          urlMenu={urlMenu}
          urlLabels={urlLabels}
        >
          {children}
        </ProtectedLayoutContent>
      </CustomUserProvider>
    );
  }

  // Rutas públicas
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />
      {showNavbar && <CustomNavbar environment={environment} urlMenu={urlMenu}/>}
      <Container component="main" sx={{ flexGrow: 1, py: 3 }}>
        {showBreadcrumb && <CustomBreadcrumb urlLabels={urlLabels} />}
        {children}
      </Container>
      <ToastContainer position="bottom-right" autoClose={5000} theme="colored" aria-label="Notifications" />
    </Box>
  );
};

/**
 * Contenido del layout que depende de la sesión (solo dentro del proveedor)
 */
interface ProtectedLayoutContentProps extends Pick<CustomLayoutProps, 'environment' | 'showNavbar' | 'showBreadcrumb' | 'urlMenu' | 'urlLabels'> {
  children: ReactNode;
}

const ProtectedLayoutContent: FunctionComponent<ProtectedLayoutContentProps> = ({
  environment,
  showNavbar,
  showBreadcrumb,
  urlMenu, // Receive urlMenu here
  urlLabels,
  children,
}) => {
  const { user, logout, isLoading, error } = useContext(SessionContext);

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error || !user) {
    return (
      <Container maxWidth="xs" sx={{ textAlign: 'center', mt: 8 }}>
        <Typography variant="h6" gutterBottom>Contenido protegido</Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>Debes iniciar sesión para continuar.</Typography>
        <Button variant="contained" onClick={() => window.location.href = '/auth/login'}>Iniciar Sesión</Button>
      </Container>
    );
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />
      {showNavbar && (
        <CustomNavbar
          environment={environment}
          user={user}
          logout={logout}
          isLoading={isLoading}
          urlMenu={urlMenu} // Pass urlMenu to CustomNavbar here
        />
      )}
      <Container component="main" sx={{ flexGrow: 1, py: 3 }}>
        {showBreadcrumb && <CustomBreadcrumb urlLabels={urlLabels} />}
        {children}
      </Container>
      <ToastContainer position="bottom-right" autoClose={5000} theme="colored" aria-label="Notifications" />
    </Box>
  );
};
