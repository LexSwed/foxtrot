import React from 'react';
import { Heading, Box, Stack, Text, Card } from '@fxtrot/edge';

import styles from './styles.module.css';
import Code from './Code';

const EnterCode: React.FC = () => {
  return (
    <Card p="xl" className={styles.card}>
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
            By confirming your email we are sure nobody is going to use your
            email
          </Text>
        </Box>
      </Stack>
    </Card>
  );
};

export default EnterCode;
