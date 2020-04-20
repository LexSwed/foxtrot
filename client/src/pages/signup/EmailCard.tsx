import React from 'react';
import { Box, Heading, Stack, Text } from '@fxtrot/edge';

import EmailField from './EmailField';

type Props = { onSubmit: (email: string) => void };

const EmailCard: React.FC<Props> = ({ onSubmit }) => {
  return (
    <>
      <Stack space="m" align="left">
        <Heading>Sign Up</Heading>
        <Text>Enter your company email</Text>
      </Stack>
      <Box pt="m">
        <EmailField onSubmit={onSubmit} />
      </Box>
    </>
  );
};

export default EmailCard;
