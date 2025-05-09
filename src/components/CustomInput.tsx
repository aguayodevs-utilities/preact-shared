import React from 'react';
import { styled, ThemeProvider } from '@mui/material/styles'; // Combined imports, removed useTheme
import { TextField, TextFieldProps as MuiTextFieldProps, Theme } from '@mui/material'; // Renamed to avoid conflict
import { appTheme } from '../styles/CustomTheme'; // Updated path
// CustomTypography is removed as TextField itself handles text, and children are not typical for TextField

/**
 * @type CustomInputProps
 * @description Type alias for Material-UI TextFieldProps, allowing for future custom prop additions.
 */
export type CustomInputProps = MuiTextFieldProps & {
  // Add any custom specific props here if needed in the future
  // e.g., customBorderColor?: string;
};

// Define StyledTextField outside the component for better readability and performance
const StyledTextField = styled(TextField)<CustomInputProps>(({ theme }) => ({
  // General styles for the input field
  backgroundColor: theme.palette.background.paper, // Use theme variable for background

  // Styles for the placeholder text
  '& .MuiInputBase-input::placeholder': { // More specific selector for placeholder
    color: theme.palette.text.secondary, // Use theme variable for placeholder text color
    opacity: 1,
  },

  // Styles for the input text itself
  '& .MuiInputBase-input': {
    fontWeight: 700, // Default font weight for input text
    color: theme.palette.text.primary, // Use theme variable for input text color
    // WebkitTextStroke might be too specific or visually heavy for a general input.
    // Consider making this conditional or removing if not universally desired.
    // WebkitTextStroke: `0.5px ${theme.palette.text.disabled}`,
  },

  // Styles for the outlined variant
  '& .MuiOutlinedInput-root': {
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
  },
  // Add styles for other variants (filled, standard) if needed
}));

/**
 * @component CustomInput
 * @description A customized TextField component using Material-UI's TextField and styled-components.
 * It provides a default styling that can be overridden via props.
 * The component is wrapped with a ThemeProvider using `appTheme`.
 *
 * @param {CustomInputProps} props - The props for the TextField component.
 * @returns {React.ReactElement} The rendered custom input field.
 *
 * @example
 * <CustomInput
 *   label="User Name"
 *   variant="outlined"
 *   fullWidth
 *   onChange={(e) => console.log(e.target.value)}
 * />
 */
export const CustomInput: React.FC<CustomInputProps> = (props) => {
  // The ThemeProvider might be redundant if appTheme is globally provided at the app's root.
  // However, keeping it here ensures this component is self-contained with its specific theme context if needed.
  
  // Apply defaults before passing to StyledTextField
  const { variant = 'outlined', fullWidth = true, ...restProps } = props;

  return (
    <ThemeProvider theme={appTheme}>
      <StyledTextField
        variant={variant}
        fullWidth={fullWidth}
        {...restProps} // Pass all props, including sx, to StyledTextField
        // Children are not typically passed to TextField. If they were meant for a label or helper text,
        // those should be passed via `label` or `helperText` props respectively.
      />
    </ThemeProvider>
  );
};
