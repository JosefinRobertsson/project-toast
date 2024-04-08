import React from 'react';
import useEscapeKey from '../../hooks/useEscapeKey.hook';
export const ToastContext = React.createContext();

function ToastProvider({ children }) {

  const [toasts, setToasts] = React.useState([
    {
      id: crypto.randomUUID(),
      message: '',
      variant: '',
    },
  ]);

  // Delete all toasts with Esc. We use useCallBack to memoize the function so that it doesn't regenerate on every render
  const handleEscape = React.useCallback(() => {
    setToasts([toasts[0]]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEscapeKey(handleEscape);


  // make a new toast
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

  // delete a toast with X button
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
