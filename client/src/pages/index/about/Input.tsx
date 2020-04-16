import React from 'react';
import Router from 'next/router';
import { Button } from '@fxtrot/edge';

import styles from './styles.module.css';

function onSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const email = (e.currentTarget.elements[0] as HTMLInputElement)?.value;
  document.cookie = `email=${email}`;
  Router.push('/signup');
}

const Input = () => {
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <input
        name="email"
        type="email"
        placeholder="your-email@mail.com"
        className={styles.input}
      />
      <Button
        type="submit"
        tone="accent"
        className={styles.submitButton}
        size="l"
      >
        Join
      </Button>
    </form>
  );
};

export default Input;
