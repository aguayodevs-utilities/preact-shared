// src/interfaces/interface.navbar.ts

/**
 * @file Defines TypeScript types and interfaces related to the Navbar component.
 */

/**
 * @type NODE_ENV_TYPE
 * @description Represents the possible Node environment types, typically 'production' or 'development'.
 * It also allows for `undefined` to handle cases where the environment variable might not be set.
 * This type is used to potentially alter Navbar behavior or display based on the environment.
 */
export type NODE_ENV_TYPE = "production" | "development" | undefined;

/**
 * @interface NavbarProps
 * @description Defines the props for the `CustomNavbar` component.
 */
export interface NavbarProps {
  /**
   * The current application environment.
   * This can be used to conditionally render elements in the navbar,
   * for example, a "Development Mode" banner.
   */
  environment: NODE_ENV_TYPE;
  // Consider adding other props if the Navbar becomes more configurable, e.g.:
  // onLogoClick?: () => void;
  // showUserProfile?: boolean;
  // customMenuItems?: React.ReactNode[];
}

