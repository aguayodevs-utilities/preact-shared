import React, { JSX } from 'react';
import {
  Box, Typography, Button, Stack, Paper,
  List, ListItem, ListItemText
} from '@mui/material';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { ThemeProvider } from '@mui/material/styles';
import { appTheme } from './theme';
import { CustomTypography } from './CustomTypography';

export interface ErrorStateProps {
  title?: string;
  message: string | string[];
  icon?: JSX.Element;
  actionLabel?: string;
  onAction?: () => void;
}

export const ErrorState = ({
  title = 'Algo salió mal',
  message,
  icon = <SentimentVeryDissatisfiedIcon color="secondary" sx={{ fontSize: 50, fontWeight: 'bold' }} />,
  actionLabel,
  onAction,
}: ErrorStateProps) => (
  <ThemeProvider theme={appTheme}>
    <Box
      component={Paper}
      elevation={0}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: "background.default",
        px: 2,
        mt: 2,
        borderRadius: 2,
        boxShadow: 3,
        p: 4,
      }}
    >
      <Stack spacing={2} textAlign="center" maxWidth={400}>
        <Box>{icon}</Box>

        <CustomTypography variant="h4">
          {title}
        </CustomTypography>

        {/* Aquí la validación */}
        {Array.isArray(message) ? (
          <List>
            {message.map((msg, idx) => (
              <Box key={idx} sx={{
                bgcolor: "error.main",
                borderRadius: 2,
                p: 1,
                m: 1,
              }}>
                <ListItemText
                  sx={{
                    bgcolor: "error.main",
                    borderRadius: 2,
                  }}
                  primary={
                    <CustomTypography sx={{textAlign: "center"}} strokeColor="primary.main" color="secondary.main">
                      {msg}
                    </CustomTypography>
                  }
                />
              </Box>
            ))}
          </List>
        ) : (
          <CustomTypography>
            {message}
          </CustomTypography>
        )}

        {actionLabel && onAction && (
          <Button variant="contained" onClick={onAction} sx={{ alignSelf: 'center' }}>
            <CustomTypography>
              {actionLabel}
            </CustomTypography>
          </Button>
        )}
      </Stack>
    </Box>
  </ThemeProvider>
);
