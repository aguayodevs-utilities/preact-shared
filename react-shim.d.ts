/// <reference types="preact" />
/// <reference types="preact/compat" />

declare module 'react' {
  export * from 'preact/compat';
}

// Igual para react-dom
declare module 'react-dom' {
  export * from 'preact/compat';
}

// Y para el runtime JSX
declare module 'react/jsx-runtime' {
  export * from 'preact/jsx-runtime';
}
