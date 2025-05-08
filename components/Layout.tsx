import React, { FunctionComponent } from 'react';
import { CssBaseline } from '@mui/material';
import { Navbar } from './Navbar';
import { ToastContainer } from 'react-toastify';
import { CustomBreadcrumb } from './CustomBreadcrumb';
import { NODE_ENV_TYPE } from '../interfaces/interface.navbar';
export const Layout: FunctionComponent<{ children: any, environment: NODE_ENV_TYPE }> = ({ children, environment }) => {
  return (
    <>
      <CssBaseline />
      <Navbar environment={environment} />
      <CustomBreadcrumb />
      {children}
      <ToastContainer />
    </>
  );
}; 