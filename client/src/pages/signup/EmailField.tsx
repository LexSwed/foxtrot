import React from 'react';
import Router from 'next/router';
import { Button } from '@fxtrot/edge';

import styles from './styles.module.css';

type Props = { onSubmit?: (email: string) => void };

const EmailField: React.FC<Props> = ({ onSubmit }) => {
  const onEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (e.currentTarget.elements[0] as HTMLInputElement)?.value;
    document.cookie = `email=${email}`;
    Router.push('/signup');
    if (onSubmit) {
      onSubmit(email);
    }
  };
  return (
    <form onSubmit={onEmailSubmit} className={styles.emailField}>
      <input
        name="email"
        type="email"
        placeholder="your-email@mail.com"
        className={styles.emailInput}
      />
      <Button
        type="submit"
        tone="brand"
        className={styles.submitEmail}
        size="l"
      >
        Join
      </Button>
    </form>
  );
};

export default EmailField;
