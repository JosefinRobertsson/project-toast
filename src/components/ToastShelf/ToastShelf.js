import React from 'react';
import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider';

function ToastShelf() {
const { toasts } = React.useContext(ToastContext);

//Map the array of toasts from 1, to exclude the initial state toast (it's needed because an empty array causes 'undefined' error)
  return (
    <ol 
    className={styles.wrapper} 
    role="region"
    aria-live="polite"
    aria-label="Notifications"
    >
      {toasts.slice(1).map((toast) => (
      <li className={styles.toastWrapper} key={toast.id}>
        <Toast 
        variant={toast.variant} 
        id={toast.id}
        >
          {toast.message}
        </Toast>
      </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
