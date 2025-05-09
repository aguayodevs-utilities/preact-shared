import { useState, useEffect, useCallback } from 'preact/hooks';

/**
 * @type Crumb
 * @description Represents a single item in the breadcrumb trail.
 * @property {string} label - The display text for the breadcrumb item.
 * @property {string} href - The URL path for the breadcrumb item.
 * @property {boolean} last - Indicates if this is the last item in the trail (the current page).
 */
export type Crumb = { label: string; href: string; last: boolean };

/**
 * @constant LABELS
 * @description A record mapping URL path segments to human-readable labels.
 * Used to provide more user-friendly names in breadcrumbs than raw path segments.
 * This can be extended with more translations as needed.
 */
const LABELS: Record<string, string> = {
  'admin': 'Administrador',
  'client': 'Cliente',
  'sso': 'SSO',
  'chatbots': 'Mis Chatbots', // Consistent capitalization
  'apps': 'Aplicaciones',
  'welcome': 'Bienvenido',
  'my-apps': 'Mis Aplicaciones', // Consistent capitalization
  'edit': 'Modificar',
  'create': 'Crear',
  // Add more specific paths or dynamic segment handlers if necessary
  // e.g., 'user-profile': 'Perfil de Usuario'
};

/**
 * @function useBreadcrumbs
 * @description A Preact hook to generate and manage breadcrumbs based on the current URL path.
 * It parses `window.location.pathname`, translates segments using `LABELS`,
 * and provides a `go` function for navigation.
 *
 * @returns {[Crumb[], (href: string) => void]} A tuple containing:
 *  - `crumbs`: An array of `Crumb` objects representing the breadcrumb trail.
 *  - `go`: A function to navigate to a given href, currently by setting `window.location.href`.
 *
 * @example
 * const [breadcrumbs, navigate] = useBreadcrumbs();
 * // In your component:
 * // breadcrumbs.map(crumb => <Link onClick={() => navigate(crumb.href)}>{crumb.label}</Link>)
 */
export function useBreadcrumbs(): [Crumb[], (href: string) => void] {
  /**
   * @function buildCrumbs
   * @description A memoized callback function that constructs the breadcrumb array
   * based on the current `window.location.pathname`.
   * It splits the path, generates hrefs for each segment, and uses `LABELS` for display text.
   * If no path segments are found (i.e., at the root), it defaults to a single "Inicio" crumb.
   * @returns {Crumb[]} The array of breadcrumb items.
   */
  const buildCrumbs = useCallback((): Crumb[] => {
    // Normalize pathname: remove leading/trailing slashes and filter empty segments
    const pathSegments = window.location.pathname.replace(/^\/|\/$/g, '').split('/').filter(Boolean);
    const generatedCrumbs: Crumb[] = [];

    if (pathSegments.length === 0) {
      return [{ label: 'Inicio', href: '/', last: true }];
    }

    pathSegments.forEach((segment, index) => {
      const currentPath = '/' + pathSegments.slice(0, index + 1).join('/');
      generatedCrumbs.push({
        label: LABELS[segment] ?? decodeURIComponent(segment), // Fallback to decoded segment if no label
        href: currentPath,
        last: index === pathSegments.length - 1,
      });
    });
    return generatedCrumbs;
  }, []);

  const [crumbs, setCrumbs] = useState<Crumb[]>(buildCrumbs);

  /**
   * @function navigateTo
   * @description Navigates the browser to the specified href.
   * Currently uses `window.location.href` for a full page reload.
   * The commented-out section shows an alternative using `history.pushState` for SPA-like navigation
   * without a full reload, which would require the `popstate` listener to be active.
   * @param {string} href - The URL to navigate to.
   */
  const navigateTo = (href: string): void => {
    // For SPA behavior (no full reload), use history API and ensure popstate listener is active.
    // window.history.pushState({}, '', href);
    // window.dispatchEvent(new PopStateEvent('popstate'));
    window.location.href = href; // Current implementation: full page navigation
  };

  useEffect(() => {
    // Handler to update crumbs when browser history changes (e.g., back/forward buttons)
    const handlePopState = () => setCrumbs(buildCrumbs());
    
    // The popstate event is typically used with history.pushState/replaceState for SPA routing.
    // If navigation is always full page reloads (window.location.href),
    // this listener might not be strictly necessary as the component will re-mount and re-build crumbs.
    // However, keeping it doesn't harm and supports potential future SPA routing.
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [buildCrumbs]); // Dependency array includes buildCrumbs

  return [crumbs, navigateTo];
}
