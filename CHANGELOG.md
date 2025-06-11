# Changelog

All notable changes to this project will be documented in this file.

## [1.3.2] - 2025-06-11

### Fixed 

-  `CustomLayout`component ([`src/components/CustomLayout.tsx`](preact-shared/src/components/CustomLayout.tsx:1)): Se corrige propiedad urlMenu, para enviarse correctamente a CustomNavbar.

## [1.3.1] - 2025-06-11

### Added

-  `CustomLayout`component ([`src/components/CustomLayout.tsx`](preact-shared/src/components/CustomLayout.tsx:1)): Se añade propiedad faltante urlMenu.

### Fixed 

-  `CustomNavbar`component ([`src/components/CustomNavbar.tsx`](preact-shared/src/components/CustomNavbar.tsx:1)): Se añade estilo sx a componente Box para alinear a la derecha el contenido del navbar a partir del logo.

## [1.3.0] - 2025-06-11

### Added

-   `CustomSidebar` component ([`src/components/CustomSidebar.tsx`](preact-shared/src/components/CustomSidebar.tsx:1)): A new sidebar component for navigation.
-   `useSidebar` hook ([`src/hooks/useSidebar.tsx`](preact-shared/src/hooks/useSidebar.tsx:1)): Hook for managing the state of the `CustomSidebar`.
-   `interface.sidebar.ts` ([`src/interfaces/interface.sidebar.ts`](preact-shared/src/interfaces/interface.sidebar.ts:1)): Defines props for the `CustomSidebar` component.
-   `react-shim.d.ts` ([`preact-shared/react-shim.d.ts`](preact-shared/react-shim.d.ts:1)): TypeScript declaration file to provide Preact compatibility shims for React types, improving type checking in Preact projects using React-style imports.
-   Exported `useSidebar` from [`src/hooks/index.ts`](preact-shared/src/hooks/index.ts:1).

### Changed

-   `CustomNavbar` ([`src/components/CustomNavbar.tsx`](preact-shared/src/components/CustomNavbar.tsx:1)):
    -   Integrated the new `CustomSidebar` component.
    -   Updated to use `FunctionComponent` from `preact` instead of `React.FC` for better Preact compatibility.
-   `interface.navbar.ts` ([`src/interfaces/interface.navbar.ts`](preact-shared/src/interfaces/interface.navbar.ts:1)): Added `urlMenu` prop to `NavbarProps` for `CustomSidebar` data fetching.
-   `CustomModal` ([`src/components/CustomModal.tsx`](preact-shared/src/components/CustomModal.tsx:1)):
    -   Updated to use `FunctionComponent` and `ComponentChildren` from `preact` for improved type compatibility.
    -   Explicitly typed component props to resolve implicit `any` types.
    -   Removed redundant JSDoc type information.
-   `CustomTypography` ([`src/components/CustomTypography.tsx`](preact-shared/src/components/CustomTypography.tsx:1)):
    -   Updated to use `FunctionComponent` from `preact` instead of `React.FC` for better Preact compatibility.
-   `useUserSession` hook ([`src/hooks/useUserSession.tsx`](preact-shared/src/hooks/useUserSession.tsx:1)):
    -   Updated `CustomUserProvider` to use `FunctionComponent` from `preact` instead of `React.FC`.
-   `CustomLayout` ([`src/components/CustomLayout.tsx`](preact-shared/src/components/CustomLayout.tsx:1)): Modified to pass the `urlMenu` prop to `CustomNavbar` for sidebar functionality. (Assumption based on `CustomNavbar` changes).
-   `tsconfig.json` ([`preact-shared/tsconfig.json`](preact-shared/tsconfig.json:1)): Updated to include `react-shim.d.ts` in files/include, ensuring Preact type shims are applied globally. (Assumption based on the addition of `react-shim.d.ts`).

### Fixed

-   TypeScript errors in `CustomModal`, `CustomNavbar`, `CustomTypography`, and `useUserSession` hook by aligning React-specific types (`ReactNode`, `React.FC`) with their Preact equivalents (`ComponentChildren`, `FunctionComponent`).
-   Build error in `CustomSidebar` by correcting relative import paths for hooks and interfaces.
-   Accessibility issue in `CustomModal` by correcting the `id` of the content `Box` to match the `aria-describedby` attribute on the `Modal` component.

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