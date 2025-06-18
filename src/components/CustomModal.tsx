import React from 'react';
  import { FunctionComponent, ComponentChildren } from 'preact';
  import Box from '@mui/material/Box';
  import Modal, { ModalProps as MuiModalProps } from '@mui/material/Modal'; // Import ModalProps
import { CustomThemeProvider, useCustomTheme } from '../styles/CustomThemeContext';
import { Theme } from '@mui/material/styles';
  import { CustomTypography } from './CustomTypography';
  import CloseIcon from '@mui/icons-material/Close'; // For a close button
  import { IconButton } from '@mui/material'; // For the close button
  
  // It's better to define styles using the theme for consistency
  const modalStyle = (theme: Theme) => ({
    position: 'absolute' as 'absolute', // Explicitly type position
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: '90%', sm: 500, md: 600 }, // Responsive width
    bgcolor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.divider}`, // Use theme divider color
    borderRadius: theme.shape.borderRadius, // Use theme border radius
    boxShadow: theme.shadows[5], // Use a standard theme shadow
    p: { xs: 2, sm: 3, md: 4 }, // Responsive padding
    outline: 'none', // Remove default focus outline
  });
  
  /**
   * @interface CustomModalProps
   * @description Defines the props for the CustomModal component.
   * Extends standard MUI ModalProps.
   */
  export interface CustomModalProps extends Omit<MuiModalProps, 'open' | 'onClose' | 'children'> {
    /** Boolean state to control the visibility of the modal. */
    open: boolean;
    /** Function to update the visibility state of the modal. Typically `() => setOpen(false)`. */
    setOpen: (open: boolean) => void;
    /** The title to display at the top of the modal. */
    title?: string; // Made title optional
    /** The content to be rendered within the modal. */
    children: ComponentChildren;
    /** Optional flag to show a close button in the top right corner. Defaults to true. */
    showCloseButton?: boolean;
  }
  
  /**
   * @component CustomModal
   * @description A customizable modal component using Material-UI's Modal.
   * It includes a title, content area, and an optional close button.
   * The modal's visibility is controlled by the `open` and `setOpen` props.
   *
   * @param props - The props for the modal.
   * @returns {preact.RenderableProps<CustomModalProps> | null} The rendered modal or null if not open.
   *
   * @example
   * const [openModal, setOpenModal] = useState(false);
   *
   * return (
   *   <>
   *     <Button onClick={() => setOpenModal(true)}>Open Modal</Button>
   *     <CustomModal
   *       open={openModal}
   *       setOpen={setOpenModal}
   *       title="My Custom Modal"
   *     >
   *       <p>This is the content of the modal.</p>
   *     </CustomModal>
   *   </>
   * );
   */
  export const CustomModal: FunctionComponent<CustomModalProps> = ({
    open,
    setOpen,
    title,
    children,
    showCloseButton = true,
    ...restMuiModalProps // Spread other MUI Modal props
  }: CustomModalProps) => {
      const handleClose = (_event: {}, reason: "backdropClick" | "escapeKeyDown") => {
          // Prevent closing on backdropClick or escapeKeyDown if needed by certain modals
          // For example, if (reason === 'backdropClick' && someCondition) return;
          setOpen(false);
      };
  
      const theme = useCustomTheme();

      if (!open) return null;

      return (
          <CustomThemeProvider theme={theme}>
              <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="custom-modal-title"
                  aria-describedby="custom-modal-description" // Ensure this ID points to a descriptive element if used
                  // Retain focus management unless explicitly disabled by props
                  disableAutoFocus={restMuiModalProps.disableAutoFocus ?? false}
                  disableEnforceFocus={restMuiModalProps.disableEnforceFocus ?? false}
                  disableRestoreFocus={restMuiModalProps.disableRestoreFocus ?? false}
                  {...restMuiModalProps} // Pass other MUI Modal props
              >
                  <Box sx={modalStyle(theme)}>
                      {showCloseButton && (
                          <IconButton
                              aria-label="close modal"
                              onClick={() => setOpen(false)}
                              sx={{
                                  position: 'absolute',
                                  right: (theme) => theme.spacing(1),
                                  top: (theme) => theme.spacing(1),
                                  color: (theme) => theme.palette.grey[500],
                              }}
                              data-testid="modal-close-button"
                          >
                              <CloseIcon />
                          </IconButton>
                      )}
                      {title && (
                          <CustomTypography id="custom-modal-title" variant="h5" component="h2" gutterBottom>
                              {title}
                          </CustomTypography>
                      )}
                      {/* If using aria-describedby, ensure an element with id="custom-modal-description" exists */}
                      <Box id="custom-modal-description"> {/* Wrapper for content if needed for description */}
                          {children}
                      </Box>
                  </Box>
              </Modal>
          </CustomThemeProvider>
      );
  };