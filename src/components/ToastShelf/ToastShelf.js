import React from 'react';
import uuid4 from 'uuid4';
import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toastData, handleDeleteToast }) {

  return (
    <ol className={styles.wrapper}>
      {toastData.map((toast) => (
      <li className={styles.toastWrapper} key={uuid4()}>
        <Toast 
        variant={toast.variant} 
        id={toast.id}
        handleDeleteToast={handleDeleteToast}
        >
          {toast.message}
        </Toast>
      </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
