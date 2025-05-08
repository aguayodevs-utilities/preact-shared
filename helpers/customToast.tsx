import { toast as toastify, ToastOptions } from 'react-toastify';

export const customToast = (message: string, config: ToastOptions) => toastify(message, {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    ...config
});

export const toastSuccess = (message: string) => customToast(message, { type: 'success' });
export const toastError = (message: string) => customToast(message, { type: 'error' });
export const toastWarning = (message: string) => customToast(message, { type: 'warning' });
export const toastInfo = (message: string) => customToast(message, { type: 'info' });

