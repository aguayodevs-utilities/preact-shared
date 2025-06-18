# @aguayodevs-utilities/preact-shared

Paquete de componentes y utilerías para templates Preact con MUI.

Este paquete forma parte de la organización `@aguayodevs-utilities` y es consumido principalmente por proyectos internos que utilizan Preact y Material-UI.

## Instalación

```bash
npm install @aguayodevs-utilities/preact-shared
```

## Dependencias Peer

Asegúrate de instalar las siguientes dependencias obligatorias en tu proyecto:

- `preact` (>=10.26.5)
- `@emotion/react` (>=11.14.0)
- `@emotion/styled` (>=11.14.0)
- `@fontsource/roboto` (>=5.2.5) (o cualquier otra fuente que tu tema MUI requiera)
- `@mui/material` (>=7.0.2)
- `@mui/icons-material` (>=7.0.2)
- `axios` (>=1.8.4)
- `react-toastify` (>=11.0.5)

## Uso

### 1. Estilos Globales y Tema

Este paquete exporta temas de Material-UI preconfigurados (`appTheme`, `appDeliveryTheme`) y también incluye un archivo CSS base.

**CSS Base:**
Importa el CSS base en el punto de entrada principal de tu aplicación (por ejemplo, `main.tsx` o `app.tsx`):

```tsx
// En tu archivo principal (ej: src/main.tsx)
import '@aguayodevs-utilities/preact-shared/dist/static/css/base.css';
import { render } from 'preact';
import { App } from './app'; // Tu componente principal de la aplicación

render(<App />, document.getElementById('app')!);
```

**ThemeProvider:**
Para usar el tema proporcionado (`appTheme`) o tu propio tema personalizado, envuelve tu aplicación con `ThemeProvider` de `@mui/material/styles`.

```tsx
// En tu componente raíz de la aplicación (ej: src/app.tsx)
import { ThemeProvider } from '@mui/material/styles';
import { appTheme, appDeliveryTheme } from '@aguayodevs-utilities/preact-shared'; // O tu tema personalizado
// ...otros imports y tu componente Layout o principal

export function App() {
  return (
    <ThemeProvider theme={appTheme}>
      {/* El resto de tu aplicación, ej: <Layout environment="development">...</Layout> */}
    </ThemeProvider>
  );
}
```

### 2. Importación de Componentes y Utilerías

Todos los componentes, hooks, constantes, interfaces y helpers se exportan desde el punto de entrada principal del paquete.

```tsx
import {
  // Componentes
  CustomLayout,
  CustomModal,
  CustomButton,
  CustomBreadcrumb,
  CustomConfirm,
  CustomError,
  CustomImageComboBox,
  CustomInput,
  CustomNavbar,
  CustomRoleValidator,
  CustomSidebar, // Nuevo componente de Sidebar
  CustomTextArea,
  CustomTypography,
  // Tema (si deseas usarlo directamente)
  appTheme,
  appDeliveryTheme,
  // Hooks
  useUserSession,
  useBreadcrumbs,
  useSidebar, // Nuevo hook para el Sidebar
  CustomUserProvider,
  SessionContext,
  // Constantes
  appColors,
  appDeliveryColors,
  appUrls,
  // Helpers (funciones de Toast)
  customToast,
  toastSuccess,
  toastError,
  toastWarning,
  toastInfo,
  // Contenedor de Toast (de react-toastify)
  ToastContainer
  // Interfaces (si necesitas tipar algo específicamente)
  // type User, type Crumb, type ImageComboBoxOption, type NavbarProps, type SidebarProps, etc.
} from '@aguayodevs-utilities/preact-shared';

// Ejemplo de uso de Layout y ToastContainer
function MyApp() {
  return (
    <CustomLayout
      environment="development"
      urlUser="/auth/session" // Opcional: si se proporciona, activa la protección de ruta y la gestión de sesión
      urlLogout="/auth/logout" // Opcional: endpoint para cierre de sesión
      urlMenu="/api/menu" // Opcional: endpoint para cargar datos del menú del sidebar
    >
      {/* Contenido de tu página */}
      <ToastContainer />
    </CustomLayout>
  );
}

// Ejemplo de uso de CustomRoleValidator
import { CustomRoleValidator } from '@aguayodevs-utilities/preact-shared';

function AdminPage() {
  return (
    <CustomLayout environment="development" urlUser="/auth/api/session" urlLogout="auth/api/logout">
      <CustomRoleValidator role="admin">
        <h1>Bienvenido, Administrador!</h1>
        {/* Contenido solo visible para usuarios con rol 'admin' */}
      </CustomRoleValidator>
    </CustomLayout>
  );
}
```

### 3. Configuración de TypeScript y Preact (react-shim.d.ts)

Para asegurar la compatibilidad de tipos entre Preact y el ecosistema React (especialmente al usar bibliotecas como Material-UI que esperan tipos de React), este paquete incluye un archivo `react-shim.d.ts`. Este archivo mapea tipos comunes de React (como `ReactNode`, `FC`) a sus equivalentes en Preact (`ComponentChildren`, `FunctionComponent`).

