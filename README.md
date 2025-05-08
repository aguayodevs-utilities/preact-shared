# @aguayodevs-utilities/preact-shared

Paquete de componentes y utilerías para templates Preact con MUI.

Este paquete forma parte de la organización `@aguayodevs-utilities` y es consumido por `@aguayodevs-utilities/frontforge`.

## Instalación

```bash
npm install @aguayodevs-utilities/preact-shared
```

## Dependencias Peer

Asegúrate de instalar las siguientes dependencias obligatorias:

- `preact` (>=10.26.5)
- `@emotion/react` (>=11.14.0)
- `@emotion/styled` (>=11.14.0)
- `@fontsource/roboto` (>=5.2.5)
- `@mui/material` (>=7.0.2)
- `@mui/icons-material` (>=7.0.2)
- `axios` (>=1.8.4)

## Uso

Importa el CSS base para aplicar estilos globales:

```js
import '@aguayodevs-utilities/preact-shared/css/base.css';
```

Importa los componentes y utilerías que necesites:

```tsx
//Importación de componentes
import { Layout, CustomModal } from '@aguayodevs-utilities/preact-shared';
//Importación de constantes
import { appColors } from '@aguayodevs-utilities/preact-shared/Constants';
//Importación de hooks reutilizables.
import { useUserSession } from '@aguayodevs-utilities/preact-shared/Hooks';
```

## Componentes Disponibles

- `CustomBreadcrumb`
- `CustomButton`
- `CustomConfirm`
- `CustomError`
- `CustomInput`
- `CustomModal`
- `CustomTextArea`
- `CustomTypography`
- `ImageComboBox`
- `Layout`
- `Navbar`
- `theme`

## Hooks

- `useBreadcrumbs()`
- `useUserSession()`

## Utilerías y Helpers

- `customToast()`
- `<Toast />`
- Constantes: `appColors`, `appUrls`
- Interfaces y tipos en la carpeta `interfaces/`

## Scripts Disponibles

En `package.json` se incluyen los siguientes comandos:

| Comando                          | Descripción                                |
| -------------------------------- | ------------------------------------------ |
| `npm run build`                  | Construye el paquete para producción       |
| `npm run build:dev`              | Construye en modo desarrollo               |
| `npm run build&install`          | Instala dependencias y construye           |
| `npm run build&install:dev`      | Instala y construye en modo desarrollo     |
| `npm run publish-preact-shared`  | Construye y publica el paquete             |

## Contribución

1. Haz fork del repositorio.  
2. Crea una rama con tu feature o corrección: `git checkout -b feature/nueva-funcion`.  
3. Instala las dependencias y construye: `npm install && npm run build`.  
4. Abre un Pull Request describiendo tus cambios.

## Licencia

Este proyecto está bajo la licencia ISC. Consulta el archivo `LICENCE` para más detalles.