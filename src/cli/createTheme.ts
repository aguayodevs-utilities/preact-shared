import { Command } from 'commander';
import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { PaletteOptions } from '@mui/material/styles';

interface BaseColors {
  primary: { main: string; [key: string]: any };
  secondary: { main: string; [key: string]: any };
  [key: string]: any;
}

const program = new Command();

program
  .requiredOption('--basecolors <file>', 'JSON file with base color definitions')
  .option('-o, --output <file>', 'Output file path', 'theme.json');

program.parse(process.argv);

const options = program.opts<{ basecolors: string; output: string }>();

function readBaseColors(file: string): BaseColors {
  const content = readFileSync(file, 'utf8');
  return JSON.parse(content) as BaseColors;
}

function mergeDeep(target: any, source: any) {
  for (const key of Object.keys(source)) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      if (!target[key]) target[key] = {};
      mergeDeep(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}

const defaults: PaletteOptions = {
  mode: 'light',
  primary: { main: '#1976d2' },
  secondary: { main: '#9c27b0' },
  error: { main: '#f44336' },
  warning: { main: '#ff9800' },
  info: { main: '#2196f3' },
  success: { main: '#4caf50' }
};

const base = readBaseColors(options.basecolors);

if (!base.primary?.main || !base.secondary?.main) {
  console.error('Base colors must include primary.main and secondary.main');
  process.exit(1);
}

const palette: PaletteOptions = mergeDeep(JSON.parse(JSON.stringify(defaults)), base);

const ext = path.extname(options.output);
let output = '';

if (ext === '.ts' || ext === '.js') {
  output = `import { createTheme } from '@mui/material/styles';\n\nexport const theme = createTheme({ palette: ${JSON.stringify(palette, null, 2)} });\n`;
} else {
  output = JSON.stringify({ palette }, null, 2);
}

writeFileSync(options.output, output, 'utf8');
console.log(`Theme written to ${options.output}`);

