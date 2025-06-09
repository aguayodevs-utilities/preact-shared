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
  CustomTextArea,
  CustomTypography,
  // Tema (si deseas usarlo directamente)
  appTheme,
  appDeliveryTheme, // Nuevo tema de Material-UI para Delivery
  // Hooks
  useUserSession,
  useBreadcrumbs,
  // Constantes
  appColors, // Paleta de colores usada en appTheme
  appDeliveryColors, // Paleta de colores para appDeliveryTheme
  appUrls,   // URLs base de la aplicación
  // Helpers (funciones de Toast)
  customToast,
  toastSuccess,
  toastError,
  toastWarning,
  toastInfo,
  // Contenedor de Toast (de react-toastify)
  ToastContainer
  // Interfaces (si necesitas tipar algo específicamente)
  // type User, type Crumb, type ImageComboBoxOption, etc.
} from '@aguayodevs-utilities/preact-shared';

// Ejemplo de uso de Layout y ToastContainer
function MyApp() {
  return (
    <CustomLayout
      environment="development"
      urlUser="/auth/session"
      urlLogout="/auth/logout"
    >
      {/* Contenido de tu página */}
      <ToastContainer />
    </CustomLayout>
  );
}
```

## Módulos Exportados

El paquete está estructurado en los siguientes módulos principales, todos accesibles desde la importación raíz:

-   **`components`**: Componentes de UI reutilizables.
    -   `CustomBreadcrumb`
    -   `CustomButton`
    -   `CustomConfirm`
    -   `CustomError`
    -   `CustomImageComboBox`
    -   `CustomInput`
    -   `CustomLayout`
    -   `CustomModal`
    -   `CustomNavbar`
    -   `CustomTextArea`
    -   `CustomTypography`
-   **`hooks`**: Hooks de Preact personalizados.
    -   `useBreadcrumbs`
    -   `useUserSession`
-   **`constants`**: Constantes de la aplicación.
    -   `appColors`: Objeto de paleta de colores principal.
    -   `appDeliveryColors`: Objeto de paleta de colores para temas de Delivery.
    -   `appUrls`: Objeto con URLs base y un helper `getBase()`.
-   **`interfaces`**: Definiciones de TypeScript para las entidades y props.
    -   `NavbarProps`: Actualizada para incluir `urlUser` y `urlLogout`.
    -   `CustomLayoutProps`: Actualizada para incluir `urlUser` y `urlLogout`.
-   **`styles`**: Relacionado con el tema.
    -   `appTheme`: El tema de Material-UI preconfigurado.
    -   `appDeliveryTheme`: Nuevo tema de Material-UI para Delivery.
-   **`helpers`**: Funciones de utilidad.
    -   `customToast`, `toastSuccess`, `toastError`, `toastWarning`, `toastInfo` (basadas en `react-toastify`).
-   **`react-toastify`**: Se reexportan todas las funcionalidades de `react-toastify`, incluyendo `ToastContainer`.

## Scripts Disponibles

En `package.json` se incluyen los siguientes comandos:

| Comando                          | Descripción                                |
| -------------------------------- | ------------------------------------------ |
| `npm run build`                  | Construye el paquete para producción       |
| `npm run build:dev`              | Construye en modo desarrollo |
| `npm run build&install`          | Instala dependencias y construye |
| `npm run build&install:dev`      | Instala y construye en modo desarrollo |
| `npm run publish-preact-shared`  | Construye y publica el paquete             |

## Contribución

1.  Haz fork del repositorio.
2.  Crea una rama con tu feature o corrección: `git checkout -b feature/nueva-funcion`.
3.  Instala las dependencias: `npm install`.
4.  Realiza tus cambios y asegúrate de que el build funcione: `npm run build`.
5.  Abre un Pull Request describiendo tus cambios.

## Licencia

Este proyecto está bajo la licencia ISC. Consulta el archivo `LICENCE` para más detalles.