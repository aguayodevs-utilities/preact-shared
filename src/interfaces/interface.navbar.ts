// src/interfaces/interface.navbar.ts

import { User } from "./interface.user";

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
  /** The current application environment. */
  environment: NODE_ENV_TYPE;
  /** The authenticated user object, if logged in. */
  user?: User;
  /** Whether the user session is still loading. */
  isLoading?: boolean;
  /** Callback to log the user out. */
  logout?: () => void;
}


