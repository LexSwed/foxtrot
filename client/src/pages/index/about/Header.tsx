import React from 'react';
import { Column, Columns, Inline } from '@fxtrot/edge';

import styles from './styles.module.css';
import Logo from '../../../../public/logo-solid.svg';

import Link from 'lib/Link';

const Header: React.FC = () => {
  return (
    <header>
      <Columns space="m" align="apart">
        <Column width="content">
          <Inline alignY="center">
            <Logo className={styles.logo} />
            <span className={styles.logoText}>foxtrot</span>
          </Inline>
        </Column>
        <Column width="content">
          <Link href="/">About</Link>
        </Column>
      </Columns>
    </header>
  );
};

export default Header;
