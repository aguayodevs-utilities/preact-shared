import React from 'react';
import { styled } from '@mui/material/styles';
import { TextField, TextFieldProps as MuiTextFieldProps } from '@mui/material';
import { CustomThemeProvider, useCustomTheme } from '../styles/CustomThemeContext';

/**
 * @type CustomTextareaProps
 * @description Extends Material-UI TextFieldProps for the CustomTextarea component.
 * It specifically sets `multiline` to true by default and allows `minRows` and `maxRows`.
 */
export type CustomTextareaProps = Omit<MuiTextFieldProps, 'multiline'> & {
  // minRows and maxRows are already part of MuiTextFieldProps when multiline is true
  // No need to redefine them unless we want to change their optionality or type.
};

// Define StyledTextarea outside the component for better readability and performance
const StyledTextarea = styled(TextField)<CustomTextareaProps>(({ theme }) => ({
  // General styles for the textarea
  backgroundColor: theme.palette.background.paper, // Use theme variable for background

  // Styles for the placeholder text within the textarea
  '& .MuiInputBase-input::placeholder': { // More specific selector
    color: theme.palette.text.secondary, // Use theme variable for placeholder text color
    opacity: 1,
  },

  // Styles for the input text itself
  '& .MuiInputBase-input': { // Targets the textarea element
    fontWeight: 400, // Standard font weight for body text, can be customized
    color: theme.palette.text.primary, // Use theme variable for input text color
    padding: theme.spacing(1), // Ensure consistent padding
    // WebkitTextStroke might be too specific or visually heavy.
    // WebkitTextStroke: `0.5px ${theme.palette.text.disabled}`,
  },

  // Styles for the outlined variant (most common for textareas)
  '& .MuiOutlinedInput-root': {
    padding: 0, // Remove default padding from root to rely on input's padding
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.divider, // Use theme variable for default border color
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.primary.main, // Use theme variable for hover border color
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.primary.main, // Use theme variable for focused border color
      borderWidth: '1px', // Ensure focus ring is clearly visible
    },
    // Ensure textarea specific styles are applied correctly
    '& textarea': {
        lineHeight: 1.5, // Adjust line height for better readability
    }
  },
}));

/**
 * @component CustomTextarea
 * @description A customized multi-line TextField (textarea) component.
 * It defaults to being `multiline` and provides styling consistent with `CustomInput`.
 *
 * @param {CustomTextareaProps} props - The props for the TextField component.
 * @returns {React.ReactElement} The rendered custom textarea field.
 *
 * @example
 * <CustomTextarea
 *   label="Description"
 *   placeholder="Enter a detailed description..."
 *   minRows={3}
 *   fullWidth
 * />
 */
export const CustomTextarea: React.FC<CustomTextareaProps> = (props) => {
  // Apply defaults before passing to StyledTextarea
  const {
    variant = 'outlined',
    fullWidth = true,
    minRows = 3, // Default minRows for a textarea
    // multiline is implicitly true for a textarea, but TextField needs it
    ...restProps
  } = props;
  const theme = useCustomTheme();

  return (
    <CustomThemeProvider theme={theme}>
      <StyledTextarea
        variant={variant}
        fullWidth={fullWidth}
        multiline // Always true for a textarea
        minRows={minRows}
        {...restProps} // Pass all other props, including sx, maxRows, etc.
      />
    </CustomThemeProvider>
  );
};
