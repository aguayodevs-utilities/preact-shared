/** @jsxImportSource preact */
import { Fragment } from 'preact';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  Container
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { SidebarContextProvider, useSidebarContext } from '../hooks';
import type { ICustomSidebarProps } from '../interfaces/interface.sidebar';

/**
 * Wrapper que recibe la URL y expone el contexto.
 */
export function CustomSidebar({ urlMenu }: ICustomSidebarProps) {
  return (
    <SidebarContextProvider urlMenu={urlMenu}>
      <SidebarTrigger />
      <SidebarDrawer />
    </SidebarContextProvider>
  );
}

/**
 * El icono de menú que abre/cierra el sidebar
 */
function SidebarTrigger() {
  const { showSidebar, handleShowSidebar } = useSidebarContext();

  return (
    <IconButton onClick={() => handleShowSidebar(!showSidebar)}>
      <MenuIcon color="primary" sx={{ fontSize: 35, cursor: 'pointer' }} />
    </IconButton>
  );
}

/**
 * El panel lateral que muestra los items
 */
function SidebarDrawer() {
  const { menuList, loading, showSidebar, handleShowSidebar } = useSidebarContext();

  if (loading) return null;

  const close = () => handleShowSidebar(false);

  return (
    <Drawer open={showSidebar} onClose={close} anchor="left">
      <Container sx={{ width: 250, pt: 2 }}>
        <List>
          {menuList.map(item => (
            <ListItem key={item.path} disablePadding>
              <ListItemButton
                onClick={() => {
                  window.location.href = item.path;
                  close();
                }}
              >
                <ListItemText secondary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Container>
    </Drawer>
  );
}
