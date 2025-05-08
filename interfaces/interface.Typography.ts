import { SxProps } from "@mui/material";

export interface TypographyProps {
  children?: React.ReactNode;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  color?: string;
  textShadow?: string;
  sx?: SxProps;
  strokeWidth?: string;
  strokeColor?: string;
  onClick?: () => void;
}
