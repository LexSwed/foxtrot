import React from 'react';
import { Heading, Box, Stack, Text, Card, Button } from '@fxtrot/edge';

import styles from './styles.module.css';
import Code from './Code';

function onSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  console.log(e.currentTarget.elements);
  console.log('Check the code');
}

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
        <Stack align="center">
          <Text>Confirm the sign up with the PIN code we sent you:</Text>
          <Code />
          <Box p="xs">
            <Text align="center" tone="light">
              By confirming your email we are sure nobody is going to use your
              email
            </Text>
          </Box>
        </Stack>
      </Stack>
    </Card>
  );
};

export default EnterCode;
