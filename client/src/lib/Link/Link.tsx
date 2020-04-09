import React from 'react';
import cx from 'classnames';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

import styles from './styles.module.css';

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  className?: string;
};

const Link = React.forwardRef<HTMLAnchorElement, Props>(
  ({ href, children, className, ...props }, ref) => {
    const router = useRouter();

    return (
      <NextLink href={href}>
        <a
          className={cx(
            styles.link,
            router.pathname === href && styles.linkActive,
            className
          )}
          {...props}
          ref={ref}
        >
          {children}
        </a>
      </NextLink>
    );
  }
);

Link.displayName = 'fx-link';

export default Link;
