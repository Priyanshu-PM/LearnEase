import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const showSuccessToast = (msg) => {
    toast.success(msg, {
        position: toast.POSITION.TOP_RIGHT
    });
}; 

export const showErrorToast = (msg) => {
    toast.error(msg, {
        position: toast.POSITION.TOP_RIGHT
    });
}; 