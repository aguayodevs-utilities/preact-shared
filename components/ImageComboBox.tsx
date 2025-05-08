// src/components/ImageComboBox.tsx
import React, { useMemo } from 'react';
import {
  Autocomplete,
  TextField,
  Box,
  Avatar,
  Typography,
  InputAdornment,
  AutocompleteRenderOptionState,
} from '@mui/material';
import type { ImageComboBoxOption, ImageComboBoxProps } from '../interfaces/interface.imageComboBox';
import { appTheme } from './theme';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import { CustomTypography } from './CustomTypography';
export const ImageComboBox = ({
  options,
  placeholder = 'Selecciona una opción',
  value,
  onChange,
  disabled = false,
}: ImageComboBoxProps) => {
  const selected = useMemo(
    () => options.find((o) => o.value === value) || null,
    [options, value]
  );
  const theme = useTheme();
  return (
    <ThemeProvider theme={appTheme}>
      <Autocomplete
        options={options}
        getOptionLabel={(o) => o.label}
        value={selected||undefined}
        onChange={(_, newVal) => onChange?.(newVal)}
        isOptionEqualToValue={(o, v) => o.value === v.value}
        disableClearable
        disabled={disabled}
        openOnFocus
        noOptionsText="Sin resultados"
        sx={{
          width: '100%',
          '& .MuiOutlinedInput-root': { backgroundColor: '#fff' },
        }}
        renderInput={(params) => {
          const { id, InputProps, inputProps } = params;
          // Si hay seleccionado, construimos un startAdornment pequeño
          const startAdornment = selected ? (
            <InputAdornment position="start">
              <Avatar
                src={selected.img}
                variant="rounded"
                sx={{ width: 24, height: 24 }}
              />
            </InputAdornment>
          ) : null;

          return (
            <TextField
              id={id}
              placeholder={placeholder}
              size="medium"
              fullWidth
              disabled={disabled}
              color="primary"
              sx={{
                backgroundColor: '#fff',
                '& input::placeholder': theme => ({
                  color: theme.palette.primary.main,
                  opacity: 1,
                }),
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'primary.main',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'primary.main',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'primary.main',
                },
              }}
              InputProps={{
                ...InputProps,
                startAdornment: startAdornment ?? InputProps.startAdornment,
                sx: theme => ({
                  '.MuiAutocomplete-input': {
                    fontWeight: 700,
                    color: theme.palette.primary.dark,
                    strokeWidth: "0.5px",
                    WebkitTextStroke: `1px ${theme.palette.primary.light}`,
                  },
                }),
              }}
              inputProps={inputProps}
            />
          );
        }}
        renderOption={(
          props,
          option: ImageComboBoxOption,
          _state: AutocompleteRenderOptionState
        ) => (
          <Box
            component="li"
            {...props}
            sx={{ display: 'flex', alignItems: 'center', gap: 2, py: 1 }}
          >
            <Avatar
              src={option.img}
              variant="rounded"
              sx={{ width: 48, height: 48, flexShrink: 0 }}
            />
            <Box sx={{ minWidth: 0 }}>
              <CustomTypography variant="h6">
                {option.label}
              </CustomTypography>
              <CustomTypography
                variant="h6"
                sx={{ maxWidth: '100%' }}
              >
                {option.description}
              </CustomTypography>
            </Box>
          </Box>
        )}
      />
    </ThemeProvider>
  );
};
