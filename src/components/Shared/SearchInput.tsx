import React from 'react';
import styles from './styles.module.css';

type Props = {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  ariaLabel?: string;
};

const SearchInput: React.FC<Props> = ({ value, onChange, placeholder = 'Search', ariaLabel = 'Search' }) => {
  return (
    <div className={styles.searchWrapper}>
      <div className={styles.searchIcon} aria-hidden>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      <input
        className={styles.search}
        type="search"
        aria-label={ariaLabel}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

      {value ? (
        <button className={styles.clearBtn} onClick={() => onChange('')} aria-label="Clear search">×</button>
      ) : null}
    </div>
  );
};

export default SearchInput;
