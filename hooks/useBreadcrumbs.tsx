// src/hooks/useBreadcrumbs.ts
import { useState, useEffect, useCallback } from 'preact/hooks';

type Crumb = { label: string; href: string; last: boolean };

/** Traducciones ruta → etiqueta legible */
const LABELS: Record<string, string> = {
  'admin': 'Administrador',
  'client': 'Cliente',
  'sso': 'SSO',
  'chatbots': 'Mis chatbots',
  'apps': 'Aplicaciones',
  'welcome': 'Bienvenido',
  'my-apps': 'Mis aplicaciones',
  'edit': 'Modificar',
  'create' : 'Crear'
};

export function useBreadcrumbs(): [Crumb[], (href: string) => void] {
  const build = useCallback((): Crumb[] => {
    const parts = window.location.pathname.replace(/^\/|\/$/g, '').split('/');
    const crumbs: Crumb[] = [];
    parts.forEach((part, i) => {
      const href = '/' + parts.slice(0, i + 1).join('/');
      crumbs.push({
        label: LABELS[part] ?? decodeURIComponent(part),
        href,
        last: i === parts.length - 1,
      });
    });
    return crumbs.length ? crumbs : [{ label: 'Inicio', href: '/', last: true }];
  }, []);

  const [crumbs, setCrumbs] = useState<Crumb[]>(build);

  /** Pequeño “router” manual: navega sin recargar y emite popstate */
  const go = (href: string) => {
    /*
    window.history.pushState({}, '', href);
    window.dispatchEvent(new PopStateEvent('popstate'));
    */
    window.location.href = href;
  };

  useEffect(() => {
    const handler = () => setCrumbs(build());
    window.addEventListener('popstate', handler);
    return () => window.removeEventListener('popstate', handler);
  }, [build]);

  return [crumbs, go];
}
