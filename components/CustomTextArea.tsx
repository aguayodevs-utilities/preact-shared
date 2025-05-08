// shared/Components/CustomTextarea.tsx
import React from 'react';
import { styled } from '@mui/material/styles';
import { TextField, TextFieldProps } from '@mui/material';
import { appTheme } from './theme';
import { ThemeProvider } from '@mui/material/styles';
const StyledTextarea = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  '& textarea': {
    // opcional: añade algo de padding interno
    padding: theme.spacing(1.5),
  },
  '& textarea::placeholder': {
    color: theme.palette.primary.main,
    opacity: 1,
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.primary.main,
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.primary.main,
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.primary.main,
  },
  '& .MuiInputBase-input': {
    fontWeight: 700,
    color: theme.palette.primary.dark,
    WebkitTextStroke: `0.5px ${theme.palette.primary.light}`,
  },
  
}));

export interface CustomTextareaProps extends Omit<TextFieldProps, 'variant'> {
  variant?: TextFieldProps['variant'];
  /**
   * Número mínimo de filas visibles.
   * Si quieres un textarea "que crece", usa `minRows`.
   */
  minRows?: number;
  maxRows?: number;
}

export const CustomTextarea: React.FC<CustomTextareaProps> = ({
  variant = 'outlined',
  fullWidth = true,
  color = 'primary',
  multiline = true,
  minRows = 4,
  maxRows,
  sx,
  ...props
}) => (
  <ThemeProvider theme={appTheme}>
    <StyledTextarea
      variant={variant}
      fullWidth={fullWidth}
      color={color}
      multiline={multiline}
      minRows={minRows}
      maxRows={maxRows}
      sx={sx}
      {...props}
    />
  </ThemeProvider>
);
