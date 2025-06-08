import { useEffect, useState } from 'preact/hooks'; // Changed to preact/hooks
import axios, { AxiosError } from 'axios';
import { User } from '../interfaces/interface.user';
import { appUrls, IEnvironment } from '../constants/appUrls'; // Assuming IEnvironment is correctly defined

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
  error: AxiosError | Error | null; // More specific error typing
}

/**
 * @function useUserSession
 * @description A Preact hook to manage and retrieve the current user's session information.
 * It fetches the user session from an SSO endpoint on mount and provides user data,
 * a logout function, loading state, and error state.
 *
 * @returns {UseUserSessionReturn} An object containing the user, logout function, loading state, and error state.
 *
 * @example
 * const { user, logout, isLoading, error } = useUserSession();
 * if (isLoading) return <p>Loading session...</p>;
 * if (error) return <p>Error loading session: {error.message}</p>;
 * if (user) return <p>Welcome, {user.name}! <button onClick={logout}>Logout</button></p>;
 * return <p>Please log in.</p>;
 */
export const useUserSession = (): UseUserSessionReturn => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<AxiosError | Error | null>(null);
  
  // Determine environment, ensuring it matches IEnvironment type
  const [environment] = useState<IEnvironment>(
    process.env.NODE_ENV === "production" ? "production" : "development"
  );

  useEffect(() => {
    let isMounted = true; // Flag to prevent state updates on unmounted component
    setIsLoading(true);
    setError(null);

    axios.get<{ user: User }>(`${appUrls.getBase({ environment })}/sso/session`, {
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
      isMounted = false; // Cleanup function to set isMounted to false
    };
  }, [environment]); // Re-fetch if environment changes, though typically it won't during component lifecycle

  /**
   * @function handleLogout
   * @description Redirects the user to the SSO logout endpoint.
   */
  const handleLogout = (): void => {
    // Consider making the logout URL configurable or part of appUrls
    window.location.href = `${appUrls.getBase({ environment })}/sso/session/logout`;
  };

  return { user, logout: handleLogout, isLoading, error };
};
