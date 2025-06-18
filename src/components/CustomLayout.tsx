import React, { FunctionComponent, ReactNode } from 'react';
import { CssBaseline, Box, Container } from '@mui/material'; // Added Box and Container
import { CustomNavbar } from './CustomNavbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import default styles for ToastContainer
import { CustomBreadcrumb } from './CustomBreadcrumb';
import { NODE_ENV_TYPE } from '../interfaces/interface.navbar'; // Assuming this type is still relevant

/**
 * @interface CustomLayoutProps
 * @description Defines the props for the CustomLayout component.
 */
export interface CustomLayoutProps {
  /** The content to be rendered within the layout. */
  children: ReactNode;
  /** The current application environment (e.g., 'development', 'production'). */
  environment: NODE_ENV_TYPE;
  /** Optional URL for fetching user session data, passed to CustomNavbar. */
  urlUser?: string;
  /** Optional URL for logging out the user, passed to CustomNavbar. */
  urlLogout?: string;
  /** Optional flag to show/hide the breadcrumb. Defaults to true. */
  showBreadcrumb?: boolean;
  /** Optional flag to show/hide the navbar. Defaults to true. */
  showNavbar?: boolean;
}

/**
 * @component CustomLayout
 * @description A primary layout component that structures the application's UI.
 * It includes `CssBaseline` for style normalization, a `CustomNavbar`,
 * `CustomBreadcrumb`, the main content area (`children`), and a `ToastContainer` for notifications.
 *
 * @param {CustomLayoutProps} props - The props for the layout.
 * @returns {React.ReactElement} The rendered layout structure.
 *
 * @example
 * <CustomLayout environment="development">
 *   <HomePage />
 * </CustomLayout>
 */
export const CustomLayout: FunctionComponent<CustomLayoutProps> = ({
  children,
  environment,
  urlUser,
  urlLogout,
  showBreadcrumb = true,
  showNavbar = true,
}) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />
      {showNavbar && (
        <CustomNavbar
          environment={environment}
          urlUser={urlUser}
          urlLogout={urlLogout}
        />
      )}
      
      <Container component="main" sx={{ flexGrow: 1, py: 3 }}>
        {showBreadcrumb && <CustomBreadcrumb />}
        {children}
      </Container>
      
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Box>
  );
};