**Importante:** Para que este shim funcione correctamente, asegúrate de que tu archivo `tsconfig.json` en el proyecto consumidor incluya este archivo en sus `files` o `include` para que TypeScript lo reconozca globalmente.

Ejemplo de `tsconfig.json` en tu proyecto:
```json
{
  "compilerOptions": {
    // ...otras opciones
    "jsx": "react-jsx",
    "jsxImportSource": "preact"
  },
  "include": [
    "src",
    "node_modules/@aguayodevs-utilities/preact-shared/dist/react-shim.d.ts" // Asegúrate que la ruta sea correcta
  ]
  // o si prefieres "files":
  // "files": [
  //   "node_modules/@aguayodevs-utilities/preact-shared/dist/react-shim.d.ts"
  // ]
}
```
El paquete `preact-shared` ya utiliza internamente este shim, y los componentes como `CustomModal`, `CustomNavbar`, y `CustomTypography` han sido actualizados para usar los tipos correctos de Preact (`FunctionComponent`, `ComponentChildren`).

## Módulos Exportados

El paquete está estructurado en los siguientes módulos principales, todos accesibles desde la importación raíz:

-   **`components`**: Componentes de UI reutilizables.
    -   `CustomBreadcrumb`
-   `CustomBreadcrumb`: Ahora acepta una prop opcional `urlLabels` para cargar dinámicamente las etiquetas de los breadcrumbs desde una URL.
    -   `CustomButton`
    -   `CustomConfirm`
    -   `CustomError`
    -   `CustomImageComboBox`
    -   `CustomInput`
    -   `CustomLayout`: Componente de layout principal. Gestiona la sesión de usuario y pasa `urlMenu` a `CustomNavbar` y `urlLabels` a `CustomBreadcrumb`.
    -   `CustomModal`: Corregido para usar tipos de Preact (`FunctionComponent`, `ComponentChildren`).
    -   `CustomNavbar`: Componente de navegación. Integra `CustomSidebar` y recibe `urlMenu`. Corregido para usar `FunctionComponent`.
    -   `CustomRoleValidator`: Componente para proteger rutas o contenido basado en el rol del usuario.
    -   `CustomSidebar`: Nuevo componente de menú lateral (sidebar).
    -   `CustomTextArea`
    -   `CustomTypography`: Corregido para usar `FunctionComponent` de Preact.
-   **`hooks`**: Hooks de Preact personalizados.
-   `useBreadcrumbs`: Ahora puede recibir una URL para obtener etiquetas personalizadas, fusionándolas con las etiquetas locales.
    -   `useBreadcrumbs`
    -   `useUserSession`: Hook para la gestión de la sesión de usuario.
    -   `useSidebar`: Nuevo hook para gestionar el estado y la carga de datos del `CustomSidebar`.
-   **`constants`**: Constantes de la aplicación.
    -   `appColors`
    -   `appDeliveryColors`
    -   `appUrls`
-   **`interfaces`**: Definiciones de TypeScript.
    -   `NavbarProps`: Incluye `urlMenu` para la configuración del `CustomSidebar`.
    -   `CustomLayoutProps`: Incluye `urlMenu` para pasar al `CustomNavbar`.
    -   `SidebarProps`: Nuevas interfaces para `CustomSidebar`.
-   **`styles`**: Relacionado con el tema.
    -   `appTheme`
    -   `appDeliveryTheme`
-   **`helpers`**: Funciones de utilidad.
    -   `customToast`, `toastSuccess`, etc.
-   **`react-toastify`**: Se reexportan todas las funcionalidades.

## Scripts Disponibles

En `package.json` se incluyen los siguientes comandos:

| Comando                          | Descripción                                |
| -------------------------------- | ------------------------------------------ |
| `npm run build`                  | Construye el paquete para producción       |
| `npm run build:dev`              | Construye en modo desarrollo |
| `npm run build&install`          | Instala dependencias y construye |
| `npm run build&install:dev`      | Instala y construye en modo desarrollo |
| `npm run publish-preact-shared`  | Construye y publica el paquete             |
### CLI `create-theme`

Genera un archivo de tema a partir de un JSON con los colores base.

```bash
npx create-theme --basecolors baseColors.json --output myTheme.ts
```

El JSON debe incluir al menos `primary.main` y `secondary.main`. El comando
completa los campos faltantes con valores por defecto y escribe el resultado en
la ruta indicada.


## Contribución

1.  Haz fork del repositorio.
2.  Crea una rama con tu feature o corrección: `git checkout -b feature/nueva-funcion`.
3.  Instala las dependencias: `npm install`.
4.  Realiza tus cambios y asegúrate de que el build funcione: `npm run build`.
5.  Abre un Pull Request describiendo tus cambios.

## Licencia

Este proyecto está bajo la licencia ISC. Consulta el archivo `LICENCE` para más detalles.