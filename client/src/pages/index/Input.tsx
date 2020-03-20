import React from 'react';

import styles from './styles.module.css';

function onSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
}

const Input = () => {
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <input
        className={styles.input}
        name="email"
        type="email"
        placeholder="your-email@mail.com"
      />
      <button type="submit" className={styles.submitButton}>
        Join
      </button>
    </form>
  );
};

export default Input;
