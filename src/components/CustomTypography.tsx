import React from "react";
import { FunctionComponent } from "preact";
import { ThemeProvider, Typography, useTheme } from "@mui/material";
import { TypographyProps } from "../interfaces/interface.Typography"; // This now extends MuiTypographyProps
import { appDeliveryTheme } from "../styles/CustomTheme"; // Updated path

/**
 * @component CustomTypographyComponent
 * @description A typography component that extends Material-UI's Typography
 * with custom styling options like text stroke.
 * It should be used internally by the `CustomTypography` wrapper.
 *
 * @param {TypographyProps} props - The props for the typography component.
 * @returns {React.ReactElement} The rendered typography component.
 */
const CustomTypographyComponent: FunctionComponent<TypographyProps> = (props) => {
  const theme = useTheme(); // Access the theme for default values if needed

  // Destructure custom props and pass the rest to MUI Typography
  const { strokeWidth, strokeColor, sx, ...restProps } = props;

  const customSx = {
    // Apply custom stroke if strokeWidth and strokeColor are provided
    ...(strokeWidth && strokeColor && {
      WebkitTextStroke: `${strokeWidth} ${strokeColor}`,
      textStroke: `${strokeWidth} ${strokeColor}`, // Standard property
    }),
    // Apply default fontWeight if not overridden by sx prop
    fontWeight: props.fontWeight || 900, // Retaining original default fontWeight
    // Allow sx prop to override any custom styles
    ...sx,
  };

  return (
        <Typography
            // Pass down all standard MUI TypographyProps
            // Default variant to 'body1' if not specified, which is a common MUI default
            variant={props.variant || "body1"}
            // Pass color prop directly, MUI handles theme palette colors
            color={props.color || theme.palette.text.primary} // Default to primary text color
            onClick={props.onClick} // Pass onClick directly
            component={props.component} // Pass component prop directly
            sx={customSx}
            {...restProps} // Spread any other MuiTypographyProps
        >
            {props.children}
        </Typography>
  );
};

/**
 * @component CustomTypography
 * @description A wrapper component for CustomTypographyComponent that provides a ThemeProvider.
 * This ensures that the typography is rendered within the context of the application's theme
 * and allows usage of custom theme properties if defined in `appDeliveryTheme`.
 *
 * @param {TypographyProps} props - The props for the typography component.
 * @returns {React.ReactElement} The themed typography component.
 *
 * @example
 * <CustomTypography variant="h1" color="primary" strokeWidth="1px" strokeColor="black">
 *   Hello World
 * </CustomTypography>
 *
 * <CustomTypography variant="body1" component="p">
 *   This is a paragraph.
 * </CustomTypography>
 */
export const CustomTypography: FunctionComponent<TypographyProps> = (props) => (
    <ThemeProvider theme={appDeliveryTheme}>
        <CustomTypographyComponent {...props} />
    </ThemeProvider>
);
