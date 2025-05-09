import React from "react";
import { Button, ButtonProps as MuiButtonProps } from "@mui/material"; // Renamed to avoid conflict
import { CustomTypography } from "./CustomTypography";
import { appTheme } from "../styles/CustomTheme"; // Updated path
import { ThemeProvider } from "@mui/material/styles";

/**
 * @interface CustomButtonProps
 * @description Props for the CustomButtonComponent, extending Material-UI ButtonProps.
 * Allows for customization of button appearance and behavior.
 */
export interface CustomButtonProps extends MuiButtonProps {
  // Add any custom props specific to this button if needed in the future
}

/**
 * @component CustomButtonComponent
 * @description A customizable button component.
 * It wraps the Material-UI Button and applies custom styling.
 * The text color and background color can be influenced by the `color` prop,
 * defaulting to "primary" and "primary.dark" respectively.
 *
 * @param {CustomButtonProps} props - The props for the button.
 * @returns {React.ReactElement} The rendered button component.
 */
const CustomButtonComponent: React.FC<CustomButtonProps> = (props) => {
    // Determine button colors based on props and theme
    // Valid MUI Button color props are 'inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning'
    const isPaletteColor = props.color && ['primary', 'secondary', 'success', 'error', 'info', 'warning'].includes(props.color);

    const backgroundColor = isPaletteColor ? `${props.color}.main` : (props.color === 'inherit' ? undefined : appTheme.palette.primary.main);
    const textColor = isPaletteColor ? `${props.color}.contrastText` : (props.color === 'inherit' ? undefined : appTheme.palette.primary.contrastText);
    const hoverBackgroundColor = isPaletteColor ? `${props.color}.dark` : (props.color === 'inherit' ? undefined : appTheme.palette.primary.dark);

    return (
        <Button
            {...props}
            variant={props.variant || "contained"}
            sx={{
                backgroundColor: backgroundColor,
                color: textColor,
                "&:hover": {
                    backgroundColor: hoverBackgroundColor,
                },
                ...props.sx
            }}
        >
            <CustomTypography sx={{ color: textColor }}>
                {props.children}
            </CustomTypography>
        </Button>
    );
};

/**
 * @component CustomButton
 * @description A wrapper component for CustomButtonComponent that provides a ThemeProvider.
 * This ensures that the button is rendered within the context of the application's theme.
 *
 * @param {CustomButtonProps} props - The props for the button.
 * @returns {React.ReactElement} The themed button component.
 *
 * @example
 * <CustomButton variant="outlined" color="secondary" onClick={() => console.log('Clicked!')}>
 *   Click Me
 * </CustomButton>
 */
export const CustomButton: React.FC<CustomButtonProps> = (props) => (
    <ThemeProvider theme={appTheme}>
        <CustomButtonComponent {...props} />
    </ThemeProvider>
);

