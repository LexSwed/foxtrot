import React from 'react';
import { NextSeo } from 'next-seo';
import { Heading, Card } from '@fxtrot/edge';

import styles from './styles.module.css';

const Seo = <NextSeo title="Foxtrot - Sign Up" />;

const SignUp = () => {
  return (
    <>
      <div className={styles.layout}>
        <Card className={styles.card}>
          <Heading className={styles.heading}>Your account is created!</Heading>
        </Card>
      </div>
      {Seo}
    </>
  );
};

export default SignUp;
