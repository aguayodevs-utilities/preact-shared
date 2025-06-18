import React, { useMemo } from 'react';
import {
  Autocomplete,
  TextField,
  Box,
  Avatar,
  InputAdornment,
  AutocompleteRenderOptionState,
  Theme, // Import Theme for type hinting
} from '@mui/material'; // Typography removed
import type { ImageComboBoxOption, ImageComboBoxProps } from '../interfaces/interface.imageComboBox';
import { CustomThemeProvider, useCustomTheme } from '../styles/CustomThemeContext';
import { CustomTypography } from './CustomTypography';

/**
 * @component CustomImageComboBox
 * @description A combo box component that displays options with images, labels, and descriptions.
 * It uses Material-UI's Autocomplete component and allows for custom rendering of options and the input field.
 *
 * @param {ImageComboBoxProps} props - The props for the ImageComboBox.
 * @returns {React.ReactElement} The rendered ImageComboBox component.
 *
 * @example
 * const options = [
 *   { value: '1', label: 'Option 1', img: '/path/to/img1.png', description: 'Description 1' },
 *   { value: '2', label: 'Option 2', img: '/path/to/img2.png', description: 'Description 2' },
 * ];
 * const [selectedValue, setSelectedValue] = useState<ImageComboBoxOption | null>(null);
 *
 * return (
 *   <CustomImageComboBox
 *     options={options}
 *     value={selectedValue?.value}
 *     onChange={(newValue) => setSelectedValue(newValue)}
 *     placeholder="Select an item"
 *   />
 * );
 */
export const CustomImageComboBox: React.FC<ImageComboBoxProps> = ({
  options,
  placeholder = 'Selecciona una opción',
  value,
  onChange,
  disabled = false,
}) => {
  const selected = useMemo(
    () => options.find((o) => o.value === value) || undefined,
    [options, value]
  );
  const theme = useCustomTheme();

  return (
    <CustomThemeProvider theme={theme}>
      <Autocomplete
        options={options}
        getOptionLabel={(option) => option.label} // Ensure option is typed if possible
        value={selected} // Pass the selected object directly
        onChange={(_, newValue: ImageComboBoxOption | null) => onChange?.(newValue)} // Ensure newValue is typed
        isOptionEqualToValue={(option, val) => option.value === val.value}
        disableClearable
        disabled={disabled}
        openOnFocus
        noOptionsText="Sin resultados"
        sx={{
          width: '100%',
          '& .MuiOutlinedInput-root': { backgroundColor: theme.palette.background.paper },
        }}
        renderInput={(params) => {
          const { InputProps, ...restParams } = params; // Destructure to avoid passing InputProps directly if modified
          const startAdornment = selected ? (
            <InputAdornment position="start" sx={{ pl: 1}}> {/* Added padding to adornment */}
              <Avatar
                src={selected.img}
                variant="rounded"
                sx={{ width: 24, height: 24 }}
                alt={selected.label} // Added alt text
              />
            </InputAdornment>
          ) : null;

          return (
            <TextField
              {...restParams} // Spread the rest of params
              placeholder={placeholder}
              size="medium"
              fullWidth
              disabled={disabled}
              // color="primary" // color prop on TextField is for focus ring, not text/bg
              sx={{
                '& input::placeholder': {
                  color: theme.palette.text.secondary,
                  opacity: 1,
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: theme.palette.divider,
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: theme.palette.primary.main,
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: theme.palette.primary.main,
                  borderWidth: '1px',
                },
              }}
              InputProps={{
                ...InputProps,
                startAdornment: startAdornment ?? InputProps.startAdornment,
                sx: (theme: Theme) => ({ // Explicitly type theme here
                  '.MuiAutocomplete-input': {
                    fontWeight: 700,
                    color: theme.palette.text.primary, // Use theme for input text color
                    // Text stroke might be too much for an input, consider removing or making optional
                    // strokeWidth: "0.5px",
                    // WebkitTextStroke: `0.5px ${theme.palette.text.disabled}`,
                    paddingLeft: selected ? '4px' : undefined, // Adjust padding if adornment is present
                  },
                }),
              }}
            />
          );
        }}
        renderOption={(
          liProps, // Renamed props to liProps to avoid confusion
          option: ImageComboBoxOption,
          _state: AutocompleteRenderOptionState // _state can be used for selected/focused styling
        ) => (
          <Box
            component="li"
            {...liProps}
            sx={{ display: 'flex', alignItems: 'center', gap: 2, py: 1, px:2 }} // Added horizontal padding
          >
            <Avatar
              src={option.img}
              alt={option.label} // Added alt text
              variant="rounded"
              sx={{ width: 40, height: 40, flexShrink: 0 }} // Slightly smaller avatar for options
            />
            <Box sx={{ minWidth: 0, flexGrow: 1 }}> {/* Allow text to take available space */}
              <CustomTypography variant="subtitle1" component="div" noWrap> {/* Use subtitle1, ensure it's a div, prevent wrap */}
                {option.label}
              </CustomTypography>
              {option.description && ( // Conditionally render description
                <CustomTypography
                  variant="body2" // Use body2 for description
                  color="text.secondary" // Softer color for description
                  noWrap // Prevent wrapping for description as well
                  sx={{ maxWidth: '100%' }}
                >
                  {option.description}
                </CustomTypography>
              )}
            </Box>
          </Box>
        )}
      />
    </CustomThemeProvider>
  );
};
