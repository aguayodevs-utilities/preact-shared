import React from 'react';
import { CustomModal } from './CustomModal';
import { Button, Typography, Container } from '@mui/material';
import { CustomTypography } from './CustomTypography';
import { CustomButton } from './CustomButton';
export const CustomConfirm = ({ 
    title,
    message,
    onConfirm,
    onCancel,
    confirmTitle,
    cancelTitle,
    open,
    setOpen
}: {
    title: string;
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
    confirmTitle?: string;
    cancelTitle?: string;
    open: boolean;
    setOpen: (open: boolean) => void;
}) => {
    return (
        <CustomModal
            title={title}
            open={open}
            setOpen={setOpen}
        >
            <CustomTypography sx={{ marginBottom: 2, textAlign: 'center' }}>{message}</CustomTypography>
            <Container sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                <CustomButton onClick={onConfirm} color="primary">{confirmTitle||"Confirmar"}</CustomButton>
                <CustomButton onClick={onCancel} color="secondary">{cancelTitle||"Cancelar"}</CustomButton>
            </Container>  
        </CustomModal>
    )
}