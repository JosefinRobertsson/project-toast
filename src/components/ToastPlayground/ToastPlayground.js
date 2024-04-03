import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import Toast from '../Toast';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [variant, setVariant] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [showToast, setShowToast] = React.useState(false);

  const toggleToast = (action) => {
    if (action === 'pop') {
      setShowToast(true);
    } else {
    setShowToast(false);
    }
  }


  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {showToast && <Toast message={message} variant={variant} toggleToast={toggleToast} />}
      
      <div className={styles.controlsWrapper}>
        <div className={styles.row}>

          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={(event) => setMessage(event.target.value)} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map((option) => (
              <label htmlFor={`variant-${option}`} key={option}>
                <input
                  id={`variant-${option}`}
                  type="radio"
                  name="variant"
                  value={option}
                  onChange={(event) => setVariant(event.target.value)}
                />
                {option}
              </label>
            ))}
            {/* TODO Other Variant radio buttons here */}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button onClick={() => toggleToast('pop')}>
              Pop Toast!
              </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
