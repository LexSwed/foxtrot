import React from 'react';

const MainApp = ({ Component, pageProps }: any) => {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>
        {`
          :root {
            --primary-color: #e15756;
            --content-width: 1000px;
          }

          body {
            margin: 0;
            font-family: 'system-ui', sans-serif;
          }

          .flex-center {
            display: flex;
            align-items: center;
          }

          .content-center {
            max-width: var(--content-width);
            margin: 0 auto;
          }
        `}
      </style>
    </>
  );
};

export default MainApp;
