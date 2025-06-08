import React from 'react';
import { CustomModal } from './CustomModal';
import { Container } from '@mui/material'; // Button and Typography removed as CustomButton and CustomTypography are used
import { CustomTypography } from './CustomTypography';
import { CustomButton } from './CustomButton';

/**
 * @interface CustomConfirmProps
 * @description Defines the props for the CustomConfirm component.
 */
export interface CustomConfirmProps {
  /** The title of the confirmation dialog. */
  title: string;
  /** The message/question to display in the dialog. */
  message: string;
  /** Callback function to execute when the confirm button is clicked. */
  onConfirm: () => void;
  /** Callback function to execute when the cancel button is clicked or the dialog is closed. */
  onCancel: () => void;
  /** Optional custom text for the confirm button. Defaults to "Confirmar". */
  confirmTitle?: string;
  /** Optional custom text for the cancel button. Defaults to "Cancelar". */
  cancelTitle?: string;
  /** Boolean state to control the visibility of the modal. */
  open: boolean;
  /** Function to update the visibility state of the modal. */
  setOpen: (open: boolean) => void;
}

/**
 * @component CustomConfirm
 * @description A confirmation dialog component built using CustomModal.
 * It presents a message to the user and provides options to confirm or cancel an action.
 *
 * @param {CustomConfirmProps} props - The props for the confirmation dialog.
 * @returns {React.ReactElement} The rendered confirmation dialog.
 *
 * @example
 * const [openConfirm, setOpenConfirm] = useState(false);
 * const handleConfirm = () => { console.log('Confirmed!'); setOpenConfirm(false); };
 * const handleCancel = () => { console.log('Cancelled.'); setOpenConfirm(false); };
 *
 * return (
 *   <>
 *     <Button onClick={() => setOpenConfirm(true)}>Show Confirm</Button>
 *     <CustomConfirm
 *       open={openConfirm}
 *       setOpen={setOpenConfirm}
 *       title="Confirm Action"
 *       message="Are you sure you want to proceed?"
 *       onConfirm={handleConfirm}
 *       onCancel={handleCancel}
 *     />
 *   </>
 * );
 */
export const CustomConfirm: React.FC<CustomConfirmProps> = ({
    title,
    message,
    onConfirm,
    onCancel,
    confirmTitle,
    cancelTitle,
    open,
    setOpen
}) => {
    return (
        <CustomModal
            title={title}
            open={open}
            setOpen={setOpen} // The modal itself should handle closing via setOpen(false) on backdrop click or escape key
        >
            <CustomTypography sx={{ marginBottom: 2, textAlign: 'center' }}>{message}</CustomTypography>
            <Container sx={{ display: 'flex', justifyContent: 'center', gap: 2, paddingBottom: 2 }}> {/* Added paddingBottom */}
                <CustomButton onClick={onConfirm} color="primary" data-testid="confirm-button">
                    {confirmTitle || "Confirmar"}
                </CustomButton>
                <CustomButton onClick={onCancel} color="secondary" data-testid="cancel-button">
                    {cancelTitle || "Cancelar"}
                </CustomButton>
            </Container>
        </CustomModal>
    );
};