import { SxProps, TypographyProps as MuiTypographyProps } from "@mui/material";

/**
 * @interface CustomTypographyProps
 * @description Extends Material-UI TypographyProps with custom styling options.
 * Includes properties for text stroke.
 */
export interface TypographyProps extends MuiTypographyProps {
  /** Optional width for the text stroke effect. E.g., "1px". */
  strokeWidth?: string;
  /** Optional color for the text stroke effect. E.g., "black" or a theme color path. */
  strokeColor?: string;
  // sx is already part of MuiTypographyProps
  // children is already part of MuiTypographyProps
  // variant is already part of MuiTypographyProps and includes more options
  // color is already part of MuiTypographyProps
  // onClick is already part of MuiTypographyProps
}
