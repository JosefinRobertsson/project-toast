import React from 'react';
export const ToastContext = React.createContext();

function ToastProvider({ children }) {

  const [toasts, setToasts] = React.useState([
    {
      id: crypto.randomUUID(),
      message: '',
      variant: '',
    },
  ]);

  const handleToastSubmit = (message, variant) => {
    const nextToasts = [
      ...toasts,
      {
        id: crypto.randomUUID(),
        message,
        variant,
      },
    ];

    setToasts(nextToasts);
  };

  const handleDeleteToast = (id) => {
    const nextToasts = toasts.filter((toast) => {
      return toast.id !== id;
    });
    setToasts(nextToasts);
  };

  return (

  <ToastContext.Provider value={{ toasts, handleToastSubmit, handleDeleteToast }}>
    {children}
  </ToastContext.Provider>
  )
}

export default ToastProvider;
