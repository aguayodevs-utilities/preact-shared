

import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import path from 'path';

export default defineConfig({
  plugins: [
    preact(),
    viteStaticCopy({
      targets: [
        { src: 'src/assets/img', dest: 'static/img' }, // Updated path
        { src: 'src/assets/css', dest: 'static/css' }  // Updated path
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
      entry: { // Simplified entry points
        index: path.resolve(__dirname, 'src/index.ts')
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
