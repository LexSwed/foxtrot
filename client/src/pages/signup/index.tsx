import React, { useEffect, useReducer } from 'react';
import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import { NextSeo } from 'next-seo';
import { Box } from '@fxtrot/edge';

import ConfirmationCard from './ConfirmationCard';
import EmailCard from './EmailCard';
import Loading from './Loading';

import styles from './styles.module.css';

const Seo = <NextSeo title="Foxtrot - Sign Up" />;

type Props = { email: string };

const SignUp: React.FC<Props> = ({ email }) => {
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
        <Box elevation="1" p="xl" className={styles.card}>
          {state.email ? (
            state.isLoading ? (
              <Loading />
            ) : (
              <ConfirmationCard />
            )
          ) : (
            <EmailCard
              onSubmit={(email) =>
                dispatch({ type: 'setEmail', payload: email })
              }
            />
          )}
        </Box>
      </div>
      {Seo}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const props: Partial<Props> = {};
  const { email } = parseCookies(ctx);

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
