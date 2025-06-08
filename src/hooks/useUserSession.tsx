/// <reference types="vite/client" />
import { useEffect, useState } from 'preact/hooks';
import axios, { AxiosError } from 'axios';
import { User } from '../interfaces/interface.user';
import { appUrls, IEnvironment } from '../constants/appUrls';

/**
 * @interface UseUserSessionReturn
 * @description Defines the return type for the `useUserSession` hook.
 * @property {User | null} user - The current user object, or null if no user is logged in or session is being fetched.
 * @property {() => void} logout - A function to log out the current user by redirecting to the logout endpoint.
 * @property {boolean} isLoading - True if the user session is currently being fetched, false otherwise.
 * @property {Error | null} error - An error object if fetching the session failed, null otherwise.
 */
export interface UseUserSessionReturn {
  user: User | null;
  logout: () => void;
  isLoading: boolean;
  error: AxiosError | Error | null;
}

/**
 * @interface UseUserSessionProps
 * @description Defines the props for the `useUserSession` hook.
 * @property {string} [sessionEndpointUrl] - Optional URL for fetching user session data.
 * @property {string} [urlLogout] - Optional URL for logging out the user.
 */
export interface UseUserSessionProps {
  sessionEndpointUrl?: string;
  urlLogout?: string;
}

/**
 * @function useUserSession
 * @description A Preact hook to manage and retrieve the current user's session information.
 * It fetches the user session from a specified endpoint on mount and provides user data,
 * a logout function, loading state, and error state. If `sessionEndpointUrl` is not provided,
 * no session fetch will occur.
 *
 * @param {UseUserSessionProps} [props] - Props for the hook, including session and logout URLs.
 * @returns {UseUserSessionReturn} An object containing the user, logout function, loading state, and error state.
 *
 * @example
 * // With custom session and logout URLs
 * const { user, logout, isLoading, error } = useUserSession({
 *   sessionEndpointUrl: '/auth/session',
 *   logoutEndpointUrl: '/auth/logout'
 * });
 *
 * // Without session fetching (e.g., for public pages)
 * const { user, logout, isLoading, error } = useUserSession();
 */
export const useUserSession = ({ sessionEndpointUrl, urlLogout }: UseUserSessionProps = {}): UseUserSessionReturn => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<AxiosError | Error | null>(null);

  const [environment] = useState<IEnvironment>(
    import.meta.env.MODE === "production" ? "production" : "development"
  );

  const effectiveLogoutUrl = urlLogout || `${appUrls.getBase({ environment })}/sso/session/logout`;

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    setError(null);

    if (!sessionEndpointUrl) {
      setIsLoading(false);
      return;
    }

    axios.get<{ user: User }>(sessionEndpointUrl, {
      withCredentials: true,
    })
    .then(res => {
      if (isMounted) {
        setUser(res.data.user);
      }
    })
    .catch(err => {
      if (isMounted) {
        console.error("Failed to fetch user session:", err);
        setError(err);
      }
    })
    .finally(() => {
      if (isMounted) {
        setIsLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [environment, sessionEndpointUrl]);

  const handleLogout = (): void => {
    window.location.href = effectiveLogoutUrl;
  };

  return { user, logout: handleLogout, isLoading, error };
};
