import React from 'react';
import { Edge } from '@fxtrot/edge';

import '@fxtrot/edge/dist/styles.css';

const MainApp = ({ Component, pageProps }: any) => {
  return (
    <>
      <Edge>
        <Component {...pageProps} />
      </Edge>
    </>
  );
};

export default MainApp;
