// CustomTheme.tsx is now located in src/styles/CustomTheme.tsx
export * from './CustomTheme';

// Regarding base.css, CSS files are typically imported directly where needed
// (e.g., in a main application file or a top-level component like CustomLayout),
// or via a main CSS file, not usually re-exported from a .ts module index like this.
// If global styles from base.css are needed, consider importing it in src/index.ts or a similar entry point.
// import '../assets/css/base.css'; // Example of direct import if needed globally