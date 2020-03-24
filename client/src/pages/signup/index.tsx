import React from 'react';
import { NextSeo } from 'next-seo';

import Card from 'lib/Card';
import Heading from 'lib/Heading';
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
