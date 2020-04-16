import React, { useEffect, useState } from 'react';
import { NextSeo } from 'next-seo';
import { Cookie } from 'next-cookie';

import styles from './styles.module.css';
import Code from './Code';
import { GetServerSideProps } from 'next';
import EnterCode from './EnterCode';
import Loading from './Loading';

const Seo = <NextSeo title="Foxtrot - Sign Up" />;

const SignUp: React.FC<{ email: string }> = ({ email }) => {
  const [isSent, setSignUpRequestSent] = useState(false);

  useEffect(() => {
    if (email) {
      setTimeout(() => {
        setSignUpRequestSent(true);
      }, 500);
    }
  }, [email]);

  return (
    <>
      <div className={styles.layout}>
        {isSent ? <EnterCode /> : <Loading />}
      </div>
      {Seo}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const props: Record<string, any> = {};
  const email = new Cookie(ctx as any).get('email');

  if (email) {
    props.email = email;
  }

  return {
    props
  };
};

export default SignUp;
