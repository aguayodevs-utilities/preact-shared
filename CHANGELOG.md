# Changelog

All notable changes to this project will be documented in this file.

## [1.2.0] - 2025-06-09

### Added

-   `CustomRoleValidator` component for validating user roles.

### Changed

-   Refactored `CustomLayout` to integrate `useUserSession` via `CustomUserProvider` for centralized user session management and conditional rendering of protected content.
-   `CustomNavbar` now receives user session data (`user`, `logout`, `isLoading`) directly as props from `CustomLayout`.
-   `useUserSession` hook now exports `SessionContext` and `CustomUserProvider` for easier session context consumption.

## [1.1.0] - 2025-06-08

### Changed

-   Optimized user session logic in `CustomNavbar` and `CustomLayout`. `CustomNavbar` now receives `user`, `logout`, and `isLoading` as props, centralizing user session management in `CustomLayout`.
-   `CustomLayout` now conditionally fetches user session data via `useUserSession` only when `urlUser` prop is provided, improving performance for public routes.

## [1.0.8] - 2025-06-08

### Changed

-   Removed `cross-env` from `package.json` scripts to avoid issues with frontend projects not using `.env` files.

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