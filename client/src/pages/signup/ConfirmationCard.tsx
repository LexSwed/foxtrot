import React from 'react';
import { Box, Heading, Stack, Text } from '@fxtrot/edge';

import styles from './styles.module.css';
import Code from './Code';

const ConfirmationCard: React.FC = () => {
  return (
    <Stack>
      <Heading as="h2" className={styles.heading}>
        Your account is created!
      </Heading>
      <Box p="l" className={styles.imageBox}>
        <img src="/mailbox.svg" alt="Mailbox" />
      </Box>
      <Code />
      <Box mt="s" p="xs">
        <Text align="center" tone="light">
          By confirming your email we are sure nobody is going to use your email
        </Text>
      </Box>
    </Stack>
  );
};

export default ConfirmationCard;
