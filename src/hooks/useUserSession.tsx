/// <reference types="vite/client" />
import { createContext, FunctionComponent } from 'preact';
import type { ComponentChildren } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import axios, { AxiosError } from 'axios';
import { User } from '../interfaces/interface.user';
import { appUrls, IEnvironment } from '../constants/appUrls';

export interface UseUserSessionReturn {
  user: User | null;
  logout: () => void;
  isLoading: boolean;
  error: AxiosError | Error | null;
}

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
 *   urlLogout: '/auth/logout'
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
    import.meta.env.MODE === 'production' ? 'production' : 'development'
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
    axios.get<{ user: User }>(sessionEndpointUrl, { withCredentials: true })
      .then(res => isMounted && setUser(res.data.user))
      .catch(err => isMounted && setError(err))
      .finally(() => isMounted && setIsLoading(false));
    return () => { isMounted = false; };
  }, [environment, sessionEndpointUrl]);

  const handleLogout = (): void => {
    window.location.href = effectiveLogoutUrl;
  };

  return { user, logout: handleLogout, isLoading, error };
};

// Context para compartir la sesión
export const SessionContext = createContext<UseUserSessionReturn>({
  user: null,
  logout: () => {},
  isLoading: false,
  error: null
});

/**
 * Proveedor de sesión para envolver componentes protegidos
 */
export const CustomUserProvider: FunctionComponent<UseUserSessionProps & { children: ComponentChildren }> = ({
  sessionEndpointUrl,
  urlLogout,
  children
}) => {
  const session = useUserSession({ sessionEndpointUrl, urlLogout });
  return (
    <SessionContext.Provider value={session}>
      {children}
    </SessionContext.Provider>
  );
};