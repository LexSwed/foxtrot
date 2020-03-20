import React from 'react';
import cx from 'classnames';
import { NextSeo } from 'next-seo';

import Logo from '../../../public/logo-solid.svg';
import shared from '../../utils/shared-classnames';

import Input from './Input';
import styles from './styles.module.css';

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
          url: require('../../../public/sorting-thoughts.png'),
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
        <header
          className={cx(shared.flexCenter, shared.contentCenter, styles.header)}
        >
          <div className={shared.flexCenter}>
            <Logo className={styles.logo} />
            <span className={styles.logoText}>foxtrot</span>
          </div>
        </header>
        <main className={cx(shared.contentCenter, styles.main)}>
          <div className={styles.content}>
            <p className={styles.text}>
              Your routine can get more <strong>insightful</strong> and your
              stand ups <strong> efficient</strong>
            </p>
            <Input />
          </div>
        </main>
      </div>
      {Seo}
    </>
  );
};

export default Index;
