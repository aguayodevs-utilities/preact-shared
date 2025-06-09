# Changelog

All notable changes to this project will be documented in this file.

## [1.0.7] - 2025-06-08

### Added

-   `appDeliveryTheme` to `src/styles/CustomTheme.tsx`.

### Changed

-   Updated `README.md` to mention `appDeliveryTheme` as an exported theme.

## [1.0.6] - 2025-06-08

### Added

-   `appDeliveryColors` theme to `src/constants/appColors.tsx`.

### Changed

-   Updated `README.md` to mention `appDeliveryColors` as an exported theme.

## [1.0.5] - 2025-06-08

### Added

-   `urlLogout` prop to `CustomNavbar` for dynamic logout endpoint.
-   `urlLogout` prop to `CustomLayout` to pass dynamic logout URL to `CustomNavbar`.

### Changed

-   `NavbarProps` interface to use `urlLogout` instead of `logoutEndpointUrl`.
-   `UseUserSessionProps` interface to use `urlLogout` instead of `logoutEndpointUrl`.
-   `useUserSession` hook to utilize `urlLogout` for the logout functionality.
-   `CustomNavbar` component to pass `urlLogout` to `useUserSession`.
-   `CustomLayout` component to pass `urlLogout` to `CustomNavbar`.

## [1.0.1] - 2025-06-08

### Added

-   `urlUser` and `logoutEndpointUrl` props to `CustomNavbar` for dynamic user session and logout endpoints.
-   `urlUser` and `logoutEndpointUrl` props to `CustomLayout` to pass dynamic URLs to `CustomNavbar`.
-   `tsconfig.json` for proper TypeScript configuration and Vite environment variable handling.

### Changed

-   `useUserSession` hook to conditionally fetch user data only if `sessionEndpointUrl` is provided.
-   `useUserSession` hook to use `import.meta.env.MODE` for environment detection.
-   `CustomNavbar` to conditionally render user-related components based on `urlUser` and loading state.

### Fixed

-   TypeScript error related to `process.env.NODE_ENV` by updating to `import.meta.env.MODE` and adding Vite client types.