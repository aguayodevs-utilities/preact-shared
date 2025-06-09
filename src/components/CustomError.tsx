import React, { JSX, ReactNode } from 'react';
import {
  Box, Stack, Paper,
  List, ListItemText
} from '@mui/material'; // Typography and Button removed
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { ThemeProvider } from '@mui/material/styles';
import { appDeliveryTheme } from '../styles/CustomTheme'; // Updated path
import { CustomTypography } from './CustomTypography';
import { CustomButton } from './CustomButton'; // Using CustomButton

/**
 * @interface ErrorStateProps
 * @description Defines the props for the ErrorState component.
 */
export interface ErrorStateProps {
  /** Optional title for the error state. Defaults to "Algo salió mal". */
  title?: string;
  /** The error message or a list of error messages to display. */
  message: string | string[];
  /** Optional custom icon element to display. Defaults to SentimentVeryDissatisfiedIcon. */
  icon?: JSX.Element;
  /** Optional label for an action button (e.g., "Retry", "Go Home"). */
  actionLabel?: string;
  /** Optional callback function to execute when the action button is clicked. */
  onAction?: () => void;
  /** Optional children to render additional content within the error state. */
  children?: ReactNode;
}

/**
 * @component ErrorState
 * @description A component to display an error message or a list of error messages in a standardized format.
 * It can include a title, an icon, and an optional action button.
 *
 * @param {ErrorStateProps} props - The props for the ErrorState component.
 * @returns {React.ReactElement} The rendered error state component.
 *
 * @example
 * // Single error message
 * <ErrorState message="Failed to load data." onAction={() => window.location.reload()} actionLabel="Retry" />
 *
 * // Multiple error messages
 * <ErrorState title="Validation Errors" message={["Email is required.", "Password too short."]} />
 */
export const ErrorState: React.FC<ErrorStateProps> = ({
  title = 'Algo salió mal',
  message,
  icon = <SentimentVeryDissatisfiedIcon color="error" sx={{ fontSize: 50, fontWeight: 'bold' }} />, // Changed color to error
  actionLabel,
  onAction,
  children
}) => (
  <ThemeProvider theme={appDeliveryTheme}>
    <Box
      component={Paper}
      elevation={0} // Consider a slight elevation for better visual separation if needed
      sx={{
        display: 'flex',
        flexDirection: 'column', // Align items vertically
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: "background.paper", // Changed to background.paper for better contrast with potential page background
        px: 2,
        py: 4, // Added vertical padding
        mt: 2,
        borderRadius: 2, // Consistent border radius
        boxShadow: "0px 4px 12px rgba(0,0,0,0.05)", // Softer shadow
        textAlign: 'center', // Center align text for the whole box
        maxWidth: 500, // Max width for larger screens
        mx: 'auto' // Center the box itself
      }}
    >
      <Stack spacing={2} alignItems="center" maxWidth={400}> {/* Ensure Stack items are centered */}
        <Box>{icon}</Box>

        <CustomTypography variant="h5" component="h2" gutterBottom> {/* Adjusted variant and added component prop */}
          {title}
        </CustomTypography>

        {Array.isArray(message) ? (
          <List sx={{ width: '100%', bgcolor: 'transparent' }}> {/* Ensure list takes full width and has transparent bg */}
            {message.map((msg, idx) => (
              // Removed the inner Box for ListItemText, styling directly on ListItemText or Typography
              <ListItemText
                key={idx}
                primary={
                  <CustomTypography
                    variant="body1" // Consistent typography
                    color="text.secondary" // Standard text color for messages
                    sx={{ textAlign: "center", py: 0.5 }} // Padding for list items
                  >
                    {msg}
                  </CustomTypography>
                }
                sx={{ my: 0.5, p:1, borderRadius: 1, bgcolor: 'action.hover' }} // Slight background for each message item
              />
            ))}
          </List>
        ) : (
          <CustomTypography variant="body1" color="text.secondary"> {/* Consistent typography */}
            {message}
          </CustomTypography>
        )}

        {children} {/* Render additional children if provided */}

        {actionLabel && onAction && (
          <CustomButton
            variant="contained"
            color="primary" // Or a more appropriate color like 'error' or 'secondary' depending on context
            onClick={onAction}
            sx={{ mt: 2 }} // Margin top for spacing
            data-testid="error-action-button"
          >
            {actionLabel}
          </CustomButton>
        )}
      </Stack>
    </Box>
  </ThemeProvider>
);
