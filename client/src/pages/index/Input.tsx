import React from 'react';

import Button from 'lib/Button';
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
      <Button type="submit" variant="flat" size="l">
        Join
      </Button>
    </form>
  );
};

export default Input;
