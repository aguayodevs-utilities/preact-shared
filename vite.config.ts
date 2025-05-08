import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import path from 'path';

export default defineConfig({
  plugins: [
    preact(),
    viteStaticCopy({
      targets: [
        { src: 'img', dest: 'static' },
        { src: 'css', dest: 'static' }
      ]
    })
  ],

  resolve: {
    alias: {
      react: 'preact/compat',
      'react-dom': 'preact/compat',
      'react/jsx-runtime': 'preact/jsx-runtime'
    },
    dedupe: ['preact', 'preact/hooks', 'react', 'react-dom']
  },

  build: {
    outDir: 'dist',
    lib: {
      entry: {
        index: path.resolve(__dirname, 'index.tsx'),
        Constants: path.resolve(__dirname, 'Constants.tsx'),
        Hooks: path.resolve(__dirname, 'Hooks.tsx'),
        Toast: path.resolve(__dirname, 'Toast.tsx'),
        Interfaces: path.resolve(__dirname, 'Interfaces.tsx')
      },
      formats: ['es']
    },
    rollupOptions: {
      external: [
        'preact',
        'preact/jsx-runtime',
        '@mui/material',
        '@emotion/react',
        '@emotion/styled'
      ],
      output: {
        entryFileNames: '[name].mjs'
      }
    }
  }
});
