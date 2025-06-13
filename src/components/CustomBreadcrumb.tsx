import { FunctionComponent } from 'preact';
import { Breadcrumbs, Link } from '@mui/material'; // Typography removed as CustomTypography is used
import HomeIcon from '@mui/icons-material/Home';
import { useBreadcrumbs } from '../hooks/useBreadcrumbs';
import { appDeliveryTheme } from '../styles/CustomTheme'; // Updated path
import { ThemeProvider } from '@mui/material/styles';
import { CustomTypography } from './CustomTypography';

/**
 * @component CustomBreadcrumb
 * @description A custom breadcrumb component that displays navigation paths.
 * It uses the `useBreadcrumbs` hook to get the current breadcrumb trail
 * and renders them with Material-UI components.
 * Includes a "Home" link and dynamically generated links for the current path.
 *
 * @example
 * return (
 *   <CustomBreadcrumb />
 * )
 */
export const CustomBreadcrumb = ({ urlLabels }: { urlLabels?: string }) => {
  const [crumbs, go] = useBreadcrumbs(urlLabels);
  
  return (
    <ThemeProvider theme={appDeliveryTheme}>
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2, fontSize: '24px' }}>
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
          onClick={() => go('/')}
          data-testid="breadcrumb-home-link" // Added for testing
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          <CustomTypography variant="h6">Inicio</CustomTypography>
        </Link>
        {crumbs.map(({ label, href, last }) =>
          last ? (
            <CustomTypography variant="h6" key={href} data-testid={`breadcrumb-current-${label}`}>
              {label}
            </CustomTypography>
          ) : (
            <Link
              key={href}
              underline="hover"
              onClick={() => go(href)}
              sx={{ cursor: 'pointer' }}
              data-testid={`breadcrumb-link-${label}`} // Added for testing
            >
              <CustomTypography variant="h6">{label}</CustomTypography>
            </Link>
          )
        )}
      </Breadcrumbs>
    </ThemeProvider>
  );
};
