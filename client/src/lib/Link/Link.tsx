import React from 'react';
import cx from 'classnames';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

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
            'fx-link',
            router.pathname === href && 'fx-link--active',
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
