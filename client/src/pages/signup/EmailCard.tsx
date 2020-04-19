import React from 'react';
import cx from 'classnames';

import styles from './styles.module.css';
import { Box, Columns, Column, Heading, Text, Stack } from '@fxtrot/edge';
import EmailField from './EmailField';

type Props = { onSubmit: (email: string) => void };

const EmailCard: React.FC<Props> = ({ onSubmit }) => {
  return (
    <Box elevation="1" className={cx(styles.card, styles.emailCard)}>
      <Columns space="xl">
        <Column>
          <Box className={styles.emailCardImageBox}>
            <img
              src="/lighthouse.svg"
              role="presentation"
              className={styles.emailCardImageShadow}
            />
            <img
              src="/lighthouse.svg"
              role="presentation"
              className={styles.emailCardImage}
            />
          </Box>
        </Column>
        <Column width="3/5">
          <Box p="xl">
            <Stack space="m" align="right">
              <Heading>Sign Up</Heading>
              <Text>Enter your company email</Text>
            </Stack>
            <Box pt="m">
              <EmailField onSubmit={onSubmit} />
            </Box>
          </Box>
        </Column>
      </Columns>
    </Box>
  );
};

export default EmailCard;
