import React from 'react';
import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider';

function ToastShelf() {
const { toasts } = React.useContext(ToastContext);
console.log('toasts:', toasts);
  return (
    <ol className={styles.wrapper}>
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
