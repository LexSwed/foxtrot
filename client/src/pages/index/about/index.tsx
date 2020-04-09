import React from 'react';
import { ContentBlock } from '@fxtrot/edge';
import { NextSeo } from 'next-seo';

import styles from './styles.module.css';
import Header from './Header';
import Input from './Input';

const Seo = (
  <NextSeo
    title="Foxtrot for teams"
    description="Foxtrot is a tool that makes your stand ups more efficient, insightful and fun"
    twitter={{
      cardType: 'summary_large_image',
      site: '@lexswed',
      handle: '@lexswed'
    }}
    openGraph={{
      images: [
        {
          url: `${require('../../../../public/sorting-thoughts.png')}?utm_source=foxtrot`,
          width: 519,
          height: 368,
          alt: 'Background image'
        }
      ]
    }}
  />
);

const Index = () => {
  return (
    <>
      <div className={styles.root}>
        <ContentBlock wide>
          <Header />
        </ContentBlock>
        <ContentBlock wide>
          <main className={styles.main}>
            <div className={styles.content}>
              <p className={styles.text}>
                Your routine can get more <strong>insightful</strong> and your
                stand ups <strong> efficient</strong>
              </p>
              <Input />
            </div>
          </main>
        </ContentBlock>
      </div>
      {Seo}
    </>
  );
};

export default Index;
