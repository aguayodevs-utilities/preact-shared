import { toast as toastify, ToastOptions, TypeOptions, Id } from 'react-toastify';

/**
 * @constant DEFAULT_TOAST_OPTIONS
 * @description Default configuration options for `react-toastify`.
 * These can be overridden by the `config` parameter in `customToast`
 * or by specific configurations in `toastSuccess`, `toastError`, etc.
 */
const DEFAULT_TOAST_OPTIONS: ToastOptions = {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark", // Consider making this configurable or using theme variables
};

/**
 * @function customToast
 * @description A wrapper around `react-toastify` to display custom toast notifications.
 * It applies a set of default options which can be overridden.
 *
 * @param {string} message - The message to display in the toast.
 * @param {ToastOptions} [config={}] - Optional configuration to override default toast options.
 * @returns {Id} The ID of the toast (string | number).
 *
 * @example
 * customToast("Profile updated successfully!", { type: "success", autoClose: 2000 });
 */
export const customToast = (message: string, config: ToastOptions = {}): Id => {
    return toastify(message, {
        ...DEFAULT_TOAST_OPTIONS,
        ...config // User-provided config overrides defaults
    });
};

/**
 * @function toastSuccess
 * @description Displays a success toast notification.
 * @param {string} message - The success message.
 * @param {ToastOptions} [options] - Optional additional toast configurations.
 * @returns {Id} The ID of the toast.
 * @example
 * toastSuccess("Operation completed!");
 */
export const toastSuccess = (message: string, options?: ToastOptions): Id =>
    customToast(message, { ...options, type: 'success' as TypeOptions });

/**
 * @function toastError
 * @description Displays an error toast notification.
 * @param {string} message - The error message.
 * @param {ToastOptions} [options] - Optional additional toast configurations.
 * @returns {Id} The ID of the toast.
 * @example
 * toastError("Failed to save data.");
 */
export const toastError = (message: string, options?: ToastOptions): Id =>
    customToast(message, { ...options, type: 'error' as TypeOptions });

/**
 * @function toastWarning
 * @description Displays a warning toast notification.
 * @param {string} message - The warning message.
 * @param {ToastOptions} [options] - Optional additional toast configurations.
 * @returns {Id} The ID of the toast.
 * @example
 * toastWarning("Your session is about to expire.");
 */
export const toastWarning = (message: string, options?: ToastOptions): Id =>
    customToast(message, { ...options, type: 'warning' as TypeOptions });

/**
 * @function toastInfo
 * @description Displays an info toast notification.
 * @param {string} message - The info message.
 * @param {ToastOptions} [options] - Optional additional toast configurations.
 * @returns {Id} The ID of the toast.
 * @example
 * toastInfo("New version available. Please refresh.");
 */
export const toastInfo = (message: string, options?: ToastOptions): Id =>
    customToast(message, { ...options, type: 'info' as TypeOptions });