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

React.useEffect(() => {
  const handleKeyDown = (event) => {
    if (event.code === 'Escape') {
      setToasts([toasts[0]]);
    }
    }
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [toasts]);

  const toastSubmit = (message, variant) => {
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

  <ToastContext.Provider value={{ toasts, toastSubmit, handleDeleteToast }}>
    {children}
  </ToastContext.Provider>
  )
}

export default ToastProvider;
