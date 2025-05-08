import React from 'react';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { useBreadcrumbs } from '../hooks/useBreadcrumbs';
import { appTheme } from './theme';
import { ThemeProvider } from '@mui/material/styles';
import { CustomTypography } from './CustomTypography';
export const CustomBreadcrumb = () => {
  const [crumbs, go] = useBreadcrumbs();

  return (
    <ThemeProvider theme={appTheme}>
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2,fontSize: '24px' }}>
        {/* Inicio */}
        <Link
        underline="hover"
        sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
        onClick={() => go('/')}
      >
        <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" /> <CustomTypography variant="h6">Inicio</CustomTypography>
      </Link>
        {crumbs.map(({ label, href, last }) =>
          last ? (
            <CustomTypography variant="h6" key={href}>{label}</CustomTypography>
          ) : (
            <Link
              key={href}
              underline="hover"
              onClick={() => go(href)}
              sx={{ cursor: 'pointer' }}
            >
              <CustomTypography variant="h6">{label}</CustomTypography>
            </Link>
          )
        )}
      </Breadcrumbs>
    </ThemeProvider>
  );
};
