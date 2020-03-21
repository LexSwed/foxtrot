import React from 'react';
import Router from 'next/router';

import Button from 'lib/Button';
import TextField from 'lib/TextField';
import styles from './styles.module.css';

function onSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  // send signup request
  // go to the app
  Router.push('/');
}

const Input = () => {
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <TextField
        name="email"
        type="email"
        placeholder="your-email@mail.com"
        size="l"
        className={styles.input}
      />
      <Button
        type="submit"
        variant="primary"
        className={styles.submitButton}
        size="l"
      >
        Join
      </Button>
    </form>
  );
};

export default Input;
