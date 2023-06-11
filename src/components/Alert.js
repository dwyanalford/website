// components/Alert.js
import React, { useEffect, useState } from 'react';
import styles from '@/styles/Alert.module.css';

const Alert = ({ type, message }) => {
  const [visible, setVisible] = useState(false);
  const successIcon = "✔️";
  const errorIcon = "❌";

  // Trigger fade in/out effect
  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const alertTypeClass = type === 'success' ? styles.success : styles.error;
  const alertVisibleClass = visible ? styles.entered : styles.exited;

  return (
    <div className={`${styles.alert} ${alertTypeClass} ${alertVisibleClass}`}>
      {type === 'success' ? successIcon : errorIcon} {message}
    </div>
  );
};

export default Alert;
