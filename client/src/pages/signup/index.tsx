import React from 'react';
import { NextSeo } from 'next-seo';
import { Heading, Card, Box, Stack, Text } from '@fxtrot/edge';

import styles from './styles.module.css';
import Code from './Code';

const Seo = <NextSeo title="Foxtrot - Sign Up" />;

const SignUp = () => {
  return (
    <>
      <div className={styles.layout}>
        <Card className={styles.card}>
          <Stack>
            <Heading as="h2" className={styles.heading}>
              Your account is created!
            </Heading>
            <Box padding="l" className={styles.imageBox}>
              <img src="/mailbox.svg" alt="Mailbox" />
            </Box>
            <Stack align="center">
              <Text>Confirm the sign up with the PIN code we sent you:</Text>
              <Code />
              <Box padding="xl">
                <Text tone="secondary">
                  By confirming your email that nobody is going to use your
                  email
                </Text>
              </Box>
            </Stack>
          </Stack>
        </Card>
      </div>
      {Seo}
    </>
  );
};

export default SignUp;
