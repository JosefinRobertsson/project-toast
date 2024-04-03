import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ message, variant, toggleToast }) {

 console.log('variant', variant)
  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        {Object.keys(ICONS_BY_VARIANT).map((icon) => {
          if (variant === icon) {
            const Icon = ICONS_BY_VARIANT[icon];
            return <Icon size={24} />;
          }
          return null;
        })}
      </div>
      <p className={styles.content}>
        {message}
      </p>
      <button className={styles.closeButton}>
        <X size={24}
        onClick={() => {toggleToast('close')}} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
