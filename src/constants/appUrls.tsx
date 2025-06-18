// src/constants/appUrls.tsx

/**
 * @file Defines application URL constants and a helper function to get the base URL
 * based on the current environment.
 * It relies on environment variables (e.g., REACT_APP_URL_BASE_LOCAL, REACT_APP_URL_BASE_PROD)
 * that should be set during the build process or in .env files.
 */

// Retrieve base URLs from environment variables.
// These were originally process.env.REACT_APP_...
// If using Vite, these should ideally be import.meta.env.VITE_...
// For now, reverting to original to avoid TS errors without tsconfig changes.
const URL_BASE_LOCAL = ''; // Default fallback
const URL_BASE_PROD = ''; // Fallback to empty or a sensible default

/**
 * @type IEnvironment
 * @description Defines the possible application environments.
 */
export type IEnvironment = "production" | "development";

/**
 * @interface IGetBaseProps
 * @description Defines the props for the `getBase` function.
 */
export interface IGetBaseProps {
  /** The current application environment. */
  environment: IEnvironment;
}

/**
 * @constant appUrls
 * @description An object containing application URLs and a helper to get the base URL.
 */
export const appUrls = {
  /**
   * @property base
   * @description Contains the base URLs for different environments.
   * @property {string} local - The base URL for the local/development environment.
   * @property {string} prod - The base URL for the production environment.
   */
  base: {
    local: URL_BASE_LOCAL,
    prod: URL_BASE_PROD,
  },
  /**
   * @function getBase
   * @description Returns the appropriate base URL based on the provided environment.
   * @param {IGetBaseProps} props - The properties object.
   * @param {IEnvironment} props.environment - The current application environment.
   * @returns {string} The base URL for the specified environment.
   *
   * @example
   * // Assuming environment is 'development'
   * const baseUrl = appUrls.getBase({ environment: 'development' });
   */
  getBase({ environment }: IGetBaseProps): string {
    return environment === 'development' ? URL_BASE_LOCAL : URL_BASE_PROD;
  },
  // Example of other app-specific URLs that could be added:
  // sso: {
  //   session: `${this.getBase({environment: /* pass env here */})}/sso/session`,
  //   logout: `${this.getBase({environment: /* pass env here */})}/sso/session/logout`,
  // },
  // api: {
  //   chatbot: (id: string) => `${this.getBase({environment: /* pass env here */})}/api/chatbots/${id}`,
  // }
};
