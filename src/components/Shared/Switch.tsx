import React from 'react';
import styles from './styles.module.css';

type Props = {
  checked: boolean;
  onChange: (v: boolean) => void;
  label?: string;
  ariaLabel?: string;
};

const Switch: React.FC<Props> = ({ checked, onChange, label, ariaLabel }) => {
  return (
    <label className={styles.switchWrapper}>
      <input
        className={styles.switchInput}
        type="checkbox"
        role="switch"
        aria-label={ariaLabel}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className={styles.switchSlider} aria-hidden />
      {label ? <span className={styles.switchLabelText}>{label}</span> : null}
    </label>
  );
};

export default Switch;
