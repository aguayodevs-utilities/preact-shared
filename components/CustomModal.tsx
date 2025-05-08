import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { appTheme } from './theme';
import { ThemeProvider } from '@mui/material/styles';
import { CustomTypography } from './CustomTypography';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const CustomModal = ({open, setOpen, title, children}) => {
    const handleClose = () => setOpen(false);
    if(!open) return null;
    return (
        <ThemeProvider theme={appTheme}>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                disableAutoFocus={true}
                disableEnforceFocus={true}
                disableRestoreFocus={true}
            >
                <Box sx={style}>
                    <CustomTypography variant="h4">
                        {title||"Modal sin título."}
                    </CustomTypography>
                    {children}
                </Box>
            </Modal>
        </ThemeProvider>
    );
}