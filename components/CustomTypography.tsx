import React from "react";
import { ThemeProvider, Typography } from "@mui/material";
import { TypographyProps } from "../interfaces/interface.Typography";
import { appTheme } from "./theme";
import { useTheme } from "@mui/material/styles";
export const CustomTypographyComponent = (props: TypographyProps) => {
  const theme = useTheme();
  return (
        <Typography
            variant={props.variant||"body1"}
            onClick={props.onClick||undefined}
            sx={{
                color: props.color||theme.palette.primary.dark,
                strokeWidth: props.strokeWidth||"0.5px",
                WebkitTextStroke: `${props.strokeWidth||"1px"} ${props.strokeColor||theme.palette.primary.light}`,
                fontWeight: 900, 
                ...props.sx
            }}
        >
            {props.children||null}
        </Typography>
)};
export const CustomTypography = (props: TypographyProps) => (
    <ThemeProvider theme={appTheme}>
        <CustomTypographyComponent {...props} />
    </ThemeProvider>
);

