import React from "react";
import { Button, ButtonProps } from "@mui/material";
import { CustomTypography } from "./CustomTypography";
import { appTheme } from "./theme";
import { ThemeProvider } from "@mui/material/styles";
export const CustomButtonComponent = (props: ButtonProps) => (
    <Button 
        {...props}
        variant={props.variant||"contained"}
        sx={{
            backgroundColor: props.color||"primary",
            color: props.color||"primary.dark",
            "&:hover": {
                backgroundColor: props.color||"primary",
                color: props.color||"primary.dark",
            },
            ...props.sx
        }}
    >
        <CustomTypography color={props.color||"primary.dark"}>
            {props.children}
        </CustomTypography>
    </Button>
);
export const CustomButton = (props: ButtonProps) => (
    <ThemeProvider theme={appTheme}>
        <CustomButtonComponent {...props} />
    </ThemeProvider>
);

