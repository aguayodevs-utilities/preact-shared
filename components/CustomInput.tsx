import React from 'react';
import { styled } from '@mui/material/styles';
import { TextField, TextFieldProps } from '@mui/material';
import { appTheme } from './theme';
import { ThemeProvider } from '@mui/material/styles';
import { CustomTypography } from './CustomTypography';
const StyledTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  '& input::placeholder': {
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

  // Sólo para outlined:
  '& .MuiOutlinedInput-input': {
    fontWeight: 700,
    color: theme.palette.primary.dark,
    WebkitTextStroke: `0.5px ${theme.palette.primary.light}`,
  },
}));

export const CustomInput: React.FC<TextFieldProps> = ({
  variant = 'outlined',
  fullWidth = true,
  sx,
  ...props
}) => (
  <ThemeProvider theme={appTheme}>
    <StyledTextField
      variant={variant}
      fullWidth={fullWidth}
      sx={sx}
      {...props}
    />
    <CustomTypography>
      {props.children}
    </CustomTypography>
  </ThemeProvider>
);
