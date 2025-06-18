import type { ComponentChildren } from 'preact';

export interface ISidebarMenu {
  label: string;
  path: string;
}

export interface ISidebarContext {
  menuList: ISidebarMenu[];
  showSidebar: boolean;
  loading: boolean;
  handleShowSidebar: (open: boolean) => void;
}

// Props que recibe tu Provider
export interface ISidebarContextProps {
  children: ComponentChildren;  // <- aquí
  urlMenu: string;
}

// Props para tu wrapper CustomSidebar
export interface ICustomSidebarProps {
  urlMenu: string;
}
