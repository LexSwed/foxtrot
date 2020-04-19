import React, { useEffect, useReducer } from 'react';
import { NextSeo } from 'next-seo';
import { GetServerSideProps } from 'next';
import { Cookie } from 'next-cookie';

import styles from './styles.module.css';
import ConfirmationCard from './ConfirmationCard';
import Loading from './Loading';
import EmailCard from './EmailCard';

const Seo = <NextSeo title="Foxtrot - Sign Up" />;

const SignUp: React.FC<{ email: string }> = ({ email }) => {
  const [state, dispatch] = useReducer(signupReducer, {
    isLoading: false,
    email
  });

  useEffect(() => {
    if (state.email) {
      dispatch({ type: 'setLoading', payload: true });
      const id = setTimeout(() => {
        dispatch({ type: 'setLoading', payload: false });
      }, 500);

      return () => clearTimeout(id);
    }
  }, [state.email]);

  return (
    <>
      <div className={styles.layout}>
        {state.email ? (
          state.isLoading ? (
            <Loading />
          ) : (
            <ConfirmationCard />
          )
        ) : (
          <EmailCard
            onSubmit={(email) => dispatch({ type: 'setEmail', payload: email })}
          />
        )}
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

function signupReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'setEmail':
      return { ...state, email: action.payload };
    case 'setLoading':
      return {
        ...state,
        isLoading: action.payload
      };
  }
}

type State = { isLoading: boolean; email: string | null };
type Action =
  | { type: 'setEmail'; payload: string }
  | { type: 'setLoading'; payload: boolean };
