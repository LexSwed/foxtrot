import React from 'react';
import { GetServerSideProps } from 'next';

// import { isAuthorized } from 'utils/auth';
import About from './about';
import App from './app';

type Props = {
  isAuthorized: boolean;
};

const Index: React.FC<Props> = ({ isAuthorized }) => {
  return isAuthorized ? <App /> : <About />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      // isAuthorized: isAuthorized(ctx)
    }
  };
};

export default Index;
