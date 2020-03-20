import React from 'react';
import cx from 'classnames';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

import styles from './styles.module.css';

const Link: React.FC<{ href: string }> = ({ href, children, ...props }) => {
  const router = useRouter();

  return (
    <NextLink href={href}>
      <a
        className={cx(
          styles.link,
          router.pathname === href && styles.linkActive
        )}
        {...props}
      >
        {children}
      </a>
    </NextLink>
  );
};

export default Link;
