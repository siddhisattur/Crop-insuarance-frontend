import React from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ErrorNotification = (message) => {
    toast.error(message, {
        position: toast.POSITION.TOP_RIGHT
    });
};

const SuccessNotification = (message) => {
    toast.success(message, {
        position: toast.POSITION.TOP_RIGHT
    });
};

const Notification = () => {
    return (
        <ToastContainer />
    );
};

export { ErrorNotification, SuccessNotification, Notification };
